import { factions } from "$lib/data/factions"
import { Biome } from "$lib/data/biome"
import { Stratagem } from "$lib/data/stratagem"

export const bestiary = [{
  faction: factions[2],
  biome: Biome.Desert,
  description: `
    <p>In our never-ending battle against the relentless Terminid menace, Helldivers must stay sharp at all times. These insectoid adversaries come in all shapes and sizes, each packing its own set of deadly tricks. From the ferocious Warriors, with their razor-sharp claws and armored shells, to the cunning Stalkers, masters of deception lurking within the shadows, no encounter with the Terminids is without peril.</p>
    <p>Bile Spewers, brimming with corrosive bile, unleash devastating attacks that can decimate entire squads, while Chargers, with their meter-thick exoskeletons, charge forth with unstoppable force, requiring swift evasive maneuvers to evade their deadly assaults.</p>
    <p>Brood Commanders, directing their foul brethren with authoritarian shrieks, bring forth swarms of relentless attackers, while Bile Titans, the largest known strain, pose a formidable challenge, requiring heavy-duty weaponry and precise tactics to overcome.</p>
    <p>Amidst this array of formidable foes, Helldivers must rely on their training, teamwork, and unwavering determination to secure victory for Super Earth. Only through steadfast resolve and unyielding courage can the menace of the Terminids be vanquished, ensuring the survival of humanity against the relentless onslaught of the insectoid horde.</p>
  `,
  enemies: [{
    name: "Scavenger",
    stratagems: [Stratagem.ArcThrower, Stratagem.Flamethrower, Stratagem.GrenadeLauncher, Stratagem.Stalwart, Stratagem.GuardDogRover, Stratagem.OrbitalGasStrike, Stratagem.EagleStrafingRun, Stratagem.TeslaTower],
    appearance: "The lowliest of the Terminids, the Scavenger embodies mindless aggression and blind obedience to the hive's insatiable appetite for destruction. With a physique reminiscent of a prehistoric nightmare, this insectoid menace scuttles forth with reckless abandon, its presence heralded by a shrill shriek that beckons its brethren to swarm and overwhelm any who dare oppose the hive.",
    quicktip: "Don't underestimate their numbers. Whether you're facing Basic Scavengers, Juvenile Bile Spitters, or agile Hoppers, swift elimination is key. Focus your fire to prevent being overwhelmed and secure victory for Super Earth!",
    images: ["/images/bestiary/backdrop-scavenger.jpg", "/images/bestiary/backdrop-bile-spitter.jpg", "/images/bestiary/backdrop-hopper.jpg"],
    tactics: `
      <h3>Basic Scavenger</h3>
      <p>These Basic Scavengers may seem primitive, but don't underestimate them, its strength lies in numbers, as even a modest swarm can swiftly dispatch unwary Helldivers. Despite its diminutive stature, it boasts surprising resilience, capable of felling a Helldiver with a mere handful of strikes.</p>
      <h3>Bile Spitter</h3>
      <p>Ah, the juvenile Bile Spitter, still in its larval stage, it's armed with a short-range bile-spit in addition to its claws. This nasty little critter's job is to ensnare and slow down its prey, making it easier for the rest of the swarm to close in. You'll often see them patrolling alongside other young horrors, casting a shadow of dread wherever they go.</p>
      <h3>Hopper</h3>
      <p>Young and agile, the Hopper, akin to a fledgling Hunter, bounds across the battlefield in the early stages of conflict and beyond. Blessed with a remarkable leaping ability, it traverses vast distances with ease, posing a modestly elevated threat due to its mobility. Despite its prowess, it remains susceptible to disciplined Helldivers who meet it with unwavering resolve.</p>
    `
  }, {
    name: "Warrior",
    stratagems: [Stratagem.ArcThrower, Stratagem.Flamethrower, Stratagem.GrenadeLauncher, Stratagem.MachineGun, Stratagem.PatriotExosuit, Stratagem.MachineGunSentry],
    appearance: "Warriors embody a relentless pursuit of mindless expansion and destruction. Their presence and armored exoskeletons evoke primal fear, serving as a chilling testament to the savagery of the Terminid swarm. With razor-sharp claws and menacing stature, they loom ominously over the battlefield, instilling terror in all who dare oppose their insatiable hunger for conquest.",
    quicktip: "Precision is paramount. Aim for weak spots beneath their armor or target their distinctive features for maximum effect. Employ shotguns or armor-piercing weapons to strip away defenses and expose vulnerabilities. And always be prepared for the explosive demise of a Bile Warrior, avoiding the resulting bile blast at all costs.",
    images: ["/images/bestiary/backdrop-warrior.jpg", "/images/bestiary/backdrop-bile-warrior.jpg", "/images/bestiary/backdrop-hive-guard.jpg"],
    tactics: `
      <h3>Basic Warrior</h3>
      <p>The quintessential foot soldier of the Terminid horde, the Basic Warrior, though lightly armored, poses a significant threat in numbers. Agile and relentless, it charges forth with single-minded determination, its clawed appendages poised to rend flesh and bone. Utilizing its burrowing ability, it can emerge from beneath the earth to launch surprise attacks, catching unwary Helldivers off guard.</p>
      <p>Target the soft spots beneath its formidable shell or aim for a direct strike to the face to maximize damage. Alternatively, employ shotguns or armor-piercing weaponry to strip away its defenses and expose vulnerable areas.</p>
      <p>Exercise caution when engaging in close quarters, as destroying its head triggers a brief berserker state, increasing its attack speed and aggression. Maintain distance to mitigate the risk posed by this volatile reaction.</p>
      <h3>Bile Warrior</h3>
      <p>A twisted variant of its basic counterpart, the Bile Warrior presents a deadly threat with its ability to unleash corrosive bile upon death. It shares the traits of the Basic Warrior but distinguishes itself with its volatile demise, releasing a noxious explosion of bile upon termination. Exercise extreme caution to avoid being caught in the resulting blast radius.</p>
      <p>Identified by its distinct yellow-orange bile sack, target this vulnerable area to expedite its demise while minimizing the risk of collateral damage from its explosive demise.</p>
      <h3>Hive Guard</h3>
      <p>As guardians of the Terminid hive, Hive Guards stand as stalwart sentinels, their armored forms serving as bastions of defense against would-be intruders. They exhibit enhanced armor and defensive capabilities compared to their lesser brethren.</p>
      <p>When under fire, Hive Guards adopt a defensive stance, hunkering down to minimize vulnerability. Exploit gaps in their armor or utilize armor-piercing weaponry to bypass their formidable defenses.</p>
      <p>Consider flanking maneuvers or coordinated assaults with squadmates to exploit vulnerabilities in their armor and neutralize them with maximum efficiency. Alternatively, strategic retreat may be warranted when faced with overwhelming opposition.</p>
    `
  }, {
    name: "Hunter",
    stratagems: [Stratagem.ArcThrower, Stratagem.GrenadeLauncher, Stratagem.Stalwart, Stratagem.GuardDogRover, Stratagem.EagleNapalmAirstrike, Stratagem.EagleStrafingRun],
    appearance: "The elusive Hunters epitomize the relentless pursuit of prey within the Terminid swarm. Agile and cunning, these formidable adversaries employ swift leaps and evasive maneuvers to outmaneuver their targets with unparalleled efficiency. Despite their diminutive size, their relentless pursuit and formidable agility make them a formidable threat on the battlefield.",
    quicktip: "Keep your distance and use rapid-firing weapons or explosives to take down Hunters swiftly. Prioritize eliminating them early in engagements to prevent them from overwhelming your squad with their relentless pursuit and debilitating bile attacks.",
    images: ["/images/bestiary/backdrop-hunter.jpg"],
    tactics: `
      <p>Hunters exhibit a penchant for swift and relentless pursuit of their prey. Their agile movements and lightning-fast leaps make them challenging targets, evading incoming fire with remarkable dexterity.</p>
      <p>When engaging Hunters, prioritize swift and decisive action to neutralize them before they can close the distance and inflict harm upon Helldivers. Though agile and elusive, they possess relatively weak flesh and can be dispatched with ease when confronted with overwhelming firepower.</p>
      <p>Be wary of their ability to apply bile to Helldivers with their tongue attacks, impairing movement and hindering evasion. In challenging operations and beyond, Hunters gain the capacity to inflict prolonged slowing effects, further complicating engagements and requiring adaptability and strategic finesse to overcome.</p>
      <p>Employ explosives and rapid-firing weapons to effectively dispatch groups of Hunters, maximizing efficiency and minimizing the risk of being overwhelmed by their relentless assaults. Prioritize eliminating Hunters at the onset of engagements to mitigate their agility and prevent them from swarming Helldivers en masse.</p>
      <p>Despite their nimble movements and relentless pursuit, Hunters succumb swiftly to focused firepower. Maintain distance from these agile adversaries and utilize explosives or rapid-firing weapons to dispatch them with ruthless efficiency, ensuring victory in the face of the Terminid onslaught.</p>
    `
  }, {
    name: "Stalker",
    stratagems: [Stratagem.AntiMaterielRifle, Stratagem.Railgun, Stratagem.JumpPack, Stratagem.EagleSmokeStrike, Stratagem.OrbitalSmokeStrike, Stratagem.AutocannonSentry],
    appearance: "Stalkers epitomize stealth and subterfuge within the Terminid ranks, lurking in the shadows and striking with lethal precision. Camouflaged amidst the darkness, these formidable adversaries blend seamlessly into their surroundings, making them notoriously difficult to detect.",
    quicktip: `These ferocious beasts might think they are cloaked, but a keen eye will spot them from a mile away. Upon sight prioritise finding their hideout, heading towards the direction they came from. Killing them only goes so far when their backup is ready on speed dial.`,
    images: ["/images/bestiary/backdrop-stalker.jpg"],
    tactics: `
      <p>Stalkers, the masters of deception, lurk within the shadows, patiently awaiting the perfect moment to strike with lethal precision. Their cunning maneuvers and lightning-fast assaults render them elusive targets, demanding sharp observation and lightning-quick reflexes to effectively neutralize.</p>
      <p>To unveil the presence of these stealthy foes, strategic utilization of Smoke Grenades or disturbance of spore clouds emitted from scattered eggs is paramount. Moving with the swiftness akin to their brethren, the Hunters, Stalkers employ similar tactics, utilizing their elongated tongues to ensnare and incapacitate their prey from afar.</p>
      <p>When confronted by Stalkers, prioritize concentrated firepower and heavy ordinance to swiftly dispatch these nimble adversaries. While resilient, Stalkers succumb to sustained onslaughts or well-placed explosives, thwarting their attempts to unleash havoc upon Helldivers.</p>
      <p>Be wary of Stalker tongue-attacks, which have the potential to knock down players and disrupt coordinated assaults. Additionally, Stalkers may temporarily retreat when faced with significant damage, requiring relentless pursuit and unwavering determination to ensure victory.</p>
      <p>Eradicating Stalker dens is imperative to halt the spawning of additional threats, depriving the Terminid swarm of reinforcements and shifting the tide of battle in favor of Super Earth. Encounters with Stalkers serve as ominous indicators of nearby nests, compelling proactive measures to eliminate these elusive adversaries and ensure humanity's triumph.</p>
    `
  }, {
    name: "Bile Spewer",
    stratagems: [Stratagem.GrenadeLauncher, Stratagem.AntiMaterielRifle, Stratagem.Autocannon, Stratagem.ShieldGeneratorPack, Stratagem.JumpPack, Stratagem.Eagle110mmRocketPods],
    appearance: "The grotesque Bile Spewer is a product of catastrophic chemical spills on Terminid E-710 farms, its bloated thorax brimming with corrosive acids ready to unleash upon encountering the forces of Democracy. These repugnant adversaries exude an aura of toxicity, their vile bile capable of dissolving even the hardiest of armor.",
    quicktip: "Neutralize Bile Spewers swiftly by targeting their vulnerable spots with explosives or aiming for their heads. Be wary of their corrosive attacks and mortar mode from a distance",
    images: ["/images/bestiary/backdrop-nursing-spewer.jpg", "/images/bestiary/backdrop-bile-spewer.jpg"],
    tactics: `
      <p>Bile Spewers pose a significant threat to Helldivers, relentlessly bombarding their targets with streams of corrosive bile from a distance. Their acidic attacks can inflict substantial damage and hinder the movement of their adversaries, making them formidable adversaries on the battlefield.</p>
      <h3>Nursing Spewers</h3>
      <p>Targeting the back of Bile Spewers with explosives or aiming for their heads is the most effective method of neutralizing these noxious foes. Explosives and armor-piercing ammunition can exploit their vulnerabilities and swiftly dispatch them.</p>
      <p>A well-placed grenade or railgun shot to the head can often incapacitate or eliminate Spewers with ease, while high-explosive rounds from a grenade launcher can neutralize them in just a few shots.</p>
      <h3>Bile Spewer</h3>
      <p>A more threatening Spewer variant, the Bile Spewer, possess similar traits but exhibit increased tracking and damage on their attacks. As well as vastly improved resillience to light ammunition.</p>
      <p>It is imperative to remain vigilant, as Bile Spewers can transition into mortar mode when positioned at a distance, unleashing volleys of acidic projectiles capable of devastating Helldivers caught in their path.</p>
      <p>Engaging Bile Spewers demands precision and agility, as their highly corrosive attacks and chitinous armor pose significant challenges to Helldivers. Prioritize targeting their vulnerable abdomens and employ rapid-fire weaponry, explosives, and high-impact ordnance to neutralize these noxious adversaries and secure victory for Super Earth.</p>
      <p>Rare White Spewers present an unknown challenge to Helldivers, requiring further study to ascertain their capabilities.</p>
    `
  }, {
    name: "Charger",
    stratagems: [Stratagem.Railgun, Stratagem.Autocannon, Stratagem.RecoillessRifle, Stratagem.Flamethrower, Stratagem.ExpendableAntiTank, Stratagem.ShieldGeneratorPack, Stratagem.JumpPack, Stratagem.OrbitalRailcannonStrike, Stratagem.OrbitalPrecisionStrike],
    appearance: "The Charger presents a formidable threat on the battlefield, boasting a meter-thick exoskeleton that renders it nearly impervious to conventional weaponry. Its hulking frame and swift movements make it a daunting adversary, capable of unleashing devastating charges against unsuspecting Helldivers. There are two variants of the Charger, believed to be a male and female variants, but no mating patterns have been observed. The \"bull\" appears to be more heavily armored, but in practice they are equal in resillience, strength, and intelligence.",
    quicktip: "Their armor is next to impenetrable, but as is customary with bugs, their biggest weakness is their head. A well aim shot of heavy artillery will instantly take them out. Otherwise target their legs with heavy armor-piercing weapons or explosives to reveal their weak spots. Keep your distance, use obstacles, and coordinate with your squadmates to outmaneuver these armored behemoths.",
    images: ["/images/bestiary/backdrop-charger.jpg", "/images/bestiary/backdrop-charger-bull.jpg"],
    tactics: `
      <p>When facing down a Charger, forget subtlety and finesse - this is a battle of brute force and rapid response. Chargers are the armored juggernauts of the Terminid horde, bulldozing their way through anything that stands in their path.</p>
      <p>Your best bet for taking down these armored monstrosities? Aim for the head for the big guns. A well placed heavy explosive round will instantly send them to bug heaven. If you didn't bring your glassses, instead aim for their legs with your heaviest armor-piercing weaponry and blast away until you see sparks fly. Break through their armored plating, and you'll reveal the juicy bits underneath - aim for those, and you'll be sending these oversized bugs back to the scrap heap in no time.</p>
      <p>But if you're short on anti-armor firepower, fear not - explosives are your best friend. Lob a grenade or call in an airstrike to create weak spots in their tough exterior, then unload everything you've got into those chinks in their armor. It's like cracking open a nut - if the nut was the size of a small tank and wanted to crush you into paste.</p>
      <p>Remember, when tangling with Chargers, it's all about staying one step ahead of their thunderous charges. Keep your distance, use obstacles to your advantage, and work together with your squadmates to outmaneuver these armored behemoths. And whatever you do, don't let them get too close - you'll regret it faster than you can say "bug squashed."</p>
    `
  }, {
    name: "Brood Commander",
    stratagems: [Stratagem.AntiMaterielRifle, Stratagem.Railgun, Stratagem.LaserCannon, Stratagem.Autocannon, Stratagem.MortarSentry],
    appearance: "Behold, the Brood Commander - a towering monstrosity of armored menace, leading the Terminid horde with a ruthless determination to crush democracy beneath its spiky claws. With its imposing presence and commanding aura, it strikes fear into the hearts of even the most battle-hardened Helldivers.",
    quicktip: "These armored giants may be slower, but they bring a swarm of critters ready to wreak havoc. Target their vulnerable limbs to slow their advance, but stay wary - even headless, they're dangerous. Keep your distance, keep moving, and rain down firepower until they're down for the count.",
    images: ["/images/bestiary/backdrop-brood-commander.jpg"],
    tactics: `
      <p>When facing off against a Brood Commander, you're in for a fight unlike any other. These armored behemoths may be slower than their brethren, but make no mistake - they're just as deadly. They bring a whole swarm of critters along with them, ready to unleash chaos at a moment's notice. But fear not, Helldiver, for where there's armor, there's weakness. While the Brood Commander may be encased in thick plating, its limbs are vulnerable targets ripe for destruction. Aim true and blast away at its legs, sending chunks of armor flying and slowing its advance to a crawl.</p>
      <p>And don't be fooled by its headless charge - even without a noggin, this beast is still a force to be reckoned with. Keep your distance, stay on the move, and rain down a hail of bullets until it collapses in a heap of twisted metal and shattered dreams.</p>
      <p>But beware - victory comes at a price. Should you fail to finish the job, the Brood Commander will unleash a berserker fury, gaining speed and strength in its final moments as it lashes out with a ferocity unmatched by any other Terminid. Stay vigilant, stay focused, and remember - the fate of Super Earth rests in your hands.</p>
    `
  }, {
    name: "Bile Titan",
    stratagems: [Stratagem.Railgun, Stratagem.Autocannon, Stratagem.ExpendableAntiTank, Stratagem.JumpPack, Stratagem.Eagle110mmRocketPods, Stratagem.Eagle500KGBomb, Stratagem.OrbitalRailcannonStrike, Stratagem.OrbitalPrecisionStrike],
    appearance: "Prepare yourselves, Helldivers, for the ultimate test of courage and firepower - the monstrous Bile Titan. This towering bug, resembling a grotesque amalgamation of arachnid and nightmare, strides across the battlefield on four enormous legs, casting a sinister shadow over all who dare to oppose it. Its chitinous exoskeleton gleams with a sickly sheen, adorned with jagged spikes that serve as a grim reminder of its deadly capabilities.",
    quicktip: "These massive bugs are no joke, with acid attacks that can melt through anything in their path. Stay back, coordinate with your team, and use the terrain to your advantage. Aim for its mouth and vulnerable sacs to deal maximum damage.",
    images: ["/images/bestiary/backdrop-bile-titan.jpg"],
    tactics: `
      <p>Engaging a Bile Titan is not for the faint of heart, nor the ill-prepared. These behemoths of bugkind are among the toughest enemies you'll face, their massive frames and relentless attacks posing a formidable challenge to even the most seasoned Helldivers.</p>
      <p>But fear not, for where there's a will, there's a way - and with the right strategy, even the mightiest Titan can be brought to its knees. When confronting one of these hulking monstrosities, remember the following:</p>
      <ul>
        <li><strong>Keep Your Distance:</strong> The Bile Titan's acid attacks are devastating, capable of melting through armor and flesh alike. Maintain a safe distance at all times, and avoid getting caught in the crossfire.</li>
        <li><strong>Coordinate with Your Teammates:</strong> Bait the Titan and work together to exploit its weaknesses. While it's focused on one Helldiver, the others can target its vulnerable spots and chip away at its armor.</li>
        <li><strong>Use the Terrain to Your Advantage:</strong> Seek cover behind rocks, buildings, and other obstacles to evade the Titan's attacks. High ground can also give you a strategic advantage, allowing you to rain down fire from above while staying out of harm's way.</li>
      </ul>
      <p>As for targeting the Titan's weak spots, aim for its mouth and the vulnerable sacs beneath its body. These are the points where its armor is thinnest, making them prime targets for your firepower. Utilize anti-tank weapons, explosives, and precision stratagems to maximize your damage and bring the Titan to its knees.</p>
    `
  }, {
    name: "Shrieker",
    stratagems: [Stratagem.ArcThrower, Stratagem.PatriotExosuit, Stratagem.Eagle500KGBomb],
    appearance: "I'm sure by now you've heard the rumors of flying bugs... Don't be ridiculous, bugs don't fly! Preposterous! There's been some imagery making the rounds that seems to suggest otherwise. Don't be fooled. These so-called \"flying bugs\" are nothing more than propaganda spread by communists, all in an sad attempt to threaten our democracy. Now get back to doing your duty, Helldiver.",
    images: ["/images/bestiary/backdrop-shrieker.jpg"],
    tactics: `
      <p>We need to deal with who ever is spreading these lies. They have even gone as far as to construct fake nests in order to make their sad attempts at deceit more convincing. But we know better. Nevertheless, we need to deal with these threats. These "nests" can be spotted from the other side of the planet, sticking out like a Christmas tree on a beach holiday.</p>
      <p>Heavy weaponary will deal with their lies before they are able to deploy their kites. You heard that right, kites. They think they are clever, releasing kites from their towers that resemble flying bugs. But let me tell you, it doesn't take a genius to see through their ruse, you can spot the strings attaching these kites to their "nests". Idiots.</p>
      <p>When you do come close they release their lies in droves, hoping to overwhelm you. But as it happens the paper material these things are constructed off is no match to even the lightest bullets.  Arm yourselves with heavy weaponry capable of mowing down hordes, and you'll make short work of these propaganda machines. But watch out, their limp bodies still pack a punch as they hit the ground.</p>
      <p>And if push comes to shove, we'll deploy a Hellbomb at the base of those towers, blasting them to kingdom come in one fiery explosion that signals that Democracy will always prevail over communist lies.
      <p>Flying bugs, as if.</p>
    `
  }]
}, {
  faction: factions[3],
  biome: Biome.Highlands,
  description: `
    <p>The Automatons epitomize disdain among humanity, representing a loathed presence on the battlefield. From the lumbering monstrosity of the Hulk to the feeble and archaic Tank, the Automatons are an outdated force in need of Liberty. That's where you come in!</p>
    <p>To combat the threat posed by Automatons, soldiers must capitalize on their inherent deficiencies and exploit their vulnerabilities at every opportunity. Whether through guerrilla tactics or precision strikes, victory against the mechanical horde is achievable with the right strategy and determination. As Super Earth's frontline defenders, Helldivers must endure the presence of Automatons with grit and determination, striving to overcome their outdated tactics and inferior technology. Only through sheer perseverance and cunning can the menace of the Automatons be vanquished, ensuring the continued survival of Democracy.</p>
  `,
  enemies: [{
    name: "Trooper",
    stratagems: [Stratagem.ArcThrower, Stratagem.GrenadeLauncher, Stratagem.Stalwart, Stratagem.GuardDogRover, Stratagem.EagleStrafingRun, Stratagem.MachineGunSentry, Stratagem.MortarSentry],
    appearance: "Troopers epitomize the heartless fusion of man and machine, a grotesque testament to the Automaton faction's relentless pursuit of destruction. Standing tall in their cold, mechanical exoskeletons, they resemble twisted mockeries of human soldiers, their once-human forms now encased in cold steel and unfeeling circuits. Their expressionless visages betray no emotion, their lifeless eyes scanning the battlefield with ruthless efficiency. Armed with sleek assault rifles, they move with mechanical precision, each step a symphony of calculated violence.",
    quicktip: "Target their exposed heads for maximum damage and intercept their calls for backup to maintain the upper hand. Use the environment to your advantage, taking cover and employing guerrilla tactics to outsmart them. Grenades are your best friend for disrupting clusters of Troopers and causing chaos.",
    tactics: `
      <p>Engaging Troopers demands a blend of sharp wit and lethal precision. Their weak points lie exposed in the form of their heads; target these vulnerable areas to dispatch them with maximum efficiency. Keep a keen eye on their movements, anticipating their attempts to call in reinforcements. Intercept their distress signals swiftly, denying them the chance to bolster their ranks and turning the tide of battle in our favor.</p>
      <p>Utilize the environment to your advantage, seeking cover and employing guerrilla tactics to outmaneuver these relentless adversaries. Grenades prove invaluable in disrupting clusters of Troopers, unleashing fiery chaos amidst their ranks and sowing confusion in their mechanical minds.</p>
    `
  }, {
    name: "Commissar",
    stratagems: [Stratagem.AntiMaterielRifle],
    appearance: "The Commissar embodies a crude imitation of military leadership, its mechanical form augmented with slightly faster processing and a rudimentary command subroutine. Standing apart from the frontline combat, it exudes an air of despicable cowardice, devoid of any semblance of sentience.",
    quicktip: "When spotting a group of Automatons try to spot the Commissar before engaging. Taking them out early is vital in preventing them from calling in reinforcements. Beware its agile jetpack and lethal blades in combat.",
    tactics: `
      <p>Confronting a Commissar demands strategic finesse and lightning-fast reflexes. Understand its nefarious role as a commander, orchestrating reinforcements to bolster the Automaton ranks. Intercept its distress signals with ruthless efficiency, throwing a wrench in its gears and seizing control of the battlefield.</p>
      <p>Beware the Commissar's knack for hurling grenades at Helldivers, a lethal gambit that demands nerves of steel and lightning-quick reactions. Brave Helldivers may snatch these explosive gifts from the air, turning the tables on their metallic adversaries and showcasing our ingenuity in the face of adversity.</p>
      <p>As the conflict escalates, so too does the Commissar's arsenal. At more evolved stages it unveils a devastating secondary ranged onslaught, engulfing Helldivers in fiery retribution. Anticipate this treacherous assault and maneuver with precision to minimize casualties and retain control of the field.</p>
      <p>While the Commissar may prefer to keep its distance, it won't hesitate to close in for the kill once the frontline troops have been dealt with. Employ ranged weaponry to target its vulnerable spots, aiming for headshots to dispatch it with swift efficiency.</p>
      <p>However, exercise caution in the face of its relentless pursuit, facilitated by a jetpack that grants it unparalleled agility across the battlefield. Avoid engaging in close-quarters combat whenever possible, as its dual blades pose a grave threat to unwary Helldivers.</p>
      <p>Remember, the Commissar's ability to summon Bot Drops is a potent tool that must be countered with unwavering resolve. By disrupting this vital function, we strike a decisive blow against the Automaton scourge and pave the path to victory in the name of Super Earth.</p>
    `
  }, {
    name: "Scout Strider",
    stratagems: [Stratagem.RecoillessRifle, Stratagem.ExpendableAntiTank, Stratagem.Autocannon, Stratagem.Railgun],
    appearance: "A walking fortress operated by a lesser machine, guided by the crude intelligence of an Automaton Trooper. Towering above the battlefield, its boxy armor plating serves as a formidable barrier against enemy fire, concealing the Trooper within as it rains death upon its foes with relentless efficiency. Despite its imposing presence, the Scout Strider is but another futile attempt by the Automaton faction to grasp true intelligence, a twisted reflection of their ceaseless pursuit of dominance.",
    quicktip: "Target the Trooper manning the turret or dismantle the legs to immobilize them. Coordinate with your team to unleash coordinated assaults and exploit their vulnerabilities. Their slow turning speed is easily exploited when working together.",
    tactics: `
      <p>Locking horns with Scout Striders demands a blend of strategic wizardry and unyielding firepower. Their armored hide and menacing turret make them a force to be reckoned with, capable of raining down a hail of bullets on unsuspecting Helldivers. To thwart this menace, seek refuge behind cover and unleash armor-piercing ordnance to pierce their defenses and silence the Trooper within.</p>
      <p>Exploit their Achilles' heels with surgical precision. Targeting the hapless Trooper manning the turret is a guaranteed method to cripple the Scout Strider, stripping it of its primary offensive punch. Navigate the battlefield with finesse, leveraging elevated terrain to secure a clear shot and deliver crushing headshots to the hapless pilot. Alternatively, focus your firepower on dismantling the Scout Strider's legs, immobilizing it and leaving it ripe for the picking. Armaments like the Anti-Material Rifle or Machine Gun excel in delivering pinpoint, armor-piercing blows to disassemble the mechanical behemoth piece by piece.</p>
      <p>Harness the power of teamwork and coordination to unleash a devastating barrage against Scout Striders. Deploy explosives and anti-armor weaponry to unleash ferocious assaults that exploit their vulnerabilities and tip the scales of battle in your favor. Remember, triumphing over the Scout Striders demands more than sheer brawn; it requires tactical finesse to outmaneuver these formidable adversaries and secure glory for Super Earth.</p>
    `
  }, {
    name: "Berserker",
    stratagems: [Stratagem.Autocannon, Stratagem.AntiMaterielRifle, Stratagem.JumpPack, Stratagem.AutocannonSentry],
    appearance: "A primitive actualization of barbarity, the Berserker epitomizes the Automaton faction's relentless pursuit of brutality. Each chainsaw arm houses a CPU programmed with a singular objective: to close the space between saw and target with ruthless efficiency. Towering over the battlefield, its mechanical form exudes an aura of primal aggression, its movements driven by an insatiable hunger for destruction.",
    quicktip: "Keep your distance to evade their brutal melee assaults, while peppering them with ranged firepower to weaken their armor. Target their head or exposed belly with precision strikes to maximize damage. Focus on disabling their chainsaw arms to neutralize their primary threat.",
    tactics: `
      <p>Dancing with Berserkers demands a delicate balance of caution and ferocity. While lumbering compared to their Automaton brethren, they compensate with bone-crushing melee assaults that can swiftly overwhelm unsuspecting Helldivers. Keep your distance to evade their brutal onslaughts, peppering them with ranged firepower to whittle away at their imposing armor.</p>
      <p>Pinpoint their soft spots and exploit them with surgical precision. Take aim at their noggin or the exposed belly to unleash maximum carnage, employing shotgun blasts, grenades, or armor-piercing weaponry to pierce their defenses and bring them crashing down.</p>
      <p>Render their chainsaw arms useless to neutralize their primary threat. Focus your fire on their appendages, employing armor-piercing munitions to sever their limbs and hobble their offensive prowess.</p>
      <p>When facing down Berserkers, teamwork and coordination are paramount to overcoming their formidable resilience. Concentrate your firepower on vulnerable points and unleash an unrelenting barrage of attacks to keep them on the back foot. With cunning strategy and bold action, victory against the Berserkers is well within grasp, securing yet another triumph for the glory of Super Earth.</p>
    `
  }, {
    name: "Devastator",
    stratagems: [Stratagem.Autocannon, Stratagem.AntiMaterielRifle, Stratagem.RecoillessRifle, Stratagem.Railgun],
    appearance: "The ironclad Devastator embodies the relentless might of the Automaton faction, a formidable adversary armed with a diverse array of heinous weaponry. From arm-cannons to arm-shields, arm-machine guns, and shoulder-mounted multiple rocket launchers, it stands as a formidable sentinel of the Automatons' totalitarian worldview. Clad in medium armor, its mechanical form exudes an aura of unyielding aggression, each movement a testament to its unwavering dedication to crushing all opposition.",
    quicktip: "Despite their slow pace, they pack a punch with heavy weaponry. Target their weak points, like their heads or their legs, with high-caliber weapons to take them down quickly. Disrupt their offensive by aiming for their limbs.",
    tactics: `
      <p>Engaging Devastators demands a combination of precision and strategic finesse. While slower than other Automatons, they compensate with an arsenal of devastating weaponry capable of decimating Helldiver ranks with ruthless efficiency. Identify their weak points and exploit them with surgical precision, utilizing high-caliber weaponry to penetrate their armor and neutralize the threat they pose.</p>
      <p>Focus your firepower on their exposed heads, the sole vulnerability in their formidable armor plating. Aim for headshots to swiftly incapacitate them, depriving them of their leadership and turning the tide of battle in your favor.</p>
      <p>Disrupt their offensive capabilities by targeting their limbs, utilizing explosives and heavy weaponry to disable their armaments and cripple their combat effectiveness. Prioritize teamwork and coordination to maximize your effectiveness against these formidable adversaries, coordinating your attacks to overwhelm them and secure victory for Super Earth.</p>
      <p>Additionally, taking down their legs is another sure way to get them to stop their approach. They will simply fall over and die. Who designed these things?</p>
    `
  }, {
    name: "Hulk",
    stratagems: [Stratagem.Autocannon, Stratagem.AntiMaterielRifle, Stratagem.RecoillessRifle, Stratagem.Railgun, Stratagem.Eagle110mmRocketPods, Stratagem.OrbitalPrecisionStrike, Stratagem.OrbitalRailcannonStrike, Stratagem.Eagle500KGBomb],
    appearance: "As with all Automaton units, the plodding Hulk epitomizes brute force and relentless aggression, its towering form bristling with heavy weaponry designed for maximum destruction. From autocannons and rocket launchers to flamethrowers and buzzsaws, it stands as a formidable sentinel of the Automatons' relentless pursuit of dominance. Clad in heavy armor plating, its mechanical form exudes an aura of unyielding aggression, each step a thunderous proclamation of its unwavering dedication to crushing all opposition.",
    quicktip: "Target their weak spots with high-caliber ordnance to breach their armor. Focus on their exposed craniums for swift incapacitation. Disrupt their offensive capabilities by targeting their appendages. If all else fails, bring the big guns!",
    tactics: `
      <p>Entangling with Devastators demands a blend of surgical precision and tactical cunning. Despite their lumbering gait, they compensate with a terrifying array of weaponry capable of decimating Helldiver ranks with chilling efficiency. Pinpoint their weak spots and exploit them with the finesse of a surgeon, deploying high-caliber ordnance to breach their armor and neutralize the threat they present.</p>
      <p>Concentrate your firepower on their exposed craniums, the sole chink in their formidable armor plating. Deliver headshots with pinpoint accuracy to swiftly incapacitate them, robbing them of their leadership and shifting the battle's momentum in your favor.</p>
      <p>Disrupt their offensive capabilities by targeting their appendages, employing explosives and heavy weaponry to dismantle their armaments and undermine their combat prowess. Prioritize teamwork and coordination to maximize your efficacy against these formidable adversaries, orchestrating synchronized assaults to overwhelm them and secure victory for the cause of Super Earth.</p>
    `
  }, {
    name: "Tank",
    stratagems: [Stratagem.Autocannon, Stratagem.ExpendableAntiTank, Stratagem.AntiMaterielRifle, Stratagem.RecoillessRifle, Stratagem.Railgun, Stratagem.Eagle110mmRocketPods, Stratagem.OrbitalPrecisionStrike, Stratagem.OrbitalRailcannonStrike, Stratagem.Eagle500KGBomb],
    appearance: "Modeled after Super Earth tank designs, the Automaton Annihilator Tank stands as a crude imitation of its Super Earth counterpart, albeit plainly inferior in numerous aspects. Its bulky frame and slow-turning turret evoke a sense of outdated menace, a relic of a bygone era repurposed for the Automatons' relentless pursuit of domination.",
    quicktip: "Target it's engines and vents to inflict maximum damage. Their slow speed and reaction times makes them vulnerable to coordinated attacks. Draw out their fire by ducking in and out of cover.",
    tactics: `
      <p>Taking on Annihilator Tanks demands a blend of nimbleness and overwhelming firepower. These lumbering behemoths of destruction pose a dire threat to Super Earth's forces, capable of unleashing devastating barrages of heavy firepower with chilling efficiency. Identify their Achilles' heels and exploit them with the precision of a surgeon, deploying high-caliber weaponry and strategic positioning to neutralize the menace they embody.</p>
      <p>Concentrate your firepower on the vulnerable points on the tank's hull and turret, targeting the exposed vents and weak top armor to inflict maximum devastation. Employ explosives and armor-piercing munitions to breach their formidable armor plating, coordinating your assaults to overwhelm them and secure victory for Super Earth.</p>
      <p>Execute evasive maneuvers to dodge their relentless barrage, utilizing physical cover to evade their cannon and machine gun salvos. Seize the opportunity presented by their sluggish mobility to outmaneuver them, exploiting cover and prone stances to minimize exposure to their unyielding onslaught.</p>
      <p>Leverage a diverse arsenal of Stratagems and weaponry to exploit their weaknesses, combining anti-armor support weapons with explosive ordinance to swiftly dismantle their formidable defenses. Prioritize teamwork and coordination to maximize your efficacy against these formidable adversaries, orchestrating synchronized assaults to overwhelm them and ensure triumph for Super Earth.</p>
    `
  }, {
    name: "Dropship",
    stratagems: [Stratagem.ExpendableAntiTank, Stratagem.RecoillessRifle],
    appearance: "Packed to the brim with robotic infantry, Dropships serve as the vanguard of the Automatons' relentless assault, conducting rapid deployment of advanced and mechanized units to reinforce their positions on the battlefield. These imposing vessels loom ominously over the battlefield, their sleek and streamlined design hinting at the formidable firepower they carry within.",
    quicktip: "Target their thrusters with high-caliber weaponry to ground them swiftly, but beware of the ensuing explosion.",
    tactics: `
      <p>Confronting Dropships demands impeccable timing and cunning strategy. Crafted for swift deployment, these formidable vessels lack an obvious Achilles' heel, necessitating Helldivers to employ ingenuity to neutralize them and halt the influx of additional Automaton soldiers.</p>
      <p>Taking aim at the thrusters with high-caliber weaponry like the recoilless rifle or disposable anti-tank ordnance can swiftly ground the Dropship, causing it to plummet and potentially squash any Automatons onboard. Yet, caution is paramount to evade the ensuing explosion or being pinned beneath the wreckage.</p>
      <p>Alternatively, intercepting the Dropship before it disgorges its payload by targeting the bots during its deployment sequence can disrupt its mission and obstruct reinforcements from joining the fray. Utilize explosive ordnance to hasten the process, but remain wary of the hazards inherent in engaging the Dropship up close.</p>
      <p>When confronting Dropships, prioritize coordination and communication with your comrades to maximize your efficacy and minimize the peril they pose. By pinpointing their vulnerabilities and deploying strategic maneuvers, you can thwart the Automatons' endeavors to fortify their positions and secure triumphant glory for Super Earth.</p>
    `
  }]
}]
