"use client";

import { Navigation } from "@/components/Navigation";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { RandomHeroSection } from "@/components/RandomHeroSection";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  heroClass?: string;
  children: React.ReactNode;
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        {/* Hero Section with Random Background */}
        <RandomHeroSection title={title} subtitle={subtitle} className="py-20" />

        {/* Page Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">{children}</div>
          </div>
        </section>
      </div>

      <DiscordSection />
      <ServerInfoFooter />
    </main>
  );
}
