import { Users } from '@/custom.types';
import { usersRequest } from '../utils/request';
import { useQuery } from '@tanstack/react-query';

export const useUsersQuery = (access_token?: string) =>
  useQuery({
    queryKey: ['getUsers'],
    queryFn: () =>
      usersRequest<Users[]>('GET', '/users', {
        access_token,
      }),
    throwOnError: true,
  });
