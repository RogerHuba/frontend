"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award } from "lucide-react";

export function RebelThemeParkGuide() {
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
            Rebel Theme Park
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Various Rebel Bases</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Fight for Freedom</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Join the Rebel Alliance in their desperate fight against Imperial oppression. Participate in 
            covert operations, rescue missions, and daring strikes against Imperial targets across the galaxy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <MapPin className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Planet</h3>
              <p className="text-sm text-gray-300">Multiple Systems</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Quest Items</h3>
              <p className="text-sm text-gray-300">Rebel gear, Alliance insignias</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Hidden Rebel Base</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rebel Operations</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Covert Missions</h3>
              <p className="text-gray-300 mb-3">
                Infiltrate Imperial facilities and gather intelligence on enemy movements. 
                Use stealth and cunning to avoid detection while completing objectives.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Rescue Operations</h3>
              <p className="text-gray-300 mb-3">
                Free captured Rebel operatives and civilians from Imperial detention centers. 
                Plan carefully and strike quickly to minimize casualties.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Sabotage Missions</h3>
              <p className="text-gray-300 mb-3">
                Disrupt Imperial supply lines and destroy strategic targets. 
                Hit the Empire where it hurts most - their infrastructure and resources.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rebel Rewards</h2>
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
            <Award className="h-6 w-6 text-yellow-400 mb-2" />
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Rebel Alliance equipment</li>
              <li>Freedom fighter insignia</li>
              <li>Access to hidden Rebel bases</li>
              <li>Hero of the Rebellion titles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
