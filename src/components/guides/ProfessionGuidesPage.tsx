"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";

interface Profession {
  name: string;
  description: string;
  content: string;
}

export function ProfessionGuidesPage() {
  const [expandedProfession, setExpandedProfession] = useState<string | null>(null);

  const toggleProfession = (professionName: string) => {
    if (expandedProfession === professionName) {
      setExpandedProfession(null);
    } else {
      setExpandedProfession(professionName);
    }
  };

  const copyMacro = async (macro: string) => {
    try {
      await navigator.clipboard.writeText(macro);
      // Could add a toast notification here in the future
    } catch (err) {
      console.error('Failed to copy macro:', err);
    }
  };

  const MacroButton = ({ macro }: { macro: string }) => (
    <button
      onClick={() => copyMacro(macro)}
      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
    >
      <Copy className="h-3 w-3" />
      Copy Macro
    </button>
  );

  const starterProfessions: Profession[] = [
    {
      name: "Brawler",
      description: "Foundation combat skills and unarmed combat basics",
      content: `BRAWLER BASICS:
Kill MOBs around starting cities (Mos Eisley is great) for levels 1-3 for all weapon trees.

For level 4, get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine. Another great place is the Singing Mountain Clan Cave on Dathomir, just kill the quick-spawn Slaves in the bottom to level quickly with little danger.

Berserk 1 is good to use at lower levels.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense and Intimidation/Warcry bonuses. Be aware that the highest that each of these bonuses can accumulate is +25.

UNARMED COMBAT:
Gained by killing MOBs with your bare fists or Vibro Knuckles.
Get some Vibro Knuckles speed sliced (around 1.7-1.5 should be good for speed). Use them instead of your fists, your damage will be slightly reduced, but you'll attack much quicker!
Use Unarmed Hit 1, Unarmed Lunge 1 (posture down), Warcry 1 (delay), and Intimidate 1.

ONEHANDED WEAPONS:
Gained by killing MOBs with a One-handed melee weapon.
Use a Dagger or a Survival Knife to get level 1, a Curved Sword until level 2, and then either the Curved Sword or a Vibroblade for the rest.
Use One-Hand Hit 1, One-Hand Body Hit 1 (hit Health bar), One-Hand Lunge 1 (posture down), Warcry 1 (delay), and Intimidate 1.

TWOHANDED WEAPONS:
Gained by killing MOBs with a Two-handed melee weapon.
Use an Axe to get level 1, a Two-Handed Axe until level 2, and then a Two-Handed Cleaver for the rest.
Use Two-Hand Hit 1, Two-Hand Head Hit 1 (hit Mind bar), Two-Hand Lunge 1 (posture down), Warcry 1 (delay), and Intimidate 1.

POLEARM WEAPONS:
Gained by killing MOBs with a Polearm melee weapon.
Use a Staff to get level 1, a Reinforced Combat Staff until level 2, and then a Lance for the rest.
Use Polearm Hit 1, Polearm Leg Hit 1 (hit Action bar), Polearm Lunge 1 (posture down), Warcry 1 (delay), and Intimidate 1.`
    },
    {
      name: "Marksman",
      description: "Master of ranged combat and weapon accuracy",
      content: `MARKSMAN BASICS:
Kill MOBs around starting cities (Mos Eisley is great) for levels 1-3 for all weapon trees.

For level 4, get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine. Another great place is the Singing Mountain Clan Cave on Dathomir, just kill the quick-spawn Slaves in the bottom to level quickly with little danger.

Overcharge Shot 1 is powerful, but also really slow and will rapidly decay a weapon if repeatedly used.

Speed and damage Power-ups are your friends, especially at the lower levels. Be aware that they will also increase the decay on your weapons.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense. Be aware that the highest that this bonus can accumulate is +25.

RIFLE WEAPONS:
Gained by killing MOBs with a Rifle ranged weapon.
Use a DLT20 to get level 1, a DLT20a until level 2, a Laser Rifle until Level 3, and then either the Laser Rifle or a Spraystick for the rest.
Use just regular shots or Head Shot 1 then 2 (hit Mind bar).

PISTOL WEAPONS:
Gained by killing MOBs with a Pistol ranged weapon.
Use a D18 to get level 1, a DL44 until level 2, then a Scout Blaster for the rest.
Use just regular shots or Body Shot 1 then 2 (hit Health bar).

CARBINE WEAPONS:
Gained by killing MOBs with a Carbine ranged weapon.
Use a DH17 to get level 1, a DH17 Short until level 2, an E11 Carbine until Level 3, and then a Laser Carbine for the rest.
Use just regular shots or Leg Shot 1 then 2 (hit Action bar).

RANGED WEAPON SUPPORT:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Medic",
      description: "Field medical support and basic healing abilities",
      content: `MEDIC BASICS:
For the medical lines, go up Pharmacology first so you can use some Stim Cs, then Diagnostics for speed, and finally First Aid (the higher stims will let you heal more anyway, so this line isn't as important). Organic Chemistry can be done at any point, unless you want to produce your own medical supplies (not recommended for the grinder).

MEDICAL:
Gained by healing damage and wounds, based on the amount healed.
More XP is gained from healing large amounts of both Health and Action.
Buy a crate of Small Stimpack Bs and a crate of Small Stimpack Cs with low Medical Usage. Use the Bs until you get high enough in Pharmacology to use the Cs (around level 3 or 4).

Optional: Get a Droid with a Medical Module of 110. This will allow you to heal wounds outside of a hospital-type area and increase the effectiveness of your healing.

Optional: Get some clothes with Bio-Engineer enhancements for Wound & Injury Treatment. Be aware that the highest this bonus can accumulate is +25.

HEALING LOCATIONS:
• A hospital-type area (ie. Medical Centers and Taverns). Just heal them as they come in (usually wounds). Try either Coronet or Theed.
• Join a large group doing missions and keep them healed.
• Healing Entertainer-types in Cantinas. This will only be Action heals, so the XP will be less. However, there is always a lot of people to heal and it's in a central area. Try either Coronet or Theed.
• Busy Starports. Heal the wounds of the players waiting for the next shuttle (need a medical droid) or those just arriving while they're loading. Coronet is a great place for this.

MEDICAL CRAFTING:
Gained by crafting items from the Medic Organic Chemistry line.
Use the same tips from the Artisan General Crafting guide.

Grind: Biological Effect Controller (36xp – 6 Organic, 6 Inorganic) → Organic Chemistry 4

Resources:
307 Biological Effect Controllers
1,842 Organic
1,842 Inorganic`
    },
    {
      name: "Artisan",
      description: "Basic crafting skills and resource gathering foundation",
      content: `GENERAL CRAFTING:
Gained by crafting items from the Artisan Engineering and Domestic Arts lines.
Use multiple General Crafting Tools.
Do not grind near a Crafting Station.
Use Practice Sessions for a 5% XP gain.

Macro:
/ui action toolbarSlot##;/selectDraftSchematic #;/pause 5;/nextCraftingStage;/nextCraftingStage;/createPrototype Practice noitem;/createPrototype Practice noitem;

Repeat the above macro in a loop for as many times as it takes to efficiently use several crafting tools.

The "##" in the macro references the spot on your toolbar where the crafting tool is located minus 1 (the number is zero-based).
The "#" in the schematic line references the schematic number of the item you wish to create. To determine this number, open up your Data Pad and go to the Draft Schematics tab. DO NOT SORT THIS PAGE! Now start from the top of the list and count every schematic that is difficulty 20 and below until you get to the item you want to craft.

GRIND:
Novice: Grip (21xp – 6 Metal, 4 Chemical) → Engineering 3
Engineering 3: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Engineering 4/Domestic Arts 4/Business 4

Resources:
225 Grips: 1,350 Metal, 900 Chemical
64 Wind Power Generators: 9,280 Metal, 2,880 Steel, 2,560 Low Grade Ore, 1,280 Non-Ferrous Metal, 640 Aluminum

TOTAL: 13,510 Steel, 2,560 Low Grade Ore, 1,920 Aluminum, 900 Chemical

SURVEYING:
Gained by Sampling resources (not the Surveying part, ironically)
Make or buy any Survey Tool type.
Find a high resource concentration spot (+80%). NOT RADIOACTIVE!
Begin sampling.

Sampling Macro:
/kneel;/pause 3;/sample;/pause 5;/sit;/pause 60;/ui action toolbarSlot##;

The "##" in the macro references the spot on your toolbar where this macro is located minus 1 (the number is zero-based) in order to loop the macro.

While sampling a dialog "Event" will occasionally pop up, this macro will bypass it but you will still have to close the dialogs eventually (they just won't stop you from sampling).

The best method is to go to Coronet, make (or buy) all the different surveying tools, find the resource with the highest concentration in the city, get a doctor buff, and sample that spot. This way you don't have to worry about MOBs attacking you and you can easily go refresh your buffs when they run out.`
    },
    {
      name: "Scout",
      description: "Wilderness survival expert and exploration specialist",
      content: `SCOUT BASICS:
Get the Exploration line first, as it makes getting around much easier. The rest can be done in any order, but I'd recommend doing Hunting next so you can better harvest creatures to get the resources needed for the Trapping and Wilderness Survival lines.

SCOUTING:
Gained primarily by harvesting resources from defeated creatures (Meat/Hide/Bone). The amount of XP earned is based on the amount of resources harvested.
Scouting XP is also gained from using Mask Scent and successfully avoiding detection from aggressive creatures, where the creature's level determines the XP gained.

You can only harvest from a creature once. Also, some creatures don't have all 3 resources available for harvesting.
When in a group everyone can harvest from a creature, but the amount is reduced, keep this in mind if you group with your pets.

Harvest everything you or your group kills. Higher level MOBs usually have more resources available for harvesting. However, some creatures have small amounts available, such as creatures in caves.

Another trick is to use Mask Scent and go around areas dense with hostiles, such as dungeons or Dathomir. Do it on a vehicle or mount to provide a quick means of escape if your Mask Scent gets broken.

Optional: Get some clothes with Bio-Engineer enhancements for Mask Scent/Camouflage bonuses. Be aware that the highest that this bonus can accumulate is +25.

TRAPPING:
Gained by using traps on creatures. Based on the creature's level.
Effective range on traps is about 45 meters.
Some traps (such as Glow Juice) can be used over and over on a creature, others can't.

The best way to level this is to craft a bunch of Glow Juice traps (about 60 total), and put em on your toolbar. Grab a pet or player to tank for you and have the tank pin down a high level creature while you throw traps as fast as you can at it. Only takes about an hour or two with this method.

Grind:
Novice: Wire Mesh Trap (3 Hides, 3 Bone) → Trapping 1
Trapping 1: Glow-Juice Trap (6 Organic, 2 Bone) → Trapping 4

WILDERNESS SURVIVAL:
Gained by setting or crafting camps. Can also be earned by catching fish.
Each camp has a maximum amount of XP that can be earned before it stops earning XP and a default amount of time for the camp to reach that maximum. Several factors can shorten that length of time, such as the number of players staying in the camp and how much healing is done while they're there.

One way to quickly level this is to have a medic-type use healing strategy in your camp. This will have your camp reach its cap very quickly.

Another good tip is to put your camps in high traffic areas, such as the bridge outside Theed.

You can also just use the Artisan General Crafting tips to craft camps in practice mode.

Grind:
Novice: Basic Camp (31xp – 10 Hides, 5 Bone) → Survival 2
Survival 2: Multiperson Camp (58xp – 20 Hides, 8 Bone) → Survival 4`
    }
  ];

  const combatProfessions: Profession[] = [
    {
      name: "Rifleman",
      description: "Heavy weapons specialist with devastating firepower",
      content: `RIFLEMAN BASICS:
Get Concealment Tactics 1 first for Conceal Shot, then go up the Sniping Accuracy line for Accuracy and Aiming, then the Countersniping Techniques line, and then finally finish off the Concealment Tactics line. Rifle Special Abilities will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Cover and Stun/Melee Defense. Be aware that the highest that these bonuses can accumulate is +25.

RIFLE WEAPONS:
Gained by killing MOBs with a Rifle ranged weapon.
Use a T21, a Jawa Rifle, or a Laser Rifle to level.
Use Head Shot (hit Mind bar), Mind Shot (bleed Mind bar), Strafe Shot (hit multiple targets), Conceal Shot (shoot without getting agro), Flushing Shot (hit multiple targets), and Flurry Shot (hit multiple targets).

RIFLE SPECIAL ABILITIES:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Pistoleer",
      description: "Quick draw expert and dual-wielding specialist",
      content: `PISTOLEER BASICS:
Go up the Pistol Stances and Grips line first for Fan Shot and ranged mitigation, then the Pistol Marksmanship line for accuracy and aiming, and finally the Pistol Tactics line. Pistol Special Abilities will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense. Be aware that the highest that this bonus can accumulate is +25.

PISTOL WEAPONS:
Gained by killing MOBs with a Pistol ranged weapon.
Use a FWG5, Republican Blaster, or a DX2 to level.
Use Body Shot (hit Health bar), Health Shot (bleed Health bar), Fan Shot (high damage), Stopping Shot (delay), and Pistol Melee Defense (knockdown).

PISTOL SPECIAL ABILITIES:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Carbineer",
      description: "Versatile weapon user with balanced combat skills",
      content: `CARBINEER BASICS:
Go up the speed (Assault Tactics) or accuracy (Marksmanship) lines first, then the Counterinsurgency line. The Carbine Special Abilities line will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense. Be aware that the highest that this bonus can accumulate is +25.

CARBINE WEAPONS:
Gained by killing MOBs with a Carbine ranged weapon.
Use a Laser Carbine, Nym Slug Thrower, or Elite Carbine to level.
Use Leg Shot (hit Action bar), Action Shot (bleed Action bar), Crippling Shot (good damage), Full Auto Single 2 (stun, blind, dizzy, and good damage), Wild Shot (stuns single/cone), Charge Shot (knockdown single/cone), Burst Shot (high damage), and Full Auto Area (stun, blind, dizzy cone).

CARBINE SPECIAL ABILITIES:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Fencer",
      description: "Melee combat specialist with finesse weapons",
      content: `FENCER BASICS:
Go up the Footwork line first for speed and bleeds, then the Fencing Technique line for Melee Mitigation and Body Hit 3, and finally the Fencing Stances and Grips line. Fencing Finesse will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense and Intimidation/Warcry bonuses. Be aware that the highest that each of these bonuses can accumulate is +25.

ONEHANDED WEAPONS:
Gained by killing MOBs with a One-handed melee weapon.
Use either a Stun Baton or a Vibroblade until you get to Footwork 4, then use a Gaderiffi Baton for the rest.
Use One-Hand Hit 2 (good damage), Health Hit (bleed Health bar), and Body Hit (hit Health bar). Don't forget about your Warcry, Intimidate, and Lunge abilities from Brawler either, they come in handy as well.

FENCING FINESSE:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Swordsman",
      description: "Master of bladed weapons and sword techniques",
      content: `SWORDSMAN BASICS:
Go up the Sword Techniques line first for speed and Head Hit, then the Sword Defense line for melee mitigation, and finally the Sword Offense line. Sword Finesse will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense and Intimidation/Warcry bonuses. Be aware that the highest that each of these bonuses can accumulate is +25.

TWOHANDED WEAPONS:
Gained by killing MOBs with a Two-handed melee weapon.
Use a Power Hammer, a 2h Curved Sword, a 2h Cleaver, or a Scythe to level.
Use Two-Hand Hit 2 (good damage), Head Hit (hit Mind bar), and Mind Hit (bleed Mind bar). Don't forget about your Warcry, Intimidate, and Lunge abilities from Brawler either, they come in handy as well.

SWORD FINESSE:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Pikeman",
      description: "Polearm expert with reach advantage in combat",
      content: `PIKEMAN BASICS:
Go up the Polearm Stances line first for speed, then the Polearm Offensive Techniques line for Leg Hit, and finally the Polearm Defensive Techniques line. Polearm Support Abilities will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense and Intimidation/Warcry bonuses. Be aware that the highest that each of these bonuses can accumulate is +25.

POLEARM WEAPONS:
Gained by killing MOBs with a Polearm melee weapon.
Use a Vibro Lance, a Long Vibro Axe, or a Nightsister Lance.
Use Polearm Hit 2 (good damage), Action Hit (bleed Action bar), and Leg Hit (hit Action bar). Don't forget about your Warcry, Intimidate, and Lunge abilities from Brawler either, they come in handy as well.

POLEARM SUPPORT ABILITIES:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Teras Kasi Artist",
      description: "Unarmed combat master with martial arts expertise",
      content: `TERAS KASI ARTIST BASICS:
Go up the Power Techniques line first for speed and damage (!), then either the Balance Conditioning line for melee mitigation or the Meditative Techniques line for Power Boost and healing. Precision Striking will come as you get the others. Note that if you don't have Master Brawler for the Unarmed Lunge 2 KD then get Balance Conditioning 1 first for Unarmed Knockdown to make leveling a little easier.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense and Intimidation/Warcry bonuses. Be aware that the highest that each of these bonuses can accumulate is +25.

UNARMED COMBAT:
Gained by killing MOBs with your bare fists or Vibro Knuckles.
Until you get up the Power Tech line you should be using speed sliced Vibro Knuckles, after that switch to damage sliced ones.
Use Unarmed Hit 2 (good damage), Unarmed Knockdown (knockdown, dizzy as well at 2), Body Hit (hit Health bar), Leg Hit (hit Action bar), Head Hit (hit Mind bar), and Spin Attack 2 (area attack). Don't forget about your Warcry, Intimidate, and Lunge abilities from Brawler either, they come in handy as well.

MEDITATION ABILITIES:
The Meditation line allows a TKA to do all sorts of useful things that basically make them a mini-doctor. At each level of meditation you can do certain things, as follows:

Novice: Remove Poison and Bleeds effects.
Meditative Techniques 2: Power Boost ability and remove Disease effects.
Meditative Techniques 4: Force of Will ability and heal your own wounds!

The Power Boost ability allows you buff yourself. To use it, start meditating and then use the Power Boost command. It will start by draining half of your base Mind value from your Mind bar, and as soon as your mind recovers your Health, Action, and Mind bars will be buffed by that same amount. The duration of the Power Boost is determined by this formula: 300 seconds + (Meditation Skill/100 x 300 seconds).

The Force of Will ability allows you to get up from incaps quicker. Can only be used once per hour.

PRECISION STRIKING:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
As you go up the other 3 trees you should have enough Combat XP to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    }
  ];

  const craftingProfessions: Profession[] = [
    {
      name: "Weaponsmith",
      description: "Create deadly weapons and combat equipment",
      content: `WEAPONSMITH BASICS:
General Crafting is gained by crafting items from the Artisan Engineering and Domestic Arts lines. Needed to reach Novice Weaponsmith.
Use the same tips from the Artisan General Crafting guide.

Grind:
Engineering 4: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Novice Weaponsmith

Resources:
50 Wind Power Generators: 7,250 Metal, 2,250 Steel, 2,000 Low Grade Ore, 1,000 Non-Ferrous Metal, 500 Aluminum

TOTAL: 9,500 Steel, 2,000 Low Grade Ore, 1,500 Aluminum

WEAPONS CRAFTING:
Gained by crafting items from the Weaponsmith profession.
Use the same tips from the Artisan General Crafting guide.

Grind:
Novice: Projectile Pistol Barrel (52xp – 16 Steel, 10 Metal) → Firearms 1
Firearms 1: Projectile Rifle Barrel (94xp – 31 Steel, 15 Metal) → Master

Resources:
667 Projectile Pistol Barrels: 10,672 Steel, 6,670 Metal
9551 Projectile Rifle Barrels: 296,081 Steel, 143,265 Metal

TOTAL: 456,688 Steel, 149,935 Metal`
    },
    {
      name: "Armorsmith",
      description: "Forge protective gear and defensive equipment",
      content: `ARMORSMITH BASICS:
General Crafting is gained by crafting items from the Artisan Engineering and Domestic Arts lines. Needed to reach Novice Armorsmith.
Use the same tips from the Artisan General Crafting guide.

Grind:
Engineering 4: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Novice Armorsmith

Resources:
40 Wind Power Generators: 5,800 Metal, 1,800 Steel, 1,600 Low Grade Ore, 800 Non-Ferrous Metal, 400 Aluminum

TOTAL: 7,600 Steel, 1,600 Low Grade Ore, 1,200 Aluminum

ARMOR CRAFTING:
Gained by crafting items from the Armorsmith profession.
Use the same tips from the Artisan General Crafting guide.

Grind:
Novice: Armor Upgrade Kits (63xp – 20 Metal, 10 Chemical) → Personal Armor 3
Personal Armor 3: Ubese Armor Shirt (126xp – 30 Steel, 20 Iron, 10 Fiberplast) → Master

Resources:
1960 Armor Upgrade Kits: 39,200 Metal, 19,600 Chemical
4994 Ubese Armor Shirts: 149,820 Steel, 99,880 Iron, 49,940 Fiberplast

TOTAL: 189,020 Steel, 99,880 Iron, 69,540 Fiberplast, 19,600 Chemical`
    },
    {
      name: "Chef",
      description: "Master culinary arts and food preparation",
      content: `CHEF BASICS:
General Crafting is gained by crafting items from the Artisan Engineering and Domestic Arts lines. Needed to reach Novice Chef.
Use the same tips from the Artisan General Crafting guide.

Grind:
Engineering 4: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Novice Chef

Resources:
46 Wind Power Generators: 6,670 Metal, 2,070 Steel, 1,840 Low Grade Ore, 920 Non-Ferrous Metal, 460 Aluminum

TOTAL: 8,740 Steel, 1,840 Low Grade Ore, 1,380 Aluminum

FOOD CRAFTING:
Gained by crafting items from the Chef profession.
Use the same tips from the Artisan General Crafting guide.
Don't practice on the Soypro, make it and eat it instead for usage XP. Because it's an ingredient it has zero filling, meaning you can eat it over and over again. You'll get 80xp for making it plus 40uxp for eating the last one in a stack, giving a total of 120xp.

Grind:
Novice: Soypro (120xp [don't practice, eat it] – 10 Cereal, 10 Vegetables) → Deserts 1
Deserts 1: Pastebread (168xp – 20 Wheat, 10 Oats, 10 Water) → Deserts 3
Deserts 3: Kiwik Clusjo Swirl (278xp – 40 Berries, 20 Fruits, 20 Water) → Master

Resources:
267 Soypros: 2,670 Cereal, 2,670 Vegetables
610 Pastebreads: 12,200 Wheat, 6,100 Oats, 6,100 Water
2587 Kiwik Clusjo Swirls: 103,480 Berries, 51,740 Fruits, 51,740 Water

TOTAL: 103,480 Berries, 57,840 Water, 51,740 Fruits, 14,870 Wheat, 6,100 Oats, 2,670 Vegetables`
    },
    {
      name: "Tailor",
      description: "Fashion and clothing expert, create custom apparel",
      content: `TAILOR BASICS:
General Crafting is gained by crafting items from the Artisan Engineering and Domestic Arts lines. Needed to reach Novice Tailor.
Use the same tips from the Artisan General Crafting guide.

Grind:
Engineering 4: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Novice Tailor

Resources:
46 Wind Power Generators: 6,670 Metal, 2,070 Steel, 1,840 Low Grade Ore, 920 Non-Ferrous Metal, 460 Aluminum

TOTAL: 8,740 Steel, 1,840 Low Grade Ore, 1,380 Aluminum

TAILORING:
Gained by crafting items from the Tailor profession.
Use the same tips from the Artisan General Crafting guide.

Grind:
Novice: Ribbed Shirt (147xp – 30 Fiberplast, 30 Metal) → Field Wear 4
Field Wear 4: Cartridge Belt (299xp – 50 Inert Petrochemical, 35 Steel, 25 Metal) → Master

Resources:
1463 Ribbed Shirts: 43,890 Fiberplast, 43,890 Metal
2158 Cartridge Belts: 107,900 Inert Petrochemical, 75,530 Steel, 53,950 Metal

TOTAL: 173,370 Steel, 107,900 Inert Petrochemical, 43,890 Fiberplast, 97,840 Metal`
    },
    {
      name: "Architect",
      description: "Build structures, furniture, and decorative items",
      content: `ARCHITECT BASICS:
General Crafting is gained by crafting items from the Artisan Engineering and Domestic Arts lines. Needed to reach Novice Architect.
Use the same tips from the Artisan General Crafting guide.

Grind:
Engineering 4: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Novice Architect

Resources:
78 Wind Power Generators: 11,310 Metal, 3,510 Steel, 3,120 Low Grade Ore, 1,560 Non-Ferrous Metal, 780 Aluminum

TOTAL: 14,820 Steel, 3,120 Low Grade Ore, 2,340 Aluminum

STRUCTURAL CRAFTING:
Gained by crafting items from the Architect profession.
Use the same tips from the Artisan General Crafting guide.

Grind:
Novice: Structural Module (525xp – 200 Low Grade Ore, 50 Metal) → Construction 1
Construction 1: Gungan Head Statue (5250xp – 2000 Low Grade Ore, 1000 Gemstone) → Master

Resources:
110 Structural Modules: 22,000 Low Grade Ore, 5,500 Metal
271 Gungan Head Statues: 542,000 Low Grade Ore, 271,000 Gemstone

TOTAL: 564,000 Low Grade Ore, 271,000 Gemstone, 5,500 Metal`
    },
    {
      name: "Droid Engineer",
      description: "Create mechanical companions and automated helpers",
      content: `DROID ENGINEER BASICS:
General Crafting is gained by crafting items from the Artisan Engineering and Domestic Arts lines. Needed to reach Novice Droid Engineer.
Use the same tips from the Artisan General Crafting guide.

Grind:
Engineering 4: Wind Power Generator (446xp – 145 Metal, 45 Steel, 40 Low Grade Ore, 20 Non-Ferrous Metal, 10 Aluminum) → Novice Droid Engineer

Resources:
68 Wind Power Generators: 9,860 Metal, 3,060 Steel, 2,720 Low Grade Ore, 1,360 Non-Ferrous Metal, 680 Aluminum

TOTAL: 12,920 Steel, 2,720 Low Grade Ore, 2,040 Aluminum

DROID CRAFTING:
Gained by crafting items from the Droid Engineer profession.
Use the same tips from the Artisan General Crafting guide.

Grind:
Novice: MSE Droid (147xp – 53 Metal, 15 Chemical) → Droid Blueprints 2
Droid Blueprints 2: Advanced Droid Frame Unit (462xp – 150 Steel, 70 Fiberplast) → Master

Resources:
823 MSE Droids: 43,619 Metal, 12,345 Chemical
2531 Advanced Droid Frame Unit: 379,650 Steel, 177,170 Fiberplast

TOTAL: 423,269 Steel, 189,515 Fiberplast, 43,619 Metal, 12,345 Chemical`
    },
    {
      name: "Shipwright",
      description: "Construct starships and space vehicles",
      content: `SHIPWRIGHT:
Shipwright is an advanced crafting profession that focuses on creating starships and space vehicles. This profession requires significant resources and advanced crafting skills.

Key aspects of shipwright crafting include:
• Component manufacturing for ship systems
• Hull construction and design
• Engine and propulsion systems
• Weapon and defense system integration
• Advanced materials and rare resource requirements

Due to the complexity and resource requirements, shipwright is typically one of the later professions players pursue. It requires access to rare materials and significant investment in crafting infrastructure.

Note: Detailed grinding information for Shipwright was not available in the original source material.`
    }
  ];

  const socialProfessions: Profession[] = [
    {
      name: "Doctor",
      description: "Heal wounds, cure ailments, and provide advanced medical care",
      content: `DOCTOR BASICS:
Go up the Wound Treatment Speed line first, then Wound Treatment, and finally Doctor Medicine Knowledge.

MEDICAL:
Gained by healing damage and wounds, based on the amount healed.
Use the same tips from the Medic Medical guide.

Seeing as Doctor Medical XP is the same as Medic/CM Medical XP you can use the same methods to gain the XP here. Just be sure to use Stim Cs or Ds to heal the most damage possible and maximize your XP gains.

MEDICAL CRAFTING:
Gained by crafting items from the Medic Organic Chemistry line or the Doctor Medicine Crafting line.
Use the same tips from the Artisan General Crafting guide.
You should make Advanced BECs for more XP, however if you don't have the resources the regular BECs will do as well.

Grind:
Novice Medic: Biological Effect Controller (36xp – 6 Organic, 6 Inorganic) → Doctor Medicine Crafting 4

Resources:
2800 Biological Effect Controllers: 16,800 Organic, 16,800 Inorganic

TOTAL: 16,800 Organic, 16,800 Inorganic

Alternative Grind:
Organic Chemistry IV: Advanced Biological Effect Controller (84xp – 18 Lokian Wild Wheat, 18 Tatooine Fiberplast) → Doctor Medicine Crafting 4

Resources:
1200 Advanced Biological Effect Controllers: 21,600 Lokian Wild Wheat, 21,600 Tatooine Fiberplast

TOTAL: 21,600 Lokian Wild Wheat, 21,600 Tatooine Fiberplast`
    },
    {
      name: "Entertainer",
      description: "Music, dance, and social healing for mind wounds",
      content: `ENTERTAINER - IMAGE DESIGNER:
Gained by completing an imaging session.
You can gain one-third the XP by working on yourself.
You DO NOT have to actually change a feature to gain the XP, just complete the session.

Grind:
Novice: Hair Color [hair_color] (50xp) → Hairstyle 2
Hairstyle 2: Eye Color [eye_color] (75xp) → Hairstyle 4

Image Design Macro:
/image;/imagedesignSetValue eye_color 1;/pause 1;/ui action toolbarSlot##;

The "##" in the macro references the spot on your toolbar where this macro is located minus 1 (the number is zero-based) in order to loop the macro.

Every time you initiate a change a dialog will come up for your target to confirm the change, this needs to be clicked to complete the session. Note that the image design dialog that pops up for you does not need to be closed, in fact it needs to be open for you to gain XP.

Image designing will drain your Mind, to circumvent this you can migrate your stats, eat some food/drink, take some spices, or get a Musician Buff to increase your Focus and Willpower.

MUSICIANSHIP:
Gained by playing a musical instrument.
The XP is gained in 10 second "ticks". Doing flourishes during this time will increase the amount of XP gained per tick (usually 2 is enough).

Musicianship Macro:
/join;/startmusic $;/flourish 1;/flourish 2;/pause 7;/ui action toolbarSlot##;

The "$" in the macro references the name of the song you want to play. For example, "/startmusic starwars2".
The "##" references the spot on your toolbar where this macro is located minus 1 to loop the macro.
The "/join" will have you automatically accept any group offers while you're AFK.

DANCING:
Gained by dancing (not the emote kind).
The XP is gained in 10 second "ticks". Doing flourishes during this time will increase the amount of XP gained per tick (usually 2 is enough).

Dancing Macro:
/join;/startdance $;/flourish 1;/flourish 2;/pause 7;/ui action toolbarSlot##;

The "$" in the macro references the name of the dance that you want to perform. For example, "/startdance basic".
The "##" references the spot on your toolbar where this macro is located minus 1 to loop the macro.
The "/join" will have you automatically accept any group offers while you're AFK.

ENTERTAINMENT HEALING:
Gained by healing others' Mind/Focus/Willpower Wounds and Battle Fatigue through music or dancing.
The XP is gained in 10 second "ticks". The more damage healed during that time the more XP gained.
Join a group of other entertainers to form a band. You will get XP for any wounds/BF healed by the band as well.

Optional: Get some clothes with Bio-Engineer enhancements for Wound Healing. Max for bonus is +25.`
    },
    {
      name: "Musician",
      description: "Master of melodies and musical performance",
      content: `How to Grind Master Musician via Instrument Crafting

1. Train Novice Entertainer
2. Obtain a Generic Crafting Tool or a Weapon, Droid, General Crafting Tool
3. Obtain a supply of metal and wood
4. Craft Slitherhorns in practice mode for Musician XP (each requires 45 units of metal)
5. Train Entertainer Musicianship branch up to Musicianship IV
6. Craft Fizz's in practice mode for Entertainer Healing XP (each requires 30 units of wood, and 15 units of metal)
7. Train Entertainer Healing branch up to Entertainment Healing IV
8. Craft Slitherhorns until you have enough Musician XP to train Novice Musician
9. Craft Slitherhorns and Fizz's for the Musician XP and Entertainer Healing XP needed to complete 4444 Musician
10. Train Master Musician`
    },
    {
      name: "Dancer",
      description: "Art of movement and performance dance",
      content: `How to Grind Master Dancer via Instrument Crafting

*Note: You must become Novice Musician to grind Dancing XP via instrument crafting*

1. Train Novice Entertainer
2. Obtain a Generic Crafting Tool or Weapon, Droid, General Crafting Tool
3. Obtain a supply of metal and wood
4. Craft Slitherhorns in practice mode for Musician XP (each requires 45 units of metal)
5. Train Entertainer Musicianship branch up to Musicianship IV
6. Craft Fizz's in practice mode for Entertainer Healing XP (each requires 30 units of wood, and 15 units of metal)
7. Train Entertainer Healing branch up to Entertainment Healing IV
8. Craft Slitherhorns until you have enough Musician Experience to train Novice Musician
9. Craft Kloo Horns in practice mode for Dancing XP (each requires 40 units of wood, and 15 units of metal)
10. Train Entertainer Dancing branch up to Dancing IV
11. Craft Kloo Horns until you have enough Dancing XP to train Novice Dancer
12. Craft Kloo Horns and Fizz's for the Dancing XP and Entertainer Healing XP needed to complete 4444 Dancer
13. Train Master Dancer
14. Surrender all Musician and Entertainer Musicianship skill boxes that are no longer needed`
    },
    {
      name: "Image Designer",
      description: "Customize appearances and character aesthetics",
      content: `IMAGE DESIGNER:
Gained by completing an imaging session.
You can gain one-third the XP by working on yourself.
You DO NOT have to actually change a feature to gain the XP, just complete the session.

Grind:
Hairstyle 4: Eyebrow Shape [eyebrows] (125xp) → Facial Customizations 2
Facial Customizations 2: Nose Width [nose_width] (150xp) → Facial Customizations 4
Facial Customizations 4: Jaw [jaw] (275xp) → Master

Every time you initiate a change a dialog will come up for your target to confirm the change, this needs to be clicked to complete the session. Note that the image design dialog that pops up for you does not need to be closed, in fact it needs to be open for you to gain XP.

Image designing will drain your Mind, to circumvent this you can migrate your stats, eat some food/drink, take some spices, or get a Musician Buff to increase your Focus and Willpower.

Note: Image Designer requires Entertainer: Hairstyle 4 as a prerequisite to become Novice Image Designer.`
    },
    {
      name: "Politician",
      description: "Leadership, governance, and civic management",
      content: `POLITICIAN:
Note: The original guide notes that Politician was left out because it was believed at the time that it wasn't required for unlocking Force Sensitive Character Slots.

Politician is primarily focused on:
• City management and governance
• Political voting and civic duties
• Player city administration
• Mayoral responsibilities and city development

Due to the specialized nature of political gameplay and its focus on player city management rather than individual character progression, detailed grinding information was not commonly documented in the same way as other professions.

Political advancement is typically tied to:
• Voting participation
• City management activities
• Civic engagement with other players
• Administrative duties within player-run cities`
    }
  ];

  const utilityProfessions: Profession[] = [
    {
      name: "Ranger",
      description: "Advanced outdoor skills and wilderness mastery",
      content: `RANGER BASICS:
Go up the Field Bioscience line first for more efficient creature harvesting to get Scouting XP faster and to upgrade the cool tracking ability. The rest can be done in any order.

SCOUTING:
Gained primarily by harvesting resources from defeated creatures (Meat/Hide/Bone). The amount of XP earned is based on the amount of resources harvested.
Scouting XP is also gained from using Mask Scent or Camouflage Kits and successfully avoiding detection from aggressive creatures, where the creature's level determines the XP gained.

Use the same tips from the Scout Scouting guide.

BTW, once you get Wayfaring 4 you can basically sneak by almost anything by masking your scent or using a camouflage kit and crawling (which you can do fairly fast at this point). Doing this in the higher level dungeons will really rake in the Scouting XP quickly.

ADVANCED TRAPPING:
Gained by using traps on creatures. Based on the creature's level.
Use the same tips from the Scout Trapping guide.

FRONTIERING:
Gained by setting or crafting camps. Can also be earned by catching fish.
Use the same tips from the Scout Wilderness guide.

Grind:
Survival 4: Improved Camp (88xp – 30 Hides, 12 Bone)
Novice Ranger: High Quality Camp (105xp – 30 Hides, 15 Bone, 5 Metal)
Frontiering 2: Field Base (178xp – 40 Hides, 25 Bone, 20 Metal)`
    },
    {
      name: "Creature Handler",
      description: "Tame and train creatures as companions",
      content: `CREATURE HANDLER BASICS:
Get Creature Management 3 first so that you can have 2 pets out and be able to train the (very useful) "Group" and "Follow Other" commands. Next go up the Creature Taming line to be able to handle the more aggressive creatures, followed by the Creature Training line to store more pets, then finally the Creature Empathy line.

CREATURE HANDLING:
Gained by taming a wild creature, training pets new commands, and by having your pets kill MOBs.

Grab some Pet Stimpacks Cs or Ds and have your pets fight some higher-level mobs is the standard way to gain CH XP. However, in order to gain CH XP for having your pet kill a MOB your pet only has to hit it once before it dies, so you should do most of the damage yourself and only send the pet in to attack when the MOB is almost dead.

Use low-level pets to gain XP faster. Remember that the CH XP gained when killing MOBs is determined on your pet's level compared to the MOB's level. Babies work well, but even their level for gaining XP is not determined by their current level, when CH XP is concerned it is never considered to be lower than half of what their adult level will be. Keep this in mind. In fact, the best pets to use are Bio-Engineered specialized creatures with high Kinetic defenses (max 60%) and a strong attack, but with a low level. You can get some pretty powerful CL12 pets from a good BE.

To have your pets effectively track and attack a target don't just use the "Attack" command, use the "Follow Other" command first and then the "Attack" command when they reach their target.

Taming Macro:
/peace;/tame;

While there is now a supplied Tame macro the above macro will help immensely when taming wild creatures. Basically, if the target begins attacking, you will not attack back, giving you the chance to run away and try again. Also, if you were to attack the target all of its social friends around would begin attacking you too, leading to a messy situations and potentially a lost future pet.

Another advantage to Bio-Engineered creatures is that they will always learn a new command on the first attempt and always give 100 CH XP, greatly reducing the training time and thus increasing the rate of XP gained. A good strategy is to find a BE grinding their sampling line and get them to create you creatures for training. They will likely be collecting lots of garbage DNA Samples that they would otherwise destroy. Just train the creature all available commands and release it.

Optional: Get some clothes with Bio-Engineer enhancements for Taming Wild/Vicious Creatures and Mask Scent. Be aware that the highest that each of these bonuses can accumulate is +25.`
    },
    {
      name: "Bio-Engineer",
      description: "Genetic manipulation and creature enhancement",
      content: `BIO-ENGINEER BASICS:
Medical Crafting is gained by crafting items from the Medic Organic Chemistry line.
Use the same tips from the Artisan General Crafting guide.
The best thing to grind is Advanced Biological Effect Controllers, but if you don't have the resources regular Biological Effect Controllers will do.

Grind:
Novice Medic: Biological Effect Controller (36xp – 6 Organic, 6 Inorganic) → Novice Bio-Engineer

Resources:
292 Biological Effect Controllers: 1,752 Organic, 1,752 Inorganic

Alternative Grind:
Organic Chemistry IV: Advanced Biological Effect Controller (84xp – 18 Lokian Wild Wheat, 18 Tatooine Fiberplast) → Novice Bio-Engineer

Resources:
125 Advanced Biological Effect Controllers: 2,250 Lokian Wild Wheat, 2,250 Tatooine Fiberplast

DNA SAMPLING:
Gained by sampling DNA from creatures. The amount of XP earned is based on the creature's level.
Can also be earned for successfully supplying the DNA sequencing for a GCW base's Override Terminal.

Taking a sample takes 10 seconds and the creature cannot be attacked during the process (except by other wild creatures). You must stay within 15 meters during the sampling process as well. When you sample there are several possible outcomes:
• You successfully get a DNA Sample.
• You successfully get a DNA Sample and the creature dies.
• You successfully get a DNA Sample and the creature notices you.
• You successfully get a DNA Sample and the creature begins attacking you.
• You fail to get a DNA Sample.
• You fail to get a DNA Sample and the creature notices you.
• You fail to get a DNA Sample and the creature begins attacking you.

DNA Sampling Macro:
/peace;/sampledna;

While there is now a supplied SampleDNA macro the above macro will help immensely when taking samples. Basically, if the target begins attacking, you will not attack back, giving you the chance to run away and try again. Also, if you were to attack the target all of its social friends around would begin attacking you too, leading to a messy situation and potentially lots of lost sampling XP.

Another good tip is to get and always use Mask Scent, even if the creatures are not aggressive. Non-aggro creatures won't even notice you, meaning they don't get "spooked" and making your chances higher of getting a sample.

Also, supposedly standing still (ie. not moving) will increase your chances of getting a sample.

As you raise up the line you can sample higher level creatures, get a higher chance of success, get a higher chance of not killing the creature (thus allowing multiple samples), and lower the Mind cost of sampling.

Grind:
Novice: Sample the trash outside starting cities (such as around Mos Eisley).
DNA Sampling 1: Continue sampling the trash.
DNA Sampling 2: Either continue sampling the trash or move on to higher level creatures.
DNA Sampling 3: You should be sampling higher level creatures now, Pikets on Dantooine are excellent.
DNA Sampling 4: Either continue sampling Pikets or go to Dathomir/Endor and sample everything you see.

The following is a general guideline on what you can sample at the levels of DNA Sampling, your chances are very slim of sampling creatures higher than your current limit:
Novice: <= CL10
DNA Sampling 1: <= CL20
DNA Sampling 2: <= CL30
DNA Sampling 3: <= CL40
DNA Sampling 4: <= CL50
Master: <= CL75

BIO-ENGINEER CRAFTING:
Gained primarily by crafting creatures, generic templates, tissues, and pet stims.
Use the same tips from the Artisan General Crafting guide.

Optional: Get a Droid with a Food and Chemical Crafting Station built in. This will allow you to craft and experiment on DNA Samples when you get them out in the field.

When you start out as a Novice Bio-Engineer you can either craft Multisaccharide Dimate or create creatures (Kaadu is best at Novice) from the DNA Samples you get while grinding DNA Sampling. I prefer going the cloning route as Multisaccharide Dimate requires Milk, which can be time consuming to gather if you don't have some already stock-piled or available (requires Mask Scent to milk specific creatures). However, as soon as you get to Tissue Engineering 1 craft Micronutrient Supplements all the way for the rest.

Grind:
Novice: Generic Template (21xp – 5 DNA Samples)
Novice: Kaadu Clone (105xp – 1 Generic Template, 35 Creature Food, 20 Flora Food)
Novice: Multisaccharide Dimate (136xp – 25 Flora Food , 20 Organic, 20 Milk) → Tissue Engineering 1
Tissue Engineering 1: Micronutrient Supplement (105xp – 20 Organic, 15 Flora Food, 15 Creature Food) → Clone Engineering 4/Tissue Engineering 4/Engineering Techniques 4

Resources:
78 Multisaccharide Dimates: 1,950 Flora Food, 1,560 Organic, 1,560 Milk
5000 Micronutrient Supplements: 100,000 Organic, 75,000 Creature Food, 75,000 Flora Food

TOTAL: 101,560 Organic, 76,950 Flora Food, 75,000 Creature Food, 1,560 Milk`
    },
    {
      name: "Merchant",
      description: "Trade and commerce specialization",
      content: `MERCHANT:
Gained by someone paying an access fee to your house (50xp, can be multiple houses), viewing merchandise on your vendor (50xp, once per 10 minutes), or once per hour for every vendor you have employed (150xp).

This is a painful grind, mainly because it technically can't be grinded. The best plan is to put access fees on all your houses, and place as many vendors as you can. This means that the Additional Vendor line is the best initial one to go up so you can place lots of vendors. Next up would be Efficiency so you can reduce the maintenance fees for all those vendors. If you actually have merchandise to sell then get the Advertising line next so you can let customers know where your shops are.

With all that being said, if you have friends or other accounts this profession can actually be grinded, the only difference is your character won't be doing the grinding. Just get them to constantly access one of your vendors and refresh the view of items for sale every 10 minutes to get you Merchant XP. Just remember to remove the access fee from the house or set the time to the maximum so they don't get kicked out.

There is another unconfirmed method to get others to grind your Merchant XP for you. It requires several houses, the best ones being the Small Naboo Houses because they only take one lot. Set down as many houses as you can (that would be 10 max) and set and access fee for each. Now have your friends pay the fee for each house. Usually you would have to wait for the timer to finish before you could get XP from them again, however, if you transfer the house to a friend (using the /transferstructure command) and get them to transfer it back to you it will reset the timer! Just reset the access fees and repeat it all over again. If you get this going in a chain you can really rake in the Merchant XP in no time at all. Just be sure you don't do this in your Player City as you'll drive the Mayor nuts with emails.`
    },
    {
      name: "Smuggler",
      description: "Slice systems, infiltrate, and circumvent security",
      content: `SMUGGLER BASICS:
Go up the Dirty Fighting line first for the pistol specials and then the Underworld line.

PISTOL WEAPONS:
Gained by killing MOBs with a Pistol ranged weapon.
Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense. Be aware that the highest that this bonus can accumulate is +25.

Use a FWG5 to level.
It's highly recommended that you get some Pistoleer skills as well, seeing as the Dirty Fighting line doesn't offer any mods for speed or accuracy. This will also allow you to use a Republican Blaster and a DX2 to level with.
Use Body Shot (hit Health bar), Health Shot (bleed Health bar), Panic Shot (delay), and Low Blow (knockdown).

A good tactic for Smugglers is to bleed a target, then use Feign Death and let them bleed while your down.

SLICING:
Gained by slicing weapons, armor, locked containers, and terminals.

At Novice Smuggler you can only slice locked containers for 100xp each. They can be obtained by looting NPC MOBs such as Tusken and Singing Mountain Clan Slaves. You can also try shouting at busy starports, such as Coronet or Theed, to either open them for people or buy them from them.

At Slicing 1 you can now slice mission terminals for 100xp, but it can only be done once every 2 minutes, as a result it's usually best to just keep slicing locked containers to level.

At Slicing 2 you can now slice "simple" weapons, such as Survival Knives, for 250xp each. Weapons can either have their speed or damage increased. At this point you're best off buying a few crates of Survival Knives (Novice Artisans can make them) and slicing them until you get to Slicing 4.

At Slicing 3 you can slice pieces of armor for 250xp each. Armor can either have their effectiveness or encumbrance increased.

At Slicing 4 you can now slice all weapons. Note that you maximum slice ranges are slightly lower than a Master Smuggler's.

At Master Smuggler you maximum slice ranges go up. Weapon speed and damage are both capped at 35%, armor effectiveness at 35% as well, and armor encumbrance at 45%.

An item can only ever be sliced once. You cannot choose what gets sliced on weapons and armor or how much the increase is. Without Clamps you will always have a 50/50 chance when slicing, even at Master.

To slice anything you will need 2 uses from Precision Laser Knives. Molecular Clamps will tell which wire to slice with 100% accuracy. Flow Analyzer Nodes will tell which wire to slice with 75% accuracy, don't use these if you have the choice. A Weapon Upgrade Kit (WUK) is required to slice weapons and they can be made by Novice Weaponsmiths. An Armor Upgrade Kit (AUK) is required to slice pieces of armor and they can be made by Novice Armorsmiths.

Always use Clamps while slicing to guarantee the slice, because if you fail the item cannot be sliced again. Even though you can't make them until Slicing 4 you can use them even at Novice Smuggler. Find someone that you can buy them off of to make grinding much easier.

Grind:
Novice: Locked Container (100xp – 2 Precision Laser Knives, 1 Molecular Clamp) → Slicing 2
Slicing 2: Survival Knife (250xp – 2 Precision Laser Knives, 1 Molecular Clamp, 1 Weapon Upgrade Kit) → Master

Resources:
60 Locked Containers: 120 Precision Laser Knives, 60 Molecular Clamps
300 Survival Knives: 600 Precision Laser Knives, 300 Molecular Clamps, 300 Weapon Upgrade Kits

TOTAL: 720 Precision Laser Knives, 360 Molecular Clamps, 300 Weapon Upgrade Kits

SPICES:
Gained by crafting spices from the Smuggler Spices line.
Use the same tips from the Artisan General Crafting guide.

One trick that used to work (not sure if it is still like this) was to just keep crafting spices at Novice Smuggler and bank the entire 56,000 XP required for all 4 levels of Spices, saving time from trying to find training. Note that this only works at Novice Smuggler, as soon as you learn Spices 1 the maximum cap is lowered.

Grind:
Novice: Shadowpaw (126xp – 25 Organic, 5 Metal) → Spices 4

Resources:
445 Shadowpaws: 11,125 Organic, 2,225 Metal

TOTAL: 11,125 Organic, 2,225 Metal`
    }
  ];

  const eliteProfessions: Profession[] = [
    {
      name: "Bounty Hunter",
      description: "Track and capture targets across the galaxy",
      content: `BOUNTY HUNTER BASICS:
The "marks" for Bounty Hunter missions can be pretty tough (10K+ HAM), so unless you have other high level combat skills, it's recommended that you complete some of the BH weapon lines before tackling Investigation. However, you will get a lot of weapon XP while doing the Investigation line so you may not want to max all the lines first so you don't "throw away" the XP.

Most "marks" are vulnerable to Electricity, so it's a good idea to get at least LLC 1, but LLC 3 or even 4 will be very beneficial. However, Fire Knockdown from Carbine 3 is almost a must. When it hits, the target will get knocked down and possibly dizzied, keeping them from ever getting up again. Bleeding Shot from Pistol 1 is handy if you prefer the "bleed and run" strategy. So, the best progression would be to get 0/3/1/3 before starting the Investigation line.

INVESTIGATION:
Gained by successfully completing a Bounty Hunter mission. Based on 2% of the mission pay out.
Player Jedi Bounty missions will grant 1500 BH XP, but are only available to those with Investigation 3+.
Can earn 1000 XP for successfully jamming a GCW base's Uplink Terminal. Investigation 2+ is required.

To complete a Bounty Hunter mission you simply have to track down the target (the "mark") and kill them.

For Investigation 0 (Difficulty 1) you just have to get a mission from a BH Terminal and talk to the corresponding Spec-Ops Agent. This will get you an exact waypoint to the target. The best place to do this level is in Tyrena on Corellia. There is a BH Terminal and a level 1 Spec-Ops Agent right near the Bank/Bazaar area. Simply keep grabbing missions and getting waypoints until you get one within 2000 meters.

For Investigation 1+ (Difficulty 2 and 3) you have to get a mission like normal, except now you only get a Bio Signature of the mark from the corresponding Spec-Ops Agent. Now you need to purchase Seeker Droids and Probe Droids from a Droid Engineer to be able to track your targets. Once you have the Bio Sig and a Probe Droid head outside the city limits and use a Probe Droid. After a few seconds, it will land somewhere near you. Go up to the droid and use its radial menu to give it the Bio Sig. It will take off to identify which planet the mark is on. Now head to the closest Starport and wait at the Ticket Terminal for it to report the planet (takes a few minutes). As soon as it reports back buy a ticket to the planet (or the intermediate planet to get there) and head there immediately (the mark will leave the planet if you wait too long). Once you arrive on the planet launch a Seeker Droid. While you're waiting open up the planetary map and make note of the mark's current location (this is from the Probe Droid and is no longer correct, but it is important). After a few minutes the droid will report back the approximate current location of the mark. Now line up the mark's previous location with their current location and you should be able to determine which city's Starport/Shuttle Port they are headed for. The mark will continue along this path, so either chase them down or shuttle to the city and head them off. You should launch Seeker Droids occasionally to update the mark's current location. Good luck, these missions can take from 10-120 minutes to complete, depending on your luck and skills. The best location to get Difficulty 2/3 missions is Kaadara on Naboo. It has a Starport and there are Spec-Ops Agents for both level 2 (near the Bank/Bazaar area) and level 3 (on the side of the Starport).

Since the difficulty 1 BH missions are so much easier, a good tip in the beginning is to not learn Investigation 1 until you have earned 10,000 BH XP doing these missions. That way you can learn Investigation 1 and 2 at the same time and bypass Investigation 1 completely, saving a lot of time.

BOUNTY HUNTER WEAPON SPECIALIZATIONS:
Bounty Carbine Specialization: Gained by killing MOBs with a Carbine ranged weapon. Use a Laser Carbine for the best results. Use just regular shots or Leg Shot 2 (hit Action bar), Action Shot 1 (bleed Action bar), Underhand Shot (knockdown), and Fire Knockdown (knockdown + dizzy).

Bounty Pistol Specialization: Gained by killing MOBs with a Pistol ranged weapon. Use a Scatter Pistol primarily to level, but keep a FWG5 around for when something has high Acid resists. Use just regular shots or Body Shot 2 (hit Health bar), Health Shot 1 (bleed Health bar), Bleeding Shot (bleed a random bar), and Torso Shot (fire DoT). Eye Shot is also a great special for PvP because it hits the target's Mind pool.

Light Lightning Cannon Specialization: Gained by killing MOBs with a Light Lightning Cannon (LLC) ranged weapon. Recommend getting 2 LLCs, one speed sliced and the other damage sliced. Use the speed sliced one at lower levels until your accuracy improves. Use just Lightning Single 1, then 2 when you get it. The cone attacks don't work all that well.`
    },
    {
      name: "Commando",
      description: "Heavy weapons and advanced tactical combat",
      content: `COMMANDO BASICS:
Go up the Flamethrower line first, then the Acid Rifle line, and finally the Heavy Weapons Support line. Field Tactics will come as you get the others.

Get some Doc buffs (and Dancer/Musician buffs if you can find them) and head to the Tusken Fort on Tatooine or do Quenker missions on Dantooine.

Optional: Get some clothes with Bio-Engineer enhancements for Stun/Melee Defense. Be aware that the highest that this bonus can accumulate is +25.

HEAVY WEAPONS:
Gained by killing MOBs with a Heavy Weapon.
Use a speed sliced Flamethrower to level. Only use the Acid Rifle when you absolutely have to, it sucks (atm).
Use Flame Single for a single target and Flame Cone for crowds. Remember that Flame DoTs no longer stack.

FIELD TACTICS:
Combat XP is gained by killing MOBs by any means. It's 10% of the weapons XP gained.
Commandos are unique in that they can gain 100% XP for Combat when doing damage with Grenades. However Grenades are slow, miss a lot, drain action fast, and cannot be used indoors. Besides, you should earn enough Combat XP as you go up the other 3 trees to advance in this line.
If you're having problems raising it, remember that it's a percentage of the XP gained for killing things. Just get some buffs and kill higher end MOBs. For example, Quenkers will give you around 300 Combat XP each!`
    },
    {
      name: "Combat Medic",
      description: "Advanced battlefield medical support with area healing",
      content: `COMBAT MEDIC BASICS:
The path you follow depends on how you want to grind. Ranged Healing Distance will allow you to heal from greater distances with more potency, Ranged Healing Speed will let you heal faster, and Combat Medic Support allows you to use more powerful CM stims. If you take the Stimpack C route then it truly doesn't matter which line you go up. However, if you plan on healing groups of people then you'll want effectiveness and the more powerful stims before speed. Get support over distance if you're healing stationary people (ie. entertainers in cantinas).

MEDICAL:
Gained by healing damage and wounds, based on the amount healed. Using area stims you get XP for everyone you heal in the area-of-effect.
Use the same tips from the Medic Medical guide.

Seeing as CM Medical XP is the same as Medic/Doc Medical XP you can use the same methods to gain the XP here. Just be sure to use Stim Cs or Ds to heal the most damage possible and maximize your XP gains.

Also, because CM stims can be used to heal multiple people at the same time from a distance you can also rapidly gain XP in a couple of other situations:
• Join a high-level hunting party and heal them as they get damaged. This works especially well in small areas like caves, so places like the Tusken Fort and the Nightsister Stronghold are ideal for this.
• Heal entertainers in cantinas. They will constantly be draining their Action bars, plus there are usually a large number of them in a small concentrated area. Try the Coronet or Theed cantinas for this.

MEDICAL CRAFTING:
Gained by crafting items from the Medic Organic Chemistry line or the Combat Medic Combat Medicine Crafting line.
Use the same tips from the Artisan General Crafting guide.
You should make Advanced BECs for more XP, however if you don't have the resources the regular BECs will do as well.

Grind:
Novice Medic: Biological Effect Controller (36xp – 6 Organic, 6 Inorganic) → Combat Medicine Crafting 4

Resources:
2223 Biological Effect Controllers: 13,338 Organic, 13,338 Inorganic

Alternative Grind:
Organic Chemistry IV: Advanced Biological Effect Controller (84xp – 18 Lokian Wild Wheat, 18 Tatooine Fiberplast) → Combat Medicine Crafting 4

Resources:
1000 Advanced Biological Effect Controllers: 18,000 Lokian Wild Wheat, 18,000 Tatooine Fiberplast`
    },
    {
      name: "Squad Leader",
      description: "Group tactics and combat leadership specialist",
      content: `SQUAD LEADER BASICS:
Go up the Leadership line first for group melee defense, then the Tactics line for group ranged defense, followed by the Mobility line to give those without terrain negotiation a little help, and finally the Strategy line.

SQUAD LEADERSHIP:
Gained by killing MOBs while leading a group. Squad Leadership XP is equal to the Combat XP earned by everyone in the group.
You must be grouped and be the leader to earn Squad Leadership XP. Note that being grouped with pets counts.

The best way to level this is to grab a large group and fight some high-level MOBs.

Be aware that you will level quickly and will constantly need to leave for training. This can mean time lost gaining valuable XP and also very disrupting to the group you're leading, possibly leading to the group disbanding and you having to find another group to continue leveling. The best way around this is to pay another Squad Leader (preferably a Master) to come with you and train you when needed. I can't stress how beneficial this is!

A good place to do this is at the Tusken Fort on Tatooine. There is almost always a group there and you can usually get an invite and made leader if you advertise your defensive bonuses (once you have them).

Another excellent place to go is the Nightsister Stronghold on Dathomir. With a large group you can do all of Squad Leader within a few hours, just be sure to bring a Master Squad Leader with you.`
    }
  ];

  const ProfessionSection = ({ title, professions }: { title: string, professions: Profession[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {professions.map((profession) => (
          <div key={profession.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedProfession === profession.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleProfession(profession.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{profession.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{profession.description}</p>
              </div>
              {expandedProfession === profession.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedProfession === profession.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <div className="text-gray-300 whitespace-pre-line font-sans space-y-4">
                  {profession.content.split('\n\n').map((paragraph, index) => {
                    // Check if this paragraph contains a macro (starts with /)
                    const macroMatch = paragraph.match(/Macro:([\s\S]*?)(?=\n\n|$)/);
                    if (macroMatch) {
                      const macroText = macroMatch[1].trim();
                      const beforeMacro = paragraph.substring(0, macroMatch.index);
                      const afterMacro = paragraph.substring(macroMatch.index! + macroMatch[0].length);
                      
                      return (
                        <div key={index}>
                          {beforeMacro && <div className="mb-2">{beforeMacro}</div>}
                          <div className="bg-gray-800 p-3 rounded border-l-4 border-blue-500 mb-2">
                            <div className="flex justify-between items-start gap-4">
                              <code className="text-green-400 text-sm font-mono flex-1">{macroText}</code>
                              <MacroButton macro={macroText} />
                            </div>
                          </div>
                          {afterMacro && <div>{afterMacro}</div>}
                        </div>
                      );
                    }
                    return <div key={index}>{paragraph}</div>;
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Profession Guides"
          subtitle="Master your chosen path in the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Choose Your Path in Star Wars Galaxies</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies offers a diverse range of professions, each with unique skills and gameplay experiences. 
                  Whether you want to become a master crafter, a skilled combatant, or a force-sensitive Jedi, these guides 
                  will help you understand the intricacies of each profession. Click on any profession below to learn more about its mechanics and progression.
                </p>
              </div>

              <ProfessionSection title="Starter Professions" professions={starterProfessions} />
              <ProfessionSection title="Combat Professions" professions={combatProfessions} />
              <ProfessionSection title="Crafting Professions" professions={craftingProfessions} />
              <ProfessionSection title="Social & Support Professions" professions={socialProfessions} />
              <ProfessionSection title="Utility & Outdoor Professions" professions={utilityProfessions} />
              <ProfessionSection title="Elite Professions" professions={eliteProfessions} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8">
                <p className="text-gray-300">
                  Each profession offers unique gameplay experiences and progression paths. Consider your playstyle and 
                  interests when choosing your character's development path. Many players choose to master multiple 
                  professions or combine skills from different trees to create hybrid builds. Remember that starter 
                  professions provide the foundation for advancing into more specialized roles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <ServerInfoFooter />
    </main>
  );
}
