import { useMutation, useQueryClient } from '@tanstack/react-query';
import { paymentRequest } from '../../utils/request';
import { Session } from '@supabase/supabase-js';
import { CreatePaymentDto } from '@/custom.types';

export const useCreatePaymentMutation = ({
  access_token,
}: {
  access_token: Session['access_token'];
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ variables }: { variables: CreatePaymentDto }) =>
      paymentRequest<CreatePaymentDto>('POST', '/payment', {
        body: { ...variables },
        access_token,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getPayment'] });
    },
  });
};
