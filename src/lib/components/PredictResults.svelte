<script>
	import { browser } from "$app/environment";
	import { fetchHistory } from "$lib/api/history";
  import { hoursDifference } from "$lib/utils/datetime"
	import { onDestroy, onMount } from "svelte"

  export let planetIndex
  export let rateDirection = 0
  export let percentage = 0

  let interval
  let estimatedEnd = null
  let average = 0
  let now = Date.now()

  $: hoursToGo = hoursDifference(estimatedEnd)

  onMount(async () => {
    if (!browser) return

    predictResults()
    interval = setInterval(predictResults, 300_000) // Every 5 minutes
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  function calculateTimeTo100(history) {
    average = history.map(i => 100 - (100 / i.max_health * i.current_health)).reduce((a, b) => a + b) / history.length

    const firstEntryTime = history.length > 0 ? new Date(history[history.length - 1].created_at).getTime() : Date.now()
    const interval = Math.max(1, (Date.now() - firstEntryTime) / 1000)

    const rateOfChange = interval > 0 ? (percentage - average) / interval : 0

    const remainingPercentage = 100 - percentage
    const timeToFilledInSeconds = remainingPercentage / rateOfChange

    const currentTimeInMilliseconds = Date.now()
    const timeToFilledInMilliseconds = currentTimeInMilliseconds + timeToFilledInSeconds * 1000

    const roundedPercentage = parseFloat(percentage.toFixed(4))
    const roundedAverage = parseFloat(average.toFixed(4))

    estimatedEnd = Math.floor(timeToFilledInMilliseconds / 1000)
    rateDirection = roundedAverage === roundedPercentage ? 0 : roundedPercentage > roundedAverage ? 1 : -1
  }

  async function predictResults() {
    const history = await fetchHistory(planetIndex, { limit: 2 })
    calculateTimeTo100(history)
  }
</script>

{#if estimatedEnd === null}
  Predicting results...
{:else if percentage === 0 && average === 0}
  Overwhelming forces await
{:else if estimatedEnd === Infinity || estimatedEnd > 9e+9}
  We're in a stalemate
{:else}
  {estimatedEnd > (now / 1000) ? "Liberty" : "Rout"} in
  {#if hoursToGo < 1}
    less than 1 hr
  {:else}
    {#if hoursDifference(estimatedEnd) > 72}
      about {Math.round(hoursDifference(estimatedEnd) / 24)} days
    {:else}
      about {hoursDifference(estimatedEnd)} hrs
    {/if}
  {/if}
{/if}
