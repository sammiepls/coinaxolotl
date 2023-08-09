<script lang="ts">
  import { USD, colorize, formatPercentage } from "$lib/utils.js";
  export let data;
  import Chart from "./Chart.svelte";

  console.log(data);
</script>

<div class="columns">
  <header>
    <h1>
      {data.coin.name}
      <span class="symbol">{data.coin.symbol.toUpperCase()}</span>
    </h1>
    {#if data.coin.market_cap_rank}
      <span class="rank">Rank #{data.coin.market_cap_rank}</span>
    {/if}
    <img class="coin-logo" src={data.coin.image.small} alt={data.coin.name} />
  </header>

  <dl class="box">
    <dt>Price</dt>
    <dd>
      {USD.format(data.coin.market_data.current_price.usd)}
      <span
        class="percentage {colorize(
          data.coin.market_data.price_change_percentage_24h
        )}"
        >{formatPercentage(
          data.coin.market_data.price_change_percentage_24h
        )}</span
      >
    </dd>
  </dl>

  <dl class="box">
    <dt>Market Cap</dt>
    <dd>
      {USD.format(data.coin.market_data.market_cap.usd)}
    </dd>
  </dl>

  <dl class="box">
    <dt>Trading Volume</dt>
    <dd>
      {USD.format(data.coin.market_data.total_volume.usd)}
    </dd>
  </dl>
</div>

<div class="market-row">
  <div class="chart-container">
    <Chart />
  </div>

  <div class="price-stats">
    <h2>Price Statistics</h2>
    <dl>
      <dt>24h Low / 24h High</dt>
      <dd>
        {USD.format(data.coin.market_data.high_24h.usd)} / {USD.format(
          data.coin.market_data.low_24h.usd
        )}
      </dd>

      <dt>All-Time High</dt>
      <dd>
        {USD.format(data.coin.market_data.ath.usd)}
        <span
          >{formatPercentage(
            data.coin.market_data.ath_change_percentage.usd
          )}</span
        >
      </dd>
    </dl>
  </div>
</div>

<style>
  .columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header {
    display: grid;
    grid-template-columns: max-content 1fr;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 1.5em;
  }

  .percentage {
    font-size: 0.7em;
  }

  .coin-logo {
    grid-column: 1;
    grid-row: 1/3;
    width: 2.3em;
    height: 2.3em;
    margin-right: var(--spacing);
  }

  .symbol {
    color: var(--grey);
    font-size: 0.7em;
    font-weight: bold;
  }

  .rank {
    font-size: 0.75em;
    grid-column: 2;
    background-color: var(--accent);
    border-radius: 0.5em;
    width: fit-content;
    padding: var(--spacing);
    font-weight: bold;
  }

  .box {
    padding: 1em;
  }

  .box dt {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-size: 0.85em;
  }

  .box dd {
    margin: 0;
    font-weight: bold;
    font-size: 1.2em;
  }

  .market-row {
    display: flex;
  }

  .chart-container {
    flex: 2;
  }

  .price-stats {
    flex: 1;
  }
</style>
