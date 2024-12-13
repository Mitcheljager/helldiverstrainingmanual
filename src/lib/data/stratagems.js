import { Stratagem } from "$lib/data/stratagem"

export const stratagems = [{
  category: "Support Weapons",
  content: `
    <p>Support Weapons are the bread and butter of any self-respecting Helldiver, providing you with the firepower you need to spread liberty and democracy across the galaxy - one bullet at a time.</p>
    <p>These bad boys aren't your grandma's knitting needles - oh no! From heavy machine guns to rocket launchers, each Support Weapon is a shining beacon of freedom, ready to rain down righteous fury upon our enemies and make them wish they'd stayed home.</p>
    <p>When the bugs start crawling and the Automatons come a-knockin', don't just stand there like a deer in headlights - grab weapon, lock and load, and show those alien scum what it means to mess with the best! With the power of democracy and the support of your fellow soldiers, Super Earth will be victorious.</p>
  `,
  items: [
    Stratagem.MachineGun,
    Stratagem.AntiMaterielRifle,
    Stratagem.Stalwart,
    Stratagem.ExpendableAntiTank,
    Stratagem.RecoillessRifle,
    Stratagem.Flamethrower,
    Stratagem.Autocannon,
    Stratagem.HeavyMachineGun,
    Stratagem.AirburstRocketLauncher,
    Stratagem.Commando,
    Stratagem.Railgun,
    Stratagem.Spear
  ]
}, {
  category: "Orbital Cannons",
  content: `
    <p>Orbital Cannons encompass a range of devastating stratagems that call down destruction from the heavens, raining fire and fury upon our enemies with unparalleled force. From precision strikes to sweeping barrages, these orbital weapons are the ultimate trump card in our arsenal, turning the tide of battle with the flick of a switch.</p>
    <p>Whether it's the relentless bombardment of the Orbital 120mm HE Barrage, the precision annihilation of the Orbital Railcannon Strike, or the fiery wrath of the Orbital Laser, each stratagem in this category brings its own brand of destruction to the battlefield. No enemy is safe from the wrath of the heavens when these weapons are unleashed, and victory is all but assured when they're on our side.</p>
    <p>But with great power comes great responsibility - communication with teammates is advised, lest we inadvertently turn each other into smoking craters along with the enemy. So when the going gets tough and the bugs start swarming, don't hesitate to call in the big guns from above.</p>

  `,
  items: [
    Stratagem.OrbitalGatlingBarrage,
    Stratagem.OrbitalAirburstStrike,
    Stratagem.Orbital120mmHEBarrage,
    Stratagem.Orbital380mmHEBarrage,
    Stratagem.OrbitalWalkingBarrage,
    Stratagem.OrbitalLaser,
    Stratagem.OrbitalNapalmBarrage,
    Stratagem.OrbitalRailcannonStrike
  ]
}, {
  category: "Hangar",
  content: `
    <p>The Eagle represents the pinnacle of aerial firepower, delivering devastating strikes from above to crush our enemies beneath the heel of justice. These strategems are deployed from the Eagle strike craft, a fearsome machine of war that prowls the skies, raining destruction upon our adversaries with unparalleled precision and power.</p>
    <p>From strafing runs to precision airstrikes, the Eagle category offers a diverse array of weapons and tactics to suit any battlefield scenario. Whether it's clearing small targets with a hail of bullets or obliterating fortified positions with a massive bomb, the Eagle is always ready to answer the call of duty and deliver justice from above.</p>
    <p>But the true strength of the Eagle lies not just in its firepower, but in its versatility. With short cooldowns and multiple charges, Eagle strategems can be deployed rapidly and repeatedly, allowing us to maintain constant pressure on the enemy and keep them on the back foot at all times.</p>
    <p>However, with great power comes great responsibility. The destructive force unleashed by the Eagle can wreak havoc on both friend and foe alike if not used judiciously. It's imperative that we exercise caution and precision when calling in these strikes, ensuring that our firepower is directed towards our enemies and not our allies.</p>
  `,
  items: [
    Stratagem.EagleStrafingRun,
    Stratagem.EagleAirstrike,
    Stratagem.EagleClusterBomb,
    Stratagem.EagleNapalmAirstrike,
    Stratagem.JumpPack,
    Stratagem.EagleSmokeStrike,
    Stratagem.Eagle110mmRocketPods,
    Stratagem.Eagle500KGBomb
  ]
}, {
  category: "Bridge",
  content: `
    <p>From precision strikes and explosive barrages to incendiary bombardments and high-energy laser beams, these orbital weapons deliver unparalleled destructive power against enemy targets. Whether clearing entrenched enemy positions, disrupting hostile advances, or obliterating high-value targets, these devastating orbital strikes are essential assets in the Helldivers' arsenal, enabling them to turn the tide of battle and secure victory in the ongoing struggle for liberty and democracy across the galaxy.</p>
  `,
  items: [
    Stratagem.OrbitalPrecisionStrike,
    Stratagem.OrbitalGasStrike,
    Stratagem.OrbitalEMSStrike,
    Stratagem.OrbitalSmokeStrike,
    Stratagem.HMGEmplacement,
    Stratagem.ShieldGeneratorRelay,
    Stratagem.TeslaTower
  ]
}, {
  category: "Engineering Bay",
  content: `
    <p>The Engineering Bay offers a diverse array of armaments and defensive tools utilized by Helldivers to confront and overcome enemy threats across the battlefield. From explosive ordnance like the anti-personnel Minefield and Grenade Launcher to advanced energy-based weaponry such as the Laser Cannon and Arc Thrower, each weapon offers unique tactical advantages tailored to various combat situations. Additionally, defensive equipment like the Ballistic Shield Backpack and Shield Generator Pack provide vital protection and support for Helldivers in the heat of battle. Whether raining down explosive devastation or unleashing precise energy beams, these weapons enable Helldivers to unleash the full extent of their combat prowess in the ongoing struggle for liberty and democracy against alien adversaries.</p>
  `,
  items: [
    Stratagem.AntiPersonnelMinefield,
    Stratagem.SupplyPack,
    Stratagem.GrenadeLauncher,
    Stratagem.LaserCannon,
    Stratagem.IncendiaryMines,
    Stratagem.GuardDogRover,
    Stratagem.BallisticShieldBackpack,
    Stratagem.ArcThrower,
    Stratagem.AntiTankMines,
    Stratagem.QuasarCannon,
    Stratagem.ShieldGeneratorPack,
  ]
}, {
  category: "Robotics Workshop",
  content: `
    <p>These versatile sentries serve as stalwart guardians, capable of deploying devastating weaponry to hold strategic locations and thwart hostile advances. From machine gun emplacements and gatling turrets to mortar installations and energy-based defenses, each Sentry variant offers unique advantages tailored to different combat scenarios. When deployed strategically, these automated sentries can provide invaluable support, bolstering Helldiver firepower and securing key objectives with unwavering vigilance. However, their effectiveness hinges on proper placement and maintenance, as well as the Helldivers' ability to anticipate and adapt to enemy tactics.</p>
  `,
  items: [
    Stratagem.MachineGunSentry,
    Stratagem.GatlingSentry,
    Stratagem.MortarSentry,
    Stratagem.GuardDog,
    Stratagem.AutocannonSentry,
    Stratagem.RocketSentry,
    Stratagem.EMSMortarSentry,
    Stratagem.PatriotExosuit,
    Stratagem.EmancipatorExosuit
  ]
}, {
  category: "Chemical Agents",
  content: `
    <p>Biological Warfare, on our terms. They started it.</p>
  `,
  items: [
    Stratagem.Steriliser,
    Stratagem.GuardDogDogBreath
  ]
}, {
  category: "Urban Legends",
  content: `
    <p>Taking the fight to the streets.</p>
  `,
  items: [
    Stratagem.DirectionalShield,
    Stratagem.FlameSentry,
    Stratagem.AntiTankEmplacement
  ]
}, {
  category: "Mission Stratagems",
  items: [
    Stratagem.Reinforce,
    Stratagem.SOSBeacon,
    Stratagem.Resupply,
    Stratagem.SuperEarthFlag,
    Stratagem.UploadData,
    Stratagem.Hellbomb
  ]
}]
