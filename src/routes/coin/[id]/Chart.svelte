<script lang="ts">
  import { onMount } from "svelte";
  import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  );

  let marketChart;
  const chartData = {
    labels: [0, 100, 200, 300],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const config = {
    type: "line",
    data: chartData,
  };

  onMount(() => {
    const ctx = marketChart.getContext("2d");
    // Initialize chart using default config set
    var myChart = new Chart(ctx, config);
  });
</script>

<canvas bind:this={marketChart} width={400} height={400} />
