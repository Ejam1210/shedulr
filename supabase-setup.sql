create extension if not exists pgcrypto;

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

create table if not exists public.scheduler_task_invites (
  id uuid primary key default gen_random_uuid(),
  inviter_id uuid not null references auth.users(id) on delete cascade,
  inviter_email text not null,
  inviter_name text,
  invitee_email text not null,
  task_payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'declined')),
  created_at timestamptz not null default now(),
  responded_at timestamptz,
  accepted_by uuid references auth.users(id) on delete set null
);

alter table public.scheduler_task_invites
add column if not exists inviter_name text;

create index if not exists scheduler_task_invites_invitee_email_idx
on public.scheduler_task_invites (invitee_email, status, created_at desc);

create index if not exists scheduler_task_invites_inviter_id_idx
on public.scheduler_task_invites (inviter_id, status, created_at desc);

alter table public.scheduler_task_invites enable row level security;

drop policy if exists "Users can create task invites" on public.scheduler_task_invites;
drop policy if exists "Users can read task invites" on public.scheduler_task_invites;
drop policy if exists "Invitees can update task invites" on public.scheduler_task_invites;

create policy "Users can create task invites"
on public.scheduler_task_invites
for insert
with check (auth.uid() = inviter_id);

create policy "Users can read task invites"
on public.scheduler_task_invites
for select
using (
  auth.uid() = inviter_id
  or lower(coalesce(auth.jwt() ->> 'email', '')) = invitee_email
);

create policy "Invitees can update task invites"
on public.scheduler_task_invites
for update
using (lower(coalesce(auth.jwt() ->> 'email', '')) = invitee_email)
with check (lower(coalesce(auth.jwt() ->> 'email', '')) = invitee_email);

create table if not exists public.scheduler_user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  display_name text not null,
  handle text not null unique,
  public_stats jsonb not null default '{}'::jsonb,
  grid_visibility text not null default 'private',
  updated_at timestamptz not null default now()
);

alter table public.scheduler_user_profiles
add column if not exists public_stats jsonb not null default '{}'::jsonb;

alter table public.scheduler_user_profiles
add column if not exists grid_visibility text not null default 'private';

create index if not exists scheduler_user_profiles_handle_idx
on public.scheduler_user_profiles (handle);

create index if not exists scheduler_user_profiles_display_name_idx
on public.scheduler_user_profiles (display_name);

alter table public.scheduler_user_profiles enable row level security;

drop policy if exists "Signed in users can find Shedulr names" on public.scheduler_user_profiles;
drop policy if exists "Users can create own Shedulr name" on public.scheduler_user_profiles;
drop policy if exists "Users can update own Shedulr name" on public.scheduler_user_profiles;

create policy "Signed in users can find Shedulr names"
on public.scheduler_user_profiles
for select
using (auth.uid() is not null);

create policy "Users can create own Shedulr name"
on public.scheduler_user_profiles
for insert
with check (auth.uid() = user_id);

create policy "Users can update own Shedulr name"
on public.scheduler_user_profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
