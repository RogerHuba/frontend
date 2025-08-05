"use client";

import Link from "next/link";
import { ArrowLeft, Star, MapPin, Award, AlertTriangle, CheckCircle } from "lucide-react";

export function JediUnlockGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a2a] to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/guides/adventure-guides" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Adventure Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Jedi Unlock Guide
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <Star className="h-5 w-5 mr-2 text-blue-400" />
            <span>"You've taken your first step into a larger world." ― Obi-Wan Kenobi</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Becoming Force-Sensitive</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Anyone that is unusually keen to the mysterious energy field known as the Force is considered a Force-sensitive. 
            Becoming Force-sensitive is the first step in becoming a Jedi. But before you can become a Force-sensitive, 
            there are several things you need to do beforehand.
          </p>
        </div>

        {/* Reaching Glowy */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Reaching Glowy</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The first step you must take in order to become a Jedi is become glowy. Becoming glowy is pretty straight forward 
            and can be achieved within a week's time (or a day if you really hustle!) To check your progress with becoming glowy, 
            you can use the commands <span className="text-yellow-400 font-mono">/che</span> or <span className="text-yellow-400 font-mono">/check</span>.
          </p>

          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Glowy Milestones</h3>
            <p className="text-gray-300 mb-3">There are six different milestones on your way to becoming glowy:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-1">
              <li>"You feel no connection with the force." — Starting state</li>
              <li>"You barely notice something different about yourself."</li>
              <li>"You feel a faint sense of the force."</li>
              <li>"You feel the Force surge within you."</li>
              <li>"You have a strong sense of the Force within you."</li>
              <li>"You feel an inner glow. The Force is with you."</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">How to Become Glowy</h3>
          <div className="space-y-6">
            {/* Professions */}
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                Master Five Professions
              </h4>
              <p className="text-gray-300">
                Master any five professions (excluding Entertainer, Elite Entertainer, and Politician)
              </p>
            </div>

            {/* Location Badges */}
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                Obtain Location Badges
              </h4>
              <p className="text-gray-300 mb-3">
                Obtain five easy location badges, two difficult location badges, and three Jedi location badges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#2a2a6a] rounded-lg p-3">
                  <h5 className="text-green-400 font-semibold mb-2">Easy Location Badges</h5>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><strong>Corellia:</strong> Agrilat Swamp, Crystal Fountain of Bela Vistal, Grand Theater of Vreni Island, Rebel Hideout</p>
                    <p><strong>Dantooine:</strong> Abandoned Rebel Base, Dantari Village, Dantari Rock Village</p>
                    <p><strong>Dathomir:</strong> Abandoned Escape Pod, Tarpits, Downed Ship, Greater/Lesser Misty Falls, Imperial Prison</p>
                    <p><strong>Endor:</strong> Dulok Village, Ewok Lake Village, Ewok Tree Village, Marauder's Stronghold</p>
                    <p><strong>Lok:</strong> Great Kimogilla Skeleton, Imperial Outpost, Mount Chaolt</p>
                    <p><strong>Naboo:</strong> Amidala's Beach, Dee'ja Peak Waterfall, Gungan Sacred Place, Theed Waterfall</p>
                    <p><strong>Rori:</strong> Hyperdrive Research Facility, Imperial Encampment, Kobola Bunker, Rebel Outpost</p>
                    <p><strong>Talus:</strong> Imperial Outpost, Imperial vs. Rebel Battle, Lost Aqualish War Party's Cave, Lost Village of Durbin</p>
                    <p><strong>Tatooine:</strong> Escape Pod</p>
                    <p><strong>Yavin IV:</strong> Temple of the Blueleaf, Woolamander Palace</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-2 mt-2">
                    <p className="text-yellow-200 text-xs">
                      <strong>Tip:</strong> Quickest badges are Amidala's Beach, Dee'ja Peak Waterfall, and Theed Waterfall on Naboo, 
                      plus Escape Pod and Lars Homestead on Tatooine.
                    </p>
                  </div>
                </div>

                <div className="bg-[#2a2a6a] rounded-lg p-3">
                  <h5 className="text-orange-400 font-semibold mb-2">Difficult Location Badges</h5>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><strong>Dathomir:</strong> Lesser Sarlacc</p>
                    <p><strong>Tatooine:</strong> Ancient Krayt Skull, Fort Tusken, Great Pit of Carkoon, Krayt Graveyard</p>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded p-2 mt-2">
                    <p className="text-orange-200 text-xs">
                      <strong>Tip:</strong> Least difficult badges are Ancient Krayt Skull and Great Pit of Carkoon on Tatooine.
                    </p>
                  </div>
                </div>

                <div className="bg-[#2a2a6a] rounded-lg p-3">
                  <h5 className="text-purple-400 font-semibold mb-2">Jedi Location Badges</h5>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><strong>Dantooine:</strong> Jedi Temple Ruins</p>
                    <p><strong>Tatooine:</strong> Ben Kenobi's Hut</p>
                    <p><strong>Yavin IV:</strong> Temple of Exar K'un</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded p-2 mt-2">
                    <p className="text-red-200 text-xs">
                      <strong>Note:</strong> You MUST have the Temple of Exar K'un badge to become glowy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Parks */}
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Award className="h-5 w-5 text-purple-400 mr-2" />
                Complete Three Theme Parks
              </h4>
              <p className="text-gray-300 mb-3">Complete three theme parks that count towards unlocking Jedi:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Nym's Theme Park</li>
                <li>The Warren — counts as two theme parks</li>
                <li>Jabba's Theme Park</li>
                <li>The Imperial Theme Park</li>
                <li>The Rebel Theme Park</li>
                <li>Any of the Corellian Corvette Missions</li>
              </ul>
              <div className="bg-green-900/20 border border-green-500/30 rounded p-2 mt-3">
                <p className="text-green-200 text-xs">
                  <strong>Tip:</strong> Most prefer to do Nym's Theme Park and the Warren — they are the fastest theme parks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Old Man Visits */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">An Old Man Visits</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Now that you're a Force-sensitive, you will be visited by an Old Man. The Old Man can take anywhere from 
            10 minutes to 12 hours to appear. You cannot be in a NPC city while waiting, or else he won't show. 
            You can however wait in a player city.
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              <h3 className="text-red-400 font-semibold">Important Warning</h3>
            </div>
            <p className="text-red-200 text-sm">
              He doesn't always show up as a dot on your radar, so be careful not to miss him! 
              If you do miss him, the timer will reset and he can take up to another 12 hours to reappear.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">The Force Crystal</h3>
              <p className="text-gray-300">
                Once the Old Man shows up, converse with him. He will ask you to hold on to a Force Crystal. 
                The Force Crystal will be your Jedi journal. The Jedi journal can be accessed at anytime by hitting 
                <span className="text-yellow-400 font-mono">CTRL+J</span> on your keyboard together. 
                Alternatively, you can click on the icon that looks like [Ξ] on the options bar in the bottom right corner of your screen.
              </p>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Sith Shadow Attack</h3>
              <p className="text-gray-300 mb-3">
                After receiving the Force Crystal, you will eventually be attacked by two to four Sith Shadows. 
                Kill them and loot their corpses to get a Waypoint Datapad.
              </p>
              <div className="bg-red-900/20 border border-red-500/30 rounded p-2">
                <p className="text-red-200 text-sm">
                  <strong>Warning:</strong> Should you die to the Sith Shadows, they will take your Force Crystal 
                  and you will have to wait for the Old Man to reappear.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Finding the Sith Encampment</h3>
              <p className="text-gray-300 mb-3">
                If you managed to kill the Sith Shadows and looted the Waypoint Datapad, activate it. 
                It will automatically save a temporary waypoint to a Sith Encampment. Follow the waypoint and make your way there.
              </p>
              <p className="text-gray-300">
                Upon arrival, you'll notice there will be another two to four Sith there. Kill them to loot a mysterious Datapad. 
                After activating the mysterious Datapad, it will tell you to go to a waypoint on Dathomir — 
                this waypoint is the Aurilia Village. You are able to fly directly to the Village using the Village Shuttleport.
              </p>
            </div>
          </div>
        </div>

        {/* The Village */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">The Village</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
            <p className="text-blue-200">
              <strong>Note:</strong> This is not a complete guide to the Village, but you can find a helpful one 
              <Link href="/guides/the-village" className="text-yellow-400 hover:text-yellow-300 underline ml-1">here: Village Guide</Link>
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            This will be the longest process to unlocking Jedi. The Village is in four phases, with each phase being three days long. 
            You will need to unlock at least four skill branches (columns) by doing various missions around the Village.
          </p>
          
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>These missions can be obtained by the NPCs</li>
              <li>You can only do one mission during each phase</li>
              <li>After completing a mission/unlocking the branch, you will need to wait until the next phase to do another mission</li>
            </ul>
          </div>
        </div>

        {/* Mellichae */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Mellichae</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            After completing the four Force-sensitive skill branches from the Village, you will be visited by the Old Man once again. 
            This time, he will give you your final mission: Defeat Mellichae.
          </p>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              <h3 className="text-red-400 font-semibold">Combat Warning</h3>
            </div>
            <p className="text-red-200">
              You are able to solo Mellichae, however it is strongly recommended you get help from friends.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">The Encounter</h3>
              <p className="text-gray-300 mb-3">
                You will be given a waypoint to Mellichae at his camp. He is joined by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3">
                <li>Five other Sith — two Sith Shadow thugs and three Sith Shadow mercenaries</li>
                <li>Daktar Bloodmoon</li>
                <li>Four Force Crystal pillars that heal Mellichae, Daktar, and the Sith</li>
              </ul>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Strategy: Destroying the Pillars</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Run up to any pillar and attack it — preferably the back ones to avoid aggroing the spawns</li>
                <li>If it heals, move to the next pillar until you are able to destroy one</li>
                <li>Work your way around the pillars destroying all four</li>
                <li>You might aggro some Sith but should be too far away to aggro Mellichae</li>
                <li>If Daktar aggros you, work on killing the Sith/Daktar while destroying pillars with spin/area attacks</li>
              </ol>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Final Battle Sequence</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>After destroying pillars, you should easily be able to kill the Sith</li>
                <li>Next, pull Daktar away from the camp and work on killing him</li>
                <li>After killing the Sith and Daktar, you should be able to kill Mellichae without too much challenge</li>
                <li>Keep Mellichae dizzied and kneeled/knocked down for easier victory</li>
              </ol>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold mb-2">If You Die</h3>
              <p className="text-red-200">
                If you die to Mellichae, the mission will reset and you will have to wait for the Old Man to reappear 
                to give you Mellichae's new location. You might also be able to take a shuttle to receive a new waypoint 
                for Mellichae instead of waiting for the Old Man.
              </p>
            </div>
          </div>
        </div>

        {/* Completion */}
        <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Victory!</h2>
          <p className="text-gray-300 leading-relaxed">
            Upon killing Mellichae, you will be eligible to start your Padawan Trials. 
            Congratulations on taking your first step into a larger world!
          </p>
          <div className="mt-4">
            <Link 
              href="/guides/padawan-trials" 
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-200 font-semibold"
            >
              Continue to Padawan Trials
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
