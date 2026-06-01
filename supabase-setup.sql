create table if not exists public.scheduler_app_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.scheduler_app_data enable row level security;

drop policy if exists "Users can read own scheduler data" on public.scheduler_app_data;
drop policy if exists "Users can insert own scheduler data" on public.scheduler_app_data;
drop policy if exists "Users can update own scheduler data" on public.scheduler_app_data;
drop policy if exists "Users can delete own scheduler data" on public.scheduler_app_data;

create policy "Users can read own scheduler data"
on public.scheduler_app_data
for select
using (auth.uid() = user_id);

create policy "Users can insert own scheduler data"
on public.scheduler_app_data
for insert
with check (auth.uid() = user_id);

create policy "Users can update own scheduler data"
on public.scheduler_app_data
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete own scheduler data"
on public.scheduler_app_data
for delete
using (auth.uid() = user_id);
