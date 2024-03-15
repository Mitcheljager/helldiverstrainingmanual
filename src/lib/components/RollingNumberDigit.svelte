<script>
	export let digit = ""
</script>

<div class="wrapper" style:--digit={digit}>
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
		height: var(--line-height, 12px);
		transform: translateY(calc((var(--digit) * -1) * var(--line-height, 12px)));
		transition: transform 500ms;
		font-size: var(--line-height, 12px);
		line-height: var(--line-height, 12px);
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
