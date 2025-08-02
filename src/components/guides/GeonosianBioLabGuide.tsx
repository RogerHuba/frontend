"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { AlertTriangle, MapPin, Clock, Skull, Key } from "lucide-react";
import Link from "next/link";

export function GeonosianBioLabGuide() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Geonosian Bio-Lab"
          subtitle="Complete walkthrough for the dangerous research facility on Yavin IV"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link 
                  href="/guides/quest-guides"
                  className="inline-flex items-center text-[hsl(var(--swg-accent-gold))] hover:text-yellow-400 transition-colors mb-4"
                >
                  ← Back to Adventure Guides
                </Link>
              </div>

              <h1 className="section-title mb-6">Geonosian Bio-Lab Complete Guide</h1>
              <hr className="border-gray-700 mb-8" />

              {/* Location Info */}
              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Location</h3>
                      <p className="text-gray-300">Yavin IV at coordinates <span className="text-[hsl(var(--swg-accent-gold))]">-6450 -360</span></p>
                      <p className="text-gray-400 text-sm">Closest starport: Labor Outpost</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Boss Respawn</h3>
                      <p className="text-gray-300">30-minute timers</p>
                      <p className="text-gray-400 text-sm">All three bosses on same timer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">SWG Infinity Specific Notice</h5>
                    <p className="text-gray-300 text-sm">
                      On SWG Infinity, door codes are <strong>randomized</strong> and change regularly. You must speak to the correct NPCs 
                      in the dungeon to obtain current door codes rather than using static numbers found in older guides. 
                      The assistant NPC will provide you with the current computer codes needed to progress.
                    </p>
                  </div>
                </div>
              </div>

              {/* Boss Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Skull className="h-6 w-6 text-red-400 mr-3" />
                  Boss Creatures
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-3">Acklay (Final Boss)</h3>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• 1.6 million HAM</li>
                      <li>• Can be enraged to attack other creatures</li>
                      <li>• Located in final chamber</li>
                      <li>• Highest value loot drops</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-3">Unstable Reek</h3>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Charging attacks</li>
                      <li>• High physical damage</li>
                      <li>• Mid-level boss encounter</li>
                      <li>• Guards research chambers</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-3">Unstable Nexu</h3>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Fast, agile attacks</li>
                      <li>• Stealth capabilities</li>
                      <li>• Poison damage over time</li>
                      <li>• Patrols laboratory areas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Walkthrough */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Step-by-Step Walkthrough</h2>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-4 flex items-center">
                      <span className="bg-[hsl(var(--swg-accent-gold))] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                      Entrance and Initial Setup
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Travel to Yavin IV coordinates <strong>-6450 -360</strong></li>
                      <li>• Use Labor Outpost as your closest starport</li>
                      <li>• Look for the Geonosian Bio-Lab facility entrance</li>
                      <li>• Ensure your group is properly buffed and equipped</li>
                      <li>• Recommended group size: 4-8 players for optimal clear speed</li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-4 flex items-center">
                      <span className="bg-[hsl(var(--swg-accent-gold))] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                      First Chamber - Code Acquisition
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Clear the initial Geonosian defenders</li>
                      <li>• Locate and speak to the <strong>Assistant NPC</strong></li>
                      <li>• Obtain the current computer codes (randomized on SWG Infinity)</li>
                      <li>• Note down the codes as they will be needed for locked doors</li>
                      <li>• Be prepared for respawning enemies if you take too long</li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-4 flex items-center">
                      <span className="bg-[hsl(var(--swg-accent-gold))] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                      Navigate Coded Doors
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Use the computer codes obtained from the Assistant NPC</li>
                      <li>• Input codes at the door terminals to unlock passages</li>
                      <li>• <strong>Warning:</strong> Incorrect codes may trigger security measures</li>
                      <li>• Keep the group together when moving through unlocked doors</li>
                      <li>• Some doors may require multiple codes in sequence</li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-4 flex items-center">
                      <span className="bg-[hsl(var(--swg-accent-gold))] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                      Laboratory Chambers
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Battle through multiple chambers filled with:</li>
                      <li className="ml-4">→ Geonosian Warriors and Scientists</li>
                      <li className="ml-4">→ Laboratory Spiders (various sizes)</li>
                      <li className="ml-4">→ Force Klikniks (Force-sensitive insects)</li>
                      <li>• Avoid <strong>poison gas clouds</strong> in certain areas</li>
                      <li>• Look for <strong>short-circuited passkeys</strong> dropped by enemies</li>
                    </ul>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-4 flex items-center">
                      <span className="bg-[hsl(var(--swg-accent-gold))] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">5</span>
                      Boss Encounters
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Face the <strong>Unstable Nexu</strong> first (stealth attacks, poison DOT)</li>
                      <li>• Battle the <strong>Unstable Reek</strong> (charging attacks, high damage)</li>
                      <li>• Prepare for the final boss: <strong>Acklay</strong> (1.6M HAM)</li>
                      <li>• Use terrain and positioning to your advantage</li>
                      <li>• Consider enraging the Acklay to attack other creatures</li>
                    </ul>
                  </div>

                  {/* Step 6 */}
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-4 flex items-center">
                      <span className="bg-[hsl(var(--swg-accent-gold))] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">6</span>
                      Loot and Exit
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Collect loot from all boss creatures</li>
                      <li>• Check for special drops unique to the Bio-Lab</li>
                      <li>• Acklay provides the highest value rewards</li>
                      <li>• Remember the 30-minute respawn timer for return visits</li>
                      <li>• Exit carefully - some areas may have respawned enemies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Items Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Key className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-3" />
                  Key Items and Mechanics
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-3">Essential Items</h3>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Computer Codes:</strong> From Assistant NPC (randomized)</li>
                      <li>• <strong>Short-Circuited Passkeys:</strong> Dropped by enemies</li>
                      <li>• <strong>Door Access Cards:</strong> Some areas may require special access</li>
                      <li>• <strong>Emergency Stims:</strong> Recommended for poison encounters</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                    <h3 className="text-[hsl(var(--swg-accent-gold))] font-semibold mb-3">Special Mechanics</h3>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Poison Gas:</strong> Avoid green cloud areas</li>
                      <li>• <strong>Coded Doors:</strong> Require specific numeric sequences</li>
                      <li>• <strong>Boss Enrage:</strong> Acklay can turn on other creatures</li>
                      <li>• <strong>Respawn Timers:</strong> 30 minutes for all bosses</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tips and Warnings */}
              <div className="p-6 bg-red-900/20 border border-red-600/30 rounded-lg mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-red-400 font-semibold mb-2">Important Warnings</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Always obtain fresh codes from the Assistant NPC - old guides with static codes will not work</li>
                      <li>• Poison gas areas can quickly drain your HAM - move through them quickly</li>
                      <li>• Boss creatures have large aggro ranges - be prepared for immediate combat</li>
                      <li>• Some doors may lock behind you, requiring the group to complete sections together</li>
                      <li>• Force Klikniks can detect and attack Force-sensitive characters from greater distances</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300">
                  The Geonosian Bio-Lab represents one of the more challenging dungeon experiences in SWG, 
                  combining puzzle-solving elements with intense combat encounters. Success requires both 
                  individual skill and group coordination, making it an excellent test for experienced 
                  adventurers seeking valuable rewards and exciting gameplay.
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
