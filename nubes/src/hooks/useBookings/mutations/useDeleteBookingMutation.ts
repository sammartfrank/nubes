import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsRequest } from '../../utils/request';
import { Session } from '@supabase/supabase-js';
import { Bookings } from '@/custom.types';

export const useDeleteBookingMutation = ({
  access_token,
}: {
  access_token: Session['access_token'];
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ variables: { id } }: { variables: { id: string } }) =>
      bookingsRequest<Bookings>('DELETE', `/bookings/${id}`, {
        access_token,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getBookings'] });
    },
  });
};
