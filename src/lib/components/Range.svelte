<script>
  export let value
</script>

<div class="input">
  <input type="range" bind:value={value} {...$$restProps} />

  <slot />
</div>

<style lang="scss">
  .input {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit * 0.5;
  }

  input {
    appearance: none;
    width: 100%;
    margin: 0;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      background-color: lighten($bg-base, 10%);
      border-radius: 0;
      height: 0.5rem;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      margin-top: -0.5rem;
      background-color: $bg-dark;
      height: 1.5rem;
      width: 1rem;
    }

    &:focus::-webkit-slider-thumb {
      border: 1px solid lighten($bg-base, 10%);
      outline: 3px solid lighten($bg-base, 10%);
      outline-offset: 0.125rem;
    }

    &::-moz-range-track {
      background-color: lighten($bg-base, 10%);
      border-radius: 0;
      height: 0.5rem;
    }

    &::-moz-range-thumb {
      border: none;
      border-radius: 0;
      background-color: $bg-dark;
      height: 1.5rem;
      width: 1rem;
    }

    &:focus::-moz-range-thumb {
      border: 1px solid lighten($bg-base, 10%);
      outline: 3px solid lighten($bg-base, 10%);
      outline-offset: 0.2rem;
    }
  }
</style>
