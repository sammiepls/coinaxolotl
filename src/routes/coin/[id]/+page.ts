import * as api from "$lib/api";
import type { Coin } from "$lib/types.js";

export async function load({ fetch, params }) {
  const coin = (await api.get(fetch, `/coins/${params.id}`, {})) as Coin;

  return { coin };
}
