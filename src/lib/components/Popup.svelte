<script>
  import { outside } from "$lib/actions/outside"
	import { fade } from "svelte/transition"

  let active = false

  function toggle() {
    active = !active
  }
</script>

<div class="popup" use:outside on:close={() => active = false}>
  <slot {toggle} />

  {#if active}
    <div class="dropdown" transition:fade={{ duration: 100 }}>
      <slot name="content" />
    </div>
  {/if}
</div>

<style lang="scss">
  .popup {
    position: relative;
  }

  .dropdown {
    position: absolute;
    left: 0;
    bottom: auto;
    top: calc($margin * -0.25 - 5px);
    transform: translateY(-100%);
    padding: $margin * 0.25;
    width: auto;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%);
    box-shadow: 0 0.5rem 1rem rgba($black, 0.5), 0 1.5rem 2.5rem rgba($black, 0.75);
    z-index: 10;
  }
</style>
