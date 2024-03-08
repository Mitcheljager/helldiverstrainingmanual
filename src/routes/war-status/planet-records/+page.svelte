<script>
  import { factions } from "$lib/data/factions"
	import { planetNames } from "$lib/data/planets"
	import { daysSinceDate } from "$lib/utils/datetime"
	import Map from "$lib/components/Map.svelte"
	import Range from "$lib/components/Range.svelte"
	import { toSlug } from "$lib/utils/route.js";

  export let data

  let endDate = Date.now()
  let daysAgo = 0

  const startOfRecordingDate = new Date("8 March 2024")
  const dayInMilliseconds = 24 * 60 * 60 * 1000

  $: ({ records, info, status } = data)
  $: ({ planetStatus } = (status || {}))
  $: ({ planetInfos } = (info || {}))
  $: groupedRecords = records && groupRecords()
  $: startDate = [...records].reverse()[0].created_at
  $: endDate = Date.now() + (daysAgo * dayInMilliseconds)
  $: numberOfDays = daysSinceDate(startDate)
  $: planetStatusInitialOwner = planetStatus.map(p => ({ ...p, owner: planetInfos[p.index].initialOwner }))
  $: planetStatusByDate = getPlanetStatusBasedOnDate(endDate)

  function getPlanetStatusBasedOnDate(endDate) {
    const result = planetStatusInitialOwner.map(planet => {
      const newPlanet = { ...planet }
      const latestRecordToDate = records.find(record => {
        return record.planet_index === planet.index && new Date(record.created_at) < new Date(endDate)
      })

      if (latestRecordToDate) {
        newPlanet.owner = latestRecordToDate.current_owner
      }

      return newPlanet
    })

    return result
  }

  function groupRecords() {
    const groupedRecords = []

    records.forEach(record => {
      const recordDate = new Date(record.created_at)
      recordDate.setHours(0, 0, 0, 0)

      const existingGroup = groupedRecords.find(group => group.datetime.getTime() === recordDate.getTime())

      if (existingGroup) existingGroup.records.push(record)
      else groupedRecords.push({ datetime: recordDate, records: [record] })
    })

    return groupedRecords
  }
</script>

<Map planets={planetInfos} status={planetStatusByDate} />

<h3 class="mb-1/4 mt-1/2">View by date</h3>

<Range min={numberOfDays * -1 - 1} max={0} bind:value={daysAgo}>
  {#if new Date(endDate) < startOfRecordingDate}
    <em>Pre recordings</em>
  {:else}
    {new Date(endDate).toLocaleDateString(undefined, { month: "long", day: "numeric" })}
  {/if}
</Range>

<div class="mt-1 mb-1">
  <em>Data recording started {startOfRecordingDate.toLocaleDateString(undefined, { month: "long", day: "numeric" })}</em>
</div>

<div class="items">
  {#each groupedRecords as { datetime, records }}
    <h3 class="mb-0">
      {#if new Date(datetime) < startOfRecordingDate}
        Initial recording <br>
      {:else}
        {new Date(datetime).toLocaleDateString(undefined, { month: "long", day: "numeric" })} <br>
      {/if}
    </h3>

    {#each records as record}

      <div class="item">
        <strong>{planetNames[record.planet_index]}</strong>
        was taken by <strong class={toSlug(factions[record.current_owner])}>{factions[record.current_owner]}</strong>,
        previously owned by <strong class={toSlug(factions[record.previous_owner])}>{factions[record.previous_owner]}</strong>
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  strong {
    color: $white;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
    margin-top: $margin * 1;
  }

  .item {
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%);
  }

  @each $label, $color in $faction-colors {
    .#{$label} {
      color: #{$color};
    }
  }
</style>
