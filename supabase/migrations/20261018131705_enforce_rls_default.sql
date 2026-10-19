-- Keep the project's existing auto-RLS behavior reproducible. A failure must abort
-- table creation rather than leave a readable table behind with only a log entry.
create or replace function public.rls_auto_enable()
returns event_trigger
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  command record;
begin
  for command in
    select * from pg_event_trigger_ddl_commands()
    where command_tag in ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      and object_type in ('table', 'partitioned table')
      and schema_name = 'public'
  loop
    execute format('alter table %s enable row level security', command.object_identity);
  end loop;
end;
$$;

-- This is an event-trigger implementation, never a Data API endpoint.
revoke all on function public.rls_auto_enable() from public, anon, authenticated;

do $$
begin
  if not exists (select 1 from pg_event_trigger where evtname = 'ensure_rls') then
    create event trigger ensure_rls on ddl_command_end
      when tag in ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      execute function public.rls_auto_enable();
  end if;
end;
$$;
