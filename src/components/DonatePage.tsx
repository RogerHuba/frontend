"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function DonatePage() {
  // Monthly funding data - these would ideally come from a JSON file or API
  const fundingGoals = [
    { month: "Last Month (June 2025)", target: 500, raised: 420, isComplete: false },
    { month: "Current Month (July 2025)", target: 500, raised: 180, isComplete: false },
    { month: "August 2025", target: 500, raised: 0, isComplete: false },
    { month: "September 2025", target: 500, raised: 0, isComplete: false },
    { month: "October 2025", target: 500, raised: 0, isComplete: false },
  ];

  // Lightsaber progress bar component
  const LightsaberProgressBar = ({ month, target, raised, isComplete }: { 
    month: string; 
    target: number; 
    raised: number; 
    isComplete: boolean; 
  }) => {
    const percentage = Math.min((raised / target) * 100, 100);
    
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-white">{month}</h3>
          <span className="text-gray-300">${raised} / ${target}</span>
        </div>
        
        {/* Lightsaber hilt */}
        <div className="relative">
          <div className="flex items-center">
            {/* Hilt */}
            <div className="w-8 h-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-lg border border-gray-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            
            {/* Blade container */}
            <div className="flex-1 h-6 bg-gray-900 border border-gray-700 rounded-r-lg overflow-hidden relative">
              {/* Progress blade */}
              <div 
                className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 transition-all duration-1000 ease-out relative"
                style={{ width: `${percentage}%` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/50 via-cyan-200/50 to-blue-400/50 animate-pulse"></div>
                
                {/* Lightsaber tip */}
                {percentage > 0 && (
                  <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-r from-transparent to-white/60 rounded-r-full"></div>
                )}
              </div>
              
              {/* Completion sparkle */}
              {percentage >= 100 && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 via-white/40 to-yellow-300/30 animate-pulse"></div>
              )}
            </div>
          </div>
          
          {/* Percentage text */}
          <div className="text-center mt-1">
            <span className="text-sm text-gray-400">{percentage.toFixed(1)}% funded</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        {/* Header Section */}
        <div className="bg-[url('https://ext.same-assets.com/906812322/2240799338.jpeg')] bg-cover bg-center py-16">
          <div className="container mx-auto px-4">
            <div className="bg-black/70 p-8 rounded-lg text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">THANK YOU FOR YOUR SUPPORT</h1>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                Infinity is not-for-profit and funded by our amazing community through PayPal donations. We strive to keep costs as low as possible. 100% of donations go towards development and hosting costs. If we find ourselves in excess donations for an upcoming quarter, we invest in digital marketing to find veteran players, whom of which, have not played Star Wars Galaxies since the combat upgrade or NGE.
              </p>
            </div>
          </div>
        </div>

        {/* Funding Goals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[rgba(13,20,40,0.8)] p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Monthly Funding Goals</h2>
                
                {fundingGoals.map((goal, index) => (
                  <LightsaberProgressBar 
                    key={index}
                    month={goal.month}
                    target={goal.target}
                    raised={goal.raised}
                    isComplete={goal.isComplete}
                  />
                ))}
              </div>

              {/* Support Message */}
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12 text-center">
                <p className="text-gray-300 text-lg">
                  Infinity is a community-funded project. Your donation will help fund the hosting and operational costs of the service.
                </p>
              </div>

              {/* Donation Button */}
              <div className="text-center mb-12">
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=HCURWDK58MWKW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-bold text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Donate via PayPal
                  <ExternalLink className="ml-2 h-6 w-6" />
                </a>
              </div>

              {/* Subscription Tiers */}
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Monthly Subscription Tiers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Initiate Level", amount: "$5.00", monthly: true },
                    { name: "Padawan Level", amount: "$10.00", monthly: true },
                    { name: "Knight Level", amount: "$20.00", monthly: true },
                    { name: "Master Level", amount: "$30.00", monthly: true },
                    { name: "Overseer Level", amount: "$50.00", monthly: true },
                    { name: "META Level", amount: "$100.00", monthly: true },
                  ].map((tier) => (
                    <div key={tier.name} className="bg-[rgba(20,20,40,0.6)] p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
                      <h3 className="text-white font-semibold text-lg mb-2">{tier.name}</h3>
                      <p className="text-yellow-400 font-bold">{tier.amount} – monthly</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=HCURWDK58MWKW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Set up Monthly Subscription
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Transparency Section */}
              <div className="bg-[rgba(13,20,40,0.6)] p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Transparency</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We believe in complete transparency with our community. Here's how your donations are used:
                  </p>
                  <ul className="swg-bullet-list">
                    <li>Server hosting and maintenance costs</li>
                    <li>Development tools and resources</li>
                    <li>Security measures and backups</li>
                    <li>Website and launcher maintenance</li>
                    <li>Digital marketing to find veteran players</li>
                  </ul>
                  <p>
                    At the end of each month, we publish a breakdown of how donations were used on our Discord server.
                  </p>
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
