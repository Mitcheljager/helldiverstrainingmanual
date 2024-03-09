<script>
	import { daysSinceDate } from "$lib/utils/datetime"
	import Map from "$lib/components/Map.svelte"
	import Range from "$lib/components/Range.svelte"
	import Hero from "$lib/components/Hero.svelte"
	import OwnershipRecord from "$lib/components/OwnershipRecord.svelte"

  export let data

  let endDate = Date.now()
  let daysAgo = 0

  const startOfRecordingDate = new Date("7 March 2024")
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

<svelte:head>
  <title>Planetary Ownership Records | Helldivers Training Manual</title>
</svelte:head>

<Hero src="/images/content/planetary-records.jpg">
  Planetary Ownership Records
</Hero>

<p class="mb-1">This archive serves as a chronicle of the ever-shifting control over the planets, documenting the ebb and flow of the ongoing conflict. Explore the records to witness the fierce battles and strategic maneuvers that determine the fate of each world in this relentless tug of war. May these records serve as a testament to the bravery and sacrifice of all those who fight for Democracy and Liberty in the unforgiving depths of space.</p>

<Map planets={planetInfos} status={planetStatusByDate} allowControls={false}>
  <div class="date-selector" slot="tray">
    <h5 class="m-0">View by date</h5>

    <Range min={numberOfDays * -1 - 1} max={0} bind:value={daysAgo}>
      {#if new Date(endDate) < startOfRecordingDate}
        <em>Pre recordings</em>
      {:else}
        {new Date(endDate).toLocaleDateString(undefined, { month: "long", day: "numeric" })}
      {/if}
    </Range>
  </div>
</Map>

<div class="mt-1">
  <em>Data recording started {startOfRecordingDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</em>
</div>

<div class="items">
  {#each groupedRecords as { datetime, records }}
    <h3 class="mt-1/4 mb-0">
      {#if new Date(datetime - dayInMilliseconds) < startOfRecordingDate}
        Initial recording <br>
      {:else}
        {new Date(datetime).toLocaleDateString(undefined, { month: "long", day: "numeric" })} <br>
      {/if}
    </h3>

    {#each records as record}
      <OwnershipRecord {record} />
    {/each}
  {/each}
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
    margin-top: $margin * 0.75;
  }

  .date-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $margin * 0.15;
    width: 100%;
  }
</style>
