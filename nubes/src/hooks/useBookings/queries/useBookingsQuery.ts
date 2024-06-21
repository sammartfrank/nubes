import { useQuery } from '@tanstack/react-query';
import { bookingsRequest } from '../../utils/request';

import { Bookings } from '@/custom.types';
import { Session } from '@supabase/supabase-js';

export const useBookingsQuery = ({
  access_token,
  variables,
}: {
  access_token: Session['access_token'];
  variables?: URLSearchParams;
}) =>
  useQuery({
    queryKey: ['getBookings'],
    queryFn: () =>
      bookingsRequest<Bookings[]>('GET', '/bookings', {
        access_token,
        urlSearchParams: variables,
      }),
  });
