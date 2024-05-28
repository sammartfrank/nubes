import { NavbarConfig } from '@/custom.types';

import {
  ADMIN_PAGE_URL,
  BOOKINGS_URL,
  DASHBOARD_URL,
  HOME_URL,
  LOGIN_URL,
  NEW_BOOKING_URL,
  SIGNUP_URL,
} from '@/utils/constants';

export const navbarConfig: NavbarConfig = {
  admin: [
    { href: ADMIN_PAGE_URL, text: 'Admin' },
    { href: `${ADMIN_PAGE_URL}/bookings`, text: 'Bookings' },
    { href: `${ADMIN_PAGE_URL}/users`, text: 'Users' },
  ],
  authenticated: [
    { href: DASHBOARD_URL, text: 'Inicio' },
    { href: BOOKINGS_URL, text: 'Reservas' },
  ],
  loggedOut: [
    { href: HOME_URL, text: 'Inicio' },
    { href: SIGNUP_URL, text: 'Registrarse' },
    { href: LOGIN_URL, text: 'Acceder' },
  ],
};

export const homeConfig = {
  logoUrl: '/public/cwo.png',
  signupText: 'Registrarse',
  loginText: 'Acceder',
};

export const dashboardConfig = {
  newBookingUrl: NEW_BOOKING_URL,
  dashboardTitle: 'Bienvenidos a Las Nubes Cafe!',
  dashboardSubtitle:
    'Nuestra cafeteria está abierta toda la semana, de 8 a.m. a 00 a.m.',
  dashboardDescription:
    'Comenzá haciendo una reserva para disfrutar de nuestra excelente grastronomía y únicas vistas.',
  dashboardCTA: 'Reservá una mesa!',
};

export const openingHoursConfig = {
  opening: 8,
  close: 24,
};
