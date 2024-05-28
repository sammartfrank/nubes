import { Bookings } from '@/custom.types';
import { createClient } from '@/utils/supabase/server';

export default async function BookingPage() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/${session?.user.id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  );
  const booking: Bookings = await response.json();

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen text-zinc-50 dark:text-white">
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="font-bold mb-2">{booking.booking_name}</h2>
        <div className="h-1 bg-blue-500"></div>
      </div>
    </div>
  );
}
