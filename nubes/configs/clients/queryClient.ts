import { QueryClient, QueryCache } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (!query.meta?.isSilent) throw new Error('Problemines');
    },
  }),
});

export default queryClient;
