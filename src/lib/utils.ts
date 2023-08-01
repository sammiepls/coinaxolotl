export const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPercentage(percentage: number) {
  try {
    const isInvalidPercentage = isNaN(percentage);
    if (isInvalidPercentage) throw Error("Not a number");

    const formatted = isNaN(percentage) ? "-" : percentage.toPrecision(3);
    const symbol = percentage > 0 ? "⬆" : "⬇";

    return `${formatted} ${symbol}`;
  } catch (e) {
    return "-";
  }
}

export function colorize(number: number) {
  return number > 0 ? "green" : "red";
}
