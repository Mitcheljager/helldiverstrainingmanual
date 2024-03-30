<script>
	import { createEventDispatcher } from "svelte"
	import { fade, scale } from "svelte/transition"

  const dispatch = createEventDispatcher()

  function closeOnBackdropClick({ target }) {
    if (target.classList.contains("dialog") || target.closest(".dialog")) return

    dispatch("close")
  }
</script>

<svelte:window on:keydown={({ key }) => { if (key === "Escape") dispatch("close") }} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="modal" transition:fade={{ duration: 200 }} on:click={closeOnBackdropClick} >
  <div class="dialog" transition:scale={{ start: 0.85, duration: 200 }}>
    <slot />
  </div>
</div>

<button class="close" on:click={() => dispatch("close")}>X</button>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: $margin * 2 $margin * 0.25;
    background: rgba($black, 0.75);
    backdrop-filter: blur(2rem);
    overflow-y: auto;
    z-index: 200;

    @include breakpoint(sm) {
      padding: $margin * 2 $margin;
    }
  }

  .dialog {
    position: relative;
    margin: 0 auto;
    padding: $margin * 0.5;
    border: 5px solid $bg-dark;
    box-shadow: 0 2rem 4rem $black, 0 4rem 8rem $black;
    max-width: $text-limit;
    background: $bg-base;

    @include breakpoint(sm) {
      padding: $margin;
    }
  }

  .close {
    appearance: none;
    position: fixed;
    bottom: 0;
    right: 0;
    border: 0;
    width: 3rem;
    height: 3rem;
    background: $bg-dark;
    z-index: 200;
    color: $white;
    font-family: $font-family-alt;
    font-size: 1.5rem;
    cursor: pointer;

    @include breakpoint(lg) {
      display: none;
    }
  }
</style>
