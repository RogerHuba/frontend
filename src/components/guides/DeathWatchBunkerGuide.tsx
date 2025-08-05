"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award, Skull } from "lucide-react";

export function DeathWatchBunkerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a2a] to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            href="/guides/adventure-guides" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Adventure Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            Death Watch Bunker
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Endor - Death Watch Bunker</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <Skull className="h-6 w-6 text-red-400 mr-3" />
            <h2 className="text-xl font-bold text-red-400">Extreme Danger</h2>
          </div>
          <p className="text-gray-300">
            The Death Watch Bunker is one of the most challenging dungeons in SWG. Elite Mandalorian warriors 
            await within, armed with the best equipment in the galaxy. Only the most experienced groups should attempt this.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">The Mandalorian Stronghold</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Storm the Death Watch bunker and face the galaxy's most feared warriors. This heavily fortified 
            Mandalorian stronghold contains elite soldiers equipped with the finest armor and weapons, 
            making it one of the most challenging and rewarding dungeons in the galaxy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <MapPin className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Planet</h3>
              <p className="text-sm text-gray-300">Endor</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Quest Items</h3>
              <p className="text-sm text-gray-300">Mandalorian armor, Elite weapons</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Bunker Entrance</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Prerequisites</h2>
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Master-level combat skills</li>
              <li>Top-tier weapons and armor</li>
              <li>Experienced group with voice communication</li>
              <li>Substantial medical supplies and consumables</li>
              <li>Multiple hours of uninterrupted time</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Legendary Rewards</h2>
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
            <Award className="h-6 w-6 text-yellow-400 mb-2" />
            <h3 className="text-lg font-semibold text-white mb-2">Mandalorian Arsenal</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Mandalorian armor sets (best in game)</li>
              <li>Powerful Mandalorian weapons</li>
              <li>Rare crafting materials</li>
              <li>Exclusive Mandalorian decorations</li>
              <li>Prestigious achievement titles</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Combat Strategy</h2>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Coordinate attacks - Mandalorians have superior tactics</li>
              <li>Focus fire on priority targets</li>
              <li>Manage resources carefully - fights are long and intense</li>
              <li>Use cover and positioning to minimize damage taken</li>
              <li>Have multiple medics - casualties are expected</li>
              <li>Study enemy patterns and adapt your strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
