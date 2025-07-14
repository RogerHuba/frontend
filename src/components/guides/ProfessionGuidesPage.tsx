"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";

export function ProfessionGuidesPage() {
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
                  will help you understand the intricacies of each profession.
                </p>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Combat Professions</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/profession-guides/marksman" className="text-blue-400 hover:text-blue-300">
                    Marksman - Master of ranged combat
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/rifleman" className="text-blue-400 hover:text-blue-300">
                    Rifleman - Heavy weapons specialist
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/pistoleer" className="text-blue-400 hover:text-blue-300">
                    Pistoleer - Quick draw expert
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/carbineer" className="text-blue-400 hover:text-blue-300">
                    Carbineer - Versatile weapon user
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/fencer" className="text-blue-400 hover:text-blue-300">
                    Fencer - Melee combat specialist
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/swordsman" className="text-blue-400 hover:text-blue-300">
                    Swordsman - Master of bladed weapons
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/pikeman" className="text-blue-400 hover:text-blue-300">
                    Pikeman - Polearm expert
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/teras-kasi-artist" className="text-blue-400 hover:text-blue-300">
                    Teras Kasi Artist - Unarmed combat master
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/brawler" className="text-blue-400 hover:text-blue-300">
                    Brawler - Foundation combat skills
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Crafting Professions</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/profession-guides/weaponsmith" className="text-blue-400 hover:text-blue-300">
                    Weaponsmith - Create deadly weapons
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/armorsmith" className="text-blue-400 hover:text-blue-300">
                    Armorsmith - Forge protective gear
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/chef" className="text-blue-400 hover:text-blue-300">
                    Chef - Master culinary arts
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/tailor" className="text-blue-400 hover:text-blue-300">
                    Tailor - Fashion and clothing expert
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/architect" className="text-blue-400 hover:text-blue-300">
                    Architect - Build structures and furniture
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/droid-engineer" className="text-blue-400 hover:text-blue-300">
                    Droid Engineer - Create mechanical companions
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/shipwright" className="text-blue-400 hover:text-blue-300">
                    Shipwright - Construct starships
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Social & Support Professions</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/profession-guides/doctor" className="text-blue-400 hover:text-blue-300">
                    Doctor - Heal wounds and cure ailments
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/medic" className="text-blue-400 hover:text-blue-300">
                    Medic - Field medical support
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/entertainer" className="text-blue-400 hover:text-blue-300">
                    Entertainer - Music, dance, and social healing
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/musician" className="text-blue-400 hover:text-blue-300">
                    Musician - Master of melodies
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/dancer" className="text-blue-400 hover:text-blue-300">
                    Dancer - Art of movement
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/image-designer" className="text-blue-400 hover:text-blue-300">
                    Image Designer - Customize appearances
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Utility & Outdoor Professions</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/profession-guides/scout" className="text-blue-400 hover:text-blue-300">
                    Scout - Wilderness survival expert
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/ranger" className="text-blue-400 hover:text-blue-300">
                    Ranger - Advanced outdoor skills
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/creature-handler" className="text-blue-400 hover:text-blue-300">
                    Creature Handler - Tame and train creatures
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/bio-engineer" className="text-blue-400 hover:text-blue-300">
                    Bio-Engineer - Genetic manipulation
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/merchant" className="text-blue-400 hover:text-blue-300">
                    Merchant - Trade and commerce
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/smuggler" className="text-blue-400 hover:text-blue-300">
                    Smuggler - Slice and infiltrate
                  </Link>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-4">Elite Professions</h4>
              <ul className="mb-8 space-y-2">
                <li>
                  <Link href="/guides/profession-guides/bounty-hunter" className="text-blue-400 hover:text-blue-300">
                    Bounty Hunter - Track and capture targets
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/commando" className="text-blue-400 hover:text-blue-300">
                    Commando - Heavy weapons and tactics
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/spy" className="text-blue-400 hover:text-blue-300">
                    Spy - Espionage and infiltration
                  </Link>
                </li>
                <li>
                  <Link href="/guides/profession-guides/officer" className="text-blue-400 hover:text-blue-300">
                    Officer - Leadership and command
                  </Link>
                </li>
              </ul>

              <p className="text-gray-300">
                Each profession offers unique gameplay experiences and progression paths. Consider your playstyle and 
                interests when choosing your character's development path. Many players choose to master multiple 
                professions or combine skills from different trees to create hybrid builds.
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
