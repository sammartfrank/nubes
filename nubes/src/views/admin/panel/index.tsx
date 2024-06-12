'use client';

import { useBookingsQuery, useUsersQuery } from '@/src/hooks';

import { AdminBookingsSection } from './bookings';
import { AdminUsersSection } from './users';
import { Session } from '@supabase/supabase-js';

export const AdminPanel = ({ session }: { session: Session }) => {
  const { data: bookings, isLoading: isLoadingBookings } = useBookingsQuery(
    session.access_token,
  );
  const { data: users, isLoading: isLoadingUsers } = useUsersQuery(
    session.access_token,
  );

  return (
    <section className="flex flex-col space-y-4 text-center text-zinc-900 bg-zinc-900">
      <AdminBookingsSection
        bookings={bookings}
        isLoadingBookings={isLoadingBookings}
      />
      <AdminUsersSection users={users} isLoadingUsers={isLoadingUsers} />
    </section>
  );
};
