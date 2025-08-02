"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface Guide {
  name: string;
  description: string;
  content: string;
  guideLink?: string;
}

export function AdventureGuidesPage() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  const toggleGuide = (guideName: string) => {
    if (expandedGuide === guideName) {
      setExpandedGuide(null);
    } else {
      setExpandedGuide(guideName);
    }
  };

  // Theme Park Adventures (Quests)
  const themeParkQuests: Guide[] = [
    {
      name: "Nym's Theme Park",
      description: "Lok pirate adventures and smuggling operations",
      content: "Nym's Theme Park on Lok offers players a challenging series of missions involving pirate operations, smuggling runs, and encounters with dangerous creatures. The theme park provides unique rewards and is essential for players seeking to understand the criminal underworld of the galaxy."
    },
    {
      name: "Jabba's Theme Park",
      description: "Hutt cartel missions and criminal enterprises",
      content: "Work for the notorious Jabba the Hutt in his criminal empire. These missions involve dealing with rival gangs, collecting debts, and navigating the dangerous politics of the Hutt crime families. Completion offers access to unique Hutt-themed rewards and criminal contacts."
    },
    {
      name: "Imperial Theme Park",
      description: "Serve the Empire with honor and dedication",
      content: "Demonstrate your loyalty to the Galactic Empire through a series of military missions and imperial operations. These quests test your dedication to order and control while offering prestigious imperial rewards and advancement opportunities."
    },
    {
      name: "Rebel Theme Park",
      description: "Fight for freedom and justice against tyranny",
      content: "Join the Rebel Alliance in their fight against Imperial oppression. These missions involve sabotage operations, rescue missions, and coordinated strikes against Imperial targets. Success brings honor to the Rebellion and access to unique rebel equipment."
    }
  ];

  // Classic Dungeons
  const classicDungeons: Guide[] = [
    {
      name: "The Warren",
      description: "Dantooine theme park with two badges (Compassion & Imperial Hero) for Jedi unlock",
      content: "The Warren is a large theme park on Dantooine that can be accomplished rather quickly – being the second fastest theme park after Nym's. Most players complete The Warren because you can receive two badges (Compassion and Imperial Hero) which count as two separate content badges out of the three you need for Jedi unlock. The facility requires collecting passkeys, deactivating turrets, downloading evidence from multiple terminals, and completing quests for both Mirla (Compassion) and Captain Heff in Theed Palace (Imperial Hero).",
      guideLink: "/guides/the-warren"
    },
    {
      name: "Geonosian Bio-Lab",
      description: "Yavin IV research facility with dangerous experiments and boss creatures",
      content: "The Geonosian Bio-Lab on Yavin IV is located at -6450 -360 (closest starport: Labor Outpost). This challenging dungeon features three boss creatures - Acklay, Unstable Reek, and Unstable Nexu - on 30-minute respawn timers. Navigate through coded doors using passcodes obtained from NPCs, avoid poison gas clouds, and battle through multiple chambers filled with Geonosians, spiders, and Force Klikniks. The final boss, Acklay, has 1.6 million HAM and can be enraged to attack other creatures. Key items include computer codes from the assistant NPC and short-circuited passkeys. Note: On SWG Infinity, door codes are randomized - you must speak to the correct NPCs to obtain current codes rather than using static numbers.",
      guideLink: "/guides/geonosian-bio-lab"
    },
    {
      name: "Death Watch Bunker",
      description: "Endor Mandalorian stronghold with elite warriors",
      content: "The Death Watch Bunker on Endor houses some of the galaxy's most dangerous Mandalorian warriors. This challenging dungeon requires careful strategy and coordination to overcome the heavily armed and well-trained Death Watch forces."
    },
    {
      name: "Avatar Platform",
      description: "Space station adventure with unique challenges",
      content: "The Avatar Platform is a mysterious space station that presents unique challenges and encounters. Players must adapt to zero-gravity combat and solve complex puzzles while facing unknown threats in this orbital facility."
    }
  ];

  // Jedi & Force Content
  const jediQuests: Guide[] = [
    {
      name: "Jedi Unlock",
      description: "Path to Force sensitivity and awakening",
      content: "The path to becoming Force-sensitive in SWG requires dedication and completion of specific content badges. Players must complete three different content badges from theme parks, dungeons, or special events to unlock their Force sensitivity and begin their journey as a Jedi."
    },
    {
      name: "Village of Aurilia",
      description: "Force-sensitive training and mystical guidance",
      content: "The Village of Aurilia serves as a hub for Force-sensitive characters, offering specialized training, quests, and vendors. This mystical location provides essential resources for those walking the path of the Force."
    },
    {
      name: "The Padawan Trials",
      description: "Begin your journey as a Jedi apprentice",
      content: "The Padawan Trials mark the beginning of formal Jedi training. These challenging trials test a Force-sensitive's dedication, wisdom, and combat skills as they take their first steps toward becoming a Jedi Knight."
    },
    {
      name: "The Knight Trials",
      description: "Achieve Jedi Knighthood through wisdom and courage",
      content: "The Knight Trials represent the ultimate test for Padawan learners. These epic challenges require mastery of lightsaber combat, Force powers, and Jedi philosophy to achieve the rank of Jedi Knight."
    }
  ];

  // Corvette Adventures
  const corvetteAdventures: Guide[] = [
    {
      name: "Rebel Assault Ship",
      description: "Imperial boarding mission on captured Rebel vessel",
      content: "Board and secure a captured Rebel assault ship in this intense close-quarters combat scenario. Imperial forces must work together to clear out entrenched Rebel defenders and secure valuable intelligence and equipment."
    },
    {
      name: "Imperial Corvette",
      description: "Rebel infiltration of Imperial warship",
      content: "Rebel operatives must infiltrate and sabotage an Imperial corvette from within. This stealth-based mission requires careful planning and execution to avoid detection while completing critical objectives."
    },
    {
      name: "Corvette Tactics",
      description: "Team strategies and role assignments for ship assaults",
      content: "Master the art of coordinated ship-to-ship combat and boarding operations. Learn optimal team compositions, breach tactics, and shipboard combat strategies for both Imperial and Rebel corvette missions."
    }
  ];

  // Planetary Quest Lines
  const planetaryQuests: Guide[] = [
    {
      name: "Tatooine Quests",
      description: "Desert world adventures and moisture farming",
      content: "Explore the harsh desert world of Tatooine through various quest lines involving moisture farmers, Jawa traders, Tusken Raiders, and the criminal underworld. These quests offer insight into life on the galaxy's most famous desert planet."
    },
    {
      name: "Naboo Quests",
      description: "Royal palace intrigue and political machinations",
      content: "Navigate the complex political landscape of Naboo through quests involving royal court intrigue, Trade Federation remnants, and the planet's unique relationship with the Gungans."
    },
    {
      name: "Corellia Quests",
      description: "Industrial world missions and corporate espionage",
      content: "Delve into the industrial heart of the galaxy with missions involving corporate espionage, smuggling operations, and the complex relationship between Corellian independence and Imperial control."
    },
    {
      name: "Dantooine Quests",
      description: "Agricultural frontier stories and ancient ruins",
      content: "Explore the pastoral world of Dantooine through agricultural missions, ancient Jedi ruins exploration, and encounters with the planet's unique wildlife and settler communities."
    }
  ];

  // Force-Sensitive Locations  
  const forceLocations: Guide[] = [
    {
      name: "Ancient Jedi Temple Ruins",
      description: "Force mysteries and ancient Jedi artifacts",
      content: "Explore the remnants of ancient Jedi temples scattered across the galaxy. These sacred sites hold powerful Force energies and contain artifacts that can enhance a Force-user's abilities and understanding of the light side."
    },
    {
      name: "Sith Shadow Encounters",
      description: "Dark side challenges and fallen Jedi confrontations",
      content: "Face the darkness within and without in encounters with Sith shadows and fallen Jedi. These challenging confrontations test a Jedi's resolve and commitment to the light side of the Force."
    },
    {
      name: "Force Crystal Caves",
      description: "Lightsaber component hunting in crystal formations",
      content: "Venture into dangerous crystal caves to harvest rare Force crystals essential for lightsaber construction. These expeditions require both combat skills and Force sensitivity to locate the most powerful crystals."
    },
    {
      name: "Dark Jedi Enclaves",
      description: "Fallen Jedi strongholds with corrupted Force users",
      content: "Infiltrate and cleanse dark Jedi enclaves where fallen Force users have established strongholds. These dangerous locations harbor corrupted Jedi who have turned to the dark side."
    }
  ];

  // Creature Lairs & Nests
  const creatureLairs: Guide[] = [
    {
      name: "Krayt Dragon Lair",
      description: "Tatooine's apex predator in its desert stronghold",
      content: "Face the legendary Krayt Dragon in its desert lair on Tatooine. This massive creature requires a well-coordinated group effort to defeat and offers some of the rarest materials in the galaxy, including krayt dragon scales and pearls."
    },
    {
      name: "Rancor Cave",
      description: "Dathomir beast encounters in underground caverns",
      content: "Venture into the dangerous caverns of Dathomir to confront the mighty rancor. These powerful beasts guard valuable resources and pose a significant challenge even to experienced adventurers."
    },
    {
      name: "Nightsister Stronghold",
      description: "Dathomir witch fortress with dark magic",
      content: "Infiltrate the mysterious strongholds of the Nightsisters on Dathomir. These dark Force-users employ powerful magic and dangerous creatures to defend their ancient fortresses and arcane secrets."
    },
    {
      name: "Spider Clan Cave",
      description: "Nightsister arachnid allies in web-filled tunnels",
      content: "Navigate the treacherous web-filled tunnels where the Nightsisters' spider allies make their homes. These arachnid creatures are both numerous and deadly, requiring careful tactics to overcome."
    }
  ];

  // Space Adventures
  const spaceDungeons: Guide[] = [
    {
      name: "Star Destroyer Assault",
      description: "Capital ship raids requiring coordinated starfighter attacks",
      content: "Coordinate massive starfighter assaults against Imperial Star Destroyers. These epic space battles require precise teamwork, advanced piloting skills, and strategic coordination to overcome the Empire's most powerful warships."
    },
    {
      name: "Space Station Infiltration",
      description: "Orbital facility missions with zero-gravity combat",
      content: "Infiltrate heavily defended orbital facilities in unique zero-gravity combat scenarios. These missions require adaptation to weightless environments and specialized equipment for space-based operations."
    },
    {
      name: "Asteroid Base",
      description: "Hidden pirate strongholds in asteroid fields",
      content: "Navigate treacherous asteroid fields to locate and assault hidden pirate bases. These remote strongholds serve as staging areas for criminal operations and contain valuable stolen goods."
    }
  ];

  // Elite & Heroic Content
  const eliteContent: Guide[] = [
    {
      name: "Heroic Encounters",
      description: "Maximum difficulty challenges for elite groups",
      content: "Face the galaxy's most challenging encounters designed for elite groups of experienced players. These heroic difficulties offer the rarest rewards but require perfect coordination and masterful execution."
    },
    {
      name: "World Bosses",
      description: "Planetary threats requiring server-wide coordination",
      content: "Coordinate with other players across the server to take down massive world bosses. These colossal threats require large-scale cooperation and offer server-wide rewards upon defeat."
    },
    {
      name: "Legendary Creatures",
      description: "Ultra-rare beast encounters with unique mechanics",
      content: "Hunt down legendary creatures that spawn rarely and possess unique abilities. These encounters provide exclusive rewards and bragging rights for those skilled enough to defeat them."
    }
  ];

  // Adventure Preparation
  const preparation: Guide[] = [
    {
      name: "Group Composition",
      description: "Building the perfect team with balanced roles",
      content: "Learn how to build effective teams for different types of content. Understanding role synergies, skill combinations, and group dynamics is essential for success in challenging group content."
    },
    {
      name: "Gear Requirements",
      description: "Equipment recommendations and minimum standards",
      content: "Understand the gear requirements for different levels of content. From basic equipment for entry-level adventures to specialized gear for elite encounters, proper preparation is key to success."
    },
    {
      name: "Consumables Guide",
      description: "Buffs, stims, and essential supplies for success",
      content: "Master the use of consumables, buffs, and stimulants to enhance your performance in challenging content. Learn which items provide the greatest benefit for different types of encounters."
    },
    {
      name: "Loot Tables",
      description: "Reward breakdowns and drop rate information",
      content: "Comprehensive information about loot tables, drop rates, and reward structures for various content types. Plan your adventures based on the rewards you seek."
    }
  ];

  // Factional Warfare
  const factionQuests: Guide[] = [
    {
      name: "Imperial GCW Missions",
      description: "Serve the Emperor with military precision",
      content: "Join the Imperial military machine and participate in Galactic Civil War missions. Fight for order and control across the galaxy while earning Imperial ranks and exclusive rewards."
    },
    {
      name: "Rebel GCW Missions", 
      description: "Fight the Empire for galactic freedom",
      content: "Take up arms with the Rebel Alliance in their fight against Imperial tyranny. Participate in guerrilla operations, sabotage missions, and coordinated strikes against Imperial targets."
    },
    {
      name: "Faction Base Assaults",
      description: "Coordinated attacks on enemy strongholds", 
      content: "Coordinate large-scale assaults on enemy faction bases. These epic battles require strategic planning, teamwork, and persistence to capture and hold enemy territory."
    }
  ];

  const GuideSection = ({ title, guides }: { title: string, guides: Guide[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {guides.map((guide) => (
          <div key={guide.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedGuide === guide.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleGuide(guide.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{guide.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{guide.description}</p>
              </div>
              {expandedGuide === guide.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedGuide === guide.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <p className="text-gray-300 mb-4">{guide.content}</p>
                {guide.guideLink && (
                  <Link 
                    href={guide.guideLink}
                    className="inline-flex items-center px-4 py-2 bg-[hsl(var(--swg-accent-gold))] text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
                  >
                    View Complete Step-by-Step Guide →
                  </Link>
                )}
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
          title="Adventure Guides"
          subtitle="Complete epic quests and conquer dangerous dungeons across the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Adventure Awaits in Every Corner of the Galaxy</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies features an extensive adventure system combining epic quests, challenging dungeons, 
                  and group content that require coordination, strategy, and skill to overcome. From theme park adventures 
                  to ancient temples and high-tech facilities, these guides will help you navigate the galaxy's most 
                  exciting challenges and discover hidden treasures. Click on any adventure below to learn more about its requirements and rewards.
                </p>
              </div>

              <GuideSection title="Theme Park Adventures" guides={themeParkQuests} />
              <GuideSection title="Classic Dungeons" guides={classicDungeons} />
              <GuideSection title="Jedi & Force Content" guides={jediQuests} />
              <GuideSection title="Corvette Adventures" guides={corvetteAdventures} />
              <GuideSection title="Planetary Quest Lines" guides={planetaryQuests} />
              <GuideSection title="Force-Sensitive Locations" guides={forceLocations} />
              <GuideSection title="Creature Lairs & Nests" guides={creatureLairs} />
              <GuideSection title="Space Adventures" guides={spaceDungeons} />
              <GuideSection title="Elite & Heroic Content" guides={eliteContent} />
              <GuideSection title="Factional Warfare" guides={factionQuests} />
              <GuideSection title="Adventure Preparation" guides={preparation} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8 mb-8">
                <p className="text-gray-300">
                  Whether you're seeking adventure, credits, faction points, badges for Jedi unlock, or rare items, 
                  the galaxy is full of opportunities for those willing to take on the challenge. Many quests and 
                  dungeons offer unique rewards that cannot be obtained through other means, making them essential 
                  for dedicated players seeking to experience all that SWG Infinity has to offer.
                </p>
              </div>

              <div className="p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">Adventure Notice</h5>
                    <p className="text-gray-300 text-sm">
                      Many adventures contain high-level enemies, environmental hazards, and complex quest mechanics. 
                      Always ensure you and your group are properly equipped and prepared before attempting challenging 
                      content. Some locations may have prerequisites or may trap players inside until completion.
                    </p>
                  </div>
                </div>
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
