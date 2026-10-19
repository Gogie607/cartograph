-- Clerk IDs stay text: they are not Supabase Auth UUIDs.
create table public.organizations (
  id text primary key check (id like 'org_%'),
  name text not null,
  created_at timestamptz not null default now()
);
alter table public.organizations enable row level security;

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  repository_url text not null,
  name text not null,
  created_at timestamptz not null default now(),
  unique (organization_id, id),
  unique (organization_id, repository_url)
);
alter table public.projects enable row level security;

create table public.analyses (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  project_id uuid not null,
  status text not null default 'queued' check (status in ('queued', 'running', 'completed', 'failed')),
  is_seed boolean not null default false,
  error_message text,
  created_at timestamptz not null default now(),
  unique (organization_id, id),
  foreign key (organization_id, project_id) references public.projects(organization_id, id) on delete cascade
);
alter table public.analyses enable row level security;

create table public.files (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  analysis_id uuid not null,
  path text not null,
  unique (organization_id, analysis_id, id),
  unique (organization_id, analysis_id, path),
  foreign key (organization_id, analysis_id) references public.analyses(organization_id, id) on delete cascade
);
alter table public.files enable row level security;

-- Composite keys prevent links across organizations AND across analysis snapshots.
create table public.edges (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  analysis_id uuid not null,
  source_file_id uuid not null,
  target_file_id uuid not null,
  import_specifier text not null,
  foreign key (organization_id, analysis_id) references public.analyses(organization_id, id) on delete cascade,
  foreign key (organization_id, analysis_id, source_file_id) references public.files(organization_id, analysis_id, id) on delete cascade,
  foreign key (organization_id, analysis_id, target_file_id) references public.files(organization_id, analysis_id, id) on delete cascade
);
alter table public.edges enable row level security;

create table public.routes (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  analysis_id uuid not null,
  file_id uuid not null,
  method text not null,
  path text not null,
  foreign key (organization_id, analysis_id) references public.analyses(organization_id, id) on delete cascade,
  foreign key (organization_id, analysis_id, file_id) references public.files(organization_id, analysis_id, id) on delete cascade
);
alter table public.routes enable row level security;

create table public.explanations (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  analysis_id uuid not null,
  file_id uuid not null,
  content text not null,
  created_at timestamptz not null default now(),
  foreign key (organization_id, analysis_id) references public.analyses(organization_id, id) on delete cascade,
  foreign key (organization_id, analysis_id, file_id) references public.files(organization_id, analysis_id, id) on delete cascade
);
alter table public.explanations enable row level security;

create table public.file_roles (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  analysis_id uuid not null,
  file_id uuid not null,
  role text not null,
  unique (organization_id, analysis_id, file_id),
  foreign key (organization_id, analysis_id) references public.analyses(organization_id, id) on delete cascade,
  foreign key (organization_id, analysis_id, file_id) references public.files(organization_id, analysis_id, id) on delete cascade
);
alter table public.file_roles enable row level security;

create table public.insights (
  id uuid primary key default gen_random_uuid(),
  organization_id text not null references public.organizations(id) on delete cascade,
  analysis_id uuid not null,
  content text not null,
  created_at timestamptz not null default now(),
  foreign key (organization_id, analysis_id) references public.analyses(organization_id, id) on delete cascade
);
alter table public.insights enable row level security;

create index analyses_organization_created_idx on public.analyses (organization_id, created_at desc, id desc);
create index analyses_project_idx on public.analyses (organization_id, project_id);
create index edges_source_idx on public.edges (organization_id, analysis_id, source_file_id);
create index edges_target_idx on public.edges (organization_id, analysis_id, target_file_id);
create index routes_file_idx on public.routes (organization_id, analysis_id, file_id);
create index explanations_file_idx on public.explanations (organization_id, analysis_id, file_id);
create index insights_analysis_idx on public.insights (organization_id, analysis_id);

-- Only reads are exposed in this phase. Seeding and identity sync use trusted server access.
-- Clerk v2 uses o.id; org_id is the previous token format.
create policy organization_read on public.organizations for select to authenticated
  using (id = (select coalesce(auth.jwt()->'o'->>'id', auth.jwt()->>'org_id')));

do $$
declare
  table_name text;
begin
  foreach table_name in array array['projects', 'analyses', 'files', 'edges', 'routes', 'explanations', 'file_roles', 'insights'] loop
    execute format(
      'create policy organization_read on public.%I for select to authenticated using (organization_id = (select coalesce(auth.jwt()->''o''->>''id'', auth.jwt()->>''org_id'')))',
      table_name
    );
  end loop;
end;
$$;

revoke all on public.organizations, public.projects, public.analyses, public.files,
  public.edges, public.routes, public.explanations, public.file_roles, public.insights from anon, authenticated;
grant select on public.organizations, public.projects, public.analyses, public.files,
  public.edges, public.routes, public.explanations, public.file_roles, public.insights to authenticated;
grant all on public.organizations, public.projects, public.analyses, public.files,
  public.edges, public.routes, public.explanations, public.file_roles, public.insights to service_role;
