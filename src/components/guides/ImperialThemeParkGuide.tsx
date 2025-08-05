"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award, Shield } from "lucide-react";

export function ImperialThemeParkGuide() {
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
            Imperial Theme Park
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Various Imperial Installations</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">For the Empire</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Serve the Galactic Empire in classified military operations against Rebel insurgents. Experience the 
            disciplined, hierarchical structure of Imperial service while participating in strategic campaigns 
            to maintain order throughout the galaxy.
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
              <p className="text-sm text-gray-300">Imperial armor, Rank insignias</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Imperial Base</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Imperial Service</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Military Operations</h3>
              <p className="text-gray-300 mb-3">
                Participate in coordinated military strikes against Rebel bases and infrastructure. 
                Follow Imperial doctrine and maintain discipline in the face of enemy resistance.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Intelligence Gathering</h3>
              <p className="text-gray-300 mb-3">
                Conduct surveillance and intelligence operations to identify Rebel sympathizers 
                and uncover insurgent plans before they can be executed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Imperial Rewards</h2>
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
            <Award className="h-6 w-6 text-yellow-400 mb-2" />
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Imperial military equipment</li>
              <li>Officer rank insignia</li>
              <li>Access to Imperial bases</li>
              <li>Commendations and medals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
