<script>
	import { browser } from "$app/environment"
	import { fly } from "svelte/transition"

  export let src = ""
  export let alt = ""

  let loaded = false
</script>

<div class="hero" in:fly={{ x: -20, duration: 400 }}>
  <img {src} {alt}>
</div>

{#if $$slots.default}
  <h1 in:fly|global={{ y: 20, duration: 400 }}><slot /></h1>
{/if}

{#if browser}
  <img {src} {alt} class="blur" class:loaded on:load={() => loaded = true}>
{/if}

<style lang="scss">
  h1 {
    position: relative;
    margin: $margin * 0.5 0 $margin;

    @include breakpoint(md) {
      margin: calc(-1em + $margin * -0.5) 0 $margin;
    }
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: clamp(15rem, 20vw, 20rem);
    max-width: $text-limit * 1.5;
    margin: $margin * -0.5 $margin * -0.5 0;
    border: 5px solid $primary;
    background: lighten($bg-base, 5%);
    overflow: hidden;

    @include breakpoint(md) {
      margin: $margin * -0.5;
    }
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    height: 30rem;
    max-width: $text-limit * 1.5;
    width: 100%;
    opacity: 0;
    filter: blur(100px);
    z-index: -1;
    transition: opacity 1500ms;

    &.loaded {
      opacity: 0.5;
    }
  }
</style>
