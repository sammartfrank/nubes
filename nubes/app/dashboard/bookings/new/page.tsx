import { NewBooking } from '@/src/components/Bookings/New';
import { LOGIN_URL } from '@/utils/constants';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function NewBookingPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!user || !session) {
    return redirect(LOGIN_URL);
  }

  return (
    <div className="flex justify-center items-center h-screen text-zinc-50 dark:text-white">
      <NewBooking user={user} access_token={session.access_token} />
    </div>
  );
}
