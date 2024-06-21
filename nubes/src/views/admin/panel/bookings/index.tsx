import { Skeleton } from '@/components/ui/skeleton';
import { Bookings } from '@/custom.types';
import { BookingsTableView } from '@/src/components/Bookings/BookingsTable';

export const AdminBookingsSection = ({
  bookings,
  isLoadingBookings,
}: {
  bookings?: Bookings[];
  isLoadingBookings: boolean;
}) => {
  if (isLoadingBookings) return <Skeleton />;
  if (!bookings) return null;
  return (
    <section className="text-white">
      <header>
        <h2 className="font-bold mb-2 text-4xl">Bookings</h2>
      </header>
      <main></main>
    </section>
  );
};
