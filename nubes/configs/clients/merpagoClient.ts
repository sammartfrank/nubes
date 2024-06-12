import MercadoPagoConfig from 'mercadopago';

export const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MERPAGO_ACCESS_TOKEN!,
});

export const BOOKING_ITEM = {
  id: '123456',
  title: 'Reserva en Las Nubes café',
  quantity: 1,
  unit_price: 4000,
};
