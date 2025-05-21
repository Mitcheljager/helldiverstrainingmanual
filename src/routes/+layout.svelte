<script>
	import { afterNavigate, beforeNavigate } from "$app/navigation"
	import NavigatingIndicator from "$lib/components/NavigatingIndicator.svelte";
  import Navigation from "$lib/components/Navigation.svelte"

  import "$lib/scss/app.scss"
  import "$lib/scss/fonts.scss"
	import { hydrated } from "$lib/stores/app"
	import { onMount } from "svelte"

  let main
  let sidebarActive = false
  let scrollPositions = {}

  onMount(() => $hydrated = true)

  beforeNavigate(event => {
    if (main && !("delta" in event)) scrollPositions[event.from] = main.scrollTop
  })

  afterNavigate(event => {
    if (!event.from) return

    sidebarActive = false

    if (main && !("delta" in event)) main.scrollTo({ top: 0 })
    else if (main) main.scrollTo({ top: scrollPositions[event.to] || 0 })
  })
</script>

<NavigatingIndicator />

<div class="layout">
  <aside class="sidebar" class:active={sidebarActive} id="navigation">
    <div class="skip-links">
      <a href="#main">Skip to main content</a>
    </div>

    <a href="/" class="header">
      <img src="/images/helldivers-2-logo.png" alt="Helldivers 2" height="200" />

      <p>Helldivers Training Manual</p>
    </a>

    <Navigation />
  </aside>

  <button
    on:click={() => sidebarActive = !sidebarActive}
    class="sidebar-toggle"
    aria-label="Toggle navigation"
    aria-controls="navigation"
    aria-expanded={sidebarActive}>

    <svg width="40px" height="40px" viewBox="0 0 24 24">
      <path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>

  <main class="main" id="main" class:no-scroll={sidebarActive} bind:this={main}>
    <slot />
  </main>
</div>

<style lang="scss">
  .layout {
    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 25rem auto;
      grid-template-rows: 10rem auto;
      height: 100dvh;
    }
  }

  .header {
    display: block;
    margin-bottom: $margin;
    font-size: 1.75rem;
    font-family: "Jockey One";
    text-align: center;
    text-decoration: none;

    img {
      max-width: 300px;
    }

    p {
      margin: $margin * 0.25 0 0;
      color: $primary;
    }
  }

  .sidebar {
    $shadow: 0 0 0.75rem rgba($black, 0.5), 0 0 3rem rgba($black, 0.5), 0 0 5rem rgba($black, 0.75);
    position: fixed;
    height: 100dvh;
    max-width: 90vw;
    padding: $margin * 0.5;
    border-right: 5px solid $bg-dark;
    background: $bg-base;
    transform: translateX(-100%);
    overflow-y: auto;
    overscroll-behavior: contain;
    z-index: 100;
    transition: transform 200ms;

    @include breakpoint(xxs) {
      padding: $margin * 0.75;
    }

    @include breakpoint(xs) {
      padding: $margin;
    }

    @include breakpoint(lg) {
      position: relative;
      transform: none;
      box-shadow: $shadow;
    }

    @include styled-scrollbar();

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 20rem;
      background: $white;
      filter: blur(100px);
      opacity: 0.1;
      z-index: -1;
    }

    &.active {
      transform: translateX(0);
      box-shadow: $shadow;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .sidebar-toggle {
    appearance: none;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: $margin * 0.15;
    z-index: 100;
    background: $bg-base;
    border: 0;

    @include breakpoint(lg) {
      display: none;
    }

    &:active {
      svg {
        transform: scale(0.9);
      }
    }

    svg {
      display: block;
      transition: transform 100ms;
    }

    path {
      stroke: $white;
    }
  }

  .main {
    position: relative;
    padding: $margin * 0.5 $margin * 0.5 $margin * 1.5;
    height: 100dvh;
    overflow-y: auto;
    overflow-x: hidden;

    @include styled-scrollbar(thick);

    @include breakpoint(md) {
      padding: $margin;
    }

    @include breakpoint(1200px) {
      padding: $margin * 2;
    }

    &.no-scroll {
      overflow-y: hidden;

      @include breakpoint(lg) {
        overflow-y: auto;
      }
    }
  }

  .skip-links {
    position: absolute;
    top: $margin;
    left: $margin;
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;

    &:focus-within {
      height: auto;
      width: calc(100% - $margin * 2);
      opacity: 1;
      z-index: 5;
    }

    a {
      display: block;
      background: $bg-base;
      color: $white;
      text-decoration: none;

      @include focus-visible-outline();
    }
  }
</style>
