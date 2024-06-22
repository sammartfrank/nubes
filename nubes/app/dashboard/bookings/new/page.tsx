import { BOOKING_ITEM, client } from '@/configs/clients/merpagoClient';
import { NewBookingForm } from '@/src/components/Bookings/New/Form';
import { LoaderSpinner, Spinner } from '@/src/components/Loader';
import { createClient } from '@/utils/supabase/server';
import { Preference } from 'mercadopago';
import { Suspense } from 'react';

export default async function NewBookingPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const preference = new Preference(client);

  const preferenceCreated = await preference.create({
    body: {
      items: [BOOKING_ITEM],
      back_urls: {
        success: process.env.NEXT_PUBLIC_PAYMENT_CALLBACK,
        failure: process.env.NEXT_PUBLIC_PAYMENT_CALLBACK,
        pending: process.env.NEXT_PUBLIC_PAYMENT_CALLBACK,
      },
      auto_return: 'approved',
    },
  });

  return (
    <div className="container mx-auto flex items-center justify-center mt-24">
      <Suspense fallback={<LoaderSpinner />}>
        <NewBookingForm
          user={user}
          access_token={session?.access_token!}
          preferenceCreated={preferenceCreated.id!}
        />
      </Suspense>
    </div>
  );
}
