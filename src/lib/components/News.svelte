<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
  import { onDestroy, onMount } from "svelte"

  export let from = 0

  let loading = true
  let news = []
  let interval

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
      const data = await api(`war/news?from=${from}`)

      if (!data?.filter(n => n.message)) return

      news = data
    } catch {
      // ignore
    } finally {
      loading = false
    }
  }

  function parseMessages(news) {
    return news.reverse().map(item => {
      const [title, ...splitMessage] = (item?.message?.split(/[\n\r]+/) || [])
      const message = splitMessage.join("<br><br>")
      const cleanedTitle = title?.replace(/<i=\d+>/g, "").replace(/<\/i>/g, "")

      return { title: cleanedTitle, message }
    })
  }
</script>

{#if news?.length}
  <div class="items">
    {#each parsedMessages as { title, message }}
      <div class="item">
        {#if title && message}
          <h5>{title}</h5>
        {/if}

        {#if message || title}
          {@html message || title}
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

    h5 {
      padding: $margin * 0.25;
      margin: $margin * -0.25 $margin * -0.25 $margin * 0.25;
      background: lighten($bg-base, 5%);
      color: $text-color-light;
    }
  }
</style>
