"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award, AlertTriangle } from "lucide-react";

export function JabbasThemeParkGuide() {
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
            Jabba's Theme Park
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Tatooine - Jabba's Palace</span>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
            <h2 className="text-xl font-bold text-red-400">Moral Alignment Warning</h2>
          </div>
          <p className="text-gray-300">
            This theme park involves working for a notorious crime lord. Some missions may involve morally questionable 
            activities including smuggling, intimidation, and criminal enterprises. Consider your character's alignment 
            and roleplay preferences before proceeding.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Enter the dangerous underworld of Tatooine as you work for the infamous Hutt crime lord, Jabba. 
            Navigate smuggling operations, deal with rival gangs, and survive the treacherous politics of 
            organized crime in the galaxy's most notorious criminal empire.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <MapPin className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Planet</h3>
              <p className="text-sm text-gray-300">Tatooine</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Quest Items</h3>
              <p className="text-sm text-gray-300">Smuggler gear, Crime badges</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Jabba's Palace</p>
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
                <li>Combat Level 30+ recommended</li>
                <li>Strong stomach for morally gray activities</li>
                <li>Access to personal transportation</li>
                <li>Credits for bribes and equipment</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Starting Location</h3>
              <p className="text-gray-300">
                Travel to Jabba's Palace on Tatooine. Approach carefully - Jabba's guards don't take kindly to 
                uninvited guests. Speak with palace officials to arrange an audience.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Phases */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Criminal Operations</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase 1: Proving Yourself</h3>
              <p className="text-gray-300 mb-3">
                Demonstrate your value to Jabba's organization through small-time criminal activities. 
                Gain the trust of lieutenants and work your way up the hierarchy.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Collection missions</li>
                <li>Intimidation tasks</li>
                <li>Information gathering</li>
              </ul>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase 2: Smuggling Operations</h3>
              <p className="text-gray-300 mb-3">
                Participate in large-scale smuggling operations across multiple star systems. 
                Avoid Imperial patrols and rival criminal organizations.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Cargo transport missions</li>
                <li>Imperial evasion sequences</li>
                <li>Rival gang confrontations</li>
              </ul>
            </div>

            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Phase 3: High-Stakes Jobs</h3>
              <p className="text-gray-300 mb-3">
                Take on Jabba's most dangerous and lucrative assignments. Deal with betrayal, rival Hutts, 
                and the constant threat of Imperial interference.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Heist operations</li>
                <li>Assassination contracts</li>
                <li>Territory expansion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Criminal Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-2">Equipment</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Hutt cartel weapons</li>
                <li>Smuggler ship modifications</li>
                <li>Criminal outfit pieces</li>
                <li>Black market gear</li>
              </ul>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-2">Other Rewards</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Substantial credit payouts</li>
                <li>Criminal underworld connections</li>
                <li>Access to black market vendors</li>
                <li>Notorious reputation titles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Survival Tips</h2>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Never double-cross Jabba - the consequences are severe and permanent</li>
              <li>Keep your weapons ready - the criminal underworld is dangerous</li>
              <li>Build relationships with key lieutenants for better mission access</li>
              <li>Monitor your faction standings - criminal activities affect Imperial relations</li>
              <li>Save regularly - some missions have permanent consequences</li>
              <li>Consider grouping up for high-risk missions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
