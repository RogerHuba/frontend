"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";

export function MonthlySpotlightPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Monthly Spotlight"
          subtitle="Celebrating the heroes and events of SWG Infinity"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">This Month in the Galaxy</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Every month, we celebrate the outstanding members of our community, showcase amazing builds, 
                  highlight server achievements, and share exciting stories from across the galaxy. From player 
                  accomplishments to community events, discover what makes SWG Infinity special.
                </p>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Featured This Month</h4>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                  <h5 className="text-yellow-400 font-semibold text-lg mb-2">Player of the Month</h5>
                  <h6 className="text-white font-medium mb-3">Coming Soon...</h6>
                  <p className="text-gray-300 text-sm mb-4">
                    Our first Monthly Spotlight will feature an outstanding member of the SWG Infinity community. 
                    Stay tuned for amazing stories of adventure, creativity, and community spirit.
                  </p>
                  <div className="text-blue-400 text-sm">
                    <span className="font-medium">Achievements:</span> To be announced
                  </div>
                </div>

                <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                  <h5 className="text-green-400 font-semibold text-lg mb-2">Build of the Month</h5>
                  <h6 className="text-white font-medium mb-3">Submit Your Creation!</h6>
                  <p className="text-gray-300 text-sm mb-4">
                    Show off your amazing architectural creations! Whether it's a beautiful city, impressive guild hall, 
                    or creative player housing, we want to see what you've built.
                  </p>
                  <Link 
                    href="https://discord.gg/jyakeRJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md text-sm transition-colors"
                  >
                    Submit Build
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                  <h5 className="text-purple-400 font-semibold text-lg mb-2">Event Highlight</h5>
                  <h6 className="text-white font-medium mb-3">Community Gatherings</h6>
                  <p className="text-gray-300 text-sm mb-4">
                    From epic PvP battles to peaceful cantina gatherings, we'll showcase the events that bring 
                    our community together and create lasting memories.
                  </p>
                  <div className="text-blue-400 text-sm">
                    <span className="font-medium">Next Featured:</span> Community submissions
                  </div>
                </div>

                <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                  <h5 className="text-orange-400 font-semibold text-lg mb-2">Guild Spotlight</h5>
                  <h6 className="text-white font-medium mb-3">Nominate Your Guild!</h6>
                  <p className="text-gray-300 text-sm mb-4">
                    Does your guild excel at helping new players, organizing events, or achieving greatness? 
                    We want to highlight the guilds that make our server amazing.
                  </p>
                  <Link 
                    href="https://discord.gg/jyakeRJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md text-sm transition-colors"
                  >
                    Nominate Guild
                  </Link>
                </div>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Spotlight Categories</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-yellow-400 text-2xl mb-2">👤</div>
                  <h6 className="text-white font-medium mb-2">Player Features</h6>
                  <p className="text-gray-300 text-sm">
                    Highlighting exceptional players who excel in combat, crafting, or community building.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-green-400 text-2xl mb-2">🏗️</div>
                  <h6 className="text-white font-medium mb-2">Amazing Builds</h6>
                  <p className="text-gray-300 text-sm">
                    Showcasing incredible architecture, cities, and creative constructions across the galaxy.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-purple-400 text-2xl mb-2">�</div>
                  <h6 className="text-white font-medium mb-2">Epic Events</h6>
                  <p className="text-gray-300 text-sm">
                    Memorable community events, battles, celebrations, and gatherings.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-orange-400 text-2xl mb-2">🛡️</div>
                  <h6 className="text-white font-medium mb-2">Guild Spotlights</h6>
                  <p className="text-gray-300 text-sm">
                    Featuring outstanding guilds and their contributions to the server community.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">�</div>
                  <h6 className="text-white font-medium mb-2">Achievements</h6>
                  <p className="text-gray-300 text-sm">
                    Celebrating major milestones, rare accomplishments, and server firsts.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-red-400 text-2xl mb-2">📖</div>
                  <h6 className="text-white font-medium mb-2">Stories</h6>
                  <p className="text-gray-300 text-sm">
                    Player adventures, memorable moments, and tales from across the galaxy.
                  </p>
                </div>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">How to Get Featured</h4>
              <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6 mb-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><strong>Be Active:</strong> Regular participation in server activities and community events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><strong>Create Something Amazing:</strong> Build impressive structures, achieve rare goals, or organize great events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><strong>Help the Community:</strong> Assist new players, share knowledge, and contribute positively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><strong>Share Your Story:</strong> Submit screenshots, videos, or stories of your adventures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><strong>Nominate Others:</strong> Recognize fellow players who deserve recognition</span>
                  </li>
                </ul>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Previous Monthly Spotlights</h4>
              <div className="text-center py-12 bg-[#1a1a4a] rounded-lg">
                <div className="text-gray-400 text-4xl mb-4">�</div>
                <h6 className="text-white font-medium mb-2">Archive Coming Soon</h6>
                <p className="text-gray-300">
                  As we feature more content each month, this section will showcase our community highlights and achievements.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">
                  Want to submit something for the Monthly Spotlight? Have an amazing build, story, or event to share? 
                  Reach out to our team on Discord!
                </p>
                <Link 
                  href="https://discord.gg/jyakeRJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Submit to Monthly Spotlight
                </Link>
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