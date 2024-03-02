<script>
	import { afterNavigate } from "$app/navigation";
  import Navigation from "$lib/components/Navigation.svelte"

  import "$lib/scss/app.scss"
  import "$lib/scss/fonts.scss"

  let sidebarActive = false

  afterNavigate(() => sidebarActive = false)
</script>

<div class="layout">
  <aside class="sidebar" class:active={sidebarActive}>
    <a href="/" class="header">
      <img src="/images/helldivers-2-logo.png" alt="Helldivers 2" height="200" />

      <p>Helldivers Training Manual</p>
    </a>

    <Navigation />
  </aside>

  <button class="sidebar-toggle" on:click={() => sidebarActive = !sidebarActive}>
    <svg width="40px" height="40px" viewBox="0 0 24 24">
      <path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>

  <article class="article">
    <slot />
  </article>
</div>

<style lang="scss">
  .layout {
    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 25rem auto;
      grid-template-rows: 10rem auto;
      height: 100vh;
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
    position: fixed;
    height: 100vh;
    padding: $margin * 0.5;
    border-right: 5px solid $bg-dark;
    overflow-y: auto;
    background: $bg-base;
    z-index: 100;
    transform: translateX(-100%);
    transition: transform 200ms;

    @include breakpoint(xxs) {
      padding: $margin;
    }

    @include breakpoint(lg) {
      position: relative;
      transform: none;
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

  .article {
    position: relative;
    padding: $margin * 0.75 $margin * 0.75 $margin * 1.5;
    height: 100vh;
    overflow-y: auto;

    @include breakpoint(lg) {
      padding: $margin * 2;
    }

    @include styled-scrollbar(thick);
  }
</style>
