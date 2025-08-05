"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award, Swords } from "lucide-react";

export function PadawanTrialsGuide() {
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
            Padawan Trials
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Various Jedi Locations</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">The Path of the Padawan</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Begin your formal Jedi training through the ancient Padawan trials. Learn the fundamental 
            skills of lightsaber combat, Force manipulation, and Jedi philosophy as you progress 
            from Force-sensitive to trained Padawan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <MapPin className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Planet</h3>
              <p className="text-sm text-gray-300">Multiple Locations</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Award className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Quest Items</h3>
              <p className="text-sm text-gray-300">Training crystals, Padawan robes</p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <Target className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-semibold text-white mb-1">Starting Location</h3>
              <p className="text-sm text-gray-300">Jedi Trainer</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Training Disciplines</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Lightsaber Combat</h3>
              <p className="text-gray-300 mb-3">
                Master the basics of lightsaber combat including the fundamental forms, 
                defensive techniques, and offensive maneuvers. Learn to balance aggression with control.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Force Powers</h3>
              <p className="text-gray-300 mb-3">
                Develop your connection to the Force through meditation and practice. Learn basic 
                Force powers including telekinesis, enhanced reflexes, and Force sense.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Jedi Philosophy</h3>
              <p className="text-gray-300 mb-3">
                Study the Jedi Code and understand the moral and ethical responsibilities 
                that come with wielding the Force. Learn to resist the temptations of the dark side.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Trial Challenges</h2>
          <div className="space-y-4">
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Combat Trials</h3>
              <p className="text-gray-300">
                Demonstrate proficiency in lightsaber combat against training droids and simulated opponents.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Force Mastery Tests</h3>
              <p className="text-gray-300">
                Show control over basic Force powers through practical examinations and challenges.
              </p>
            </div>
            <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Moral Judgment Scenarios</h3>
              <p className="text-gray-300">
                Face ethical dilemmas that test your understanding of the Jedi way and commitment to the light side.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Padawan Progression</h2>
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-4">
            <Award className="h-6 w-6 text-yellow-400 mb-2" />
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Basic lightsaber construction knowledge</li>
              <li>Fundamental Force abilities</li>
              <li>Jedi Code understanding</li>
              <li>Light side alignment maintenance</li>
              <li>Preparation for Knight trials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
