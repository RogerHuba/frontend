"use client";

import { PageLayout } from "@/components/PageLayout";

export function RoadmapPage() {
  return (
    <PageLayout title="SWG Infinity Development Roadmap" subtitle="Our ongoing mission is to enhance the SWG Infinity experience by refining core systems, expanding content, and empowering our community. Here's a look at what's been accomplished, what's actively being worked on, and what's coming next.">
      <div className="border border-[#1a1a4a] bg-[rgba(13,20,40,0.8)] p-6 rounded-md mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">Quality of Life (QOL) Gameplay Improvements</h3>
          <span className="ml-2 bg-green-600 text-white text-sm font-medium px-2 py-0.5 rounded">Complete</span>
        </div>
        <ul className="list-disc list-outside text-gray-300 space-y-1 pl-6">
          <li>Faster XP gains and streamlined leveling paths</li>
          <li>Instant shuttle times.</li>
          <li>Can do space travel planet to planet from main city shuttles (Bestine, Corellia, Theed etc shuttles)</li>
          <li>Rebalancing of profession mechanics (e.g., Jedi, Doctor ...)</li>
          <li>Village cycle weekly</li>
          <li>Village, Merchant, Politician skills: 0 points for skills.</li>
          <li>Speeder times outside city: 3 seconds.</li>
        </ul>
      </div>
      <div className="border border-[#1a1a4a] bg-[rgba(13,20,40,0.8)] p-6 rounded-md mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">Professions & Combat</h3>
          <span className="ml-2 bg-green-600 text-white text-sm font-medium px-2 py-0.5 rounded">Complete</span>
        </div>
        <ul className="list-disc list-outside text-gray-300 space-y-1 pl-6">
          <li>Mandalorian profession content and balancing</li>
          <li>Force system updates: Jedi progression, FRS handling, cooldown tuning</li>
          <li>Demolition Expert siege tools and TEF integration</li>
          <li>Ongoing tuning of creature behavior and AI across key POIs</li>
          <li>Buffbot logic and command functionality refinement</li>
        </ul>
      </div>
      <div className="border border-[#1a1a4a] bg-[rgba(13,20,40,0.8)] p-6 rounded-md mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">Player Systems & Customization</h3>
          <span className="ml-2 bg-green-600 text-white text-sm font-medium px-2 py-0.5 rounded">Complete</span>
        </div>
        <ul className="list-disc list-outside text-gray-300 space-y-1 pl-6">
          <li>Enhanced housing and city management</li>
          <li>Bazaar and item search improvements</li>
          <li>Structure placement tweaks</li>
          <li>Character cooldowns and login spawn logic fixes</li>
        </ul>
      </div>
      <div className="border border-[#1a1a4a] bg-[rgba(13,20,40,0.8)] p-6 rounded-md mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">Content Expansion</h3>
          <span className="ml-2 bg-yellow-600 text-black text-sm font-medium px-2 py-0.5 rounded">Ongoing</span>
        </div>
        <ul className="list-disc list-outside text-gray-300 space-y-1 pl-6">
          <li>Revamped Geonosian Caves</li>
          <li>Custom dungeons and high-level PvE content</li>
          <li>Expanded space combat encounters</li>
          <li>Improved treasure map and exploration systems</li>
          <li>Continued polish on Mandalorian and quest-based content</li>
          <li>Heritage Quest, Dread Ridge, Big Game hunter, and many more.</li>
          <li>Kashyyk implemented with planets quests</li>
        </ul>
      </div>
      <div className="border border-[#1a1a4a] bg-[rgba(13,20,40,0.8)] p-6 rounded-md mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">Community & Events</h3>
          <span className="ml-2 bg-yellow-600 text-black text-sm font-medium px-2 py-0.5 rounded">Ongoing</span>
        </div>
        <ul className="list-disc list-outside text-gray-300 space-y-1 pl-6">
          <li>Guild system enhancements</li>
          <li>Event framework upgrades for live and recurring events</li>
          <li>Support for player-led storytelling and roleplay</li>
          <li>New social venues and gathering spaces</li>
          <li>Tools to empower community-created content</li>
        </ul>
      </div>
      <div className="border border-[#1a1a4a] bg-[rgba(13,20,40,0.8)] p-6 rounded-md mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">Galaxy Growth</h3>
          <span className="ml-2 bg-gray-600 text-white text-sm font-medium px-2 py-0.5 rounded">Future</span>
        </div>
        <ul className="list-disc list-outside text-gray-300 space-y-1 pl-6">
          <li>New planets and locations to explore</li>
          <li>Jump to Lightspeed</li>
          <li>Additional playable species</li>
          <li>New profession hybrids and specialization paths</li>
          <li>Dynamic galaxy events influenced by players</li>
          <li>Infrastructure improvements for long-term scalability</li>
        </ul>
      </div>
    </PageLayout>
  );
}
