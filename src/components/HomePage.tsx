"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { getRandomHeroClass } from "@/utils/heroService";

export function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [heroClass, setHeroClass] = useState('hero-1');
  
  useEffect(() => {
    // Use the singleton service to ensure same hero across all components
    setHeroClass(getRandomHeroClass());
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        {/* Hero Section with Random Background */}
        <section 
          className={`hero-section ${mounted ? heroClass : 'hero-1'}`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to SWG Infinity
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                Experience Star Wars Galaxies as it was meant to be. Join our thriving community in a galaxy far, far away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/getting-started" 
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Your Journey
                </a>
                <a 
                  href="/download" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Download Game
                </a>
              </div>
            </div>
          </div>
        </section>

        <DiscordSection />
      </div>

      <ServerInfoFooter />
    </main>
  );
}
