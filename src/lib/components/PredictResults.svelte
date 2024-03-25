<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
	import { Timeframe } from "$lib/data/timeframe";
  import { hoursDifference } from "$lib/utils/datetime"
	import { onDestroy, onMount } from "svelte"

  export let planetIndex
  export let rateSpeed = 0
  export let percentage = 0

  let interval
  let estimatedEnd = null
  let average = 0
  let now = Date.now()
  let stalemate = false

  $: hoursToGo = hoursDifference(estimatedEnd)

  onMount(async () => {
    if (!browser) return

    predictResults()
    interval = setInterval(predictResults, 300000) // Every 5 minutes
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  function calculateTimeTo100(history) {
    average = history.map(i => 100 - (100 / i.max_health * i.current_health)).reduce((a, b) => a + b, 0) / history.length || 0

    const now = Date.now()
    const firstEntryTime = history.length > 0 ? new Date(history[history.length - 1].created_at).getTime() : 0
    const interval = Math.max(1, (now - firstEntryTime) / 1000)

    const rateOfChange = interval > 0 ? (percentage - average) / interval : 0

    const remainingPercentage = rateOfChange > 0 ? 100 - percentage : 0 + percentage
    const timeToFilledInSeconds = remainingPercentage / rateOfChange

    const roundedPercentage = parseFloat(percentage.toFixed(4))
    const roundedAverage = parseFloat(average.toFixed(4))

    const unixTimeToFilled = now + timeToFilledInSeconds * 1000
    const normalizedRateOfChange = rateOfChange * 1000

    estimatedEnd = Math.floor(unixTimeToFilled / 1000)
    stalemate = Math.abs(unixTimeToFilled - now) > (1000 * 60 * 60 * 24 * 30) // 30 days
    rateSpeed = roundedAverage === roundedPercentage || roundedPercentage === 0 || stalemate ?
      0 :
      roundedPercentage > roundedAverage ?
      normalizedRateOfChange : -normalizedRateOfChange
  }

  async function predictResults() {
    if (percentage === 0) {
      average = 0
      estimatedEnd = 0
      return
    }

    const history = await api(`war/history/${planetIndex}?timeframe=${Timeframe.Short}`)
    if (history) calculateTimeTo100(history)
  }
</script>

{#if estimatedEnd === null}
  Predicting results...
{:else if percentage === 0 && average === 0}
  Overwhelming forces await
{:else if stalemate}
  We're in a stalemate
{:else}
  {estimatedEnd > (now / 1000) ? "Liberty" : "Withdrawal"} in
  {#if hoursToGo < 1}
    less than 1 hr
  {:else}
    {#if hoursToGo > 72}
      about {Math.round(hoursToGo / 24)} days
    {:else}
      about {hoursToGo} hrs
    {/if}
  {/if}
{/if}
