import { useQuery } from '@tanstack/react-query';
import { availabilityRequest } from '@/src/hooks';
import { Bookings } from '@/custom.types';

export const useAvailabilityByDate = ({
  access_token,
  selectedDate,
}: {
  selectedDate?: string;
  access_token: string;
}) => {
  let url = '/availability';
  let params = new URLSearchParams();

  if (selectedDate) {
    params.append('date', selectedDate);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const { data, isLoading } = useQuery({
    queryKey: ['getAvailabilityByDate', selectedDate],
    queryFn: () =>
      availabilityRequest<Bookings[]>('GET', url, {
        access_token,
      }),
  });

  return {
    availability: data,
    isLoading,
  };
};
