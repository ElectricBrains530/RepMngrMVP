/*
 * Add Reviews Table
 * Defines the schema for customer reviews, linked to locations and accounts.
 */

create table if not exists public.reviews (
    id uuid default extensions.uuid_generate_v4() primary key,
    location_id uuid references public.locations on delete cascade not null,
    account_id uuid references public.accounts on delete cascade not null,
    reviewer_name text,
    rating integer check (rating >= 1 and rating <= 5),
    comment text,
    metadata jsonb default '{}'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.reviews enable row level security;

-- Index for performance (filtering by location/account is invariant)
create index if not exists reviews_account_id_idx on public.reviews(account_id);
create index if not exists reviews_location_id_idx on public.reviews(location_id);

-- RLS Policies

-- Select: Viewable by anyone with access to the location
-- Re-uses kit.has_location_access(location_id) invariant
create policy "Reviews Viewable by Location Access"
    on public.reviews
    for select
    to authenticated
    using (
       kit.has_location_access(location_id)
    );

-- Insert: Createable by authenticated users (e.g. via manual entry or webhook service role)
-- Must enforce account_id matches location_id to maintain data integrity invariant
create policy "Reviews Createable by Location Access"
    on public.reviews
    for insert
    to authenticated
    with check (
       kit.has_location_access(location_id)
       AND
       exists (
           select 1 from public.locations l
           where l.id = location_id
           and l.account_id = public.reviews.account_id
       )
    );

-- Update/Delete: Only Managers/Owners (via has_location_access check + role check if needed)
-- For now, keep it simple: Location Access allows management, but we might want to restrict delete.
create policy "Reviews Manageable by Location Access"
    on public.reviews
    for update
    to authenticated
    using ( kit.has_location_access(location_id) );

create policy "Reviews Deletable by Location Access"
    on public.reviews
    for delete
    to authenticated
    using ( kit.has_location_access(location_id) );
