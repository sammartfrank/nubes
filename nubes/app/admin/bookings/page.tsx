import { AdminBookingsSection } from '@/src/views/admin/panel/bookings';
import { LOGIN_URL } from '@/utils/constants';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminBookingsPage() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect(LOGIN_URL);
  }

  return (
    <div>
      <h1>Bookings Page</h1>
      <AdminBookingsSection isLoadingBookings={true} bookings={[]} />
    </div>
  );
}
