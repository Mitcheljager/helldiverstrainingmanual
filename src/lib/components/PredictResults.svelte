<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
	import { Timeframe } from "$lib/data/timeframe";
  import { hoursDifference } from "$lib/utils/datetime"
	import { onDestroy, onMount } from "svelte"

  export let planetIndex
  export let ratePerHour = 0
  export let percentage = 0

  let interval
  let loading = true
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

    const unixTimeToFilled = now + timeToFilledInSeconds * 1000

    estimatedEnd = Math.floor(unixTimeToFilled / 1000)
    stalemate = Math.abs(unixTimeToFilled - now) > (1000 * 60 * 60 * 24 * 30) // 30 days
    ratePerHour = stalemate ? 0 : rateOfChange * 60 * 60
  }

  async function predictResults() {
    if (percentage === 0) {
      average = 0
      estimatedEnd = 0
      return
    }

    loading = true

    try {
      const history = await api(`war/history/${planetIndex}?timeframe=${Timeframe.Short}`)
      if (history) calculateTimeTo100(history)
    } finally {
      loading = false
    }
  }
</script>

<span>
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

  {#if !loading}
    <div class="tooltip">
      {#if stalemate}
        We're not making any meaningful progress
      {:else}
        We're {ratePerHour > 0 ? "gaining" : "losing" } <mark>{Math.abs(ratePerHour).toFixed(4)}%</mark> per hour
      {/if}
    </div>
  {/if}
</span>

<style lang="scss">
  span {
    position: relative;
  }

  mark {
    background: transparent;
    color: $white;
  }

  .tooltip {
    display: none;
    position: absolute;
    bottom: $margin * -0.075;
    transform: translateY(100%);
    padding: $margin * 0.15;
    border: 2px solid $bg-dark;
    background: lighten($bg-base, 5%);
    box-shadow: 0 0 0.5rem $black, 0 0 1rem $black;
    z-index: 5;
    color: $text-color;
    font-size: 1rem;
    line-height: 1.15em;
    font-family: $font-family-brand;
    font-weight: normal;

    @include breakpoint(sm) {
      white-space: nowrap;
    }

    span:hover & {
      display: block;
    }
  }
</style>
