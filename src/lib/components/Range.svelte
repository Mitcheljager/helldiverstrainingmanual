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
    gap: $margin * 0.15;
    width: 100%;
    max-width: $text-limit * 0.5;
    color: $white;
  }

  input {
    appearance: none;
    width: 100%;
    margin: 0;
    background: transparent;
    cursor: pointer;
    color: inherit;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      background-color: currentColor;
      border-radius: 0;
      height: 0.5rem;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      margin-top: -0.5rem;
      background-color: currentColor;
      height: 1.5rem;
      width: 1rem;
    }

    &:focus::-webkit-slider-thumb {
      border: 1px solid currentColor;
      outline: 3px solid currentColor;
      outline-offset: 0.125rem;
    }

    &::-moz-range-track {
      background-color: currentColor;
      border-radius: 0;
      height: 0.5rem;
    }

    &::-moz-range-thumb {
      border: none;
      border-radius: 0;
      background-color: currentColor;
      height: 1.5rem;
      width: 1rem;
    }

    &:focus::-moz-range-thumb {
      border: 1px solid currentColor;
      outline: 3px solid currentColor;
      outline-offset: 0.2rem;
    }
  }
</style>
