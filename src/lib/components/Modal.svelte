<script>
	import { createEventDispatcher } from "svelte"
	import { fade, scale } from "svelte/transition"

  const dispatch = createEventDispatcher()
</script>

<svelte:window on:keydown={({ key }) => { if (key === "Escape") dispatch("close") }} />

<div class="modal" transition:fade={{ duration: 200 }}>
  <div class="dialog" transition:scale={{ start: 0.85, duration: 200 }}>
    <slot />
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="backdrop" on:click={() => dispatch("close")} />
</div>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: $margin * 2 $margin;
    background: rgba($black, 0.75);
    backdrop-filter: blur(2rem);
    overflow-y: auto;
    z-index: 200;
  }

  .dialog {
    position: relative;
    margin: 0 auto;
    padding: $margin;
    border: 5px solid $bg-dark;
    box-shadow: 0 2rem 4rem $black, 0 4rem 8rem $black;
    max-width: $text-limit;
    background: $bg-base;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
</style>
