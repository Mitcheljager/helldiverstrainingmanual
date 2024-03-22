<script>
	import Hero from "$lib/components/Hero.svelte"
	import Slider from "$lib/components/Slider.svelte"
</script>

<Hero basepath="/images/content" filename="super-samples-cover">
  Where to find Super Samples

  <div slot="content" class="cover-image">
    <img src="/images/content/super-samples-icon.png" alt="Super Samples" />
  </div>
</Hero>

<p>The elusive treasures of the battlefield, Super Samples, coveted by Helldivers far and wide. These shimmering orbs of Super Uranium are the stuff of legend, appearing only on the most perilous of missions, where danger lurks around every corner and bravery knows no bounds.</p>
<p>To claim these rare prizes, you must embark on a mission with a hazard class of 7 or above, venturing into the heart of danger where only the boldest dare to tread. Seek out the telltale signs—a towering fist-shaped rock adorned with silvery lines. Around its base, the Super Samples await, floating ethereally.</p>
<p>These samples can be found anywhere on a given mission, but our research has confirmed you only need to keep your eyes out for a single pillar. Here, gathered in one place, lie all the Super Samples that the map has to offer, waiting to be claimed by the intrepid souls who dare to seek them.</p>
<p>If you are on the hunt for these bad boys choose your missions wisely, selecting worlds with clear visibility and avoiding the treacherous jungles and sand planets where visibility is obscured. These pillars of goodness can be spotted from a mile away, that is if you can see a mile away.</p>

<Slider>
  {#each { length: 8 } as _, index}
    <img class="slide" loading="lazy" src="/images/content/super-samples/super-samples-{index + 1}.jpg" height="850" width="782" alt="Super Sample example {index + 1}" />
  {/each}
</Slider>

<h3 class="mt-1 mb-1/2">Don't be deceived, for another pillar was made</h3>

<p>
  Beware, Helldivers, for not all pillars are alike. The bugs seem particularly keen to get their slimy claws on these sugar cubes. As such you might find pillars that have been fully depleted of Super Uranium. These can be identified by the gooey mess these foul creatures have left. Yet another reason to despise these bastards.<br>
  On the Automaton front you might find similarly depleted pillars that have been stripped of resources by previous research teams who were not able to properly dispose of their left overs. You can identify these by various types of trash around its base.
</p>

<p>But fear not, as another pillar can still be found.</p>

<Slider>
  {#each { length: 4 } as _, index}
    <img class="slide" loading="lazy" src="/images/content/super-samples/depleted-super-samples-{index + 1}.jpg" height="850" width="782" alt="Depleted Super Sample example {index + 1}" />
  {/each}
</Slider>

<style lang="scss">
  .cover-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      width: auto;
    }
  }

  .slide {
    max-width: clamp(250px, 50vw, 350px);
    height: auto;
    border: 5px solid $primary;
  }
</style>
