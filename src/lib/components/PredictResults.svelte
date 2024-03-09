<script>
	import { browser } from "$app/environment";
	import { fetchHistory } from "$lib/api/history";
  import { hoursDifference } from "$lib/utils/datetime"
	import { onMount } from "svelte"

  export let planetIndex
  export let rateDirection = 0
  export let percentage = 0

  let estimatedEnd = null
  let average = 0
  let now = Date.now()

  $: hoursToGo = hoursDifference(estimatedEnd)

  onMount(async () => {
    if (!browser) return

    const history = await fetchHistory(planetIndex, { limit: 2 })

    calculateTimeTo100(history)
  })

  function calculateTimeTo100(history) {
    console.log(history)
    average = history.map(i => 100 - (100 / i.max_health * i.current_health)).reduce((a, b) => a + b) / history.length

    const firstEntryTime = history.length > 0 ? new Date(history[history.length - 1].created_at).getTime() : Date.now()
    const interval = Math.max(1, (Date.now() - firstEntryTime) / 1000)

    let rateOfChange = interval > 0 ? (percentage - average) / interval : 0
    rateOfChange = 10000
    const remainingPercentage = 100 - percentage
    const timeToFilledInSeconds = remainingPercentage / rateOfChange

    const currentTimeInMilliseconds = Date.now()
    const timeToFilledInMilliseconds = currentTimeInMilliseconds + timeToFilledInSeconds * 1000

    estimatedEnd = timeToFilledInMilliseconds > 9e+8 ? Infinity : Math.floor(timeToFilledInMilliseconds / 1000)

    const roundedPercentage = parseFloat(percentage.toFixed(4))
    const roundedAverage = parseFloat(average.toFixed(4))

    rateDirection = roundedAverage === roundedPercentage ? 0 : roundedPercentage > roundedAverage ? 1 : -1
}
</script>

{#if estimatedEnd === null}
  Predicting results...
{:else if percentage === 0 && average === 0}
  Overwhelming forces await
{:else if estimatedEnd === Infinity}
  We're in a stalemate
{:else}
  {estimatedEnd > (now / 1000) ? "Victory" : "Loss"} in
  {#if hoursToGo < 1}
    less than 1 hr
  {:else}
    about {hoursDifference(estimatedEnd)} hrs
  {/if}
{/if}
