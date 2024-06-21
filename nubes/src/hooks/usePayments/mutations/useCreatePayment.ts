import { CreatePaymentDto } from './../../../../../nubes-back/src/payment/dto/create-payment.dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { paymentRequest } from '../../utils/request';
import { Session } from '@supabase/supabase-js';

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
