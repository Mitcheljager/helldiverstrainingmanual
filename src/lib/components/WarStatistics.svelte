<script>
	import RollingNumber from "$lib/components/RollingNumber.svelte"
	import { secondsToYears } from "$lib/utils/datetime"

  export let stats = {}

  $: items = [{
    text: "Years spend in active duty",
    value: secondsToYears(stats.missionTime).toLocaleString()
  }, {
    text: "Missions liberated",
    value: stats.missionsWon?.toLocaleString()
  }, {
    text: "Missions lost",
    value: stats.missionsLost?.toLocaleString()
  }, {
    text: "Success rate",
    value: stats.missionSuccessRate + "%"
  }, {
    divider: true
  }, {
    text: "Terminids squashed",
    value: stats.bugKills?.toLocaleString()
  }, {
    text: "Automatons scrapped",
    value: stats.automatonKills?.toLocaleString()
  }, {
    text: "Illuminates eradicated",
    value: stats.illuminateKills?.toLocaleString()
  }, {
    text: "Bullets fired",
    value: stats.bulletsFired?.toLocaleString()
  }, {
    text: "Bullets hit",
    value: stats.bulletsHit?.toLocaleString()
  }, {
    text: "Weapon accuracy",
    value: stats.accurracy + "%"
  }, {
    divider: true,
  }, {
    text: "Lives given to Democracy",
    value: stats.deaths?.toLocaleString()
  }, {
    text: "Accidentals",
    value: stats.friendlies?.toLocaleString()
  }]
</script>

<div class="items">
  {#each items as { text, value, divider }}
    {#if divider}
      <div class="divider" />
    {:else if value}
      <div class="item">
        <p class="text">{text}</p>
        <div class="value"><RollingNumber number={value} /></div>
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.15;
    padding: $margin * 0.4 0;
    border-top: 2px solid darken($bg-dark, 15%);
    border-bottom: 2px solid darken($bg-dark, 15%);
    max-width: $text-limit;
  }

  .item {
    @include breakpoint(xs) {
      display: grid;
      grid-template-columns: clamp(12rem, 20vw, 15rem) auto;
      align-items: center;
    }

    &:hover {
      background: lighten($bg-base, 5%);
    }
  }

  .text {
    margin: 0;
    font-size: 1.35rem;
    font-family: $font-family-brand;
    color: $white;

    @include breakpoint(xs) {
      font-size: clamp(1rem, 1.75vw, 1.35rem);
    }
  }

  .value {
    --line-height: 16px;
    font-family: $font-family-alt;

    @include breakpoint(xs) {
      --line-height: clamp(14px, 1.5vw, 18px);
    }
  }

  .divider {
    margin: $margin * 0.25 0;
    border-top: 2px solid darken($bg-dark, 15%);
  }
</style>
