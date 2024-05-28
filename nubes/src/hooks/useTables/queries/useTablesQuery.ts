'use client';

import { useQuery } from '@tanstack/react-query';
import { tablesRequest } from '../../utils/request';

import { Tables } from '@/custom.types';
import { Session } from '@supabase/supabase-js';

export const useTablesQuery = ({
  access_token,
}: {
  access_token: Session['access_token'];
}) =>
  useQuery({
    queryKey: ['getTables'],
    queryFn: () =>
      tablesRequest<Tables[]>('GET', '/tables', {
        access_token,
      }),
  });
