import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingsRequest } from '../../utils/request';
import { Session } from '@supabase/supabase-js';
import { UpdateBookingStatusDto } from '@/custom.types';

export const useUpdateBookingStatusMutation = ({
  access_token,
}: {
  access_token: Session['access_token'];
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateBookingStatus'],
    mutationFn: async (body: UpdateBookingStatusDto) => {
      return bookingsRequest<UpdateBookingStatusDto>(
        'PATCH',
        `/bookings/${body.id}`,
        {
          access_token,
          body,
        },
      );
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['getBookings'] });
      queryClient.invalidateQueries({
        queryKey: ['getBooking', data.id],
      });
    },
  });
};
