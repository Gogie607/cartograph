-- Terminal-only database checks. All fixtures and deletions roll back.
begin;

create table public.cartograph_rls_default_check (id integer);
do $$
begin
  if not (select relrowsecurity from pg_class where oid = 'public.cartograph_rls_default_check'::regclass) then
    raise exception 'New tables do not enable RLS automatically';
  end if;
  if has_function_privilege('anon', 'public.rls_auto_enable()', 'execute')
    or has_function_privilege('authenticated', 'public.rls_auto_enable()', 'execute') then
    raise exception 'Auto-RLS implementation is executable by API clients';
  end if;
end;
$$;

do $$
declare
  target text;
begin
  foreach target in array array['organizations', 'projects', 'analyses', 'files', 'edges', 'routes', 'explanations', 'file_roles', 'insights'] loop
    if not exists (
      select 1 from pg_class c join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and c.relname = target and c.relrowsecurity
    ) then
      raise exception 'RLS is missing on %', target;
    end if;
    if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = target) then
      raise exception 'Policy is missing on %', target;
    end if;
  end loop;
end;
$$;

do $$
declare
  org text;
  project uuid;
  analysis uuid;
  file uuid;
begin
  foreach org in array array['org_cartograph_check_a', 'org_cartograph_check_b'] loop
    insert into public.organizations (id, name) values (org, 'Rollback-only policy fixture');
    insert into public.projects (organization_id, name, repository_url)
      values (org, 'Policy fixture', 'https://github.com/vercel/next.js') returning id into project;
    insert into public.analyses (organization_id, project_id) values (org, project) returning id into analysis;
    insert into public.files (organization_id, analysis_id, path) values (org, analysis, 'fixture.ts') returning id into file;
    insert into public.edges (organization_id, analysis_id, source_file_id, target_file_id, import_specifier)
      values (org, analysis, file, file, './fixture');
    insert into public.routes (organization_id, analysis_id, file_id, method, path) values (org, analysis, file, 'GET', '/fixture');
    insert into public.explanations (organization_id, analysis_id, file_id, content) values (org, analysis, file, 'Policy fixture');
    insert into public.file_roles (organization_id, analysis_id, file_id, role) values (org, analysis, file, 'fixture');
    insert into public.insights (organization_id, analysis_id, content) values (org, analysis, 'Policy fixture');
  end loop;

  begin
    insert into public.analyses (organization_id, project_id)
      values ('org_cartograph_check_b', (select id from public.projects where organization_id = 'org_cartograph_check_a'));
    raise exception 'Cross-organization foreign key was accepted';
  exception when foreign_key_violation then null;
  end;
end;
$$;

set local role authenticated;

do $$
declare
  claims jsonb;
  target text;
  row_count bigint;
  wrong_count bigint;
  expected_org text;
begin
  foreach claims in array array[
    '{"role":"authenticated","o":{"id":"org_cartograph_check_a"}}'::jsonb,
    '{"role":"authenticated","o":{"id":"org_cartograph_check_b"}}'::jsonb,
    '{"role":"authenticated","org_id":"org_cartograph_check_a"}'::jsonb,
    '{"role":"authenticated"}'::jsonb
  ] loop
    perform set_config('request.jwt.claims', claims::text, true);
    expected_org := coalesce(claims->'o'->>'id', claims->>'org_id');
    foreach target in array array['organizations', 'projects', 'analyses', 'files', 'edges', 'routes', 'explanations', 'file_roles', 'insights'] loop
      execute format('select count(*) from public.%I', target) into row_count;
      execute format('select count(*) from public.%I where %I is distinct from $1', target,
        case when target = 'organizations' then 'id' else 'organization_id' end)
        into wrong_count using expected_org;
      if wrong_count <> 0 or row_count <> (case when expected_org is null then 0 else 1 end) then
        raise exception 'Unexpected visibility on % for claims %: rows %, wrong org %', target, claims, row_count, wrong_count;
      end if;
    end loop;
  end loop;
end;
$$;

reset role;

delete from public.organizations where id = 'org_cartograph_check_a';
do $$
declare
  target text;
  remaining bigint;
begin
  foreach target in array array['projects', 'analyses', 'files', 'edges', 'routes', 'explanations', 'file_roles', 'insights'] loop
    execute format('select count(*) from public.%I where organization_id = $1', target)
      into remaining using 'org_cartograph_check_a';
    if remaining <> 0 then raise exception 'Organization deletion did not cascade to %', target; end if;
  end loop;
end;
$$;

rollback;
