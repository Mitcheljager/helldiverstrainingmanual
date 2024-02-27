<script>
  import Navigation from "$lib/components/Navigation.svelte"

  import "$lib/scss/app.scss"
  import "$lib/scss/fonts.scss"
</script>

<div class="layout">
  <aside class="sidebar">
    <header class="header">
      <img src="/images/logo.png" alt="Helldivers 2" height="200" />

      <p>Helldivers Training Manual</p>
    </header>

    <Navigation />
  </aside>

  <article class="article">
    <slot />
  </article>
</div>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10rem auto;
    height: 100vh;
  }

  .header {
    margin-bottom: $margin;
    font-size: 1.75rem;
    font-family: "Jockey One";
    text-align: center;

    p {
      margin: $margin * 0.25 0 0;
      color: $primary;
    }
  }

  .sidebar {
    position: relative;
    height: 100vh;
    padding: $margin;
    border-right: 5px solid $bg-dark;
    overflow-y: auto;

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

    img {
      width: 100%;
      height: auto;
    }
  }

  .article {
    position: relative;
    padding: $margin * 2;
    height: 100vh;
    overflow-y: auto;

    @include styled-scrollbar(thick);
  }
</style>
