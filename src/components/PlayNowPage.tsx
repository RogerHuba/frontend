"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import Link from "next/link";
import Image from "next/image";

export function PlayNowPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <div className="relative">
          <HeroSection
            title="Get Started with Star Wars Galaxies: Infinity"
            subtitle="Download, create an account, and join the galaxy far, far away"
            ctaText=""
            ctaLink=""
            theme="play"
            showLogo={false}
          />
          
          {/* Star Wars Galaxies Logo - Bottom Left of Hero */}
          <div className="absolute bottom-8 left-8 z-30 hidden md:block">
            <Image
              src="https://ext.same-assets.com/906812322/908964572.png"
              alt="Star Wars Galaxies Logo"
              width={200}
              height={200}
              className="object-contain opacity-90"
            />
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-8">
                      <h2 className="text-xl font-medium text-white mb-4">Download the Infinity Launcher</h2>
                      <p className="text-gray-300">
                        To play SWG Infinity, you'll need to download and install our custom launcher.
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="#" className="play-button">
                        Download Launcher
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-8">
                      <h2 className="text-xl font-medium text-white mb-4">Create an Account</h2>
                      <p className="text-gray-300">
                        Register an account on our website to get started. It's free!
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="#" className="play-button">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-8">
                      <h2 className="text-xl font-medium text-white mb-4">Join the Community</h2>
                      <p className="text-gray-300">
                        Connect with other players and get help with getting started.
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <Link
                        href="https://discord.gg/jyakeRJ"
                        className="play-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Discord
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ServerInfoFooter />
    </main>
  );
}
