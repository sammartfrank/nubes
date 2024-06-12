'use client';

import { BookingsTable } from '@/src/components/Bookings/BookingsTable';
import { useBookingsQuery } from '@/src/hooks';
import { Session } from '@supabase/supabase-js';
import { NEW_BOOKING_URL } from '@/utils/constants';
import Link from 'next/link';
import { Loader } from '@/src/components/Loader';

export const UsersBookingsSection = ({
  access_token,
}: {
  access_token?: Session['access_token'];
}) => {
  const { data: bookings = [], isLoading } = useBookingsQuery(access_token);

  if (isLoading) return <Loader />;

  if (bookings.length === 0) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <span>No hay reservas realizadas.</span>
        <Link
          href={NEW_BOOKING_URL}
          className="p-2 border border-border shadow-sm rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-transparent"
        >
          Crear Reserva
        </Link>
      </div>
    );
  }
  return (
    <section>
      <main>
        <>
          <BookingsTable bookings={bookings} />
        </>
      </main>
    </section>
  );
};
