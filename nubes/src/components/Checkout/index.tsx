'use client';

import { CreateBookingDto } from '@/custom.types';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect } from 'react';

initMercadoPago(process.env.NEXT_PUBLIC_MERPAGO_PUBLIC_KEY!);

export const Checkout = ({
  preferenceId,
  handleCreateBooking,
}: {
  preferenceId: string;
  handleCreateBooking: () => Promise<CreateBookingDto>;
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  const initialization = {
    preferenceId: preferenceId,
  };

  const onSubmit = async () => {
    await handleCreateBooking();
  };

  return (
    // @ts-ignore
    <Wallet
      initialization={initialization}
      onSubmit={onSubmit}
      locale="es-AR"
    />
  );
};
