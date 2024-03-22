<script>
	import TinySlider from "svelte-tiny-slider"
	import SliderControl from "$lib/components/SliderControl.svelte"
	import { fade } from "svelte/transition"

  let reachedEnd
  let currentScrollPosition
</script>

<div class="slider" class:border-right={!reachedEnd} class:border-left={currentScrollPosition > 0}>
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
    margin: $margin * 0.5 $margin * -0.5 0;
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    transition: border 200ms;

    @include breakpoint(md) {
      padding: 0;
      margin: $margin $margin * -0.5 0;
    }

    &.border-right {
      border-right: 5px solid $primary;
    }

    &.border-left {
      border-left: 5px solid $primary;
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
		border: 3px solid $bg-base;
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
