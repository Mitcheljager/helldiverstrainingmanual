<script>
  import { toSlug } from "$lib/utils/route"

  export let environmental
</script>

<div class="environmental">
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
    height: 2rem;
    width: 2rem;
    padding: $margin * 0.15;
    border-radius: 50%;
    background: $white;

    @include breakpoint(sm) {
      height: 3rem;
      width: 3rem;
    }

    img {
      width: 100%;
      height: auto;
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

    .environmental:hover & {
      display: block;
    }

    strong {
      color: $white;
    }
  }
</style>
