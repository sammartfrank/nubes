import { useQuery } from '@tanstack/react-query';
import { bookingsRequest } from '../../utils/request';

import { Bookings } from '@/custom.types';

export const useBookingQuery = (id: string, access_token: string) =>
  useQuery({
    queryKey: ['getBooking', id],
    queryFn: () => {
      bookingsRequest<Bookings>('GET', `/bookings/${id}`, {
        access_token,
      });
    },
  });
