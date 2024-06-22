import { createClient } from '@/utils/supabase/server';

import { UsersBookingsSection } from '@/src/views/admin/panel/users/bookings';
import { BookingsSection } from '@/src/components/Bookings/BookingsSection/BookingsSection';

export default async function BookingsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <BookingsSection access_token={session?.access_token ?? ''} user={user} />
  );
}
