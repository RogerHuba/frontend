"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Quest {
  name: string;
  description: string;
  content: string;
}

export function QuestGuidesPage() {
  const [expandedQuest, setExpandedQuest] = useState<string | null>(null);

  const toggleQuest = (questName: string) => {
    if (expandedQuest === questName) {
      setExpandedQuest(null);
    } else {
      setExpandedQuest(questName);
    }
  };

  const themeParkQuests: Quest[] = [
    {
      name: "Nym's Theme Park",
      description: "Lok pirate adventures and smuggling operations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Jabba's Theme Park",
      description: "Hutt cartel missions and criminal enterprises",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
    },
    {
      name: "Imperial Theme Park",
      description: "Serve the Empire with honor and dedication",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
    },
    {
      name: "Rebel Theme Park",
      description: "Fight for freedom and justice against tyranny",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus."
    }
  ];

  const jediQuests: Quest[] = [
    {
      name: "Jedi Unlock",
      description: "Path to Force sensitivity and awakening",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
    },
    {
      name: "Village of Aurilia",
      description: "Force-sensitive training and mystical guidance",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "The Padawan Trials",
      description: "Begin your journey as a Jedi apprentice",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue."
    },
    {
      name: "The Knight Trials",
      description: "Achieve Jedi Knighthood through wisdom and courage",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      name: "Force Shrine Quests",
      description: "Ancient Force mysteries and sacred knowledge",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio."
    }
  ];

  const planetaryQuests: Quest[] = [
    {
      name: "Tatooine Quests",
      description: "Desert world adventures and moisture farming",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."
    },
    {
      name: "Naboo Quests",
      description: "Royal palace intrigue and political machinations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus. Nullam vel sem vel sapien hendrerit cursus."
    },
    {
      name: "Corellia Quests",
      description: "Industrial world missions and corporate espionage",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
    },
    {
      name: "Dantooine Quests",
      description: "Agricultural frontier stories and ancient ruins",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      name: "Endor Quests",
      description: "Ewok village adventures and forest mysteries",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam."
    },
    {
      name: "Dathomir Quests",
      description: "Nightsister dark magic and dangerous creatures",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque."
    }
  ];

  const eventQuests: Quest[] = [
    {
      name: "Life Day Celebrations",
      description: "Seasonal festivities and gift exchanges",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus."
    },
    {
      name: "Empire Day Events",
      description: "Imperial propaganda and loyalty demonstrations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam."
    },
    {
      name: "Galactic Moon Festival",
      description: "Mystical celebrations and lunar rituals",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus."
    }
  ];

  const factionQuests: Quest[] = [
    {
      name: "Imperial GCW Missions",
      description: "Serve the Emperor with military precision",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      name: "Rebel GCW Missions",
      description: "Fight the Empire for galactic freedom",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    },
    {
      name: "Faction Base Assaults",
      description: "Coordinated attacks on enemy strongholds",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      name: "Space Battle Missions",
      description: "Starfighter combat and tactical warfare",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere."
    }
  ];

  const collectionQuests: Quest[] = [
    {
      name: "Badge Hunting",
      description: "Complete your collection of achievements",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula."
    },
    {
      name: "Treasure Hunting",
      description: "Find hidden riches across the galaxy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue."
    },
    {
      name: "Creature Knowledge",
      description: "Study galactic fauna and their behaviors",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada."
    },
    {
      name: "Exploration Badges",
      description: "Discover hidden locations and landmarks",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna."
    }
  ];

  const QuestSection = ({ title, quests }: { title: string, quests: Quest[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {quests.map((quest) => (
          <div key={quest.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedQuest === quest.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleQuest(quest.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{quest.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{quest.description}</p>
              </div>
              {expandedQuest === quest.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedQuest === quest.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <p className="text-gray-300">{quest.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow relative">
        <div className="hexagon-pattern" />

        <RandomHeroSection
          title="Quest Guides"
          subtitle="Complete epic adventures across the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Adventure Awaits in Every Corner of the Galaxy</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies features an extensive quest system with theme parks, story missions, and dynamic content. 
                  From simple delivery missions to epic multi-part adventures, these guides will help you navigate the 
                  galaxy's most exciting challenges and discover hidden treasures. Click on any quest line below to learn more about its requirements and rewards.
                </p>
              </div>

              <QuestSection title="Theme Park Adventures" quests={themeParkQuests} />
              <QuestSection title="Jedi & Force Quests" quests={jediQuests} />
              <QuestSection title="Planetary Quest Lines" quests={planetaryQuests} />
              <QuestSection title="Special Event Quests" quests={eventQuests} />
              <QuestSection title="Factional Warfare Quests" quests={factionQuests} />
              <QuestSection title="Collection & Achievement Quests" quests={collectionQuests} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8">
                <p className="text-gray-300">
                  Whether you're seeking adventure, credits, faction points, or rare items, the galaxy is full of 
                  opportunities for those willing to take on the challenge. Many quests offer unique rewards that 
                  cannot be obtained through other means, making them essential for dedicated players seeking to 
                  experience all that SWG Infinity has to offer.
                </p>
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
