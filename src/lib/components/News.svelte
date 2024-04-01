<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
  import { onDestroy, onMount } from "svelte"
	import OwnershipRecord from "./OwnershipRecord.svelte";
	import { humanReadableDatetime } from "$lib/utils/datetime";

  export let days = 0
  export let serverTimestamp = 0

  let loading = true
  let news = []
  let ownership = []
  let interval

  $: daysInSeconds = days * 60 * 60 * 24
  $: from = serverTimestamp - daysInSeconds
  $: parsedMessages = parseMessages(news)

  onMount(() => {
    if (browser) interval = setInterval(get, 120000)
    get()
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  async function get() {
    loading = true

    try {
      let [newsData, ownershipData] = (
        await Promise.allSettled([
          await api(`war/news?from=${from}`),
          await api(`war/ownership`)
        ])
      // @ts-ignore
      ).map(promise => promise.value)

      if (!newsData?.filter(n => n.message)) return

      news = newsData
      ownership = ownershipData
    } catch {
      // ignore
    } finally {
      loading = false
    }
  }

  function parseMessages(news) {
    const fromUnix = Date.now() - (daysInSeconds * 1000)

    const relevantOwnership = ownership.filter(item => {
      const createdAtUnix = new Date(item.created_at).getTime()
      return createdAtUnix > fromUnix
    }).map((i) => ({ ...i, timestamp: new Date(i.created_at).getTime(), type: "ownership" }))

    const parsedNews = news.reverse().map(item => {
      const [title, ...splitMessage] = (item?.message?.split(/[\n\r]+/) || [])
      const message = splitMessage.join("<br><br>")
      const cleanedTitle = title?.replace(/<i=\d+>/g, "").replace(/<\/i>/g, "")

      return { title: cleanedTitle, message, timestamp: Date.now() - serverTimestamp * 1000 + item.published * 1000 }
    })


    const mergedItems = [...relevantOwnership, ...parsedNews].sort((a, b) => b.timestamp - a.timestamp)

    return mergedItems
  }
</script>

{#if news?.length}
  <div class="items">
    {#each parsedMessages as item}
      {#if item.type === "ownership"}
        <OwnershipRecord record={item} showDate />
      {:else}
        <div class="item">
          {#if item.title && item.message}
            <h5>{item.title}</h5>
          {/if}

          <div class="date">{new Date(item.timestamp).toLocaleDateString(undefined, { month: "long", day: "numeric" })}</div>

          {#if item.message || item.title}
            {@html item.message || item.title}

          {:else}
            <em>No message was provided</em>
          {/if}
        </div>
      {/if}
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
    max-width: $text-limit;
  }

  .item {
    padding: $margin * 0.25;
    margin: 0;
    border: 5px solid $bg-dark;
    font-size: 1rem;
    line-height: 1.45em;

    h5 {
      padding: $margin * 0.25;
      margin: $margin * -0.25 $margin * -0.25 $margin * 0.25;
      background: lighten($bg-base, 5%);
      color: $text-color-light;
    }
  }

  .date {
    margin-bottom: $margin * 0.15;
    font-size: 0.75rem;
    line-height: 1em;
    font-style: italic;
  }
</style>
