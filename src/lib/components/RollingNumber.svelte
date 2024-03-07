<script>
	import RollingNumberDigit from "$lib/components/RollingNumberDigit.svelte"

  export let number = ""

  $: digits = number.toString().split("")
</script>

<div class="digits">
  {#each digits as digit, i (digits.length - i)}
    <RollingNumberDigit {digit} />
  {/each}
</div>

<style lang="scss">
  .digits {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
</style>
