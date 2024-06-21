import { createClient } from '@/utils/supabase/server';
import { UsersBookingsSection } from '@/src/views/admin/panel/users/bookings';

export default async function BookingsPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <UsersBookingsSection access_token={session?.access_token!} user={user!} />
  );
}
