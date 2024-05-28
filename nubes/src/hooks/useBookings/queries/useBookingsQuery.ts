'use client';
import { useQuery } from '@tanstack/react-query';
import { bookingsRequest } from '../../utils/request';

import { Bookings } from '@/custom.types';

export const useBookingsQuery = (access_token: string) =>
  useQuery({
    queryKey: ['getBookings'],
    queryFn: () =>
      bookingsRequest<Bookings[]>('GET', '/bookings', {
        access_token,
      }),
  });
