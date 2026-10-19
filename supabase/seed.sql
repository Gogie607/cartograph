-- Run after the Clerk organization backfill. Only the first two teams receive fixtures;
-- a newly created team therefore still exercises the real empty state.
begin;

do $$
declare
  organization record;
  fixture_project_id uuid;
  fixture_status text;
  repository text;
  repository_name text;
begin
  for organization in
    select id, row_number() over (order by created_at, id) as position
    from public.organizations order by created_at, id limit 2
  loop
    repository_name := case when organization.position = 1 then 'vercel/next.js' else 'facebook/react' end;
    repository := 'https://github.com/' || repository_name;

    insert into public.projects (organization_id, repository_url, name)
    values (organization.id, repository, repository_name)
    on conflict (organization_id, repository_url) do update set repository_url = excluded.repository_url
    returning id into fixture_project_id;

    foreach fixture_status in array
      case when organization.position = 1
        then array['queued', 'running', 'completed', 'failed']
        else array['completed', 'failed'] end
    loop
      insert into public.analyses (organization_id, project_id, status, is_seed, error_message)
      select organization.id, fixture_project_id, fixture_status, true,
        case when fixture_status = 'failed' then 'Seeded failure state; no repository was analyzed.' end
      where not exists (
        select 1 from public.analyses a
        where a.organization_id = organization.id and a.project_id = fixture_project_id
          and a.status = fixture_status and a.is_seed
      );
    end loop;
  end loop;
end;
$$;

commit;
