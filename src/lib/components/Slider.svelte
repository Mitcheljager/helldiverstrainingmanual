<script>
	import TinySlider from "svelte-tiny-slider"
	import SliderControl from "$lib/components/SliderControl.svelte"
	import { fade } from "svelte/transition"

  export let small = false
  export let height = 350

  let reachedEnd
  let currentScrollPosition
</script>

<div class="slider" class:small style:--height="{height}px">
  <TinySlider gap="1rem" bind:reachedEnd bind:currentScrollPosition>
    <slot />

    <svelte:fragment slot="controls" let:setIndex let:currentIndex>
      {#if currentIndex > 0}
        <button class="arrow left" transition:fade={{ duration: 100 }} on:click={() => setIndex(currentIndex - 1)}><SliderControl /></button>
      {/if}

      {#if !reachedEnd}
        <button class="arrow right" transition:fade={{ duration: 100 }} on:click={() => setIndex(currentIndex + 1)}><SliderControl direction="right" /></button>
      {/if}
    </svelte:fragment>
  </TinySlider>
</div>

<style lang="scss">
  .slider {
    position: relative;
    max-width: $text-limit * 1.5;
    padding: 0 $margin * 0.5;
    margin: $margin $margin * -0.5 0;
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    transition: border 200ms;

    @include breakpoint(md) {
      padding: 0;
      margin: $margin $margin * -0.5 0;
    }

    &.small {
      max-width: $text-limit;

      @include breakpoint(md) {
        margin: 0;
      }
    }

    :global(.slider) {
      overflow: visible;

      @include breakpoint(md) {
        overflow: hidden;
      }
    }

    :global(img) {
      height: min(100vw, 200px);
      width: auto;
      background: lighten($bg-base, 5%);

      @include breakpoint(md) {
        height: clamp(200px, 30vw, var(--height));
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
		margin: 0;
    border: 0;
		background: $bg-base;
		transform: translateY(-50%);
		z-index: 2;
    color: $white;
		cursor: pointer;

    @include breakpoint(md) {
      transform: translateX(-100%) translateY(-50%);
    }

    &:hover {
      background: lighten($bg-base, 5%);
    }

    &.right {
      left: auto;
      right: 0;
      margin: 0;

      @include breakpoint(md) {
        transform: translateX(100%) translateY(-50%);
      }
    }

    :global(svg) {
      height: 1.75rem;
      width: 1.75rem;
    }
	}
</style>
