-- Run in the Supabase SQL Editor. This is NOT a public client-side table.
create table if not exists public.gym_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  branch text not null check (branch in ('eheliyagoda','nawagamuwa')),
  interest text not null check (interest in ('general','visiting','member','personal','program')),
  membership_plan text check (membership_plan is null or membership_plan in ('monthly','sixmonths','annual')),
  preferred_date date,
  message text,
  locale text not null default 'en' check(locale in ('en','si')),
  consent boolean not null default false check(consent = true),
  notification_status text not null default 'pending' check(notification_status in ('pending','sent','failed')),
  notified_at timestamptz
);
create index if not exists gym_inquiries_created_idx on public.gym_inquiries (created_at desc);
create index if not exists gym_inquiries_branch_idx on public.gym_inquiries (branch, created_at desc);
-- Row Level Security enabled. Do not create anon INSERT/SELECT policies.
alter table public.gym_inquiries enable row level security;
comment on table public.gym_inquiries is '4Z Gym incoming website inquiries; server-side service-role only, not a CRM.';
