<script>
  import { boosters } from "$lib/data/boosters"
	import { toSlug } from "$lib/utils/route"

  function groupByUnlock() {
    const groupedByUnlock = [{}]
    groupedByUnlock.pop()

    for (const index in boosters) {
      const booster = boosters[index]
      const { unlock } = booster

      if (!groupedByUnlock.find(g => g.group === unlock)) groupedByUnlock.push({ group: unlock, boosters: [] })
      groupedByUnlock.find(g => g.group === unlock)?.boosters.push(booster)
    }

    return groupedByUnlock
  }
</script>

<svelte:head>
  <title>Boosters | Helldivers Training Manual</title>
</svelte:head>

<h1>Boosters</h1>

<p>Boosters are the secret sauce to success in the Helldivers' arsenal, enhancing your combat capabilities to ensure victory against the relentless forces that stand against Democracy. These nifty gadgets provide various buffs to your entire squad, giving you the edge you need to crush the enemy beneath your boots. Each Helldivers gets to pick and choose their booster, so coordination is key! Discuss with your squadmates to ensure everyone's equipped with the right Boosters for the job. And if you're running solo or in a ragtag group, unlock a variety of Boosters to have options aplenty when squad coordination isn't an option.</p>

<p>It's all about morale. A well organized squad is a well performing squad. Boosters are that little morale <em>boost</em> that could be the extra push you need to ensure the safety of Super Earth.</p>

<div class="boosters">
  {#each groupByUnlock() as { group, boosters }}
    <h3>{group}</h3>

    {#each boosters as { name, description, tidbit, cost }}
      <div class="booster">
        <div class="header">
          <div class="icon">
            <img src="/images/boosters/{toSlug(name)}.svg" alt="" />
          </div>

          <div>
            <div class="name">{name}</div>
            <div class="cost">
              {cost.individual} Medals

              <span>/ page {cost.page} / minimum {cost.total} medals</span>
            </div>
          </div>
        </div>

        <blockquote>{description}</blockquote>

        {#if tidbit}
          <p>{@html tidbit}</p>
        {/if}
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  h3 {
    margin: $margin 0 0;
  }

  blockquote {
    padding: $margin * 0.25;
    margin: $margin * 0.15 0;

    @include breakpoint(xs) {
      margin-bottom: $margin * 0.5;
    }
  }

  .boosters {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
  }

  .booster {
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%) linear-gradient(120deg, rgba($primary, 0.1), transparent 50%);

    @include breakpoint(xs) {
      padding: $margin * 0.5;
    }

    p {
      margin: 0;

      :global(strong) {
        color: $text-color-light;
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    gap: $margin * 0.25;
    margin-bottom: $margin * 0.25;

    @include breakpoint(xs) {
      gap: $margin * 0.5;
      margin-bottom: $margin * 0.5;
    }
  }

  .name {
    font-family: $font-family-brand;
    font-size: 1.35rem;
    color: $white;
  }

  .cost {
    color: $primary;
    font-family: $font-family-brand;
    font-size: 1.25rem;
    line-height: 1em;

    span {
      color: $text-color-dark;
      font-size: 1rem;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    padding: $margin * 0.15;
    background: $primary;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
</style>
