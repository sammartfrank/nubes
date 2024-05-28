'use client';

import { useBookingsQuery, useUsersQuery } from '@/src/hooks';

import { AdminBookingsSection } from './bookings';
import { AdminUsersSection } from './users';

export const AdminPanel = ({ access_token }: { access_token: string }) => {
  const { data: bookings, isLoading: isLoadingBookings } =
    useBookingsQuery(access_token);
  const { data: users, isLoading: isLoadingUsers } =
    useUsersQuery(access_token);

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
