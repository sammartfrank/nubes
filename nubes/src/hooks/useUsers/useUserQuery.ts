import { useQuery } from '@tanstack/react-query';
import { usersRequest } from '../utils/request';
import { Users } from '@/custom.types';

export const useUserQuery = (id: string) =>
  useQuery({
    queryKey: ['getUser', id],
    queryFn: () => {
      usersRequest<Users>('GET', `/users/${id}`);
    },
  });
