"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";

export function DungeonGuidesPage() {
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
                  the best rewards for those brave enough to venture into their depths.
                </p>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Classic Dungeons</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/the-warren" className="text-blue-400 hover:text-blue-300">
                    The Warren - Corellian CorSec facility
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/geonosian-bio-lab" className="text-blue-400 hover:text-blue-300">
                    Geonosian Bio-Lab - Yavin 4 research facility
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/death-watch-bunker" className="text-blue-400 hover:text-blue-300">
                    Death Watch Bunker - Endor Mandalorian stronghold
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/avatar-platform" className="text-blue-400 hover:text-blue-300">
                    Avatar Platform - Space station adventure
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Corvette Adventures</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/rebel-corvette" className="text-blue-400 hover:text-blue-300">
                    Rebel Assault Ship - Imperial boarding mission
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/imperial-corvette" className="text-blue-400 hover:text-blue-300">
                    Imperial Corvette - Rebel infiltration
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/corvette-tactics" className="text-blue-400 hover:text-blue-300">
                    Corvette Tactics - Team strategies and roles
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Force-Sensitive Locations</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/jedi-temple-ruins" className="text-blue-400 hover:text-blue-300">
                    Ancient Jedi Temple Ruins - Force mysteries
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/sith-shadow-encounter" className="text-blue-400 hover:text-blue-300">
                    Sith Shadow Encounters - Dark side challenges
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/force-crystal-caves" className="text-blue-400 hover:text-blue-300">
                    Force Crystal Caves - Lightsaber component hunting
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/dark-jedi-enclaves" className="text-blue-400 hover:text-blue-300">
                    Dark Jedi Enclaves - Fallen Jedi strongholds
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Creature Lairs & Nests</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/krayt-dragon-lair" className="text-blue-400 hover:text-blue-300">
                    Krayt Dragon Lair - Tatooine's apex predator
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/rancor-cave" className="text-blue-400 hover:text-blue-300">
                    Rancor Cave - Dathomir beast encounters
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/sarlacc-pit" className="text-blue-400 hover:text-blue-300">
                    Sarlacc Pit - The Great Pit of Carkoon
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/nightsister-stronghold" className="text-blue-400 hover:text-blue-300">
                    Nightsister Stronghold - Dathomir witch fortress
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/spider-clan-cave" className="text-blue-400 hover:text-blue-300">
                    Spider Clan Cave - Nightsister arachnid allies
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Space Dungeons</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/star-destroyer-assault" className="text-blue-400 hover:text-blue-300">
                    Star Destroyer Assault - Capital ship raids
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/space-station-infiltration" className="text-blue-400 hover:text-blue-300">
                    Space Station Infiltration - Orbital facility missions
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/asteroid-base" className="text-blue-400 hover:text-blue-300">
                    Asteroid Base - Hidden pirate strongholds
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Elite & Heroic Content</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/heroic-encounters" className="text-blue-400 hover:text-blue-300">
                    Heroic Encounters - Maximum difficulty challenges
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/world-bosses" className="text-blue-400 hover:text-blue-300">
                    World Bosses - Planetary threats requiring coordination
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/raid-mechanics" className="text-blue-400 hover:text-blue-300">
                    Raid Mechanics - Advanced group tactics
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/legendary-creatures" className="text-blue-400 hover:text-blue-300">
                    Legendary Creatures - Ultra-rare beast encounters
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Dungeon Preparation</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/dungeon-guides/group-composition" className="text-blue-400 hover:text-blue-300">
                    Group Composition - Building the perfect team
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/gear-requirements" className="text-blue-400 hover:text-blue-300">
                    Gear Requirements - Equipment recommendations
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/consumables-guide" className="text-blue-400 hover:text-blue-300">
                    Consumables Guide - Buffs, stims, and supplies
                  </Link>
                </li>
                <li>
                  <Link href="/guides/dungeon-guides/loot-tables" className="text-blue-400 hover:text-blue-300">
                    Loot Tables - Reward breakdowns and drop rates
                  </Link>
                </li>
              </ul>

              <p className="text-gray-300">
                Dungeon content in SWG offers some of the most challenging and rewarding gameplay experiences. Success 
                requires not only individual skill but also teamwork, communication, and careful preparation. The rewards 
                include rare materials, unique weapons and armor, and exclusive items that cannot be obtained elsewhere.
              </p>

              <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                <h5 className="text-yellow-400 font-semibold mb-2">⚠️ Safety Notice</h5>
                <p className="text-gray-300 text-sm">
                  Many dungeons contain high-level enemies and environmental hazards. Always ensure your group is 
                  properly equipped and prepared before attempting challenging content. Death penalties can be severe, 
                  and some locations may trap players inside until completion.
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
