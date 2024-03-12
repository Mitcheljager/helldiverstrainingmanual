<script>
	import Hero from "$lib/components/Hero.svelte"
</script>

<Hero basepath="/images/content" filename="introduction">
  An introductory guide to becoming a victorious <span class="text-primary">Helldiver</span>.
</Hero>

<div class="buttons">
  <a href="/war-status" class="button">Live War Status</a>
  <a href="/stratagems/interactive-practice" class="button">Stratagem Practice</a>
</div>

<p><strong>Welcome, Helldiver!</strong></p>

<p>Congratulations on joining the <strong>Helldivers</strong>, the elite fighting force tasked with spreading <em>Liberty</em> and <em>Democracy</em> across the galaxy. As a Helldiver, you are not just a soldier; you are a beacon of <strong>freedom</strong> in the darkest corners of the universe.</p>

<p>Before you embark on your journey to liberate alien worlds from the clutches of tyranny, it is imperative that you understand the gravity of your mission. While the enemy may manifest in the form of giant <em>bugs</em> (<strong>Terminids</strong>) or ruthless robot AI (<strong>Automatons</strong>), the true battle lies in the fight to protect your loved ones back home. Every mission you undertake, every sacrifice you make, is in service of ensuring the safety and security of your families and fellow citizens.</p>

<p>But fear not, for you are not alone in this noble endeavor. You are part of a brother- and sisterhood of warriors, united by a common cause and bound by unbreakable bonds of camaraderie. Together, we will face the hordes of enemies that stand between us and victory, armed with our wits, our weapons, and an unwavering belief in the righteousness of our cause.</p>

<p>In this manual, you will find everything you need to know to become a proficient Helldiver. From basic training exercises to advanced combat tactics, we've got you covered. So strap in, soldier, and get ready for the adventure of a lifetime. Remember, the fate of <em>Liberty</em> and <em>Democracy</em> rests in your hands.</p>

<p><strong class="text-primary">Are you ready to dive headfirst into hell?</strong></p>

<p class="mt-1 font-tiny"><em>Under Section 4 of Subsection 238, Article XIII, Chapter 323 of the National Helldiver Authority, it is hereby mandated that all Helldivers must read and adhere to the guidelines outlined in this manual. Failure to recognize this manual may lead to immediate termination.</em></p>

<style lang="scss">
  .buttons {
    display: grid;
    gap: $margin * 0.25;
    max-width: $text-limit;
    margin: $margin * 0.5 0;

    @include breakpoint(sm) {
      grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    }

    @include breakpoint(md) {
      margin: $margin 0;
    }
  }
</style>
