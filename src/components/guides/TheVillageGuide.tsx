"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award, Star } from "lucide-react";

export function TheVillageGuide() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4">
            The Village
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-purple-400" />
            <span>Dathomir - Force-Sensitive Village</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <Star className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-xl font-bold text-purple-400">Force-Sensitive Required</h2>
          </div>
          <p className="text-gray-300">
            Only Force-sensitive characters can access The Village. You must first become "glowy" 
            and receive the Old Man's crystal before you can enter this sacred place.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">The Force-Sensitive Village</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Village on Dathomir is a mystical settlement where Force-sensitive beings gather to 
            develop their abilities and progress toward becoming Jedi. This is where your true 
            Force training begins after receiving the Force Crystal from the Old Man.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <MapPin className="h-6 w-6 text-purple-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Planet</h3>
              <p className="text-sm text-gray-300">Dathomir</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-purple-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Quest Items</h3>
              <p className="text-sm text-gray-300">Force skill branches, Village experience</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-purple-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Village Entrance</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Village Phases</h2>
          <p className="text-gray-300 mb-4">
            The Village operates on a four-phase cycle, each lasting three days. You must complete 
            at least four skill branches to unlock Mellichae and progress toward becoming a Padawan.
          </p>
          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase System</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Each phase lasts exactly 3 days (72 hours)</li>
                <li>You can only complete one mission per phase</li>
                <li>Must wait for the next phase to continue progression</li>
                <li>NPCs offer different missions in each phase</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Skill Branches</h3>
              <p className="text-gray-300 mb-3">
                Complete missions to unlock Force-sensitive skill branches. You need at least four 
                branches to qualify for the final Mellichae encounter.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Force Sensitive Combat</li>
                <li>Force Sensitive Crafting</li>
                <li>Force Sensitive Healing</li>
                <li>Force Sensitive Enhanced Reflexes</li>
                <li>And several others...</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Mission Types</h3>
              <p className="text-gray-300 mb-3">
                Village missions test different aspects of Force sensitivity:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Combat trials against Dark Jedi</li>
                <li>Meditation and focus exercises</li>
                <li>Crafting Force-imbued items</li>
                <li>Healing wounded NPCs</li>
                <li>Diplomatic missions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Tips for Village Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Preparation</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Bring plenty of supplies and stims</li>
                <li>Have good combat skills and equipment</li>
                <li>Stock up on crafting materials</li>
                <li>Be prepared for lengthy travel times</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Track phase timers carefully</li>
                <li>Plan which branches to unlock first</li>
                <li>Consider joining groups for combat missions</li>
                <li>Be patient - this process takes weeks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">After The Village</h2>
          <p className="text-gray-300 mb-4">
            Once you've completed four skill branches, you'll be ready for the Mellichae encounter - 
            the final step before becoming eligible for Padawan Trials.
          </p>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="text-blue-400 font-semibold">Next Steps</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>The Old Man will visit you again with Mellichae's location</li>
              <li>Defeat Mellichae and his Sith companions</li>
              <li>Unlock eligibility for Padawan Trials</li>
              <li>Begin your journey as a true Jedi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
