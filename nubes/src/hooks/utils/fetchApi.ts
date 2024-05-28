export async function fetchApi<T>(url: string, access_token: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json() as T;
}
