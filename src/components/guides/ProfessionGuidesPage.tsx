"use client";

import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Profession {
  name: string;
  description: string;
  content: string;
}

export function ProfessionGuidesPage() {
  const [expandedProfession, setExpandedProfession] = useState<string | null>(null);

  const toggleProfession = (professionName: string) => {
    if (expandedProfession === professionName) {
      setExpandedProfession(null);
    } else {
      setExpandedProfession(professionName);
    }
  };

  const starterProfessions: Profession[] = [
    {
      name: "Brawler",
      description: "Foundation combat skills and unarmed combat basics",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Marksman",
      description: "Master of ranged combat and weapon accuracy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
    },
    {
      name: "Medic",
      description: "Field medical support and basic healing abilities",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
    },
    {
      name: "Artisan",
      description: "Basic crafting skills and resource gathering foundation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus."
    },
    {
      name: "Scout",
      description: "Wilderness survival expert and exploration specialist",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
    }
  ];

  const combatProfessions: Profession[] = [
    {
      name: "Rifleman",
      description: "Heavy weapons specialist with devastating firepower",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Pistoleer",
      description: "Quick draw expert and dual-wielding specialist",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue."
    },
    {
      name: "Carbineer",
      description: "Versatile weapon user with balanced combat skills",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      name: "Fencer",
      description: "Melee combat specialist with finesse weapons",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio."
    },
    {
      name: "Swordsman",
      description: "Master of bladed weapons and sword techniques",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."
    },
    {
      name: "Pikeman",
      description: "Polearm expert with reach advantage in combat",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus. Nullam vel sem vel sapien hendrerit cursus."
    },
    {
      name: "Teras Kasi Artist",
      description: "Unarmed combat master with martial arts expertise",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
    }
  ];

  const craftingProfessions: Profession[] = [
    {
      name: "Weaponsmith",
      description: "Create deadly weapons and combat equipment",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      name: "Armorsmith",
      description: "Forge protective gear and defensive equipment",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus."
    },
    {
      name: "Chef",
      description: "Master culinary arts and food preparation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend."
    },
    {
      name: "Tailor",
      description: "Fashion and clothing expert, create custom apparel",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio."
    },
    {
      name: "Architect",
      description: "Build structures, furniture, and decorative items",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante."
    },
    {
      name: "Droid Engineer",
      description: "Create mechanical companions and automated helpers",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus. Nullam vel sem vel sapien."
    },
    {
      name: "Shipwright",
      description: "Construct starships and space vehicles",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam."
    }
  ];

  const socialProfessions: Profession[] = [
    {
      name: "Doctor",
      description: "Heal wounds, cure ailments, and provide advanced medical care",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      name: "Entertainer",
      description: "Music, dance, and social healing for mind wounds",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam."
    },
    {
      name: "Musician",
      description: "Master of melodies and musical performance",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus."
    },
    {
      name: "Dancer",
      description: "Art of movement and performance dance",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa."
    },
    {
      name: "Image Designer",
      description: "Customize appearances and character aesthetics",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec."
    },
    {
      name: "Politician",
      description: "Leadership, governance, and civic management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor orci. Etiam at risus et justo dignissim congue ut vitae risus. Nullam vel sem vel sapien hendrerit cursus."
    }
  ];

  const utilityProfessions: Profession[] = [
    {
      name: "Ranger",
      description: "Advanced outdoor skills and wilderness mastery",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      name: "Creature Handler",
      description: "Tame and train creatures as companions",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra."
    },
    {
      name: "Bio-Engineer",
      description: "Genetic manipulation and creature enhancement",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque."
    },
    {
      name: "Merchant",
      description: "Trade and commerce specialization",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus."
    },
    {
      name: "Smuggler",
      description: "Slice systems, infiltrate, and circumvent security",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam."
    }
  ];

  const eliteProfessions: Profession[] = [
    {
      name: "Bounty Hunter",
      description: "Track and capture targets across the galaxy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      name: "Commando",
      description: "Heavy weapons and advanced tactical combat",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet."
    }
  ];

  const ProfessionSection = ({ title, professions }: { title: string, professions: Profession[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {professions.map((profession) => (
          <div key={profession.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedProfession === profession.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleProfession(profession.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{profession.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{profession.description}</p>
              </div>
              {expandedProfession === profession.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedProfession === profession.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <p className="text-gray-300">{profession.content}</p>
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
          title="Profession Guides"
          subtitle="Master your chosen path in the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Choose Your Path in Star Wars Galaxies</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  Star Wars Galaxies offers a diverse range of professions, each with unique skills and gameplay experiences. 
                  Whether you want to become a master crafter, a skilled combatant, or a force-sensitive Jedi, these guides 
                  will help you understand the intricacies of each profession. Click on any profession below to learn more about its mechanics and progression.
                </p>
              </div>

              <ProfessionSection title="Starter Professions" professions={starterProfessions} />
              <ProfessionSection title="Combat Professions" professions={combatProfessions} />
              <ProfessionSection title="Crafting Professions" professions={craftingProfessions} />
              <ProfessionSection title="Social & Support Professions" professions={socialProfessions} />
              <ProfessionSection title="Utility & Outdoor Professions" professions={utilityProfessions} />
              <ProfessionSection title="Elite Professions" professions={eliteProfessions} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8">
                <p className="text-gray-300">
                  Each profession offers unique gameplay experiences and progression paths. Consider your playstyle and 
                  interests when choosing your character's development path. Many players choose to master multiple 
                  professions or combine skills from different trees to create hybrid builds. Remember that starter 
                  professions provide the foundation for advancing into more specialized roles.
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
