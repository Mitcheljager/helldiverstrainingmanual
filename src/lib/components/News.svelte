<script>
  import { onDestroy, onMount } from "svelte"

  export let from = 0

  let loading = true
  let news = []
  let interval

  onMount(() => {
    interval = setInterval(get, 120000)
    get()
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  async function get() {
    loading = true

    try {
      const data = await fetch(`/api/v1/war/news?from=${from}`)

      if (!data) throw new Error("No data retrieved from news fetch")

      const response = await data.json()
      if (!response?.filter(n => n.message)) return

      news = response
    } catch {
      // ignore
    } finally {
      loading = false
    }
  }
</script>

{#if news?.length}
  <div class="items">
    {#each [...news].reverse() as { message }}
      <div class="item">
        {#if message}
          {message}
        {:else}
          <em>No message was provided</em>
        {/if}
      </div>
    {/each}
  </div>
{:else if loading}
  Loading...
{:else}
  <em>Failed to retrieve global events</em>
{/if}

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
  }

  .item {
    max-width: $text-limit;
    padding: $margin * 0.25;
    margin: 0;
    border: 5px solid $bg-dark;
    font-size: 1rem;
    line-height: 1.45em;
  }
</style>
