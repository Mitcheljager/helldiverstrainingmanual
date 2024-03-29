import { Environmental } from "$lib/data/environmental"
import { Biome } from "$lib/data/biome"
import { Sector } from "$lib/data/sector"

export const planetData = {
  0: {
    name: "Super Earth",
    sector: Sector.Sol,
    biome: null,
    environmentals: []
  },
  1: {
    name: "Klen Dahth II",
    sector: Sector.Altus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  2: {
    name: "Pathfinder V",
    sector: Sector.Altus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  3: {
    name: "Widow's Harbor",
    sector: Sector.Altus,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  4: {
    name: "New Haven",
    sector: Sector.Altus,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  5: {
    name: "Pilen V",
    sector: Sector.Altus,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  6: {
    name: "Hydrofall Prime",
    sector: Sector.Barnard,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  7: {
    name: "Zea Rugosia",
    sector: Sector.Ferris,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  8: {
    name: "Darrowsport",
    sector: Sector.Barnard,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  9: {
    name: "Fornskogur II",
    sector: Sector.Barnard,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  10: {
    name: "Midasburg",
    sector: Sector.Barnard,
    biome: null,
    environmentals: []
  },
  11: {
    name: "Cerberus IIIc",
    sector: Sector.Cancri,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  12: {
    name: "Prosperity Falls",
    sector: Sector.Cancri,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  13: {
    name: "Okul VI",
    sector: Sector.Gothmar,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  14: {
    name: "Martyr's Bay",
    sector: Sector.Cantolus,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  15: {
    name: "Freedom Peak",
    sector: Sector.Cantolus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  16: {
    name: "Fort Union",
    sector: Sector.Orion,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  17: {
    name: "Kelvinor",
    sector: Sector.Cantolus,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  18: {
    name: "Wraith",
    sector: Sector.Idun,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  19: {
    name: "Igla",
    sector: Sector.Kelvin,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  20: {
    name: "New Kiruna",
    sector: Sector.Kelvin,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  21: {
    name: "Fort Justice",
    sector: Sector.Kelvin,
    biome: null,
    environmentals: []
  },
  22: {
    name: "Zegema Paradise",
    sector: Sector.Kelvin,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  23: {
    name: "Providence",
    sector: Sector.Iptus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  24: {
    name: "Primordia",
    sector: Sector.Iptus,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  25: {
    name: "Sulfura",
    sector: Sector.Celeste,
    biome: Biome.Ethereal,
    environmentals: []
  },
  26: {
    name: "Nublaria I",
    sector: Sector.Celeste,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  27: {
    name: "Krakatwo",
    sector: Sector.Celeste,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  28: {
    name: "Volterra",
    sector: Sector.Korpus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  29: {
    name: "Crucible",
    sector: Sector.Korpus,
    biome: null,
    environmentals: []
  },
  30: {
    name: "Veil",
    sector: Sector.Barnard,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  31: {
    name: "Marre IV",
    sector: Sector.Barnard,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  32: {
    name: "Fort Sanctuary",
    sector: Sector.Cancri,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  33: {
    name: "Seyshel Beach",
    sector: Sector.Cancri,
    biome: Biome.Ethereal,
    environmentals: []
  },
  34: {
    name: "Hellmire",
    imageCount: 3,
    sector: Sector.Mirin,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  35: {
    name: "Effluvia",
    sector: Sector.Cancri,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  36: {
    name: "Solghast",
    sector: Sector.Gothmar,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  37: {
    name: "Diluvia",
    sector: Sector.Gothmar,
    biome: null,
    environmentals: []
  },
  38: {
    name: "Viridia Prime",
    sector: Sector.Cantolus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  39: {
    name: "Obari",
    sector: Sector.Cantolus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  40: {
    name: "Myradesh",
    sector: Sector.Idun,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  41: {
    name: "Atrama",
    sector: Sector.Idun,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  42: {
    name: "Emeria",
    sector: Sector.Kelvin,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  43: {
    name: "Barabos",
    sector: Sector.Marspira,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  44: {
    name: "Fenmire",
    sector: Sector.Marspira,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  45: {
    name: "Mastia",
    sector: Sector.Marspira,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  46: {
    name: "Shallus",
    sector: Sector.Talus,
    biome: Biome.Ethereal,
    environmentals: []
  },
  47: {
    name: "Krakabos",
    sector: Sector.Iptus,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  48: {
    name: "Iridica",
    sector: Sector.Iptus,
    biome: Biome.Ethereal,
    environmentals: []
  },
  49: {
    name: "Azterra",
    sector: Sector.Orion,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  50: {
    name: "Azur Secundus",
    sector: Sector.Sten,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  51: {
    name: "Ivis",
    sector: Sector.Celeste,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  52: {
    name: "Slif",
    sector: Sector.Celeste,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  53: {
    name: "Caramoor",
    sector: Sector.Korpus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  54: {
    name: "Kharst",
    sector: Sector.Gallux,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  55: {
    name: "Eukoria",
    sector: Sector.Morgon,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  56: {
    name: "Myrium",
    sector: Sector.Morgon,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  57: {
    name: "Kerth Secundus",
    sector: Sector.Rictus,
    biome: null,
    environmentals: []
  },
  58: {
    name: "Parsh",
    sector: Sector.Rictus,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  59: {
    name: "Reaf",
    sector: Sector.Saleria,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  60: {
    name: "Irulta",
    sector: Sector.Saleria,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  61: {
    name: "Emorath",
    sector: Sector.Meridian,
    biome: null,
    environmentals: []
  },
  62: {
    name: "Ilduna Prime",
    sector: Sector.Meridian,
    biome: null,
    environmentals: []
  },
  63: {
    name: "Maw",
    sector: Sector.Idun,
    biome: null,
    environmentals: [Environmental.IntenseHeat]
  },
  64: {
    name: "Meridia",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: Sector.Umlaut,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  65: {
    name: "Borea",
    sector: Sector.Sagan,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  66: {
    name: "Curia",
    sector: Sector.Marspira,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  67: {
    name: "Tarsh",
    sector: Sector.Marspira,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  68: {
    name: "Shelt",
    sector: Sector.Talus,
    biome: null,
    environmentals: []
  },
  69: {
    name: "Imber",
    sector: Sector.Talus,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  70: {
    name: "Blistica",
    sector: Sector.Gellert,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  71: {
    name: "Ratch",
    sector: Sector.Iptus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  72: {
    name: "Julheim",
    sector: Sector.Nanos,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  73: {
    name: "Valgaard",
    sector: Sector.Iptus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  74: {
    name: "Arkturus",
    sector: Sector.Arturion,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  75: {
    name: "Esker",
    sector: Sector.Falstaff,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  76: {
    name: "Terrek",
    sector: Sector.Orion,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  77: {
    name: "Cirrus",
    sector: Sector.Orion,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  78: {
    name: "Crimsica",
    imageCount: 3,
    sector: Sector.Draco,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  79: {
    name: "Heeth",
    sector: Sector.Orion,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  80: {
    name: "Veld",
    sector: Sector.Orion,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  81: {
    name: "Alta V",
    sector: Sector.Korpus,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  82: {
    name: "Ursica XI",
    sector: Sector.Borgus,
    biome: null,
    environmentals: []
  },
  83: {
    name: "Inari",
    sector: Sector.Korpus,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  84: {
    name: "Skaash",
    sector: Sector.Ursa,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  85: {
    name: "Moradesh",
    sector: Sector.Celeste,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  86: {
    name: "Rasp",
    sector: Sector.Gallux,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  87: {
    name: "Bashyr",
    sector: Sector.Gallux,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  88: {
    name: "Regnus",
    sector: Sector.Morgon,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  89: {
    name: "Mog",
    sector: Sector.Morgon,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  90: {
    name: "Valmox",
    sector: Sector.Rictus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  91: {
    name: "Iro",
    sector: Sector.Rictus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  92: {
    name: "Grafmere",
    sector: Sector.Rictus,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  93: {
    name: "New Stockholm",
    sector: Sector.Hanzo,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  94: {
    name: "Oasis",
    sector: Sector.Rictus,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  95: {
    name: "Genesis Prime",
    sector: Sector.Rictus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  96: {
    name: "Outpost 32",
    sector: Sector.Saleria,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  97: {
    name: "Calypso",
    sector: Sector.Saleria,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  98: {
    name: "Elysian Meadows",
    sector: Sector.Guang,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  99: {
    name: "Alderidge Cove",
    sector: Sector.Guang,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  100: {
    name: "Trandor",
    sector: Sector.Sten,
    biome: Biome.Tundra,
    environmentals: []
  },
  101: {
    name: "East Iridium Trading Bay",
    sector: Sector.Tarragon,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  102: {
    name: "Liberty Ridge",
    sector: Sector.Meridian,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  103: {
    name: "Baldrick Prime",
    sector: Sector.Meridian,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  104: {
    name: "The Weir",
    sector: Sector.Theseus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  105: {
    name: "Kuper",
    sector: Sector.Theseus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  106: {
    name: "Oslo Station",
    sector: Sector.Sagan,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  107: {
    name: "Pöpli IX",
    sector: Sector.Xzar,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  108: {
    name: "Gunvald",
    sector: Sector.Sagan,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  109: {
    name: "Dolph",
    sector: Sector.Nanos,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  110: {
    name: "Bekvam III",
    sector: Sector.Nanos,
    biome: null,
    environmentals: []
  },
  111: {
    name: "Duma Tyr",
    sector: Sector.Nanos,
    biome: null,
    environmentals: []
  },
  112: {
    name: "Vernen Wells",
    sector: Sector.Hydra,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  113: {
    name: "Aesir Pass",
    sector: Sector.Hydra,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  114: {
    name: "Aurora Bay",
    sector: Sector.Valdis,
    biome: Biome.Tundra,
    environmentals: []
  },
  115: {
    name: "Penta",
    sector: Sector.Lacaille,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  116: {
    name: "Gaellivare",
    sector: Sector.Talus,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  117: {
    name: "Vog-sojoth",
    sector: Sector.Tanis,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  118: {
    name: "Kirrik",
    sector: Sector.Arturion,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  119: {
    name: "Mortax Prime",
    sector: Sector.Arturion,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  120: {
    name: "Wilford Station",
    sector: Sector.Arturion,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  121: {
    name: "Pioneer II",
    sector: Sector.Arturion,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  122: {
    name: "Erson Sands",
    sector: Sector.Falstaff,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  123: {
    name: "Socorro III",
    sector: Sector.Falstaff,
    biome: null,
    environmentals: []
  },
  124: {
    name: "Bore Rock",
    sector: Sector.Falstaff,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  125: {
    name: "Fenrir III",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: Sector.Umlaut,
    biome: Biome.Moon,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  126: {
    name: "Turing",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: Sector.Umlaut,
    biome: Biome.Ethereal,
    environmentals: []
  },
  127: {
    name: "Angel's Venture",
    sector: Sector.Orion,
    biome: Biome.Tundra,
    environmentals: []
  },
  128: {
    name: "Darius II",
    sector: Sector.Borgus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  129: {
    name: "Acamar IV",
    sector: Sector.JinXi,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  130: {
    name: "Achernar Secundus",
    sector: Sector.Borgus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  131: {
    name: "Achird III",
    sector: Sector.Borgus,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  132: {
    name: "Acrab XI",
    sector: Sector.Ursa,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  133: {
    name: "Acrux IX",
    sector: Sector.Ursa,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  134: {
    name: "Acubens Prime",
    sector: Sector.Gallux,
    biome: null,
    environmentals: []
  },
  135: {
    name: "Adhara",
    sector: Sector.Gallux,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  136: {
    name: "Afoyay Bay",
    sector: Sector.Gallux,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  137: {
    name: "Ain-5",
    sector: Sector.Hanzo,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  138: {
    name: "Alairt III",
    sector: Sector.Hanzo,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  139: {
    name: "Alamak VII",
    sector: Sector.Hanzo,
    biome: null,
    environmentals: []
  },
  140: {
    name: "Alaraph",
    sector: Sector.Akira,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  141: {
    name: "Alathfar XI",
    sector: Sector.Akira,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  142: {
    name: "Andar",
    sector: Sector.Akira,
    biome: null,
    environmentals: []
  },
  143: {
    name: "Asperoth Prime",
    sector: Sector.Akira,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  144: {
    name: "Bellatrix",
    sector: Sector.Guang,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  145: {
    name: "Botein",
    sector: Sector.Guang,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  146: {
    name: "Osupsam",
    sector: Sector.Tarragon,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  147: {
    name: "Brink-2",
    sector: Sector.Tarragon,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  148: {
    name: "Bunda Secundus",
    sector: Sector.Tarragon,
    biome: null,
    environmentals: []
  },
  149: {
    name: "Canopus",
    sector: Sector.Tarragon,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  150: {
    name: "Caph",
    sector: Sector.Theseus,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  151: {
    name: "Castor",
    sector: Sector.Theseus,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  152: {
    name: "Durgen",
    sector: Sector.Severin,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  153: {
    name: "Draupnir",
    sector: Sector.Xzar,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  154: {
    name: "Mort",
    sector: Sector.Xzar,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  155: {
    name: "Ingmar",
    sector: Sector.Xzar,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  156: {
    name: "Charbal-VII",
    sector: Sector.Andromeda,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  157: {
    name: "Charon Prime",
    sector: Sector.Andromeda,
    biome: null,
    environmentals: [Environmental.IntenseHeat]
  },
  158: {
    name: "Choepessa IV",
    sector: Sector.Trigon,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  159: {
    name: "Choohe",
    sector: Sector.Lacaille,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  160: {
    name: "Chort Bay",
    sector: Sector.Lacaille,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  161: {
    name: "Claorell",
    sector: Sector.Tanis,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  162: {
    name: "Clasa",
    sector: Sector.Tanis,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  163: {
    name: "Demiurg",
    sector: Sector.Tanis,
    biome: Biome.Tundra,
    environmentals: []
  },
  164: {
    name: "Deneb Secundus",
    sector: Sector.Arturion,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  165: {
    name: "Electra Bay",
    sector: Sector.Arturion,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  166: {
    name: "Enuliale",
    sector: Sector.Lestrade,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  167: {
    name: "Epsilon Phoencis VI",
    sector: Sector.Lestrade,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  168: {
    name: "Erata Prime",
    tidbit: `<p>One of four planets where the Terminid Control System (TCS) was deployed, a network of massive towers that cover the planet in a neurotoxin known as Termincide. The deployment of these TCS towers took the combined effort of many helldivers and eventually lead to the Terminids being driven away for good.</p>`,
    sector: Sector.Umlaut,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  169: {
    name: "Estanu",
    sector: Sector.Draco,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  170: {
    name: "Fori Prime",
    sector: Sector.Draco,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  171: {
    name: "Gacrux",
    sector: Sector.JinXi,
    biome: null,
    environmentals: []
  },
  172: {
    name: "Gar Haren",
    sector: Sector.JinXi,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  173: {
    name: "Gatria",
    sector: Sector.JinXi,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  174: {
    name: "Gemma",
    sector: Sector.Ursa,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  175: {
    name: "Grand Errant",
    sector: Sector.Farsight,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  176: {
    name: "Hadar",
    sector: Sector.Ferris,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  177: {
    name: "Haka",
    sector: Sector.Leo,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  178: {
    name: "Haldus",
    sector: Sector.Ferris,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  179: {
    name: "Halies Port",
    sector: Sector.Leo,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  180: {
    name: "Herthon Secundus",
    sector: Sector.Ferris,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  181: {
    name: "Hesoe Prime",
    sector: Sector.Rigel,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  182: {
    name: "Heze Bay",
    sector: Sector.Hanzo,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  183: {
    name: "Hort",
    sector: Sector.Rigel,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  184: {
    name: "Hydrobius",
    sector: Sector.Omega,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  185: {
    name: "Karlia",
    sector: Sector.Omega,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  186: {
    name: "Keid",
    sector: Sector.Akira,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  187: {
    name: "Khandark",
    sector: Sector.Guang,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  188: {
    name: "Klaka 5",
    sector: Sector.Alstrad,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  189: {
    name: "Kneth Port",
    sector: Sector.Alstrad,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  190: {
    name: "Kraz",
    sector: Sector.Alstrad,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  191: {
    name: "Kuma",
    sector: Sector.Hawking,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  192: {
    name: "Lastofe",
    sector: Sector.Theseus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  193: {
    name: "Leng Secundus",
    sector: Sector.Quintus,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  194: {
    name: "Lesath",
    sector: Sector.Lacaille,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  195: {
    name: "Maia",
    sector: Sector.Severin,
    biome: null,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  196: {
    name: "Malevelon Creek",
    imageCount: 3,
    sector: Sector.Severin,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  197: {
    name: "Mantes",
    imageCount: 4,
    sector: Sector.Xzar,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  198: {
    name: "Marfark",
    sector: Sector.Andromeda,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  199: {
    name: "Martale",
    sector: Sector.Andromeda,
    biome: null,
    environmentals: []
  },
  200: {
    name: "Matar Bay",
    sector: Sector.Andromeda,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  201: {
    name: "Meissa",
    sector: Sector.Ymir,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  202: {
    name: "Mekbuda",
    sector: Sector.Valdis,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  203: {
    name: "Menkent",
    sector: Sector.Hydra,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  204: {
    name: "Merak",
    sector: Sector.Valdis,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  205: {
    name: "Merga IV",
    sector: Sector.Valdis,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  206: {
    name: "Minchir",
    sector: Sector.Gellert,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  207: {
    name: "Mintoria",
    sector: Sector.Gellert,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  208: {
    name: "Mordia 9",
    sector: Sector.Hawking,
    biome: Biome.Ethereal,
    environmentals: []
  },
  209: {
    name: "Nabatea Secundus",
    sector: Sector.Lestrade,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  210: {
    name: "Navi VII",
    sector: Sector.Lestrade,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  211: {
    name: "Nivel 43",
    imageCount: 3,
    sector: Sector.Mirin,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  212: {
    name: "Oshaune",
    imageCount: 2,
    sector: Sector.Mirin,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  213: {
    name: "Overgoe Prime",
    sector: Sector.Sten,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  214: {
    name: "Pandion-XXIV",
    sector: Sector.JinXi,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  215: {
    name: "Partion",
    sector: Sector.Sten,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  216: {
    name: "Peacock",
    sector: Sector.Sten,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  217: {
    name: "Phact Bay",
    sector: Sector.JinXi,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  218: {
    name: "Pherkad Secundus",
    sector: Sector.Farsight,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  219: {
    name: "Polaris Prime",
    sector: Sector.Farsight,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  220: {
    name: "Pollux 31",
    sector: Sector.Farsight,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  221: {
    name: "Prasa",
    sector: Sector.Farsight,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  222: {
    name: "Propus",
    sector: Sector.Leo,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  223: {
    name: "Ras Algethi",
    sector: Sector.Leo,
    biome: null,
    environmentals: []
  },
  224: {
    name: "RD-4",
    sector: Sector.Rigel,
    biome: Biome.Moon,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  225: {
    name: "Rogue 5",
    sector: Sector.Rigel,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  226: {
    name: "Rirga Bay",
    sector: Sector.Rigel,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  227: {
    name: "Seasse",
    sector: Sector.Omega,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  228: {
    name: "Senge 23",
    sector: Sector.Omega,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  },
  229: {
    name: "Setia",
    sector: Sector.Omega,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  230: {
    name: "Shete",
    sector: Sector.XiTauri,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  231: {
    name: "Siemnot",
    sector: Sector.XiTauri,
    biome: Biome.RainForest,
    environmentals: [Environmental.IonStorms]
  },
  232: {
    name: "Sirius",
    sector: Sector.XiTauri,
    biome: Biome.Moon,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  233: {
    name: "Skat Bay",
    sector: Sector.XiTauri,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  234: {
    name: "Spherion",
    sector: Sector.Quintus,
    biome: Biome.Jungle,
    environmentals: [Environmental.VolcanicActivity, Environmental.Rainstorms]
  },
  235: {
    name: "Stor Tha Prime",
    sector: Sector.Quintus,
    biome: Biome.IceMoss,
    environmentals: [Environmental.ExtremeCold]
  },
  236: {
    name: "Stout",
    sector: Sector.Quintus,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  237: {
    name: "Termadon",
    sector: Sector.Quintus,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  238: {
    name: "Tibit",
    sector: Sector.Severin,
    biome: Biome.Ethereal,
    environmentals: []
  },
  239: {
    name: "Tien Kwan",
    tidbit: `
      <p>Tien Kwan is the proud home of the renowned Morgunson Arsenal, where the finest Exosuits are forged! These cutting-edge marvels were on the brink of deployment across the galaxy until those pesky Automatons swooped in, trying to take what is ours. But Democracy prevailed once again, for our brave Helldivers swiftly sprang into action to safeguard this treasure trove of technology.</p>
      <p>The Automatons, oblivious to the golden opportunity they had stumbled upon, were swiftly dealt with, thanks to the lightning-fast response of our elite forces. Super Earth's high command breathed a collective sigh of relief as Tien Kwan was liberated on March 8th, securing the future of the EXO-45 Patriot Exosuits and ensuring its immediate availability for requisition by our valiant troops. Another victory for Super Earth, thanks to the unwavering courage of our Helldivers!</p>
    `,
    sector: Sector.Theseus,
    biome: Biome.IceMossSpecial,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  240: {
    name: "Troost",
    tidbit: `<p>A mission was launched to capture an Automaton deep-space comms array from this planet. The Automaton have plans for something called "The Reclamation". Taking control of their communication may reveil vital intel on their plans.</p>`,
    sector: Sector.Trigon,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  241: {
    name: "Ubanea",
    imageCount: 2,
    sector: Sector.Severin,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  242: {
    name: "Ustotu",
    imageCount: 4,
    sector: Sector.Trigon,
    biome: Biome.Desert,
    environmentals: [Environmental.IntenseHeat, Environmental.Tremors]
  },
  243: {
    name: "Vandalon IV",
    imageCount: 4,
    sector: Sector.Trigon,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  244: {
    name: "Varylia 5",
    sector: Sector.Trigon,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  245: {
    name: "Wasat",
    sector: Sector.Ymir,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.AcidStorms]
  },
  246: {
    name: "Vega Bay",
    sector: Sector.Ymir,
    biome: Biome.Winter,
    environmentals: [Environmental.ExtremeCold, Environmental.Blizzards]
  },
  247: {
    name: "Wezen",
    sector: Sector.Ymir,
    biome: Biome.Desolate,
    environmentals: [Environmental.IntenseHeat, Environmental.FireTornadoes]
  },
  248: {
    name: "Vindemitarix Prime",
    sector: Sector.Valdis,
    biome: Biome.Ethereal,
    environmentals: []
  },
  249: {
    name: "X-45",
    sector: Sector.Ymir,
    biome: Biome.Swamp,
    environmentals: [Environmental.ThickFog]
  },
  250: {
    name: "Yed Prior",
    sector: Sector.Tanis,
    biome: Biome.CrimsonMoor,
    environmentals: [Environmental.IonStorms]
  },
  251: {
    name: "Zefia",
    sector: Sector.Tanis,
    biome: Biome.Ethereal,
    environmentals: []
  },
  252: {
    name: "Zosma",
    sector: Sector.Gellert,
    biome: Biome.Moon,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  253: {
    name: "Zzaniah Prime",
    sector: Sector.Gellert,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  254: {
    name: "Skitter",
    sector: Sector.Hawking,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  255: {
    name: "Euphoria III",
    sector: Sector.Hawking,
    biome: Biome.Moon,
    environmentals: [Environmental.ExtremeCold, Environmental.MeteorStorms]
  },
  256: {
    name: "Diaspora X",
    sector: Sector.Lestrade,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  257: {
    name: "Gemstone Bluffs",
    sector: Sector.Lestrade,
    biome: Biome.Highlands,
    environmentals: [Environmental.ThickFog, Environmental.Rainstorms]
  },
  258: {
    name: "Zagon Prime",
    sector: Sector.Mirin,
    biome: null,
    environmentals: [Environmental.IntenseHeat, Environmental.Sandstorms]
  },
  259: {
    name: "Omicron",
    imageCount: 4,
    sector: Sector.Lestrade,
    biome: Biome.Tundra,
    environmentals: []
  },
  260: {
    name: "Cyberstan",
    sector: Sector.Valdis,
    biome: Biome.Canyon,
    environmentals: [Environmental.Tremors]
  }
}
