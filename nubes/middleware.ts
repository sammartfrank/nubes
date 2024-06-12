import { type NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/middleware';
import { NextResponse } from 'next/server';
import {
  DASHBOARD_URL,
  HOME_URL,
  BOOKINGS_URL,
  NEW_BOOKING_URL,
} from './utils/constants';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && request.nextUrl.pathname === HOME_URL) {
    return NextResponse.redirect(new URL(DASHBOARD_URL, request.url));
  }

  if (
    !user &&
    [DASHBOARD_URL, BOOKINGS_URL, NEW_BOOKING_URL].includes(
      request.nextUrl.pathname,
    )
  ) {
    return NextResponse.redirect(new URL(HOME_URL, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
