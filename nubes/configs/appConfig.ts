import { NavbarConfig } from '@/custom.types';

import {
  ADMIN_PAGE_URL,
  BOOKINGS_URL,
  NEW_BOOKING_URL,
} from '@/utils/constants';

export const navbarConfig: NavbarConfig = {
  admin: [
    { href: ADMIN_PAGE_URL, text: 'Admin' },
    { href: `${ADMIN_PAGE_URL}/bookings`, text: 'Bookings' },
    { href: `${ADMIN_PAGE_URL}/users`, text: 'Users' },
  ],
  authenticated: [{ href: BOOKINGS_URL, text: 'Reservas' }],
  loggedOut: [],
};

export const homeConfig = {
  logoUrl: '/public/cwo.png',
  signupText: 'Registrarse',
  loginText: 'Acceder',
};

export const dashboardConfig = {
  newBookingUrl: NEW_BOOKING_URL,
  dashboardTitle: 'Las Nubes',
  dashboardSubtitle:
    'Nuestra cafeteria está abierta toda la semana, de 8 a.m. a 00 a.m.',
  dashboardDescription:
    'Comenzá haciendo una reserva para disfrutar de nuestras únicas vistas.',
  dashboardCTA: 'Reservá una mesa!',
};

export const openingHoursConfig = {
  opening: 8,
  close: 24,
};

export const appTermsConfig = {
  termsText: `Al realizar la reserva, aceptas los términos y condiciones de nuestro establecimiento. Además, al efectuar el pago, confirmas que estás de acuerdo con nuestra política de cancelación, la cual no incluye reembolsos.`,
  termsUrl: '/terms',
  policiesUrl: '/policies',
};
