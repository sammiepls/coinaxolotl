const base = "https://api.coingecko.com/api/v3";

export async function get(
  fetch: typeof globalThis.fetch,
  endpoint: string,
  params?: Record<string, string>
) {
  const q = new URLSearchParams(params);
  const url = `${base}/${endpoint}?${q}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
