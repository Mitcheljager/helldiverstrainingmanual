export const Stratagem = {
  MachineGun: {
    name: "Machine Gun",
    cost: 0,
    sequence: ["down", "left", "down", "up", "right"],
    content: `
      <p>Behold, soldier, the mighty MG-43 Machine Gun - a weapon fit for heroes and hotheads alike. This trusty companion is your ticket to glory on the battlefield, but beware, for with great power comes great responsibility (and a hefty kickback).</p>
      <p>Now, let's talk tactics. The MG-43 is your go-to for those "oh crap" moments when you're faced with bug breach hordes or pesky large enemies. But here's the catch - <strong>ammo is scarce</strong>, so it's like momma always said: "Use it wisely, or you'll be walking home."</p>
      <p>When it comes to accuracy and control, remember this mantra: "Stationary is the new black." <strong>Plant your feet</strong>, soldier, and watch as your shots hit the mark with precision. And if you really want to show those bugs who's boss, get low - <strong>crouch for stability</strong> or go full commando and hit the dirt for maximum accuracy.</p>
      <p>Now, about armor penetration - the MG-43 may not cut through armor like a hot knife through butter, but it'll sure give those enemies a run for their money. So when you see a tough bug or a sturdy automaton, don't be afraid to lay down some suppressive fire and watch those bullets find their mark.</p>
    `
  },
  AntiMaterielRifle: {
    name: "Anti-Materiel Rifle",
    cost: 5000,
    sequence: ["down", "left", "right", "up", "down"],
    content: `
      <p>The Anti-Materiel Rifle is the ultimate precision instrument for dealing with those big, bad enemies that think they're invincible. This beast of a sniper rifle is your solution when you need to reach out and touch someone - hard.</p>
      <p>Imagine the scenario: you're face-to-face with a towering Automaton Hulk, its armored plates gleaming with menace. With the Anti-Materiel Rifle in hand, you take aim, squeeze the trigger, and watch as two shots are all it takes to dismantle that mechanical monstrosity.</p>
      <p>But here's the kicker - this ain't your granddaddy's hunting rifle. The Anti-Materiel Rifle can only be aimed down sights, meaning you'll need a steady hand and a keen eye to make every shot count. Lucky for you, this baby comes equipped with multiple zoom levels, so you can pick off targets from afar with surgical precision.</p>
      <p>And speaking of precision, here's a pro tip: stay low and steady to maximize stability and reduce recoil. Whether you're crouched behind cover or prone in the dirt, taking the time to line up your shot will ensure that each round finds its mark with deadly accuracy.</p>
      <p>So, soldier, when the chips are down and the Automatons are closing in, trust in the power of the Anti-Materiel Rifle to deliver justice from a distance. With its unmatched stopping power and pinpoint accuracy, liberty is just a well-placed shot away.</p>
    `
  },
  Stalwart: {
    name: "Stalwart",
    cost: 3500,
    sequence: ["down", "left", "down", "up", "up", "left"],
    content: `
      <p>The M-105 Stalwart is a compact and nimble machine gun designed for soldiers who value agility and versatility on the battlefield. Unlike its heavier counterparts, the Stalwart sacrifices raw power for ease of use, making it the perfect choice for those who need to stay mobile in the heat of combat.</p>
      <p>The Stalwart truly shines in its agility. Unlike other machine guns, the Stalwart allows you to reload on the move, ensuring that you're always ready to keep the pressure on the enemy. And with the ability to adjust the RPM between slower and faster rates, you have the flexibility to adapt your firepower to the situation at hand.</p>
      <p>While the Stalwart may not pack the same punch as its heavier counterparts, it more than makes up for it with its nimble handling and rapid reloads. Whether you're facing hordes of smaller enemies or need to maintain constant suppression fire, the M-105 Stalwart provides the firepower and agility you need to get the job done.</p>
    `
  },
  ExpendableAntiTank: {
    name: "Expendable Anti-Tank",
    cost: 3000,
    sequence: ["down", "down", "left", "up", "right"],
    content: `
      <p>The EAT-17 Expandable Anti-Tank is a single-use weapon specially designed to wreak havoc on vehicle armor targets.</p>
      <p>When facing formidable armored foes, the EAT-17 Expandable Anti-Tank becomes your ultimate ally. The Stratagem delivers two rocket launchers, each capable of delivering a devastating blow, this weapon is designed to tear through the toughest of armor with ease.</p>
      <p>But here's the catch - the EAT-17 is a one-shot wonder. Once you've unleashed its payload, the launcher is discarded, so make every shot count. Whether you're facing off against hulking Terminids or menacing Automatons, the EAT-17 is your ticket to leveling the playing field and coming out on top.</p>
    `
  },
  RecoillessRifle: {
    name: "Recoilless Rifle",
    cost: 6000,
    sequence: ["down", "left", "right", "right", "left"],
    content: `
      <p>Behold, the GR-8 Recoilless Rifle - a weapon so mighty, it'll make even the toughest armored vehicles quake in fear. This bad boy is your ticket to turning enemy armor into scrap metal faster than you can say "reload."</p>
      <p>With its single, devastating rocket, the GR-8 is the ultimate choice for obliterating those pesky big foes on the battlefield. But beware, soldier, reloading this beast is no walk in the park - unless you've got a trusty buddy to lend a hand, of course. Introducing the support backpack - the unsung hero of the GR-8's reload process. While going solo might leave you twiddling your thumbs, having a teammate grab your ammo backpack can turn reloading from a chore into a breeze faster than you can say "teamwork."</p>
      <p>So, when the enemy rolls out the big guns, don't just stand there - grab your GR-8, slap on that support backpack, and show 'em what you're made of. With the power of friendship and a whole lot of rockets, victory is just a blast away.</p>
    `
  },
  Flamethrower: {
    name: "Flamethrower",
    cost: 6000,
    sequence: ["down", "left", "up", "down", "up"],
    content: `
      <p>The FLAM-40 Flamethrower is a weapon of fiery destruction, perfect for scorching enemies at close range. With its incendiary power, this weapon doesn't just burn targets - it turns them into crispy critters faster than you can say "extra crispy."</p>
      <p>But beware, soldier, the FLAM-40 doesn't discriminate - it'll ignite anything and everything in its path, including terrain and, yes, even your flammable teammates. So, wield this weapon with caution and keep your distance from anything you'd rather not see engulfed in flames.</p>
      <p>So, when the flames of democracy meet the inferno of the FLAM-40 Flamethrower, even the most ardent enemies of liberty will find themselves roasted to a crisp. Remember, nothing says "freedom" like a well-cooked bug!</p>
    `
  },
  Autocannon: {
    name: "Autocannon",
    cost: 7000,
    sequence: ["down", "left", "down", "up", "up", "right"],
    content: `
      <p>The AC-8 Autocannon is a fully-automatic cannon designed to rain destruction upon light vehicle armor with ruthless efficiency. With its rapid-fire capability, this weapon turns enemy vehicles into scrap metal faster than you can say "reload."</p>
      <p>The AC-8 comes equipped with a support backpack, allowing your trusty teammates to lend a hand and make reloading a breeze. With their help, you'll be back in action and ready to unleash another barrage of bullets in no time.</p>
      <p>One advantage of the AC-8 is its ability to destroy objectives from a considerable distance away. Whether you're taking out enemy installations or blasting through fortified defenses, this cannon has got you covered.</p>
      <p>But wait, there's more! The AC-8 isn't just for taking down big targets - it's also a force to be reckoned with against hordes of smaller enemies. With its high rate of fire, this cannon chews through anything foolish enough to stand in its way, leaving nothing but destruction in its wake.</p>
    `
  },
  HeavyMachineGun: {
    name: "Heavy Machine Gun",
    cost: 6000,
    sequence: ["down", "left", "up", "down", "down"],
    content: `
      <p>The MG-206 Heavy Machine Gun, a beast of a weapon that'll have you feeling like you're wrestling a bull on steroids. This bad boy packs a punch that'll make even the toughest bugs quake in their exoskeletons. But beware, handling this monster ain't for the faint of heart. With recoil that'll send you flying faster than a rocket launch, you'll need arms of steel and nerves of titanium to keep this baby under control. Get ready to unleash a storm of lead like never before.</p>
    `
  },
  AirburstRocketLauncher: {
    name: "Airburst Rocket Launcher",
    cost: 8000,
    sequence: ["down", "up", "up", "left", "right"],
    content: `
      <p>This bad boy fires a rocket that doesn't just hit the mark, it explodes in style, showering the target with a delightful cluster of explosive bomblets. It's like a fireworks show, but with more boom and less "oohs" and "ahhs."</p>
      <p>Wield it with care, my friend, for its potency demands a skilled hand. Aim high to avoid the fiery rain that this beast unleashes as it reaches it apex.
    `
  },
  Railgun: {
    name: "Railgun",
    cost: 10000,
    sequence: ["down", "right", "down", "up", "left", "right"],
    content: `
      <p>The RS-422 Railgun isn't your grandpa's pea shooter - it's a cutting-edge piece of experimental tech that's so hot, it makes the sun jealous. This baby is all about one thing and one thing only: blasting through armor like it's going out of style.</p>
      <p>But hold your horses, soldier - each shot needs a little love and care, so make sure you're cozy with that trigger before you pull it. Remember, precision is key - we're talking about turning enemy armor into modern art here. This bad boy fires a single, supercharged shot at a time, cutting through armor plates like a hot knife through butter. It's like playing a game of "pin the tail on the donkey," except the donkey is an enemy tank and the tail is a high-velocity projectile.</p>
      <p>But wait, there's more! The RS-422 comes with a little something we like to call the "unsafe" mode. Sure, it's risky business, but who doesn't love a little danger with their morning coffee? Just remember: hold that trigger down for too long and you'll be painting the walls with more than just enemy blood.</p>
    `
  },
  Spear: {
    name: "Spear",
    cost: 9000,
    sequence: ["down", "down", "up", "down", "down"],
    content: `
      <p>The FAF-14 Spear is the pinnacle of anti-tank warfare, a homing missile that locks onto its target with deadly precision before unleashing its destructive payload. With its auto-lock-on system, this weapon is your best friend when it comes to taking down large and armored enemies, no matter how fast they're moving.</p>
      <p>The FAF-14 Spear comes equipped with a handy backpack, allowing your trusty teammates to lend a hand and make reloading a breeze. With their support, you'll be ready to lock and load in no time, raining missiles down on your enemies like a force of nature.</p>
    `
  },
  OrbitalGatlingBarrage: {
    name: "Orbital Gatling Barrage",
    cost: 1500,
    sequence: ["right", "down", "left", "up", "up"],
    content: `
      <p>The Orbital Gatling Barrage is the stuff of nightmares for our enemies below - a relentless storm of high explosive rounds raining down from the heavens like the hammer of justice itself. Fired from the Destroyer's high-speed rotary autocannons, this barrage turns enemy formations into chaos and rubble in the blink of an eye.</p>
      <p>But don't be fooled by the size of these rounds - they may not be rockets, but they pack a punch that'll make the enemy think twice about crossing our path. These babies are like big bullets of freedom, tearing through enemy ranks with ease and leaving nothing but destruction in their wake.</p>
    `
  },
  OrbitalAirburstStrike: {
    name: "Orbital Airburst Strike",
    cost: 4000,
    sequence: ["right", "right", "right"],
    content: `
      <p>The Orbital Airburst Strike is like nature's own fireworks display - except instead of pretty lights, it rains down a deadly shower of shrapnel from above, turning enemy formations into chaos faster than you can say "duck and cover!" This projectile explodes while airborne, creating a deadly rain of shrapnel that's perfect for raining down death and destruction on our enemies below.</p>
      <p>While the Orbital Airburst Strike may not be effective against heavy armor, it's the perfect tool for dealing with those pesky lighter enemies that just won't take a hint. Whether you're facing off against swarms of bugs or waves of Automatons, this Strategem is your go-to choice for thinning out the herd and making the battlefield safe in the name of democracy.</p>

    `
  },
  Orbital120mmHEBarrage: {
    name: "Orbital 120mm HE Barrage",
    cost: 4000,
    sequence: ["right", "right", "down", "left", "right", "down"],
    content: `
      <p>The Orbital 120mm HE Barrage is like a symphony of destruction for the discerning Helldiver - a precision artillery salvo that transforms the battlefield into a chaotic dance of devastation and mayhem. With bombs the size of small cars raining down from the heavens, this Strategem is perfect for dispersing concentrated enemy units and turning the tide of battle in our favor.</p>
      <p>But don't expect surgical precision from this bad boy - oh no! These bombs land in random locations, creating a deadly game of chance where the only guaranteed winner is freedom itself. Sure, it may not be the most accurate airstrike in the book, but when you're dealing with a large area, who needs pinpoint accuracy anyway?</p>
      <p>Whether you're looking to thin out enemy ranks before a big push or simply want to make a statement, the Orbital 120mm HE Barrage is your ticket to turning the battlefield into a warzone worthy of the history books. With its explosive power and the might of the Destroyer at your command, victory is just a bomb drop away.</p>
    `
  },
  Orbital380mmHEBarrage: {
    name: "Orbital 380mm HE Barrage",
    cost: 7500,
    sequence: ["right", "down", "up", "up", "left", "down", "down"],
    content: `
      <p>The 380mm HE Barrage is the big brother of destruction, a prolonged onslaught of devastation that blankets the battlefield in chaos and carnage. With bombs the size of small houses raining down from the heavens, this Strategem is not for the faint of heart - when one of these bad boys is pulled out, you'd better take cover or kiss your behind goodbye!</p>
      <p>Just when you thought things couldn't get any crazier, along comes the 380mm HE Barrage, wreaking extended havoc over a larger area than your average battleground. Communication with teammates is advised - not because it's particularly helpful, but because it's always good to have someone to share your impending doom with.</p>
      <p>Whether you're looking to clear out a heavily fortified position or just want to see the world burn (metaphorically speaking, of course), the 380mm HE Barrage is your one-way ticket to chaos and destruction. With its colossal explosive power and the might of the Destroyer at your command, victory is just a bomb drop away - assuming there's anything left standing to claim it.</p>
    `
  },
  OrbitalWalkingBarrage: {
    name: "Orbital Walking Barrage",
    cost: 7500,
    sequence: ["right", "down", "right", "down", "right", "down"],
    content: `
      <p>The Orbital Walking Barrage is like a relentless giant stomping its way across the battlefield, driving the enemy out of cover with every thunderous step and paving the way for our glorious advance. But instead of feet, it's bombs - big, explosive ones that leave nothing but chaos and destruction in their wake.</p>
      <p>With the Orbital Walking Barrage on our side, victory is just a series of explosive steps away. So don't just stand there - follow the bombs, advance with confidence, and show the enemy what happens when they try to stand in the way of progress. With the power of destruction at your command, victory is inevitable.</p>
    `
  },
  OrbitalLaser: {
    name: "Orbital Laser",
    cost: 10000,
    sequence: ["right", "down", "up", "right", "down"],
    content: `
      <p>The Orbital Laser is the Destroyer's answer to all our problems - a blazing beam of destruction that sweeps over the designated area like the fiery wrath of the gods, vaporizing everything in its path with ruthless efficiency. This isn't your run-of-the-mill laser pointer, folks - this is a laser cannon so powerful, it makes the sun jealous! Anything caught in its path is destined to become a crispy critter faster than you can say "well done."</p>
    `
  },
  OrbitalRailcannonStrike: {
    name: "Orbital Railcannon Strike",
    cost: 10000,
    sequence: ["right", "up", "down", "down", "right"],
    content: `
      <p>The Orbital Railcannon Strike is like a sniper's dream come true - a high-velocity railcannon round fired from the heavens, zeroing in on the largest target in close proximity to the beacon and obliterating it in one fell swoop. It's like playing a game of cosmic whack-a-mole, except instead of moles, you're squashing enemy forces with extreme prejudice.</p>
      <p>Targeting is automatic, meaning you don't have to lift a finger - just plant the beacon and let the railcannon do the rest. With the power of the railcannon at your command, victory is assured - or at least, very, very satisfying.</p>
    `
  },
  EagleStrafingRun: {
    name: "Eagle Strafing Run",
    cost: 1500,
    sequence: ["up", "right", "right"],
    content: `
      <p>The Eagle Strafing Run is like a lightning bolt from the sky - a rapid-fire strafing run that clears small targets with surgical precision, delivered almost instantly to the heart of the battlefield. When called, the strike will start from the beacon and unleash a torrent of destruction away from the direction you were facing when it was thrown. The Eagle can perform this devastating strafing run not just once, not twice, but three times before it needs to reload its bullets back at base. That's three opportunities to rain liberty and democracy upon our enemies below.</p>
      <p>A streak of fire blazing across the sky, followed by a deafening roar as the Eagle swoops in to rain death upon our enemies below. Whether it's bugs, Automatons, or anything else foolish enough to stand in our way, the Eagle Strafing Run makes short work of them all, leaving nothing but smoking craters in its wake.</p>
      <p>Don't hesitate to call in the Eagle and watch as the enemy is torn apart by a hail of bullets and explosions.</p>
    `
  },
  EagleAirstrike: {
    name: "Eagle Airstrike",
    cost: 4000,
    sequence: ["up", "right", "down", "right"],
    content: `
      <p>A the wrath of democracy unleashed upon the battlefield - a relentless barrage of bombs creating a non-targeted carpet of explosions, raining freedom and liberty upon our enemies with indiscriminate ferocity. When called, the strike will be perpendicular from the direction you were facing when thrown, blanketing the area in chaos and devastation, all in the name of spreading democracy. The Eagle can unleash this devastating airstrike twice before it needs to reload its arsenal back at base.</p>
    `
  },
  EagleClusterBomb: {
    name: "Eagle Cluster Bomb",
    cost: 4000,
    sequence: ["up", "right", "down", "down", "right"],
    content: `
      <p>A targeted air strike designed to rain down a barrage of explosive projectiles, clearing smaller targets with ruthless efficiency. While it may not have the power to level buildings, it excels at decimating enemy forces and turning the tide of battle in our favor. When called, the strike will be perpendicular from the direction you were facing when thrown, saturating the area with a deadly rain of bombs.</p>
      <p>The Eagle Cluster Bomb isn't a one-trick pony. It can be deployed a total of four times before it needs to reload its payload back at base, giving you ample opportunities to unleash devastation upon our enemies and pave the way for victory.</p>
    `
  },
  EagleNapalmAirstrike: {
    name: "Eagle Napalm Airstrike",
    cost: 5000,
    sequence: ["up", "right", "down", "up"],
    content: `
      <p>A blaze of glory descending from the heavens - a relentless barrage of napalm bombs creating a wall of fire that will stop the enemy dead in their tracks. When called, the strike will be perpendicular from the direction you were facing when thrown, engulfing the battlefield in a searing inferno of destruction. It can be unleashed twice before it needs to reload its fiery payload back at base.</p>
      <p>A wall of fire erupts from the ground, consuming everything in its path with relentless fury. Bugs, Automatons, and any other enemies foolish enough to stand against us are engulfed in flames, their advance halted by the searing heat of the Eagle Napalm Strike.</p>
    `
  },
  JumpPack: {
    name: "Jump Pack",
    cost: 6000,
    sequence: ["down", "up", "up", "down", "up"],
    content: `
      <p>The Jump Pack propels you to great heights with each leap, allowing you to soar through the air like a majestic eagle. With its power, you can leap entire stories high, gaining advantage over enemies or reaching strategic positions on the battlefield.</p>
      <p>However, the Jump Pack requires a fairly long recharge between jumps, making timing and strategy crucial for its effective use. Whether you need to evade enemies or engage them from unexpected angles, the Jump Pack offers freedom and flexibility in combat.</p>
      <p>Imagine activating the Jump Pack as the ground trembles beneath your feet, launching you into the air with a powerful leap. Bugs and Automatons alike are caught off guard as you ascend overhead, ready to turn the tide of battle from above.</p>
      <p>With the Jump Pack, the sky's the limit - quite literally.</p>

    `
  },
  EagleSmokeStrike: {
    name: "Eagle Smoke Strike",
    cost: 4000,
    sequence: ["up", "right", "up", "down"],
    content: `
      <p>The Eagle Smoke Strike unleashes a barrage of smoke grenades, enveloping the battlefield in a thick screen of smoke to obscure enemy vision and disrupt their plans. When called, the strike blankets the area with a haze of confusion, creating chaos among our adversaries and giving us the upper hand in combat. When the enemy advances and the odds seem stacked against us, we call upon the power of smoke and mirrors to turn the tide in our favor. A literal fog of war.</p>
    `
  },
  Eagle110mmRocketPods: {
    name: "Eagle 110mm Rocket Pods",
    cost: 7500,
    sequence: ["up", "right", "up", "left"],
    content: `
      <p>The Eagle 110mm Rocket Pods unleash a relentless barrage of explosive rockets, raining destruction upon the largest target near the stratagem beacon. This deadly payload seeks out its target with unerring accuracy, striking with devastating force and dealing massive amounts of damage to even the toughest adversaries.</p>
      <p>With each rocket finding its mark, the Eagle 110mm Rocket Pods leave a trail of devastation in their wake, decimating enemy armor and turning the tide of battle in our favor. Whether it's a towering behemoth or a heavily fortified position, no foe can withstand the onslaught of firepower unleashed by these potent munitions.</p>
    `
  },
  Eagle500KGBomb: {
    name: "Eagle 500KG Bomb",
    cost: 10000,
    sequence: ["up", "right", "down", "down", "down"],
    content: `
      <p>The Eagle 500kg Bomb is a weapon of unparalleled devastation, a titanic force of destruction that strikes fear into the hearts of our enemies and leaves the battlefield scorched and smoldering in its wake. When called upon, this behemoth of annihilation descends upon the battlefield with the weight of a thousand thunderclaps, heralding its arrival with a deafening roar that echoes across the land.</p>
      <p>As the bomb hurtles towards its target, time seems to slow, every second stretching into an eternity as anticipation builds and tension mounts. Then, with a blinding flash of light and an earth-shattering explosion, the bomb detonates, unleashing a cataclysmic wave of destruction that engulfs everything in its path. The shockwave ripples outward, tearing through the earth and rending the very fabric of reality asunder. Buildings crumble like sandcastles in a hurricane, reduced to rubble and dust in the blink of an eye. Vehicles are tossed aside like toys, their twisted wreckage scattered across the landscape like discarded playthings. Those unfortunate enough to be caught within the blast radius are subjected to a maelstrom of destruction unlike anything they've ever experienced. The intense heat sears flesh from bone, leaving nothing but charred husks in its wake. The force of the explosion hurls bodies through the air like rag dolls, their screams lost amidst the cacophony of destruction.</p>
      <p>As the dust settles and the smoke clears, the true extent of the devastation becomes apparent. The once-vibrant battlefield lies in ruins, transformed into a desolate wasteland by the awesome power of the Eagle 500kg Bomb. It serves as a stark reminder of the consequences of war, a testament to the destructive potential of Super Earth's most lethal creations.</p>
      <p>With this bomb in our arsenal, victory is assured - but at what cost? The toll of its devastation weighs heavy on the hearts of those who witness its power, a grim reminder of the sacrifices made in the name of liberty and justice. Yet, in the crucible of war, such sacrifices are necessary if we are to emerge victorious against the forces of tyranny and oppression.</p>
    `
  },
  OrbitalPrecisionStrike: {
    name: "Orbital Precision Strike",
    cost: 0,
    sequence: ["right", "right", "up"],
    content: `
      <p>Marvel at the Orbital Precision Strike, the illustrious initiation bestowed upon fledgling Helldivers embarking on their gallant escapades. With a singular shot from the venerable 'ATLAS' cannon, unleashed from the ethereal confines of the mighty Destroyer, this stratagem instills dread in the hearts of our adversaries and proclaims our supremacy with resolute vigor. From the inaugural unleashing of its wrath upon the battlefield, you'll grasp the weighty burden placed upon you as a Helldiver, and the pivotal role you occupy in safeguarding the virtues of liberty and democracy across the cosmos.</p>
    `
  },
  OrbitalGasStrike: {
    name: "Orbital Gas Strike",
    cost: 6000,
    sequence: ["right", "right", "down", "right"],
    content: `
      <p>A noxious gift from the heavens that unleashes a swirling maelstrom of corrosive gas upon the battlefield. This insidious cloud spares no foe, searing through both organic and robotic lifeforms with equal contempt. As it engulfs the battlefield, it leaves naught but devastation in its wake, choking our enemies and dissolving their defenses with unrelenting efficiency. With the Orbital Gas Strike at your command, you wield a weapon of unparalleled potency, capable of turning the tide of battle with a single toxic breath.</p>
    `
  },
  OrbitalEMSStrike: {
    name: "Orbital EMS Strike",
    cost: 6000,
    sequence: ["right", "right", "left", "down"],
    content: `
      <p>A marvel of compliance engineering designed to recalibrate enemy behavior with a single, electrifying pulse. This projectile, imbued with the power to temporarily stun all targets within its strike radius, serves as a potent reminder of the consequences of defiance against the forces of liberty and democracy. As it arcs through the heavens and descends upon the battlefield, it delivers a shockwave of enlightenment that leaves our adversaries momentarily incapacitated, their wills bent to our cause. With the Orbital EMS Strike at your disposal, you wield not just a weapon, but a tool for shaping the very fabric of the battlefield itself.</p>
    `
  },
  OrbitalSmokeStrike: {
    name: "Orbital Smoke Strike",
    cost: 4000,
    sequence: ["right", "right", "down", "up"],
    content: `
      <p>A strategic masterpiece that blankets the battlefield in a dense fog of liberty, shielding our forces from the prying eyes of tyranny. This stratagem conjures a veil of democratic smoke that descends from the heavens, obscuring the vision of our adversaries, including the relentless Automatons, and thwarting their attempts to suppress our pursuit of freedom. With their line of sight compromised, our enemies find themselves ensnared in the smokescreen of liberty, unable to penetrate the righteous resolve of the Helldivers. With the Orbital Smoke Strike at your command, you wield not just a weapon, but a shield of democracy that ensures our victory against the forces of oppression.</p>
    `
  },
  HMGEmplacement: {
    name: "HMG Emplacement",
    cost: 10000,
    sequence: ["down", "up", "left", "right", "right", "left"],
    content: `
      <p>A formidable fortification that transforms any battlefield into a bastion of liberty. Manned by courageous Helldivers, this turret delivers unparalleled firepower against lightly armored targets, serving as a steadfast guardian against the encroaching forces of tyranny. Though slow to turn, its strategic placement is paramount, ensuring maximum coverage and efficacy on the front lines of democracy's defense. With the HMG Emplacement at your disposal, you become the stalwart sentinel of freedom, standing firm against all who dare to oppose our righteous cause.</p>
    `
  },
  ShieldGeneratorRelay: {
    name: "Shield Generator Relay",
    cost: 9000,
    sequence: ["down", "up", "left", "down", "right", "right"],
    content: `
      <p>Enter the Shield Generator Relay, a beacon of protection that erects a steadfast energy shield, providing resolute cover against the relentless barrage of projectiles unleashed by our adversaries. Stationary yet stalwart, this shield generator serves as a bulwark against tyranny, offering a temporary sanctuary for Helldivers in the heat of battle. However, its lifespan is finite once deployed, requiring judicious placement and timely activation to maximize its defensive capabilities. With the Shield Generator Relay in play, you become the guardian of democracy, ensuring the safety and security of our righteous cause amid the chaos of conflict.</p>
    `
  },
  TeslaTower: {
    name: "Tesla Tower",
    cost: 8000,
    sequence: ["down", "up", "right", "up", "left", "right"],
    content: `
      <p>Behold the Tesla Tower, a towering testament to the electrifying power of Helldiver ingenuity and the boundless spirit of democracy. This formidable turret channels the raw energy of liberty itself, unleashing devastating electrical charges at targets in close range, arcing through the air with righteous fury to vanquish our enemies. To safeguard the principles of freedom, Helldivers are advised to adopt a prone position while in proximity of this electrifying marvel, ensuring the safety of their comrades amidst the chaos of battle.</p>
    `
  },
  AntiPersonnelMinefield: {
    name: "Anti-Personnel Minefield",
    cost: 1500,
    sequence: ["down", "left", "up", "right"],
    content: `
      <p>This formidable stratagem deploys a tower that swiftly saturates the surrounding area with a deluge of landmines, creating a perilous barrier that halts enemy progress in its tracks. As these explosive guardians lay in wait, poised to detonate upon contact with any intruder, they serve as a formidable deterrent against the encroaching forces of tyranny. With the Anti-Personnel Minefield at your disposal, you command a lethal arsenal of democracy's defense, ensuring that our enemies tread cautiously on the path to their inevitable defeat.</p>
    `
  },
  SupplyPack: {
    name: "Supply Pack",
    cost: 4000,
    sequence: ["down", "left", "down", "up", "up", "down"],
    content: `
      <p>This essential stratagem deploys supply boxes brimming with precious ammunition, accompanied by a versatile backpack that empowers the user to distribute these vital resources to fellow comrades in arms. Whether resupplying allies or replenishing one's own arsenal, the Supply Pack stands as a beacon of solidarity and resilience on the battlefield. With its capacity for sustained provision, Helldivers wield the power to sustain the fight against tyranny and uphold the sacred values of liberty and democracy.</p>
    `
  },
  GrenadeLauncher: {
    name: "Grenade Launcher",
    cost: 6000,
    sequence: ["down", "left", "up", "left", "down"],
    content: `
      <p>This formidable weapon launches grenades with devastating force, unleashing chaos and destruction upon our adversaries with each explosive payload. As the battlefield erupts in a symphony of detonations, the Grenade Launcher stands as a symbol of our unwavering resolve to combat tyranny and oppression. With its explosive projectiles raining down upon our enemies, Helldivers pave the way for liberty and democracy to triumph over the forces of darkness.</p>
    `
  },
  LaserCannon: {
    name: "Laser Cannon",
    cost: 4000,
    sequence: ["down", "left", "down", "up", "left"],
    content: `
      <p>Presenting the Laser Cannon, a marvel of cutting-edge technology and the pinnacle of Helldiver armament. This formidable cannon harnesses upscaled, weaponized laser technology to unleash a relentless torrent of destructive energy upon our adversaries. Its heavy, continuous laser beam cuts through enemy ranks with surgical precision, leaving naught but scorched earth in its wake. Unlike conventional weapons, the Laser Cannon consumes no traditional ammunition, instead relying on a delicate balance of power and heat management. To maintain optimal performance, Helldivers must load emergency heat dump canisters into the cannon, ensuring a continuous barrage of laser fire.</p>
    `
  },
  IncendiaryMines: {
    name: "Incendiary Mines",
    cost: 4000,
    sequence: ["down", "left", "left", "down"],
    content: `
      <p>This stratagem deploys a minefield saturated with incendiary devices, poised to ignite both terrain and targets alike when triggered by unsuspecting adversaries. As the flames of liberty engulf our enemies, Helldivers stand as guardians of democracy, harnessing the power of fire to repel the forces of tyranny. Similar to its explosive counterpart, the Incendiary Mines serve as a formidable deterrent against enemy incursions, creating a perilous obstacle for those who dare to challenge our righteous cause.</p>
    `
  },
  GuardDogRover: {
    name: "Guard Dog Rover",
    cost: 7500,
    sequence: ["down", "up", "left", "up", "right", "right"],
    content: `
      <p>An autonomous enforcer armed to the teeth with a laser rifle and itching for a fight. This formidable drone serves as a relentless harbinger of destruction, prowling the battlefield with lethal intent and unleashing a torrent of laser fire upon any who dare to oppose the cause of liberty. With its 360-degree coverage, the Guard Dog Rover ensures that no enemy can escape its relentless barrage, leaving a trail of scorched earth in its wake. However, such unrestrained firepower comes at a cost, as even the Helldiver who commands it must tread cautiously to avoid being caught in the crossfire.</p>
    `
  },
  BallisticShieldBackpack: {
    name: "Ballistic Shield Backpack",
    cost: 6000,
    sequence: ["down", "left", "up", "up", "right"],
    content: `
      <p>This compact backpack, when wielded in one hand, transforms into a sturdy ballistic shield capable of withstanding the onslaught of small arms fire with ease. As Helldivers advance into the heart of enemy territory, the Ballistic Shield Backpack stands as a steadfast bulwark against tyranny, providing invaluable protection to those who dare to challenge the forces of oppression.</p>
    `
  },
  ArcThrower: {
    name: "Arc Thrower",
    cost: 7000,
    sequence: ["down", "right", "down", "up", "left", "left"],
    content: `
      <p>This potent tool charges up to unleash bolts of crackling electricity, capable of arcing between multiple targets with devastating effect. Remarkably, the Arc Thrower's inexhaustible energy source ensures that it can be fired infinitely, delivering relentless punishment to our enemies without the need for traditional ammunition. However, wielders must exercise caution when deploying the Arc Thrower in close proximity to comrades, as its indiscriminate discharge may inadvertently harm nearby teammates.</p>
    `
  },
  QuasarCannon: {
    name: "Quasar Cannon",
    cost: 7500,
    sequence: ["down", "down", "up", "left", "right"],
    content: `
      <p>The LAS-99 Quasar Cannon, the pinnacle of raw firepower at your fingertips. This beast charges up to unleash a spectacular energy burst that'll leave your enemies in awe of your might. But brace yourself, because after unleashing such overwhelming power, this cannon needs a moment to catch its breath. It's not a flaw, it's a testament to its sheer potency.</p>
    `
  },
  ShieldGeneratorPack: {
    name: "Shield Generator Pack",
    cost: 10000,
    sequence: ["down", "up", "left", "right", "left", "right"],
    content: `
      <p>A groundbreaking innovation designed to safeguard Helldivers amidst the chaos of enemy territory. This remarkable device encases the wearer in a protective spherical shield, offering unparalleled defense against the onslaught of high-speed projectiles and enemy assaults. With its formidable protection, Helldivers can confidently navigate through hostile environments, shielded from harm and empowered to confront the forces of tyranny head-on. Although its deployment is temporary, the Shield Generator Pack ensures that Helldivers remain unscathed amidst the relentless barrage of enemy fire, providing a vital lifeline in the heat of battle.</p>
    `
  },
  MachineGunSentry: {
    name: "Machine Gun Sentry",
    cost: 1500,
    sequence: ["down", "up", "right", "right", "up"],
    content: `
      <p> This imposing turret stands as a stalwart guardian, tirelessly scanning the battlefield for any sign of opposition and unleashing a relentless barrage of firepower upon those who dare to challenge the cause of liberty. With its unmatched precision and unwavering determination, the Machine Gun Sentry serves as a steadfast sentinel, safeguarding strategic locations and ensuring the continued advance of democracy's champions.</p>
    `
  },
  GatlingSentry: {
    name: "Gatling Sentry",
    cost: 4000,
    sequence: ["down", "up", "right", "left"],
    content: `
      <p>Prepare for a symphony of destruction with the Gatling Sentry, an awe-inspiring addition to our arsenal that unleashes a relentless storm of bullets upon our foes. This fearsome turret stands as a formidable bulwark against the forces of tyranny, its spinning barrels serving as a testament to the unyielding resolve of Helldivers in the pursuit of liberty. With its unparalleled rate of fire and unerring accuracy, the Gatling Sentry sweeps aside all who oppose the march of democracy, leaving a trail of destruction in its wake.</p>

    `
  },
  MortarSentry: {
    name: "Mortar Sentry",
    cost: 7000,
    sequence: ["down", "up", "right", "right", "down"],
    content: `
      <p> This formidable turret stands as a testament to the ingenuity of Helldivers, its explosive shells serving as harbingers of liberty's triumph over tyranny. With its unparalleled range and devastating firepower, the Mortar Sentry strikes fear into the hearts of our enemies, decimating their ranks and clearing the path for democracy's advance.</p>
    `
  },
  GuardDog: {
    name: "Guard Dog",
    cost: 7500,
    sequence: ["down", "up", "left", "up", "right", "down"],
    content: `
      <p> This relentless companion serves as a steadfast ally on the battlefield, its keen senses and unwavering resolve ensuring that democracy's champions remain protected from every threat. With its 360-degree coverage and formidable firepower, the Guard Dog stands as a vigilant defender of liberty, tirelessly engaging enemy forces and securing victory for the cause of freedom. As it bravely patrols the front lines, the Guard Dog epitomizes the indomitable spirit of Helldivers, inspiring confidence in our ranks and striking fear into the hearts of our adversaries.</p>
    `
  },
  AutocannonSentry: {
    name: "Autocannon Sentry",
    cost: 6000,
    sequence: ["down", "up", "right", "up", "left", "up"],
    content: `
      <p>Behold the Autocannon Sentry, a sentinel of thunderous might, whose rapid-fire barrage paints the skies with trails of explosive light. In the crucible of battle, it stands as a beacon of defiance, its fiery salvoes heralding the triumph of liberty's alliance. With each resounding boom, it shatters the chains of oppression, carving pathways to freedom with relentless aggression.</p>
      <p>In its relentless fury, armored titans tremble and falter, as torrents of explosive wrath rend their defenses asunder. Yet not only the mighty fall before its thunderous call, but also the hordes of tyranny, scattered and cleft by its explosive ballet.</p>
      <p>Thus, amidst the chaos of war, the Autocannon Sentry reigns supreme, a testament to the indomitable spirit of those who dare to dream. With each detonation, it sings the anthem of freedom's ascent, forging a path to victory where democracy's light shines ever resplendent.</p>

    `
  },
  RocketSentry: {
    name: "Rocket Sentry",
    cost: 7500,
    sequence: ["down", "up", "right", "right", "left"],
    content: `
      <p>Behold the might of the Rocket Sentry, a formidable automated turret designed to rain destruction upon armored adversaries with relentless precision. This towering guardian stands as a beacon of defiance against tyranny, its guided missiles soaring through the skies to seek out and obliterate the largest of foes. With each thunderous detonation, the Rocket Sentry carves a path of fiery retribution, ensuring that the forces of oppression tremble in the face of democracy's advance.</p>
    `
  },
  EMSMortarSentry: {
    name: "EMS Mortar Sentry",
    cost: 8000,
    sequence: ["down", "up", "right", "down", "right"],
    content: `
      <p>An electrifying turret armed with static field generators that disrupt enemy advances with the fervor of democracy itself. This mighty guardian stands as a bastion of liberty, its pulsating fields of electromagnetic fury casting a net of confusion upon the enemy ranks, leaving tyranny quaking in its boots. With each thunderous pulse, the EMS Mortar Sentry proclaims the triumph of freedom's champions, striking fear into the hearts of all who dare oppose the righteous march of democracy.</p>
    `
  },
  PatriotExosuit: {
    name: "Patriot Exosuit",
    cost: 20000,
    sequence: ["left", "down", "right", "up", "left", "down", "down"],
    content: `
      <p>This formidable drivable bipedal mech stands as a beacon of freedom and firepower on the battlefield. With its sleek design and cutting-edge technology, the Patriot Exosuit is a symbol of Super Earth's unwavering resolve against the alien threats that seek to engulf humanity. Equipped with a devastating rocket launcher and a rapid-firing machine gun, this mechanical behemoth brings the heat to any hostile encounter. Whether raining down explosive ordinance from above or laying down suppressive fire against advancing enemies, the Patriot Exosuit is a force to be reckoned with. Pilots will find themselves in the driver's seat of sheer power and versatility, ready to turn the tide of battle in the name of liberty and justice.</p>
    `
  },
  EmancipatorExosuit: {
    name: "Emancipator Exosuit",
    cost: 20000,
    sequence: ["left", "down", "right", "up", "left", "down", "up"],
    content: `
      <p>This marvel of modern warfare is a heavily-armored walking fortress, equipped with dual autocannons that unleash a relentless barrage upon your foes. Step into the Emancipator, and stride across the battlefield with the confidence of a titan, knowing that nothing stands between you and victory—except perhaps the smoldering wreckage of your enemies!</p>
    `
  },
  Commando: {
    name: "Commando",
    cost: 20000,
    sequence: ["down", "left", "up", "down", "right"],
    content: `
      <p>This is not just any missile launcher, this intelligent apex predator launches laser-guided smart missiles that do the track your every intention. A laser-guiding system keeps rocket exactly on target, with no enemy able to get away from it's ever present grasp. This beauty is able to fire up four missiles at once, for when one just won't do.</p>
    `
  },
  OrbitalNapalmBarrage: {
    name: "Orbital Napalm Barrage",
    cost: 10000,
    sequence: ["right", "right", "down", "left", "right", "up"],
    content: `
      <p>We're proud to hand you the next evolution in bug control through the use of thoroughly cleansing fire. While our previous napalm weaponry focused on precision, this barrage takes a blanket approach. No nest is large enough to be out of bounds of this ever-cleansing shower of highly effective inflammatory shampoo.</p>
      <p>Select your target, ready the marshmallow, sit back, and watch as any enemy—be it bug, robotic, or interterrestrial—is quickly turned to a golden crisp, leaving not a single spore untoasted.</p>
      <p>In the hands of a well-trained Helldiver, this orbital weapon can lay waste to entire fields of enemies—or anything else in its path. As such, it should be noted that the cleansing powers have been carefully calibrated to not harm your fellow Helldivers. Any claim otherwise is false and will not be upheld.</p>
    `
  },
  AntiTankMines: {
    name: "Anti-Tank Mines",
    cost: 7000,
    sequence: ["down", "left", "up", "up"],
    content: `
      <p></p>
    `
  },
  Steriliser: {
    name: "Steriliser",
    sequence: ["down", "left", "up", "down", "left"],
    content: `
      <p>The Galaxy is full of those looking to spread their seed in Super Earth territory. To deal with this ever growing threat we have to stop being before they are born; In comes the Steriliser. This highly effective spray pushes back enemy forces and makes them regret ever setting foot in your general line of sight.</p>
      <p>The spray comes equipped with three compounds: Bug Begone, which quickly neutralizes any bugs along with the smells they might leave behind; Civil Diffesent Disinfectant, suppressing circuitry with high corrosive power and taking care of Pro-Automaton graffiti; and Quick Xpand, a compound that quickly expands when coming into contact with extraterrestrial orifices. Different blends for different threats, created by the finest Super Earth scientists.</p>
      <p>Please note: Despite the name, this tool has not been proven to have any effect on the fertility of its users or fellow Super Earth citizens. Any lasting effects on the user, birth defects, or intercourse-related quarrels are purely coincidental and cannot be attributed to this tool. Please refer to Section 32 of Subsection 731, Chapter 23 for more details.</p>
      <p>Warning: Highly flammable.</p>
    `
  },
  GuardDogDogBreath: {
    name: "Guard Dog Dog Breath",
    sequence: ["down", "up", "left", "up", "right", "up"],
    content: `
      <p></p>
    `
  },
  DirectionalShield: {
    name: "Directional Shield",
    sequence: ["down", "up", "left", "right", "left", "down"],
    content: `
      <p></p>
    `
  },
  FlameSentry: {
    name: "Flame Sentry",
    sequence: ["down", "up", "right", "down", "up", "up"],
    content: `
      <p></p>
    `
  },
  AntiTankEmplacement: {
    name: "Anti-Tank Emplacement",
    sequence: ["down", "up", "left", "right", "right", "right"],
    content: `
      <p></p>
    `
  },
  Reinforce: {
    name: "Reinforce",
    sequence: ["up", "down", "right", "left", "up"],
    content: `
      <p>Amidst the chaos of battle, amidst the thunderous roar of conflict, we stand as one, united in purpose, bound by the sacred oath of liberty's champions. For every Helldiver who has fallen, for every comrade lost in the crucible of war, their memory shall be etched in the annals of heroism, their valor a beacon that guides us through the darkest of nights.</p>
      <p>With each Reinforce beacon that pierces the heavens, we pay homage to those who have gone before us, their spirits soaring alongside our resolve, their sacrifice a testament to the unwavering spirit of democracy's defenders. Though they may be gone from our sight, their legacy lives on in the hearts of every Helldiver who takes up arms in their name, their courage fueling our relentless pursuit of freedom's dawn.</p>
      <p>As we call forth new recruits to join our ranks, we do so with reverence and solemnity, for we know that every Helldiver who stands upon the battlefield carries with them the indomitable spirit of those who have fallen, their sacrifice a clarion call to arms that echoes across the stars. Let us honor their memory with each step we take, with each victory we claim, for in doing so, we ensure that their sacrifice was not in vain, that their legacy endures in the triumph of democracy's righteous cause.</p>
    `
  },
  SOSBeacon: {
    name: "SOS Beacon",
    sequence: ["up", "down", "right", "up"],
    content: `
      <p>The SOS Beacon is used to signal the needs for reinforcements, allow other Helldivers to join your cause. As its signal pierces the heavens, it serves as a testament to the unyielding spirit of Helldivers, reaffirming our commitment to confront tyranny head-on and triumph against all odds, together.</p>
    `
  },
  Resupply: {
    name: "Resupply",
    sequence: ["down", "down", "up", "right"],
    content: `

    `
  },
  SuperEarthFlag: {
    name: "Super Earth Flag",
    sequence: ["down", "up", "down", "up"],
    content: `
      <p>Bearing the emblem of Super Earth, the beacon of democracy and freedom across the galaxy, the Super Earth Flag is a symbol of our unwavering resolve and steadfast commitment to our cause. When called down to claim a particular location, it serves as a rallying point for all Helldivers, a bastion of liberty amidst the chaos of war. As its colors unfurl upon the battlefield, they inspire hope and unity, reminding us of the values we hold dear and the sacrifices we make in the name of justice and democracy.</p>
    `
  },
  UploadData: {
    name: "Upload Data",
    sequence: ["left", "right", "up", "up", "up"],
    content: `
      <p>Uploading data...</p>
    `
  },
  Hellbomb: {
    name: "Hellbomb",
    sequence: ["down", "up", "left", "down", "up", "right", "down", "up"],
    content: `
      <p>The "Hellbomb" is a formidable weapon utilized by Helldivers to obliterate enemy encampments with overwhelming force. Upon deployment, it can be activated to unleash a massive explosion, creating a devastating blast radius that annihilates anything in its path. This destructive capability makes it an indispensable tool for clearing out entrenched enemy positions and disrupting hostile operations. However, its potency comes with a significant risk - Helldivers must evacuate the area swiftly to avoid being caught in the cataclysmic aftermath.</p>
    `
  }
}
