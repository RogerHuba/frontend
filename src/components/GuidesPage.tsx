"use client";

import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import { BookOpen, Sword, Compass, User } from "lucide-react";

export function GuidesPage() {
  const guideCategories = [
    {
      title: "Profession Guides",
      description: "Master every profession in the galaxy with comprehensive guides for combat, crafting, and social professions.",
      href: "/guides/profession-guides",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Adventure Guides",
      description: "Explore dungeons, theme parks, and special encounters across the galaxy with detailed walkthroughs.",
      href: "/guides/adventure-guides",
      icon: Sword,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Treasure Hunting",
      description: "Learn the art of treasure hunting, from basic waypoints to advanced techniques and valuable loot.",
      href: "/guides/treasure-hunting",
      icon: Compass,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Character Builder",
      description: "Plan your character builds with our interactive tool to optimize your skill distribution and templates.",
      href: "/character-builder",
      icon: User,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <PageLayout
      title="Gameplay Assistance"
      subtitle="Comprehensive guides and tools to master Star Wars Galaxies"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a new citizen or a veteran explorer, our guides will help you navigate 
            the vast galaxy of SWG Infinity. Choose your path below to begin your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.title}
                href={category.href}
                className="group block"
              >
                <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-xl p-8 transition-all duration-300 hover:border-[#2a2a6a] hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <span className="font-medium">Explore guides</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0d0d30] border border-[#1a1a4a] rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our community is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/jyakeRJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Join Discord</span>
              </a>
              <Link
                href="/faq"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Check FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
