-- AdeelSab waitlist schema.
-- Run once in the Supabase SQL editor (Dashboard → SQL Editor → New query).

create table if not exists waitlist_leads (
  id             bigserial primary key,
  created_at     timestamptz not null default now(),
  full_name      text not null,
  whatsapp       text not null,          -- normalised +92XXXXXXXXXX
  city           text not null,
  business_type  text not null,          -- local_seller | reseller | dropshipper | other
  category       text,
  monthly_volume text,
  message        text,
  locale         text default 'en',
  source_path    text,
  ip_hash        text                    -- SHA-256 of the IP; the raw IP is never stored
);

create index if not exists waitlist_leads_created_at_idx on waitlist_leads (created_at desc);
create index if not exists waitlist_leads_business_type_idx on waitlist_leads (business_type);

alter table waitlist_leads
  drop constraint if exists waitlist_leads_business_type_check;
alter table waitlist_leads
  add constraint waitlist_leads_business_type_check
  check (business_type in ('local_seller', 'reseller', 'dropshipper', 'other'));

-- Lock the table down. With RLS enabled and no policies, the public anon key can
-- neither read nor write. Only the server (service role key) can insert leads.
alter table waitlist_leads enable row level security;
