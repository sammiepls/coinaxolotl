import * as api from "$lib/api";
import type { Coin } from "../lib/types.js";

export async function load({ fetch, params }) {
  const coins = (await api.get(fetch, "/coins/markets", {
    vs_currency: "usd",
    sparkline: "true",
    price_change_percentage: "1h,24h,7d",
  })) as Coin[];

  return {
    coins,
  };
}
