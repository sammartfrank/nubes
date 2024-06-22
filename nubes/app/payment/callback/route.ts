import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/middleware';
import {
  BookingStatusEnum,
  PaymentMethodEnum,
  PaymentStatusEnum,
} from '@/custom.types';
import {
  BOOKINGS_API_URL,
  PAYMENTS_API_URL,
  PAYMENTS_ERROR_URL,
  BOOKING_UPDATE_STATUS_ERROR_URL,
  BOOKINGS_URL,
  BOOKINGS_ERROR_URL,
  MethodsEnum,
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
      method: MethodsEnum.GET,
      headers,
    },
  );

  if (!bookingsResponse.ok) {
    console.error('Failed to fetch bookings');
    return NextResponse.redirect(
      new URL(BOOKINGS_ERROR_URL, origin).toString(),
    );
  }

  // Last Pending booking ID
  const bookings = await bookingsResponse.json();

  const payload = {
    collection_id: searchParams.get('collection_id') as string,
    collection_status: searchParams.get('collection_status') as string,
    payment_mepa_id: searchParams.get('payment_id') as string,
    external_status: searchParams.get('status') as string,
    status_detail: (searchParams.get('status_detail') as string) ?? 'approved',
    external_reference: searchParams.get('external_reference') as string,
    merchant_order_id: searchParams.get('merchant_order_id') as string,
    payment_date: new Date().toISOString(),

    // Harcoded values
    amount: 1,
    payment_method: PaymentMethodEnum.CARD,
    payment_status: PaymentStatusEnum.APPROVED,
    bookingId: bookings[0]?.id,
    userId,
  };

  const paymentPost = await fetch(PAYMENTS_API_URL, {
    method: MethodsEnum.POST,
    headers,
    body: JSON.stringify({ ...payload }),
  });

  if (!paymentPost.ok) {
    console.error('\x1b[31m', 'Payment creation failed');
    console.log({ paymentPost });
    return NextResponse.redirect(
      new URL(PAYMENTS_ERROR_URL, origin).toString(),
    );
  }

  const bookingUpdatePatch = await fetch(
    `${BOOKINGS_API_URL}/${bookings[0].id}`,
    {
      method: MethodsEnum.PATCH,
      headers,
      body: JSON.stringify({ booking_status: BookingStatusEnum.APPROVED }),
    },
  );

  if (!bookingUpdatePatch.ok) {
    console.error('\x1b[31m', 'Booking update failed');
    console.log({ bookingUpdatePatch });
    return NextResponse.redirect(
      new URL(BOOKING_UPDATE_STATUS_ERROR_URL, origin).toString(),
    );
  }

  return NextResponse.redirect(new URL(BOOKINGS_URL, origin).toString());
}
