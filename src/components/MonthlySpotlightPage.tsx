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
                  Every month, we celebrate the outstanding members of our community, showcase amazing achievements, 
                  highlight server events, and share exciting stories from across the galaxy. From player 
                  accomplishments to community gatherings, discover what makes SWG Infinity special.
                </p>
                
                {/* Quick Navigation */}
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  <Link 
                    href="/player-of-the-month"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                  >
                    View Player of the Month
                  </Link>
                  <Link 
                    href="/events"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                  >
                    Browse Event Calendar
                  </Link>
                </div>
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
                  <div className="text-blue-400 text-sm mb-4">
                    <span className="font-medium">Achievements:</span> To be announced
                  </div>
                  <Link 
                    href="/player-of-the-month"
                    className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                  <h5 className="text-purple-400 font-semibold text-lg mb-2">Event Highlight</h5>
                  <h6 className="text-white font-medium mb-3">Community Gatherings</h6>
                  <p className="text-gray-300 text-sm mb-4">
                    From epic PvP battles to peaceful cantina gatherings, we'll showcase the events that bring 
                    our community together and create lasting memories.
                  </p>
                  <div className="text-blue-400 text-sm mb-4">
                    <span className="font-medium">Next Featured:</span> Community submissions
                  </div>
                  <Link 
                    href="/events"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors text-sm"
                  >
                    View Calendar
                  </Link>
                </div>
              </div>

              <h4 className="text-xl font-medium text-white mb-4">Spotlight Categories</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-yellow-400 text-2xl mb-2">👤</div>
                  <h6 className="text-white font-medium mb-2">Player Features</h6>
                  <p className="text-gray-300 text-sm">
                    Highlighting exceptional players who excel in combat, crafting, or community building.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-purple-400 text-2xl mb-2">🎉</div>
                  <h6 className="text-white font-medium mb-2">Epic Events</h6>
                  <p className="text-gray-300 text-sm">
                    Memorable community events, battles, celebrations, and gatherings.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-[#1a1a4a] rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">🏆</div>
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
                    <span><strong>Create Something Amazing:</strong> Achieve rare goals, organize great events, or help the community</span>
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
                <div className="text-gray-400 text-4xl mb-4">📅</div>
                <h6 className="text-white font-medium mb-2">Archive Coming Soon</h6>
                <p className="text-gray-300">
                  As we feature more content each month, this section will showcase our community highlights and achievements.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">
                  Want to submit something for the Monthly Spotlight? Have an amazing story, event, or achievement to share? 
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
