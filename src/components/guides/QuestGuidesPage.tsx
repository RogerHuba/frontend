"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";

export function QuestGuidesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Quest Guides"
          subtitle="Complete epic adventures across the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Adventure Awaits in Every Corner of the Galaxy</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies features an extensive quest system with theme parks, story missions, and dynamic content. 
                  From simple delivery missions to epic multi-part adventures, these guides will help you navigate the 
                  galaxy's most exciting challenges and discover hidden treasures.
                </p>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Theme Park Adventures</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/quest-guides/nyms-theme-park" className="text-blue-400 hover:text-blue-300">
                    Nym's Theme Park - Lok pirate adventures
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/jabbas-theme-park" className="text-blue-400 hover:text-blue-300">
                    Jabba's Theme Park - Hutt cartel missions
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/imperial-theme-park" className="text-blue-400 hover:text-blue-300">
                    Imperial Theme Park - Serve the Empire
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/rebel-theme-park" className="text-blue-400 hover:text-blue-300">
                    Rebel Theme Park - Fight for freedom
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Jedi & Force Quests</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/quest-guides/jedi-unlock" className="text-blue-400 hover:text-blue-300">
                    Jedi Unlock - Path to Force sensitivity
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/village-of-aurilia" className="text-blue-400 hover:text-blue-300">
                    The Village of Aurilia - Force-sensitive training
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/padawan-trials" className="text-blue-400 hover:text-blue-300">
                    The Padawan Trials - Begin Jedi training
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/knight-trials" className="text-blue-400 hover:text-blue-300">
                    The Knight Trials - Achieve Jedi Knighthood
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/force-shrine-quests" className="text-blue-400 hover:text-blue-300">
                    Force Shrine Quests - Ancient Force mysteries
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Planetary Quest Lines</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/quest-guides/tatooine-quests" className="text-blue-400 hover:text-blue-300">
                    Tatooine - Desert world adventures
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/naboo-quests" className="text-blue-400 hover:text-blue-300">
                    Naboo - Royal palace intrigue
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/corellia-quests" className="text-blue-400 hover:text-blue-300">
                    Corellia - Industrial world missions
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/rori-quests" className="text-blue-400 hover:text-blue-300">
                    Rori - Gungan swamp expeditions
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/talus-quests" className="text-blue-400 hover:text-blue-300">
                    Talus - Mining colony conflicts
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/dantooine-quests" className="text-blue-400 hover:text-blue-300">
                    Dantooine - Agricultural frontier stories
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/lok-quests" className="text-blue-400 hover:text-blue-300">
                    Lok - Sulfur mining and pirate encounters
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/yavin-4-quests" className="text-blue-400 hover:text-blue-300">
                    Yavin 4 - Ancient temple expeditions
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/endor-quests" className="text-blue-400 hover:text-blue-300">
                    Endor - Ewok village adventures
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/dathomir-quests" className="text-blue-400 hover:text-blue-300">
                    Dathomir - Nightsister dark magic
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Special Event Quests</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/quest-guides/life-day-quests" className="text-blue-400 hover:text-blue-300">
                    Life Day Celebrations - Seasonal festivities
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/empire-day-quests" className="text-blue-400 hover:text-blue-300">
                    Empire Day Events - Imperial propaganda
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/remembrance-day-quests" className="text-blue-400 hover:text-blue-300">
                    Remembrance Day - Honor fallen heroes
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/galactic-moon-festival" className="text-blue-400 hover:text-blue-300">
                    Galactic Moon Festival - Mystical celebrations
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Factional Warfare Quests</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/quest-guides/gcw-imperial-quests" className="text-blue-400 hover:text-blue-300">
                    Imperial GCW Missions - Serve the Emperor
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/gcw-rebel-quests" className="text-blue-400 hover:text-blue-300">
                    Rebel GCW Missions - Fight the Empire
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/faction-bases" className="text-blue-400 hover:text-blue-300">
                    Faction Base Assaults - Coordinated attacks
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/space-battles" className="text-blue-400 hover:text-blue-300">
                    Space Battle Missions - Starfighter combat
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Collection & Achievement Quests</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/quest-guides/badge-hunting" className="text-blue-400 hover:text-blue-300">
                    Badge Hunting - Complete your collection
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/treasure-hunting" className="text-blue-400 hover:text-blue-300">
                    Treasure Hunting - Find hidden riches
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/creature-knowledge" className="text-blue-400 hover:text-blue-300">
                    Creature Knowledge - Study galactic fauna
                  </Link>
                </li>
                <li>
                  <Link href="/guides/quest-guides/exploration-badges" className="text-blue-400 hover:text-blue-300">
                    Exploration Badges - Discover hidden locations
                  </Link>
                </li>
              </ul>

              <p className="text-gray-300">
                Whether you're seeking adventure, credits, faction points, or rare items, the galaxy is full of 
                opportunities for those willing to take on the challenge. Many quests offer unique rewards that 
                cannot be obtained through other means, making them essential for dedicated players.
              </p>
            </div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <ServerInfoFooter />
    </main>
  );
}
