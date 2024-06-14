import { NewBookingForm } from '@/src/components/Bookings/New/Form';
import { createClient } from '@/utils/supabase/server';

export default async function NewBookingPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="container mx-auto flex items-center justify-center mt-24">
      <NewBookingForm user={user} access_token={session?.access_token!} />
    </div>
  );
}
