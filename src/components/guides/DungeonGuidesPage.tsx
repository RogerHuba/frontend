"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface Guide {
  name: string;
  description: string;
  content: string;
  guideLink?: string;
}

export function AdventureGuidesPage() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  const toggleGuide = (guideName: string) => {
    if (expandedGuide === guideName) {
      setExpandedGuide(null);
    } else {
      setExpandedGuide(guideName);
    }
  };

  // Theme Park Adventures (Quests)
  const themeParkQuests: Guide[] = [
    {
      name: "Nym's Theme Park",
      description: "Lok pirate adventures and smuggling operations",
      content: "Nym's Theme Park on Lok offers players a challenging series of missions involving pirate operations, smuggling runs, and encounters with dangerous creatures. The theme park provides unique rewards and is essential for players seeking to understand the criminal underworld of the galaxy."
    },
    {
      name: "Jabba's Theme Park",
      description: "Hutt cartel missions and criminal enterprises",
      content: "Work for the notorious Jabba the Hutt in his criminal empire. These missions involve dealing with rival gangs, collecting debts, and navigating the dangerous politics of the Hutt crime families. Completion offers access to unique Hutt-themed rewards and criminal contacts."
    },
    {
      name: "Imperial Theme Park",
      description: "Serve the Empire with honor and dedication",
      content: "Demonstrate your loyalty to the Galactic Empire through a series of military missions and imperial operations. These quests test your dedication to order and control while offering prestigious imperial rewards and advancement opportunities."
    },
    {
      name: "Rebel Theme Park",
      description: "Fight for freedom and justice against tyranny",
      content: "Join the Rebel Alliance in their fight against Imperial oppression. These missions involve sabotage operations, rescue missions, and coordinated strikes against Imperial targets. Success brings honor to the Rebellion and access to unique rebel equipment."
    }
  ];

  // Classic Dungeons
  const classicDungeons: Guide[] = [
    {
      name: "The Warren",
      description: "Dantooine theme park with two badges (Compassion & Imperial Hero) for Jedi unlock",
      content: "The Warren is a large theme park on Dantooine that can be accomplished rather quickly – being the second fastest theme park after Nym's. Most players complete The Warren because you can receive two badges (Compassion and Imperial Hero) which count as two separate content badges out of the three you need for Jedi unlock. The facility requires collecting passkeys, deactivating turrets, downloading evidence from multiple terminals, and completing quests for both Mirla (Compassion) and Captain Heff in Theed Palace (Imperial Hero).",
      guideLink: "/guides/the-warren"
    },
    {
      name: "Geonosian Bio-Lab",
      description: "Yavin IV research facility with dangerous experiments and boss creatures",
      content: "The Geonosian Bio-Lab on Yavin IV is located at -6450 -360 (closest starport: Labor Outpost). This challenging dungeon features three boss creatures - Acklay, Unstable Reek, and Unstable Nexu - on 30-minute respawn timers. Navigate through coded doors using passcodes obtained from NPCs, avoid poison gas clouds, and battle through multiple chambers filled with Geonosians, spiders, and Force Klikniks. The final boss, Acklay, has 1.6 million HAM and can be enraged to attack other creatures. Key items include computer codes from the assistant NPC and short-circuited passkeys. Note: On SWG Infinity, door codes are randomized - you must speak to the correct NPCs to obtain current codes rather than using static numbers.",
      guideLink: "/guides/geonosian-bio-lab"
    },
    {
      name: "Death Watch Bunker",
      description: "Endor Mandalorian stronghold with elite warriors",
      content: "The Death Watch Bunker on Endor houses some of the galaxy's most dangerous Mandalorian warriors. This challenging dungeon requires careful strategy and coordination to overcome the heavily armed and well-trained Death Watch forces."
    }
  ];

  // Jedi & Force Content
  const jediQuests: Guide[] = [
    {
      name: "Jedi Unlock",
      description: "Path to Force sensitivity and awakening",
      content: "The path to becoming Force-sensitive in SWG requires dedication and completion of specific content badges. Players must complete three different content badges from theme parks, dungeons, or special events to unlock their Force sensitivity and begin their journey as a Jedi."
    },
    {
      name: "The Village",
      description: "Force-sensitive training and mystical guidance",
      content: "The Village on Dathomir serves as a hub for Force-sensitive characters, offering specialized training through four distinct phases. This mystical location provides essential progression for those walking the path toward becoming a Jedi."
    },
    {
      name: "The Padawan Trials",
      description: "Begin your journey as a Jedi apprentice",
      content: "The Padawan Trials mark the beginning of formal Jedi training. These challenging trials test a Force-sensitive's dedication, wisdom, and combat skills as they take their first steps toward becoming a Jedi Knight."
    },
    {
      name: "The Knight Trials",
      description: "Achieve Jedi Knighthood through wisdom and courage",
      content: "The Knight Trials represent the ultimate test for Padawan learners. These epic challenges require mastery of lightsaber combat, Force powers, and Jedi philosophy to achieve the rank of Jedi Knight."
    }
  ];

  const GuideSection = ({ title, guides }: { title: string, guides: Guide[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {guides.map((guide) => (
          <div key={guide.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedGuide === guide.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleGuide(guide.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{guide.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{guide.description}</p>
              </div>
              {expandedGuide === guide.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedGuide === guide.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <p className="text-gray-300 mb-4">{guide.content}</p>
                {guide.guideLink && (
                  <Link 
                    href={guide.guideLink}
                    className="inline-flex items-center px-4 py-2 bg-[hsl(var(--swg-accent-gold))] text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
                  >
                    View Complete Step-by-Step Guide →
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Adventure Guides"
          subtitle="Complete epic quests and conquer dangerous dungeons across the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Adventure Awaits in Every Corner of the Galaxy</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies features an adventure system combining epic theme park quests, challenging dungeons, 
                  and Force-sensitive content that require strategy and skill to overcome. From classic theme parks like 
                  The Warren and Nym's to dangerous dungeons like the Geonosian Bio-Lab, these guides will help you navigate 
                  the galaxy's most exciting challenges and discover hidden treasures. Click on any adventure below to learn 
                  more about its requirements and rewards.
                </p>
              </div>

              <GuideSection title="Theme Park Adventures" guides={themeParkQuests} />
              <GuideSection title="Classic Dungeons" guides={classicDungeons} />
              <GuideSection title="Jedi & Force Content" guides={jediQuests} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8 mb-8">
                <p className="text-gray-300">
                  Whether you're seeking adventure, credits, badges for Jedi unlock, or rare items, these core adventures 
                  provide the essential experiences that define the SWG journey. From the theme parks of Dantooine and Lok 
                  to the dangerous dungeons of Yavin IV and Endor, each offers unique rewards and challenges that make them 
                  essential for dedicated players seeking to experience the best that SWG Infinity has to offer.
                </p>
              </div>

              <div className="p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">Adventure Notice</h5>
                    <p className="text-gray-300 text-sm">
                      Many adventures contain high-level enemies, environmental hazards, and complex quest mechanics. 
                      Always ensure you and your group are properly equipped and prepared before attempting challenging 
                      content. Some locations may have prerequisites or may trap players inside until completion.
                    </p>
                  </div>
                </div>
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
