<script>
	export let digit = ""
	export let lineHeight = 12
</script>

<div class="wrapper" style:--line-height="{lineHeight}px" style:--offset="{-digit * lineHeight}px">
  {#if isNaN(parseInt(digit))}
    {digit}
  {:else}
    {#each { length: 10 } as _, i}
      <div class="digit" class:active={i.toString() === digit}>{i}</div>
    {/each}
  {/if}
</div>

<style lang="scss">
  .wrapper {
		display: inline-flex;
		flex-direction: column;
		height: var(--line-height);
		transform: translateY(var(--offset));
		transition: transform 500ms;
		font-size: var(--line-height);
		line-height: var(--line-height);
		text-align: center;
	}

	.digit {
    opacity: 0.2;
		transition: opacity 200ms;

    &.active {
      opacity: 1
    }
	}
</style>
