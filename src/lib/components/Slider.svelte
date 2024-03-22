<script>
	import TinySlider from "svelte-tiny-slider"
	import SliderControl from "$lib/components/SliderControl.svelte"
</script>

<div class="slider">
  <TinySlider gap="1rem">
    <slot />

    <svelte:fragment slot="controls" let:setIndex let:currentIndex let:reachedEnd>
      {#if currentIndex > 0}
        <button class="arrow left" on:click={() => setIndex(currentIndex - 1)}><SliderControl /></button>
      {/if}

      {#if !reachedEnd}
        <button class="arrow right" on:click={() => setIndex(currentIndex + 1)}><SliderControl direction="right" /></button>
      {/if}
    </svelte:fragment>
  </TinySlider>
</div>

<style lang="scss">
  .slider {
    position: relative;
    max-width: $text-limit * 1.5;
    padding: 0 $margin * 0.5;
    margin: $margin * 0.5 $margin * -0.5 0;

    @include breakpoint(md) {
      padding: 0;
      margin: $margin $margin * -0.5 0;
    }

    :global(.slider) {
      overflow: visible;

      @include breakpoint(md) {
        overflow: hidden;
      }
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
		position: absolute;
		left: 0;
		top: 50%;
		width: 3rem;
		height: 3rem;
		padding: 0;
		margin: 0 0 0 $margin * 0.75;
		border: 5px solid $bg-base;
		border-radius: 50%;
		background: $primary;
		transform: translateX(-50%) translateY(-50%);
		z-index: 2;
		cursor: pointer;

    @include breakpoint(md) {
      margin-left: 0
    }

    &:hover {
      background: $white;
    }

    &.right {
      left: auto;
      right: 0;
      margin: 0 $margin * 0.75 0 0;
      transform: translateX(50%) translateY(-50%);

      @include breakpoint(md) {
        margin: 0;
      }
    }

    :global(svg) {
      height: 1.15rem;
      width: 1.15rem;
    }

    :global(svg path) {
      fill: $bg-base;
    }
	}
</style>
