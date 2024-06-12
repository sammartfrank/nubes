import { AdminBookingsSection } from '@/src/views/admin/panel/bookings';

export default async function AdminBookingsPage() {
  return (
    <div>
      <h1>Bookings Page</h1>
      <AdminBookingsSection isLoadingBookings={true} bookings={[]} />
    </div>
  );
}
