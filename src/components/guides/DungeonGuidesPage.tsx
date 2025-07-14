"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

interface Dungeon {
  name: string;
  description: string;
  content: string;
}

export function DungeonGuidesPage() {
  const [expandedDungeon, setExpandedDungeon] = useState<string | null>(null);

  const toggleDungeon = (dungeonName: string) => {
    if (expandedDungeon === dungeonName) {
      setExpandedDungeon(null);
    } else {
      setExpandedDungeon(dungeonName);
    }
  };

  const classicDungeons: Dungeon[] = [
    {
      name: "The Warren",
      description: "Corellian CorSec facility with security systems and droids",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Geonosian Bio-Lab",
      description: "Yavin 4 research facility with dangerous experiments",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
    },
    {
      name: "Death Watch Bunker",
      description: "Endor Mandalorian stronghold with elite warriors",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
    },
    {
      name: "Avatar Platform",
      description: "Space station adventure with unique challenges",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus."
    }
  ];

  const corvetteAdventures: Dungeon[] = [
    {
      name: "Rebel Assault Ship",
      description: "Imperial boarding mission on captured Rebel vessel",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
    },
    {
      name: "Imperial Corvette",
      description: "Rebel infiltration of Imperial warship",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Corvette Tactics",
      description: "Team strategies and role assignments for ship assaults",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue."
    }
  ];

  const forceLocations: Dungeon[] = [
    {
      name: "Ancient Jedi Temple Ruins",
      description: "Force mysteries and ancient Jedi artifacts",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      name: "Sith Shadow Encounters",
      description: "Dark side challenges and fallen Jedi confrontations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio."
    },
    {
      name: "Force Crystal Caves",
      description: "Lightsaber component hunting in crystal formations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."
    },
    {
      name: "Dark Jedi Enclaves",
      description: "Fallen Jedi strongholds with corrupted Force users",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus. Nullam vel sem vel sapien hendrerit cursus."
    }
  ];

  const creatureLairs: Dungeon[] = [
    {
      name: "Krayt Dragon Lair",
      description: "Tatooine's apex predator in its desert stronghold",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
    },
    {
      name: "Rancor Cave",
      description: "Dathomir beast encounters in underground caverns",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      name: "Nightsister Stronghold",
      description: "Dathomir witch fortress with dark magic",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam."
    },
    {
      name: "Spider Clan Cave",
      description: "Nightsister arachnid allies in web-filled tunnels",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque."
    }
  ];

  const spaceDungeons: Dungeon[] = [
    {
      name: "Star Destroyer Assault",
      description: "Capital ship raids requiring coordinated starfighter attacks",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus."
    },
    {
      name: "Space Station Infiltration",
      description: "Orbital facility missions with zero-gravity combat",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam."
    },
    {
      name: "Asteroid Base",
      description: "Hidden pirate strongholds in asteroid fields",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus."
    }
  ];

  const eliteContent: Dungeon[] = [
    {
      name: "Heroic Encounters",
      description: "Maximum difficulty challenges for elite groups",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      name: "World Bosses",
      description: "Planetary threats requiring server-wide coordination",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Legendary Creatures",
      description: "Ultra-rare beast encounters with unique mechanics",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."
    }
  ];

  const preparation: Dungeon[] = [
    {
      name: "Group Composition",
      description: "Building the perfect team with balanced roles",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      name: "Gear Requirements",
      description: "Equipment recommendations and minimum standards",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere."
    },
    {
      name: "Consumables Guide",
      description: "Buffs, stims, and essential supplies for success",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula."
    },
    {
      name: "Loot Tables",
      description: "Reward breakdowns and drop rate information",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue."
    }
  ];

  const DungeonSection = ({ title, dungeons }: { title: string, dungeons: Dungeon[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {dungeons.map((dungeon) => (
          <div key={dungeon.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedDungeon === dungeon.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleDungeon(dungeon.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{dungeon.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{dungeon.description}</p>
              </div>
              {expandedDungeon === dungeon.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedDungeon === dungeon.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <p className="text-gray-300">{dungeon.content}</p>
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
          title="Dungeon Guides"
          subtitle="Conquer the galaxy's most dangerous locations"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Face the Galaxy's Greatest Challenges</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies features numerous challenging dungeons and group content that require coordination, 
                  strategy, and skill to overcome. From ancient temples to high-tech facilities, these locations offer 
                  the best rewards for those brave enough to venture into their depths. Click on any dungeon below to learn more about its challenges and rewards.
                </p>
              </div>

              <DungeonSection title="Classic Dungeons" dungeons={classicDungeons} />
              <DungeonSection title="Corvette Adventures" dungeons={corvetteAdventures} />
              <DungeonSection title="Force-Sensitive Locations" dungeons={forceLocations} />
              <DungeonSection title="Creature Lairs & Nests" dungeons={creatureLairs} />
              <DungeonSection title="Space Dungeons" dungeons={spaceDungeons} />
              <DungeonSection title="Elite & Heroic Content" dungeons={eliteContent} />
              <DungeonSection title="Dungeon Preparation" dungeons={preparation} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8 mb-8">
                <p className="text-gray-300">
                  Dungeon content in SWG offers some of the most challenging and rewarding gameplay experiences. Success 
                  requires not only individual skill but also teamwork, communication, and careful preparation. The rewards 
                  include rare materials, unique weapons and armor, and exclusive items that cannot be obtained elsewhere.
                </p>
              </div>

              <div className="p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">Safety Notice</h5>
                    <p className="text-gray-300 text-sm">
                      Many dungeons contain high-level enemies and environmental hazards. Always ensure your group is 
                      properly equipped and prepared before attempting challenging content. Death penalties can be severe, 
                      and some locations may trap players inside until completion.
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
