import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { LOGIN_URL } from '@/utils/constants';
import { UsersBookingsSection } from '@/src/views/admin/panel/users/bookings';

export default async function BookingsPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!user || !session) {
    redirect(LOGIN_URL);
  }


  return <UsersBookingsSection access_token={session.access_token}  />
}
