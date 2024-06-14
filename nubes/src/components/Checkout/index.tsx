'use client';

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export const Checkout = ({ preferenceId }: { preferenceId: string }) => {
  initMercadoPago(process.env.NEXT_PUBLIC_MERPAGO_PUBLIC_KEY!);
  return <Wallet initialization={{ preferenceId }} locale="es-AR" />;
};
