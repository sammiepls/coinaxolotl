<script lang="ts">
  import "../styles.css";
  import logo from "$lib/images/logo.svg";
  import { page } from "$app/stores";
</script>

<nav class="column">
  <a href="/">
    <img alt="CoinAxoltl" src={logo} />
  </a>

  <ul>
    <li><a class:active={$page.url.pathname === "/"} href="/">Market</a></li>
  </ul>
</nav>

<main class="column">
  <slot />
</main>

<style>
  img {
    height: 3rem;
  }

  nav {
    margin-top: var(--side);
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: space-between;
    max-width: var(--column);
    padding: 0 var(--side);
    color: var(--accent);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    padding-bottom: 0.25em;
  }

  .active {
    border-bottom: 2px solid var(--black);
  }
</style>
