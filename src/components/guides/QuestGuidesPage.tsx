"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";

interface Guide {
  title: string;
  description: string;
  location?: string;
  guideLink?: string;
}

interface GuideSection {
  title: string;
  guides: Guide[];
  description?: string;
}

interface GuideSectionComponentProps {
  section: GuideSection;
}

interface GuideItemProps {
  guide: Guide;
}

function GuideItem({ guide }: GuideItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg hover:border-yellow-500/30 transition-all duration-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left p-4"
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{guide.title}</h3>
          {guide.location && (
            <p className="text-yellow-400 text-xs font-medium">Location: {guide.location}</p>
          )}
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          {guide.guideLink && (
            <Link
              href={guide.guideLink}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-3 py-1 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              View Guide
            </Link>
          )}
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-yellow-400 transition-transform duration-200" />
          ) : (
            <ChevronRight className="h-5 w-5 text-yellow-400 transition-transform duration-200" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 animate-in slide-in-from-top-2 duration-300">
          <p className="text-gray-300 text-sm leading-relaxed">{guide.description}</p>
        </div>
      )}
    </div>
  );
}

function GuideSectionComponent({ section }: GuideSectionComponentProps) {
  return (
    <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">{section.title}</h2>
        {section.description && (
          <p className="text-gray-300 text-sm">{section.description}</p>
        )}
      </div>

      <div className="space-y-4">
        {section.guides.map((guide, index) => (
          <GuideItem key={index} guide={guide} />
        ))}
      </div>
    </div>
  );
}

export function AdventureGuidesPage() {
  const guideSections: GuideSection[] = [
    {
      title: "Theme Park Adventures",
      description: "Epic storylines and adventures across the galaxy",
      guides: [
        {
          title: "Nym's Theme Park",
          description: "Help the famous pirate Nym in his fight against the Trade Federation on Lok. Experience space combat, ground missions, and unique rewards in this multi-part adventure.",
          location: "Lok - Nym's Stronghold",
          guideLink: "/guides/nyms-theme-park"
        },
        {
          title: "Jabba's Theme Park",
          description: "Work for the notorious Hutt crime lord in various smuggling and criminal enterprises. Navigate the dangerous underworld of Tatooine in this morally ambiguous storyline.",
          location: "Tatooine - Jabba's Palace",
          guideLink: "/guides/jabbas-theme-park"
        },
        {
          title: "Imperial Theme Park",
          description: "Serve the Galactic Empire in classified missions against Rebel insurgents. Experience the Empire's perspective through strategic operations and military campaigns.",
          location: "Various Imperial Installations",
          guideLink: "/guides/imperial-theme-park"
        },
        {
          title: "Rebel Theme Park",
          description: "Join the Rebel Alliance in their fight against Imperial oppression. Participate in covert operations, rescue missions, and strikes against Imperial targets.",
          location: "Various Rebel Bases",
          guideLink: "/guides/rebel-theme-park"
        }
      ]
    },
    {
      title: "Classic Dungeons",
      description: "Challenging group content with valuable rewards",
      guides: [
        {
          title: "The Warren",
          description: "Navigate the dangerous Corellian cave system filled with Drall enemies, traps, and valuable loot. This dungeon requires careful planning and teamwork to successfully complete.",
          location: "Corellia - The Warren Entrance",
          guideLink: "/guides/the-warren"
        },
        {
          title: "Geonosian Bio-Lab",
          description: "Infiltrate the secret Geonosian research facility on Yavin IV. Face off against mutated creatures and automated defenses while uncovering dark experiments.",
          location: "Yavin IV - Bio-Lab Complex",
          guideLink: "/guides/geonosian-bio-lab"
        },
        {
          title: "Death Watch Bunker",
          description: "Storm the Mandalorian Death Watch stronghold and face their elite warriors. This challenging dungeon offers some of the best Mandalorian armor and weapons in the galaxy.",
          location: "Endor - Death Watch Bunker",
          guideLink: "/guides/death-watch-bunker"
        }
      ]
    },
    {
      title: "Jedi & Force Content",
      description: "The path to becoming a Jedi Knight",
      guides: [
        {
          title: "Jedi Unlock Process",
          description: "Begin your journey to unlock Force sensitivity through village grinding, profession mastery, and the mysterious holocron system.",
          location: "Various Locations",
          guideLink: "/guides/jedi-unlock"
        },
        {
          title: "The Village",
          description: "Enter the Force-sensitive Village on Dathomir to complete the four-phase training required for Jedi progression.",
          location: "Dathomir - The Village",
          guideLink: "/guides/the-village"
        },
        {
          title: "Padawan Trials",
          description: "Complete the initial Jedi training trials to progress from Force-sensitive to Padawan. Learn the basics of lightsaber combat and Force powers.",
          location: "Various Jedi Locations",
          guideLink: "/guides/padawan-trials"
        },
        {
          title: "Knight Trials",
          description: "Face the ultimate challenges to become a full Jedi Knight. Master advanced lightsaber techniques and powerful Force abilities.",
          location: "Advanced Jedi Locations",
          guideLink: "/guides/knight-trials"
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a2a] to-black text-white pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            Adventure Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides for adventures, dungeons, and epic storylines across the Star Wars Galaxies universe
          </p>
        </div>

        <div className="space-y-8">
          {guideSections.map((section, index) => (
            <GuideSectionComponent key={index} section={section} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#0d0d30] to-[#1a1a4a] border border-[#2a2a6a] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Need More Help?</h2>
            <p className="text-gray-300 mb-4">
              Join our community Discord for real-time assistance, group formation, and the latest adventure strategies.
            </p>
            <a
              href="https://discord.gg/jyakeRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:shadow-[#5865F2]/30 transform hover:scale-105"
            >
              Join Discord Community
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
