"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award } from "lucide-react";

export function NymsThemeParkGuide() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            Nym's Theme Park
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Lok - Nym's Stronghold</span>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Join the notorious pirate Nym in his fight against the Trade Federation on the desert planet of Lok. 
            This multi-part adventure combines space combat, ground missions, and unique storylines that showcase 
            both the heroic and morally ambiguous aspects of the Star Wars universe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <MapPin className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Planet</h3>
              <p className="text-sm text-gray-300">Lok</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Quest Items</h3>
              <p className="text-sm text-gray-300">Pirate weapons, Ship components</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Nym's Stronghold</p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Prerequisites</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Space-worthy ship with basic combat capability</li>
                <li>Combat Level 20+ recommended</li>
                <li>Access to Lok via shuttle or personal transport</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Starting Location</h3>
              <p className="text-gray-300">
                Travel to Lok and locate Nym's Stronghold. Speak with Nym or his lieutenants to begin the adventure.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Phases */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mission Phases</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase 1: Recruitment</h3>
              <p className="text-gray-300 mb-3">
                Meet with Nym and prove your worth through initial missions. Learn about the Trade Federation threat 
                and Nym's plans to combat them.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Complete loyalty tests</li>
                <li>Demonstrate combat skills</li>
                <li>Receive access to advanced missions</li>
              </ul>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase 2: Space Combat</h3>
              <p className="text-gray-300 mb-3">
                Engage Trade Federation forces in epic space battles. Protect Nym's fleet and disrupt enemy supply lines.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Multi-stage space combat missions</li>
                <li>Capital ship assaults</li>
                <li>Escort and protection duties</li>
              </ul>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase 3: Ground Operations</h3>
              <p className="text-gray-300 mb-3">
                Participate in ground-based missions on Lok and other worlds. Infiltrate Trade Federation facilities 
                and disrupt their operations.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Base infiltration missions</li>
                <li>Rescue operations</li>
                <li>Sabotage activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-2">Equipment</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Unique pirate-themed weapons</li>
                <li>Special ship components</li>
                <li>Nym's faction armor pieces</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-2">Other Rewards</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Nym faction standing</li>
                <li>Exclusive badges and titles</li>
                <li>Access to special vendors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Tips & Strategy</h2>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Upgrade your ship before attempting space combat phases</li>
              <li>Bring friends for group missions - they're more fun and efficient</li>
              <li>Pay attention to the storyline - it connects to other content in the game</li>
              <li>Stock up on consumables before long mission chains</li>
              <li>Check faction requirements before starting - some missions may affect Imperial/Rebel standing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
