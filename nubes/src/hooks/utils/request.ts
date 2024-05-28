import { BACKEND_API_URL } from '@/utils/constants';

type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type Service = 'bookings' | 'users' | 'availability' | 'tables';

interface RequestOptions {
  body?: object;
  headers?: object;
  urlSearchParams?: string | Record<string, any>;
  signal?: AbortSignal;
  access_token?: string;
}

const createRequest = ({
  service,
  method,
  endpoint,
  options,
}: {
  service: Service;
  method: METHOD;
  endpoint: string;
  options?: RequestOptions;
}) => {
  const url = new URL(`${BACKEND_API_URL}${endpoint}`);

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-Service': service,
    Authorization: `Bearer ${options?.access_token}`,
    ...options?.headers,
  };
  const init: RequestInit = { method, headers };

  if (options?.urlSearchParams) {
    const searchParams = new URLSearchParams(options.urlSearchParams);
    url.search = searchParams.toString();
  }

  if (options?.body) {
    init.body = JSON.stringify(options.body);
  }
  if (options?.signal) {
    init.signal = options.signal;
  }

  return new Request(url, init);
};

function createRequester(service: Service) {
  return async function request<T>(
    method: METHOD,
    endpoint: string,
    options?: RequestOptions,
  ) {
    try {
      const request = createRequest({ service, method, endpoint, options });
      const response = await fetch(request);

      if (!response.ok) {
        let data;

        if (
          response.headers.get('Content-Type')?.includes('application/json')
        ) {
          data = await response.json();
        } else {
          data = { message: 'An error occurred. Please try again later.' };
        }

        throw new Error(data.message ?? data.error, { cause: data });
      }

      try {
        const data = await response.json();
        return data as T;
      } catch (error) {
        return {} as T;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export const bookingsRequest = createRequester('bookings');
export const usersRequest = createRequester('users');
export const availabilityRequest = createRequester('availability');
export const tablesRequest = createRequester('tables');