"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";

export function PlayerOfTheMonthPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Player of the Month"
          subtitle="Celebrating our community heroes"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Recognizing Excellence in the Galaxy</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-12">
                <p className="text-gray-300 mb-6">
                  Each month, we honor one outstanding member of our community who embodies the spirit of Star Wars Galaxies Infinity. 
                  These players go above and beyond to help others, contribute to the community, and make our galaxy a better place for everyone.
                </p>
              </div>

              {/* Current Player of the Month */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-600/40 rounded-lg p-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">👑</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <h2 className="text-2xl font-bold text-yellow-400 mr-3">January 2025</h2>
                      <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium">Current</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Coming Soon!</h3>
                    
                    <p className="text-gray-300 mb-4">
                      Our first Player of the Month will be announced soon. We're looking for someone who demonstrates 
                      exceptional dedication to helping new players, contributing to guild activities, or making 
                      outstanding achievements in the game.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-yellow-400 font-medium">Profession:</span>
                        <span className="text-gray-300 ml-2">TBA</span>
                      </div>
                      <div>
                        <span className="text-yellow-400 font-medium">Server Time:</span>
                        <span className="text-gray-300 ml-2">TBA</span>
                      </div>
                      <div>
                        <span className="text-yellow-400 font-medium">Home Planet:</span>
                        <span className="text-gray-300 ml-2">TBA</span>
                      </div>
                      <div>
                        <span className="text-yellow-400 font-medium">Guild:</span>
                        <span className="text-gray-300 ml-2">TBA</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-yellow-600/30">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">Outstanding Achievements</h4>
                  <div className="text-gray-300 text-center py-8">
                    <span className="text-4xl">🏆</span>
                    <p className="mt-2">Achievements will be listed here when our first winner is selected!</p>
                  </div>
                </div>
              </div>

              {/* Nomination Section */}
              <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6 mb-12">
                <h3 className="text-xl font-semibold text-white mb-4">Nominate a Player</h3>
                <p className="text-gray-300 mb-6">
                  Know someone who deserves recognition? Submit your nominations through Discord and tell us why 
                  they should be our next Player of the Month!
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-blue-400 mb-3">What We Look For</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Consistently helpful to new players</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Positive attitude and good sportsmanship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Exceptional achievements or contributions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Active community participation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Leadership in guilds or events</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-green-400 mb-3">Nomination Process</h4>
                    <ol className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">1.</span>
                        <span>Join our Discord server</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">2.</span>
                        <span>Go to the #player-nominations channel</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">3.</span>
                        <span>Provide player name and reason for nomination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">4.</span>
                        <span>Include specific examples of their contributions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">5.</span>
                        <span>Staff will review all nominations monthly</span>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link 
                    href="https://discord.gg/jyakeRJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Submit Nomination on Discord
                  </Link>
                </div>
              </div>

              {/* Previous Winners */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-white mb-6">Hall of Fame</h3>
                <div className="text-center py-12 bg-[#1a1a4a] rounded-lg">
                  <div className="text-gray-400 text-6xl mb-4">🏛️</div>
                  <h4 className="text-white font-medium mb-2">Previous Winners</h4>
                  <p className="text-gray-300">
                    As we recognize more outstanding community members, their achievements will be immortalized here 
                    in our Hall of Fame.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Player of the Month Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎖️</div>
                    <h4 className="text-white font-medium mb-2">Recognition</h4>
                    <p className="text-gray-300 text-sm">Featured on our website and social media</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎁</div>
                    <h4 className="text-white font-medium mb-2">In-Game Rewards</h4>
                    <p className="text-gray-300 text-sm">Special items and credits as a thank you</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-3">👥</div>
                    <h4 className="text-white font-medium mb-2">Community Status</h4>
                    <p className="text-gray-300 text-sm">Special Discord role and community recognition</p>
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
