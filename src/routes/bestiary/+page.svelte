<script>
	import Hero from "$lib/components/Hero.svelte"
	import { factions } from "$lib/data/factions"
	import { toSlug } from "$lib/utils/route"
</script>

<svelte:head>
  <title>Bestiary | Helldivers Training Manual</title>
</svelte:head>

<Hero basepath="/images/content" filename="bestiary">
  Bestiary: A myriad of foes and how to beat them
</Hero>

<p>Welcome, brave Helldivers, to the bestiary that holds the secrets to the myriad of foes you will encounter in the unrelenting war against the menace that threatens our Democary. As you traverse the treacherous battlegrounds of distant planets, it is essential to familiarize yourself with the diverse array of adversaries that await you. From the relentless onslaught of the Terminid hordes to the cunning strategies of the Automaton forces, knowledge is your greatest ally in the fight for humanity's survival.</p>
<p>Within these pages, you will find detailed descriptions of each Terminid faction and enemy type, accompanied by invaluable insights into their appearance, behavior, and tactics. Whether you face the razor-sharp claws of the Warrior caste, the elusive ambushes of the Stalkers, or the towering might of the Bile Titans, this bestiary will equip you with the information needed to outmaneuver and overcome any threat. Armed with this knowledge, you will stand as a stalwart defender of Super Earth, ready to confront the ever-present danger lurking in the depths of the cosmos. Prepare yourselves, Helldivers, for the ultimate battle against the enemy scourge..</p>

<h2 class="mt-1 mb-1/2">Factions</h2>

<div class="items">
  {#each Object.values(factions).slice(1, factions.length) as faction}
    <a href="/bestiary/{toSlug(faction)}" class="item">
      <h3>{faction}</h3>

      <picture>
        <source type="image/webp" srcset="/images/content/webp/{toSlug(faction) + ".webp"}"  />
        <source type="image/jpg" srcset="/images/content/{toSlug(faction) + ".jpg"}">
        <img src="/images/content/{toSlug(faction)}.jpg" alt={faction} width="1200" height="675">
      </picture>
    </a>
  {/each}
</div>

<style lang="scss">
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: $text-limit;
    gap: $margin * 0.5;
  }

  .item {
    position: relative;
    box-shadow: 0 0.5rem 1rem rgba($black, 0.5), 0 1rem 2rem rgba($black, 0.5);

    &:hover {
      filter: brightness(1.1);
      box-shadow: 0 0 0 3px $white;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      background: $bg-dark;
    }

    h3 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: $margin * 0.25;
      margin: 0;
      background: linear-gradient(to bottom, transparent, rgba($black, 0.5));
    }
  }
</style>
