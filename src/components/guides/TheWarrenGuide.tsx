"use client";

import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

export function TheWarrenGuide() {
  return (
    <PageLayout
      title="The Warren"
      subtitle="Complete guide to The Warren theme park on Dantooine"
    >
      <div className="mb-8">
        <Link 
          href="/guides/adventure-guides"
          className="inline-flex items-center text-[hsl(var(--swg-accent-gold))] hover:text-yellow-400 transition-colors mb-4"
        >
          ← Back to Adventure Guides
        </Link>
      </div>

      <h2 className="section-title mb-6">The Warren</h2>

      <p className="text-gray-300 mb-8">
        The Warren is a large theme park on Dantooine that can be accomplished rather quickly – being the second fastest theme park after Nym's. 
        Most players complete The Warren because you can receive two badges (Compassion and Imperial Hero) which count as two separate content badges 
        (out of the three you need for Jedi unlock).
      </p>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-8">
        <h3 className="text-white font-semibold text-lg mb-4">📺 Video Guides</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
            <div>
              <a 
                href="https://www.youtube.com/watch?v=n9zQrs-kxXM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--swg-accent-gold))] hover:text-yellow-400 transition-colors font-medium"
              >
                Warren YouTube Walkthrough by Mobyus1
              </a>
              <p className="text-gray-400 text-sm">Complete video walkthrough of The Warren theme park</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
            <div>
              <a 
                href="https://www.youtube.com/watch?v=p9eWkzgA9_w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--swg-accent-gold))] hover:text-yellow-400 transition-colors font-medium"
              >
                Alternative 20 Minute Warren Guide
              </a>
              <p className="text-gray-400 text-sm">Quick 20-minute guide for efficient completion</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-8">
        <h3 className="text-white font-semibold text-lg mb-4">Basic Information</h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Location:</span> Dantooine at /way -555 -3825</li>
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Starting Point:</span> Escapee at /way -558 -3735</li>
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Difficulty:</span> Medium - can be soloed</li>
          <li className="text-gray-300 mb-2"><span className="text-[hsl(var(--swg-accent-gold))]">Badges:</span> Warren: Compassion & Imperial Hero</li>
          <li className="text-gray-300"><span className="text-[hsl(var(--swg-accent-gold))]">Requirements:</span> 1 Encryption Key, 4 Evidence Disks</li>
        </ul>
      </div>

      <div className="bg-yellow-900 bg-opacity-20 border border-yellow-700 p-4 rounded-md mb-8">
        <h3 className="text-yellow-300 font-semibold mb-2">⚠️ Important Note</h3>
        <p className="text-yellow-200 text-sm">
          You must have the Letter in your inventory prior to speaking to Mirla to receive the Compassion badge. 
          Upon pickup of required items, they are set on a respawn timer.
        </p>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">1. Entering the Warren</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Talk to the <strong>escapee</strong> outside The Warren at <strong>/way -558 -3735</strong> to get the Main Entry Passkey</li>
        <li>Enter The Warren using the passkey</li>
        <li>Kill the <strong>Huurton Howlers</strong> in the first room</li>
        <li>Continue straight down the hallway into the <strong>four doors room</strong></li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">2. Collecting Passkeys</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Go to the <strong>farthest door on your right</strong> and follow until you find a broken droideka at a T intersection</li>
        <li>Go <strong>RIGHT</strong> to enter a room with lockers and beds</li>
        <li>Loot the <strong>two corpses</strong>:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>One corpse has a <strong>Letter</strong> (needed for Compassion badge)</li>
            <li>Other corpse has <strong>Master Control Room Elevator Control Passkey One</strong></li>
          </ul>
        </li>
        <li>Loot the <strong>Locker</strong>, <strong>MagSeal Container</strong>, and <strong>Metal Chest</strong> for the other three elevator passkeys</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">3. Deactivating the Turret</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Head back out the door, go straight down the hall and to the <strong>RIGHT</strong></li>
        <li>Loot the corpse by the elevator to get the <strong>Turret Sequence disk</strong></li>
        <li>Go back out and turn <strong>RIGHT TWICE</strong> to return to the four doors room</li>
        <li>Go through the door on your <strong>RIGHT</strong> into the droid room</li>
        <li>Kill all droids in the room, then turn <strong>LEFT</strong> to enter the turret controls room</li>
        <li>Stand in front of the <strong>Data Terminal</strong> across the room</li>
        <li>Open inventory and <strong>inspect the Turret Sequence disk</strong> to get a four-digit code</li>
        <li><strong>Say the code exactly</strong> in Spatial chat</li>
        <li>Verify the terminal shows: <span className="text-green-400">"Turret Defense System has been Deactivated"</span></li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">4. Activating the Elevators</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Return to droid room, hug right wall and enter the farthest door to your <strong>RIGHT</strong></li>
        <li>Take the elevator <strong>UP</strong></li>
        <li>Go through the turret room (turret will be gone), then through door on your <strong>RIGHT</strong></li>
        <li>Kill the two hostile droids in the next room</li>
        <li><strong>Double-click each of the four Passkey Terminals</strong> around the room to activate them</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">5. Downloading Evidence - Part 1</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Return to elevator, go DOWN, navigate back to four doors room</li>
        <li>Go through door to your <strong>LEFT</strong>, follow hallway to broken droideka, go <strong>LEFT</strong></li>
        <li>Take the elevator <strong>DOWN</strong> into the locker room</li>
        <li>Go through door on your <strong>LEFT</strong>, navigate through the cage room</li>
        <li>Enter door on your <strong>RIGHT</strong>, ignore Dirk Maggin NPC</li>
        <li>Take door on your <strong>LEFT</strong>, enter the first <strong>X room</strong></li>
        <li><strong>Download evidence</strong> from the Data Terminal (Evidence Disk - Experiment #1046)</li>
        <li>Check your Datapad → Data tab to confirm</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">6. Compassion Badge</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>From the Data Terminal, go through the door across the room</li>
        <li>Take the elevator <strong>DOWN</strong>, kill hostiles</li>
        <li>Hug left wall, turn <strong>LEFT</strong>, make a <strong>RIGHT</strong></li>
        <li>Go down ramp through door into droid storage room</li>
        <li>Go around Binary Load Lifter droid, through door on <strong>LEFT</strong></li>
        <li>Navigate to small open room, take door on <strong>LEFT</strong></li>
        <li>Find and speak to <strong>Mirla</strong> (must have Letter in inventory)</li>
        <li>Receive <span className="text-[hsl(var(--swg-accent-gold))]">"Warren: Compassion"</span> badge</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">7. Downloading Evidence - Part 2</h3>
      <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-md mb-4">
        <p className="text-gray-300 text-sm mb-2">This section involves collecting:</p>
        <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
          <li>Encryption Key from second X room</li>
          <li>Evidence Disk - Experiment #1173</li>
          <li>Evidence Disk - Experiment #1230</li>
          <li>Evidence Disk - Entry 1784</li>
          <li>Two Core Control Rods from AT-ST room</li>
        </ul>
      </div>
      
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Exit Mirla's room, return to tank room</li>
        <li>Enter <strong>second X room</strong> through door on LEFT, kill scientists</li>
        <li><strong>Download Encryption Key</strong> from Data Terminal</li>
        <li>Exit and go through door on LEFT, then straight through next door</li>
        <li><strong>Download second evidence</strong> (Experiment #1173) from Data Terminal</li>
        <li>Continue through rooms to elevator, go DOWN</li>
        <li>Enter <strong>AT-ST room</strong>, either kill it or hug left wall to avoid</li>
        <li><strong>Loot both drums</strong> in small rooms for <strong>Core Control Rods</strong></li>
        <li>Navigate through multiple rooms and elevators following detailed path</li>
        <li>Kill <strong>Teraud loyalist cyborg</strong> and <strong>Doctor Knag</strong></li>
        <li><strong>Download third evidence</strong> (Experiment #1230) from Data Terminal</li>
        <li>Navigate to reactor area, activate both <strong>Reactor Core Lockdown Overrides</strong></li>
        <li>Reactor will show: <span className="text-green-400">"REACTOR CORE DEACTIVATED"</span></li>
        <li>Enter droideka room, navigate to third X room</li>
        <li><strong>Download fourth evidence</strong> (Entry 1784) from final Data Terminal</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">8. Imperial Hero Badge</h3>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        <li>Navigate back through The Warren to exit (detailed path provided in guide)</li>
        <li>Fly to <strong>Theed on Naboo</strong></li>
        <li>Go to <strong>Theed Palace</strong> at <strong>/way -5495 4482</strong></li>
        <li>Enter palace, go up ramp and make U-turn to LEFT</li>
        <li>Speak to <strong>Captain Heff</strong></li>
        <li>Tell him you have evidence to automatically receive <span className="text-[hsl(var(--swg-accent-gold))]">"Imperial Hero"</span> badge</li>
        <li>Data items are removed from Datapad, inventory items remain</li>
      </ol>

      <h3 className="text-xl font-bold text-white mb-4">Boss Fight (Optional)</h3>
      <p className="text-gray-300 mb-6">
        In the third X room, you can fight <strong>Boris Teraud</strong>, the boss of The Warren. However, 
        you don't need to kill him to get the Imperial Hero badge. He's located straight ahead from the fourth evidence terminal.
      </p>

      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <h3 className="text-white font-semibold text-lg mb-4">Strategy Tips</h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-2">Always have the Letter before speaking to Mirla for the Compassion badge</li>
          <li className="text-gray-300 mb-2">Items are on respawn timers, so plan accordingly if in a group</li>
          <li className="text-gray-300 mb-2">The turret code changes, so always inspect the disk fresh</li>
          <li className="text-gray-300 mb-2">You can hug walls to avoid some hostile encounters (like the AT-ST)</li>
          <li className="text-gray-300">Both badges count toward your three content badges needed for Jedi unlock</li>
        </ul>
      </div>
    </PageLayout>
  );
}
