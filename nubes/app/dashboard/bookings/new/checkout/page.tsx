import { client, BOOKING_ITEM } from '@/configs/clients/merpagoClient';
import { Checkout } from '@/src/components/Checkout';
import { Preference } from 'mercadopago';

export default async function CheckoutsPage() {
  const preference = new Preference(client);
  const preferenceCreated = await preference.create({
    body: {
      items: [BOOKING_ITEM],
    },
  });

  return (
    <>
      <Checkout preferenceId={preferenceCreated.id!} />
    </>
  );
}
