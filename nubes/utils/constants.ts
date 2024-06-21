// Routes
export const LOGIN_URL = '/login';
export const ADMIN_PAGE_URL = '/admin';
export const LOGOUT_URL = '/logout';
export const HOME_URL = '/';
export const SIGNUP_URL = '/signup';
export const USERS_URL = '/users';

export const DASHBOARD_URL = '/dashboard';

export const NEW_BOOKING_URL = `/dashboard/bookings/new`;
export const BOOKINGS_URL = `/dashboard/bookings`;
export const NEW_PAYMENT_SUCCESS = `/dashboard/bookings?status=success`;

export const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const BOOKINGS_API_URL = `${BACKEND_API_URL}/bookings`;
export const USERS_API_URL = `${BACKEND_API_URL}/users`;
export const PAYMENTS_API_URL = `${BACKEND_API_URL}/payments`;


//errors
export const PAYMENTS_ERROR_URL = `/dashboard/payments/error`;
export const BOOKINGS_ERROR_URL = `/dashboard/bookings/error`;
export const BOOKING_UPDATE_STATUS_ERROR_URL = `/dashboard/bookings/status/error`;

// Admin Routes
export const ADMIN_PANEL_URL = '/admin/panel';
export const ADMIN_DASHBOARD_URL = '/admin/dashboard';
export const ADMIN_USERS_URL = '/admin/users';
export const ADMIN_BOOKINGS_URL = '/admin/bookings';
export const ADMIN_PROFILE_URL = '/admin/profile';
export const ADMIN_SETTINGS_URL = '/admin/settings';
export const ADMIN_LOGIN_URL = '/admin/login';
export const ADMIN_LOGOUT_URL = '/admin/logout';
export const ADMIN_SIGNUP_URL = '/admin/signup';
export const ADMIN_AUTH_URL = '/admin/auth';
export const ADMIN_API_URL = '/admin/api';
export const ADMIN_USERS_API_URL = '/admin/api/users';
export const ADMIN_BOOKINGS_API_URL = '/admin/api/bookings';

// Roles
export const ADMIN_ROLE = 'admin';
export const USER_ROLE = 'authenticated';
