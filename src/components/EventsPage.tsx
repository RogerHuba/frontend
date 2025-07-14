"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { EventsCalendar } from "./EventsCalendar";

export function EventsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Community Events"
          subtitle="Join the galaxy's most exciting gatherings"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="section-title mb-6">Galactic Event Calendar</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Stay up-to-date with all the exciting events happening in SWG Infinity! From PvP tournaments 
                  to social gatherings, training sessions to community contests - there's always something 
                  happening in our galaxy.
                </p>
              </div>

              {/* Event Types Legend */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-300">PvP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-300">Social</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-300">Training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm text-gray-300">Dungeon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-gray-300">Contest</span>
                </div>
              </div>

              {/* Interactive Calendar */}
              <EventsCalendar />

              {/* Event Guidelines */}
              <div className="mt-12 bg-[#0d0d30] border border-[#1a1a4a] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Event Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-blue-400 mb-3">Participation</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>All events are open to guild members and allies unless specified</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Some events may have skill or gear requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>RSVP in Discord when participant limits apply</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Be respectful and follow server rules during events</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-green-400 mb-3">Event Planning</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Want to host an event? Contact event coordinators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Submit event proposals at least 1 week in advance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Include event type, time, location, and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>Regular events may receive official support and rewards</span>
                      </li>
                    </ul>
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
