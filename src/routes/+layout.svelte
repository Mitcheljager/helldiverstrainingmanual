<script>
  import "$lib/scss/app.scss"
  import "$lib/scss/fonts.scss"
</script>

<div class="layout">
  <aside class="sidebar">
    <header class="header">
      <img src="/images/logo.png" alt="Helldivers 2" />

      <p>Helldivers Training Manual</p>
    </header>
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
    font-size: 1.75rem;
    font-family: "Jockey One";
    text-align: center;

    p {
      margin: $margin * 0.25 0 0;
      color: $primary;
    }
  }

  .sidebar {
    height: 100vh;
    padding: $margin;
    border-right: 5px solid $bg-dark;

    img {
      width: 100%;
      height: auto;
    }
  }

  .article {
    padding: $margin;
  }
</style>
