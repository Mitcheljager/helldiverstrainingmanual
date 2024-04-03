<script>
  import { titles } from "$lib/data/titles"
	import { toSlug } from "$lib/utils/route"
</script>

<svelte:head>
  <title>Titles | Helldivers Training Manual</title>
</svelte:head>

<h1>Titles</h1>

<p>As you march forth into the heart of battle, know that your valor and dedication shall be recognized. Through your tireless efforts and unwavering commitment to the cause of Super Earth, you shall ascend the ranks and earn prestigious titles befitting your heroic deeds.</p>

<p>From the humble beginnings of a Cadet, you shall prove your unwavering commitment to the cause, proving your mettle on the battlefield and demonstrating your prowess as a true defender of humanity. Each title, earned through feats of bravery and skill, marks another milestone in your journey to greatness. Let the galaxy tremble at the might of your name!</p>

<div class="titles mt-1">
  {#each titles as { name, requirement, noImage }}
    <div class="title">
      <div class="icon">
        {#if !noImage}
          <img src="/images/titles/{toSlug(name)}.svg" alt="" />
        {/if}
      </div>

      <div>
        <div class="name">{name}</div>
        <p>{requirement}</p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .titles {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
  }

  .title {
    display: flex;
    align-items: center;
    gap: $margin * 0.25;
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%) linear-gradient(120deg, rgba($bg-dark, 0.2), transparent 60%);

    p {
      margin: 0;

      :global(strong) {
        color: $text-color-light;
      }
    }
  }

  .name {
    font-family: $font-family-brand;
    font-size: 1.35rem;
    color: $white;
  }

  .icon {
    width: 5rem;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
