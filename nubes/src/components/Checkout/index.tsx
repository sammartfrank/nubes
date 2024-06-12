'use client';

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export const Checkout = ({ preferenceId }: { preferenceId: string }) => {
  initMercadoPago(process.env.NEXT_PUBLIC_MERPAGO_PUBLIC_KEY!);
  return (
    <div className="bg-zinc-400 h-screen">
      <h1>Checkouts</h1>
      <div className="w-48 mx-auto">
        <Wallet
          initialization={{ preferenceId }}
          customization={{ texts: { valueProp: 'smart_option' } }}
          locale="es-AR"
        />
      </div>
    </div>
  );
};
