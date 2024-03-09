<script>
  import { toSlug } from "$lib/utils/route"

  export let environmental
  export let full = false
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="environmental" class:full on:click|preventDefault>
  <img src="/images/environmentals/{toSlug(environmental.name)}.png" alt={environmental.name} />

  <div class="tooltip">
    <strong>{environmental.name}</strong><br>
    {environmental.description}
  </div>
</div>

<style lang="scss">
  .environmental {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.full {
      justify-content: flex-start;
      gap: $margin * 0.25;
    }

    img {
      width: 100%;
      height: auto;
      height: 2rem;
      width: 2rem;
      padding: $margin * 0.15;
      border-radius: 50%;
      background: $white;

      @include breakpoint(sm) {
        height: 3rem;
        width: 3rem;
      }
    }
  }

  .tooltip {
    display: none;
    position: absolute;
    right: 0;
    bottom: $margin * -0.25;
    padding: $margin * 0.25;
    width: min(20rem, 60vw);
    transform: translateY(100%);
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%);
    box-shadow: 0 0.25rem 1rem rgba($black, 0.5), 0 0.5rem 2rem rgba($black, 0.5);
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.45em;
    z-index: 5;

    .full & {
      display: block;
      position: relative;
      bottom: 0;
      padding: 0;
      transform: none;
      width: auto;
      box-shadow: none;
      border: 0;
      background: transparent;
    }

    .environmental:hover & {
      display: block;
    }

    strong {
      color: $white;
    }
  }
</style>
