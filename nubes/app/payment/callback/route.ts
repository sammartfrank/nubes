import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/middleware';
import {
  BookingStatusEnum,
  PaymentMethodEnum,
  PaymentStatusEnum,
  type PaymentStatus,
} from '@/custom.types';
import {
  BOOKINGS_API_URL,
  PAYMENTS_API_URL,
  PAYMENTS_ERROR_URL,
  BOOKING_UPDATE_STATUS_ERROR_URL,
  BOOKINGS_URL,
  BOOKINGS_ERROR_URL,
} from '@/utils/constants';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const { supabase } = createClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = user?.id ?? '';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${session?.access_token}`,
  };

  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append('userId', userId);
  urlSearchParams.append('booking_status', BookingStatusEnum.PENDING);

  const bookingsResponse = await fetch(
    `${BOOKINGS_API_URL}?${urlSearchParams}`,
    {
      method: 'GET',
      headers,
    },
  );

  if (bookingsResponse.status !== 200) {
    console.error('Failed to fetch bookings');
    return NextResponse.redirect(
      new URL(BOOKINGS_ERROR_URL, origin).toString(),
    );
  }

  const bookings = await bookingsResponse.json();
  console.log('🚀 ~ GET ~ bookings:', bookings);

  const payload = {
    collection_id: searchParams.get('collection_id') as string,
    collection_status: searchParams.get('collection_status') as string,
    payment_mepa_id: searchParams.get('payment_id') as string,
    external_status: searchParams.get('status') as string,
    status_detail: (searchParams.get('status_detail') as string) ?? 'approved',
    external_reference: searchParams.get('external_reference') as string,
    merchant_order_id: searchParams.get('merchant_order_id') as string,
    amount: 1,
    payment_method: PaymentMethodEnum.CARD,
    payment_status: PaymentStatusEnum.APPROVED as PaymentStatus,
    userId,
    bookingId: bookings[0]?.id,
    payment_date: new Date().toISOString(),
  };

  const paymentPost = await fetch(PAYMENTS_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...payload }),
  });

  if (paymentPost.ok) {
    console.error('\x1b[31m', 'Payment creation failed');
    console.log({ paymentPost });
    return NextResponse.redirect(
      new URL(PAYMENTS_ERROR_URL, origin).toString(),
    );
  }

  const bookingUpdateFetch = await fetch(
    `${BOOKINGS_API_URL}/${bookings[0].id}`,
    {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ booking_status: 'APPROVED' }),
    },
  );

  if (bookingUpdateFetch.ok) {
    console.error('\x1b[31m', 'Booking update failed');
    return NextResponse.redirect(
      new URL(BOOKING_UPDATE_STATUS_ERROR_URL, origin).toString(),
    );
  }

  return NextResponse.redirect(new URL(BOOKINGS_URL, origin).toString());
}
