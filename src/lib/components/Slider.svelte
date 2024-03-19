<script>
	import TinySlider from "svelte-tiny-slider";
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
    margin: $margin * 0.5 0 0;

    @include breakpoint(md) {
      margin: $margin $margin * -0.5 0;
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
		margin: 0;
		border: 0;
		border-radius: 50%;
		background: $white;
		transform: translateX(-50%) translateY(-50%);
		opacity: 0.75;
		z-index: 2;
		cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &.right {
      left: auto;
      right: 0;
      transform: translateX(50%) translateY(-50%);
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
