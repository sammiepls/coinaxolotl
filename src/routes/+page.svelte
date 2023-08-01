<script lang="ts">
  import { USD, formatPercentage, colorize } from "$lib/utils.js";

  export let data;
</script>

<header>
  <h1 class="title">Cryptocurrency Prices by Market Cap</h1>
  <p>
    The global cryptocurrency market cap today is $1.09 Trillion, a 1.8% change
    in the last 24 hours. Read More
  </p>
</header>

{#if data.coins}
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="left">#</th>
          <th class="left">Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>Mkt Cap</th>
          <th>Last 7d</th>
        </tr>
      </thead>
      <tbody>
        {#each data.coins as coin}
          <tr
            class="row"
            on:click={() => (window.location.href = `/coin/${coin.id}`)}
          >
            <td class="left">
              {coin.market_cap_rank}
            </td>
            <td class="left">
              {coin.name}
            </td>
            <td class="min-width">
              {USD.format(coin.current_price)}
            </td>
            <td
              class="min-width {colorize(
                coin.price_change_percentage_1h_in_currency
              )}"
            >
              {formatPercentage(+coin.price_change_percentage_1h_in_currency)}
            </td>
            <td class="min-width {colorize(coin.price_change_24h)}">
              {formatPercentage(+coin.price_change_24h)}
            </td>
            <td
              class="min-width {colorize(
                coin.price_change_percentage_7d_in_currency
              )}"
            >
              {formatPercentage(+coin.price_change_percentage_7d_in_currency)}
            </td>
            <td>
              {USD.format(coin.market_cap)}
            </td>
            <td class="min-width"> - </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  No coins
{/if}

<style>
  header {
    margin: 2em 0;
  }

  .table-container {
    overflow: scroll;
    height: 80vh;
    filter: drop-shadow(0 0 4px #3f3f3f0d);
  }

  @media screen and (max-width: 1030px) {
    .table-container {
      margin: 0 calc(var(--side) * -1);
      padding: 0 var(--side);
    }
  }

  table {
    position: relative;
    height: 100%;
    width: 100%;
    text-align: right;
    font-family: "Courier New", Courier, monospace;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 1em;
    border-collapse: collapse;
  }

  th:nth-child(1) {
    border-top-left-radius: 1em;
  }

  th:last-child {
    border-top-right-radius: 1em;
  }

  th {
    background-color: #fde9e9;
    z-index: 10;
    position: sticky;
    top: 0;
    padding: 0.5em;
  }

  td {
    padding: var(--spacing) 0.5em;
    width: fit-content;
    cursor: pointer;
  }

  .min-width {
    min-width: 10em;
  }

  .left {
    text-align: left;
  }

  .row:hover {
    background: #fc9d9d18;
    border-radius: 1rem;
  }
</style>
