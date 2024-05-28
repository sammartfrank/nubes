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
  access_token: Session['access_token'];
}) => {
  const { data: bookings = [], isLoading } = useBookingsQuery(access_token);
  if (isLoading) return <Loader />;
  return (
    <section>
      <main>
        {bookings.length > 0 ? (
          <>
            <BookingsTable bookings={bookings} />
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Link href={NEW_BOOKING_URL}>Create Booking</Link>
          </div>
        )}
      </main>
    </section>
  );
};
