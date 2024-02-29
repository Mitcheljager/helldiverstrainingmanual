export const stratagems = [{
  category: "Weapons",
  items: [{
    name: "Machine Gun",
    sequence: ["down", "left", "down", "up", "right"],
    content: `
      <p>Behold, soldier, the mighty MG-43 Machine Gun - a weapon fit for heroes and hotheads alike. This trusty companion is your ticket to glory on the battlefield, but beware, for with great power comes great responsibility (and a hefty kickback).</p>
      <p>Now, let's talk tactics. The MG-43 is your go-to for those "oh crap" moments when you're faced with bug breach hordes or pesky large enemies. But here's the catch - <strong>ammo is scarce</strong>, so it's like momma always said: "Use it wisely, or you'll be walking home."</p>
      <p>When it comes to accuracy and control, remember this mantra: "Stationary is the new black." <strong>Plant your feet</strong>, soldier, and watch as your shots hit the mark with precision. And if you really want to show those bugs who's boss, get low - <strong>crouch for stability</strong> or go full commando and hit the dirt for maximum accuracy.</p>
      <p>Now, about armor penetration - the MG-43 may not cut through armor like a hot knife through butter, but it'll sure give those enemies a run for their money. So when you see a tough bug or a sturdy automaton, don't be afraid to lay down some suppressive fire and watch those bullets find their mark.</p>
    `
  }, {
    name: "Anti-Material Rifle",
    sequence: ["down", "left", "right", "up", "down"],
    content: `
      <p>The Anti-Materiel Rifle is the ultimate precision instrument for dealing with those big, bad enemies that think they're invincible. This beast of a sniper rifle is your solution when you need to reach out and touch someone – hard.</p>
      <p>Imagine the scenario: you're face-to-face with a towering Automaton Hulk, its armored plates gleaming with menace. With the Anti-Materiel Rifle in hand, you take aim, squeeze the trigger, and watch as two shots are all it takes to dismantle that mechanical monstrosity.</p>
      <p>But here's the kicker – this ain't your granddaddy's hunting rifle. The Anti-Materiel Rifle can only be aimed down sights, meaning you'll need a steady hand and a keen eye to make every shot count. Lucky for you, this baby comes equipped with multiple zoom levels, so you can pick off targets from afar with surgical precision.</p>
      <p>And speaking of precision, here's a pro tip: stay low and steady to maximize stability and reduce recoil. Whether you're crouched behind cover or prone in the dirt, taking the time to line up your shot will ensure that each round finds its mark with deadly accuracy.</p>
      <p>So, soldier, when the chips are down and the Automatons are closing in, trust in the power of the Anti-Materiel Rifle to deliver justice from a distance. With its unmatched stopping power and pinpoint accuracy, liberty is just a well-placed shot away.</p>
    `
  }, {
    name: "Stalwart",
    sequence: ["down", "left", "down", "up", "up", "left"]
  }, {
    name: "Expendable Anti-Tank",
    sequence: ["down", "down", "left", "up", "right"]
  }, {
    name: "Recoilless Rifle",
    sequence: ["down", "left", "right", "right", "left"]
  }, {
    name: "Flamethrower",
    sequence: ["down", "left", "up", "down", "up"]
  }, {
    name: "Autocannon",
    sequence: ["down", "right", "left", "down", "down", "up", "up", "right"]
  }, {
    name: "Railgun",
    sequence: ["down", "right", "left", "down", "down", "up", "left", "down", "right"]
  }, {
    name: "Spear",
    sequence: ["down", "down", "up", "down", "down"]
  }]
}, {
  category: "Orbital",
  items: [{
    name: "Gatling Barrage",
    sequence: ["right", "down", "left", "up", "up"]
  }, {
    name: "Airburst Strike",
    sequence: ["right", "right", "right"]
  }, {
    name: "120MM HE Barrage",
    sequence: ["right", "down", "down", "left", "down", "right", "down", "down"]
  }, {
    name: "380MM HE Barrage",
    sequence: ["right", "down", "down", "up", "up", "left", "down", "down", "down"]
  }, {
    name: "Walking Barrage",
    sequence: ["right", "down", "right", "down", "right", "down"]
  }, {
    name: "Laser Strike",
    sequence: ["right", "up", "left", "up", "right", "left"]
  }, {
    name: "Railcannon Strike",
    sequence: ["right", "down", "up", "down", "left"]
  }]
}, {
  category: "Hangar",
  items: [{
    name: "Eagle Strafing Run",
    sequence: ["up", "right", "right"]
  }, {
    name: "Eagle Airstrike",
    sequence: ["up", "right", "down", "right"]
  }, {
    name: "Eagle Cluster Bomb",
    sequence: ["up", "right", "down", "down", "right", "down"]
  }, {
    name: "Eagle Napalm Airstrike",
    sequence: ["up", "right", "down", "up"]
  }, {
    name: "Jump Pack",
    sequence: ["down", "up", "up", "down", "up"]
  }, {
    name: "Eagle Smoke Strike",
    sequence: ["up", "right", "up", "down"]
  }, {
    name: "Eagle 110MM Rocket Pods",
    sequence: ["up", "down", "up", "left"]
  }, {
    name: "Eagle 500KG Bomb",
    sequence: ["up", "left", "down", "down", "down"]
  }]
}, {
  category: "Bridge",
  items: [{
    name: "Orbital Precision Strikes",
    sequence: ["right", "right", "up"]
  }, {
    name: "Orbital Gas Strike",
    sequence: ["right", "right", "down", "right"]
  }, {
    name: "Orbital EMS Strike",
    sequence: ["right", "right", "left", "down"]
  }, {
    name: "Orbital Smoke Strike",
    sequence: ["right", "right", "down", "up"]
  }, {
    name: "HMG Emplacement",
    sequence: ["up", "down", "left", "right", "right", "left"]
  }, {
    name: "Shield Generator Relay",
    sequence: ["down", "up", "left", "right", "left", "down"]
  }, {
    name: "Tesla Tower",
    sequence: ["down", "up", "right", "up", "left", "right"]
  }]
}, {
  category: "Engineering Bay",
  items: [{
    name: "Anti-Personnel Minefield",
    sequence: ["down", "left", "down", "up", "right"]
  }, {
    name: "Supply Pack",
    sequence: ["down", "left", "down", "up", "up", "down"]
  }, {
    name: "Grenade Launcher",
    sequence: ["down", "left", "down", "up", "left", "down", "down"]
  }, {
    name: "Laser Cannon",
    sequence: ["down", "left", "down", "up", "left"]
  }, {
    name: "Incendiary Mines",
    sequence: ["down", "left", "left", "down"]
  }, {
    name: "Guard Dog Rover",
    sequence: ["down", "left", "down", "up", "left", "down", "down"]
  }, {
    name: "Ballistic Shield Backpack",
    sequence: ["down", "left", "up", "up", "right"]
  }, {
    name: "Arc Thrower",
    sequence: ["down", "right", "up", "left", "down"]
  }, {
    name: "Shield Generator Pack",
    sequence: ["down", "up", "left", "down", "right", "right"]
  }]
}, {
  category: "Robotics Workshop",
  items: [{
    name: "Machine Gun Sentry",
    sequence: ["down", "up", "right", "right", "up"]
  }, {
    name: "Gatling Sentry",
    sequence: ["down", "up", "right", "left", "down"]
  }, {
    name: "Mortar Sentry",
    sequence: ["down", "up", "right", "right", "down"]
  }, {
    name: "Guard Dog",
    sequence: ["down", "up", "left", "up", "right", "down"]
  }, {
    name: "Autocannon Sentry",
    sequence: ["down", "up", "right", "up", "left", "up"]
  }, {
    name: "Rocket Sentry",
    sequence: ["down", "up", "right", "right", "left"]
  }, {
    name: "EMS Mortar Sentry",
    sequence: ["down", "down", "up", "up", "left"]
  }]
}, {
  category: "Mission Stratagems",
  items: [{
    name: "Reinforce",
    sequence: ["up", "down", "right", "left", "up"]
  }, {
    name: "SOS Beacon",
    sequence: ["up", "down", "right", "up"]
  }, {
    name: "Super Earth Flag",
    sequence: ["down", "up", "down", "up"]
  }, {
    name: "Upload Data",
    sequence: ["left", "right", "up", "up", "up"]
  }, {
    name: "Hellbomb",
    sequence: ["down", "up", "left", "down", "up", "right", "down", "up"]
  }]
}]
