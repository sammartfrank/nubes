import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsRequest } from '../../utils/request';
import { Session } from '@supabase/supabase-js';
import { BookingsInsert } from '@/custom.types';

export const useCreateBookingMutation = ({
  access_token,
}: {
  access_token: Session['access_token'];
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ variables }: { variables: BookingsInsert }) =>
      bookingsRequest<BookingsInsert>('POST', '/bookings', {
        body: { ...variables },
        access_token,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getBookings'] });
    },
  });
};
