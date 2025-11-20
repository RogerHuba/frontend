"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { RandomHeroSection } from "@/components/RandomHeroSection";
import { DiscordSection } from "@/components/DiscordSection";
import { ServerInfoFooter } from "@/components/ServerInfoFooter";

interface Guide {
  name: string;
  description: string;
  location?: string;
  content: string;
}

export function AdventureGuidesPage() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  const toggleGuide = (guideName: string) => {
    if (expandedGuide === guideName) {
      setExpandedGuide(null);
    } else {
      setExpandedGuide(guideName);
    }
  };

  const themeParkGuides: Guide[] = [
    {
      name: "Nym's Theme Park",
      description: "Adventure alongside the famous pirate Nym in his fight against the Trade Federation",
      location: "Lok - Nym's Stronghold",
      content: `NYM'S THEME PARK WALKTHROUGH:

OVERVIEW:
Help the famous pirate Nym in his fight against the Trade Federation on Lok. This multi-part adventure combines space combat, ground missions, and unique rewards.

GETTING STARTED:
• Travel to Lok and find Nym's Stronghold
• Speak with Nym to begin the questline
• Complete initial reconnaissance missions
• Gather intelligence on Trade Federation activities

SPACE COMBAT MISSIONS:
• Pilot starfighters in epic space battles
• Escort Nym's ships through dangerous sectors
• Attack Trade Federation capital ships
• Defend the stronghold from aerial assaults

GROUND OPERATIONS:
• Infiltrate Trade Federation bases
• Rescue captured allies
• Sabotage enemy installations
• Fight alongside Nym's pirate crew

REWARDS:
• Unique weapons and armor
• Pilot skills and certifications
• Access to rare starship components
• Reputation with Nym's pirates

TIPS:
• Bring a group for the more challenging missions
• Stock up on medical supplies before starting
• Space combat requires piloting skills
• Some missions have time limits`
    },
    {
      name: "Jabba's Theme Park",
      description: "Work for the notorious Hutt crime lord in various smuggling and criminal enterprises",
      location: "Tatooine - Jabba's Palace",
      content: `JABBA'S THEME PARK WALKTHROUGH:

OVERVIEW:
Work for the notorious Hutt crime lord Jabba in various smuggling and criminal enterprises. Navigate the dangerous underworld of Tatooine in this morally ambiguous storyline.

GETTING STARTED:
• Travel to Jabba's Palace on Tatooine
• Speak with Jabba's lieutenants
• Prove your worth through initial tasks
• Gain trust within the criminal organization

SMUGGLING MISSIONS:
• Transport illegal goods across the galaxy
• Avoid Imperial patrols and customs checks
• Deal with rival smuggling operations
• Manage contraband and black market goods

UNDERWORLD ACTIVITIES:
• Collect debts for Jabba's organization
• Eliminate business rivals and threats
• Participate in gladiatorial combat
• Navigate criminal politics and alliances

PALACE INTRIGUE:
• Uncover plots against Jabba
• Deal with backstabbing lieutenants
• Protect valuable assets and prisoners
• Maintain Jabba's criminal empire

REWARDS:
• Underworld contacts and connections
• Rare weapons and smuggling equipment
• Access to black market goods
• Criminal reputation and status

TIPS:
• Faction standing affects available missions
• Some choices have long-term consequences
• Bring backup for dangerous collections
• Criminal activities may affect your reputation`
    },
    {
      name: "Imperial Theme Park",
      description: "Serve the Galactic Empire in classified missions against Rebel insurgents",
      location: "Various Imperial Installations",
      content: `IMPERIAL THEME PARK WALKTHROUGH:

OVERVIEW:
Serve the Galactic Empire in classified missions against Rebel insurgents. Experience the Empire's perspective through strategic operations and military campaigns.

GETTING STARTED:
• Visit an Imperial Recruiter
• Complete basic military training
• Receive your Imperial commission
• Report to your assigned commander

MILITARY OPERATIONS:
• Hunt down Rebel cells and hideouts
• Protect Imperial installations
• Gather intelligence on Rebel activities
• Participate in large-scale battles

CLASSIFIED MISSIONS:
• Infiltrate Rebel organizations
• Eliminate high-value Rebel targets
• Secure classified Imperial technology
• Conduct psychological warfare operations

IMPERIAL HIERARCHY:
• Rise through the military ranks
• Gain access to better equipment
• Command Imperial troops
• Participate in strategic planning

REWARDS:
• Imperial military gear and vehicles
• Access to restricted Imperial areas
• Military rank and recognition
• Advanced combat training

TIPS:
• Imperial faction standing is crucial
• Some missions require specific skills
• Work with other Imperial players
• Maintain your military reputation`
    },
    {
      name: "Rebel Theme Park",
      description: "Join the Rebel Alliance in their fight against Imperial oppression",
      location: "Various Rebel Bases",
      content: `REBEL THEME PARK WALKTHROUGH:

OVERVIEW:
Join the Rebel Alliance in their fight against Imperial oppression. Participate in covert operations, rescue missions, and strikes against Imperial targets.

GETTING STARTED:
• Contact a Rebel recruiter
• Prove your commitment to the cause
• Complete initial Alliance training
• Receive your first assignment

GUERRILLA WARFARE:
• Conduct hit-and-run attacks on Imperial forces
• Sabotage Imperial installations
• Rescue captured Rebels and civilians
• Disrupt Imperial supply lines

COVERT OPERATIONS:
• Infiltrate Imperial facilities
• Steal classified Imperial data
• Establish new Rebel safe houses
• Coordinate with Rebel cells

ALLIANCE MISSIONS:
• Protect Rebel leadership
• Escort important Alliance personnel
• Defend Rebel bases from attack
• Participate in major Alliance operations

REWARDS:
• Rebel military equipment
• Access to Alliance technology
• Recognition within the Rebellion
• Advanced tactical training

TIPS:
• Rebel faction standing opens new missions
• Stealth and cunning often beat brute force
• Coordinate with other Rebel players
• Some operations require careful timing`
    }
  ];

  const dungeonGuides: Guide[] = [
    {
      name: "The Warren",
      description: "Navigate the dangerous Corellian cave system filled with Drall enemies and traps",
      location: "Corellia - The Warren Entrance",
      content: `THE WARREN DUNGEON GUIDE:

OVERVIEW:
Navigate the dangerous Corellian cave system filled with Drall enemies, traps, and valuable loot. This dungeon requires careful planning and teamwork to successfully complete.

PREPARATION:
• Recommended group size: 4-6 players
• Minimum level: 60+ combat skills
• Required: Medical supplies, food/drink
• Suggested: Trap detection abilities

DUNGEON LAYOUT:
• Multi-level cave system
• Branching pathways and secret areas
• Environmental hazards and traps
• Multiple boss encounters

ENEMY TYPES:
• Drall Warriors (melee fighters)
• Drall Mystics (force users)
• Drall Chieftains (bosses)
• Automated security systems

NOTABLE ENCOUNTERS:
• The Drall Council Chamber
• Ancient Drall Guardian
• The Deep Warren Queen
• Final Boss: Drall Overlord

LOOT AND REWARDS:
• Rare armor sets
• Unique weapons
• Crafting components
• Experience and credits

STRATEGY TIPS:
• Watch for pressure plate traps
• Use ranged combat when possible
• Coordinate group attacks on bosses
• Bring plenty of healing supplies
• Some areas require puzzle solving

COMMON MISTAKES:
• Rushing through trapped areas
• Fighting too many enemies at once
• Not bringing enough medical supplies
• Splitting the group unnecessarily`
    },
    {
      name: "Geonosian Bio-Lab",
      description: "Infiltrate the secret Geonosian research facility on Yavin IV",
      location: "Yavin IV - Bio-Lab Complex",
      content: `GEONOSIAN BIO-LAB DUNGEON GUIDE:

OVERVIEW:
Infiltrate the secret Geonosian research facility on Yavin IV. Face off against mutated creatures and automated defenses while uncovering dark experiments.

PREPARATION:
• Recommended group size: 5-8 players
• Minimum level: 70+ combat skills
• Required: Poison/disease cures
• Suggested: Slicing abilities

FACILITY LAYOUT:
• Research laboratories
• Specimen containment areas
• Security checkpoints
• Central command center

ENEMY TYPES:
• Geonosian Scientists
• Mutated test subjects
• Security droids
• Bio-engineered creatures

ENVIRONMENTAL HAZARDS:
• Toxic gas chambers
• Electrical barriers
• Containment breaches
• Self-destruct systems

NOTABLE ENCOUNTERS:
• The Chief Researcher
• Escaped Super Soldier
• Bio-Lab Security System
• Final Boss: Enhanced Geonosian Queen

LOOT AND REWARDS:
• Advanced medical equipment
• Bio-engineering schematics
• Rare genetic samples
• High-tech weapons and armor

STRATEGY TIPS:
• Bring antidotes for biological weapons
• Use slicing to disable security systems
• Be prepared for multiple waves of enemies
• Some doors require keycards from defeated enemies
• Environmental hazards can be used tactically

PUZZLE ELEMENTS:
• Computer terminal sequences
• Specimen containment protocols
• Research data recovery
• Facility lockdown procedures`
    },
    {
      name: "Death Watch Bunker",
      description: "Storm the Mandalorian Death Watch stronghold and face their elite warriors",
      location: "Endor - Death Watch Bunker",
      content: `DEATH WATCH BUNKER DUNGEON GUIDE:

OVERVIEW:
Storm the Mandalorian Death Watch stronghold and face their elite warriors. This challenging dungeon offers some of the best Mandalorian armor and weapons in the galaxy.

PREPARATION:
• Recommended group size: 6-8 players
• Minimum level: 80+ combat skills
• Required: High-quality weapons and armor
• Suggested: Melee combat abilities

BUNKER LAYOUT:
• Fortified entrance complex
• Training areas and barracks
• Armory and weapon testing facilities
• Commander's quarters and throne room

ENEMY TYPES:
• Death Watch Troopers
• Mandalorian Warriors
• Elite Death Watch Guards
• Death Watch Commanders

COMBAT CHALLENGES:
• Heavy armor and weapons
• Coordinated group tactics
• Jet pack mobility
• Advanced combat training

NOTABLE ENCOUNTERS:
• The Training Master
• Armory Guardian
• Death Watch Captain
• Final Boss: Death Watch Commander

LOOT AND REWARDS:
• Mandalorian armor sets
• Advanced jetpacks
• Unique Mandalorian weapons
• Rare crafting materials

STRATEGY TIPS:
• Focus fire on priority targets
• Use cover to avoid heavy weapons fire
• Be prepared for aerial attacks
• Some enemies require specific tactics
• Coordinate group movements carefully

MANDALORIAN CULTURE:
• Honor-based combat challenges
• Ritual weapon trials
• Ancient Mandalorian traditions
• Death Watch history and ideology

SPECIAL MECHANICS:
• Jetpack combat encounters
• Weapon mastery challenges
• Honor duels with commanders
• Bunker defense systems`
    }
  ];

  const jediGuides: Guide[] = [
    {
      name: "Jedi Unlock Process",
      description: "Begin your journey to unlock Force sensitivity through village grinding and holocrons",
      location: "Various Locations",
      content: `JEDI UNLOCK PROCESS GUIDE:

OVERVIEW:
Begin your journey to unlock Force sensitivity through village grinding, profession mastery, and the mysterious holocron system.

HOLOCRON SYSTEM:
• Collect Jedi Holocrons from various sources
• Each holocron provides clues about professions
• Master the indicated professions completely
• Some holocrons require specific activities

PROFESSION MASTERY:
• Must master multiple non-Force professions
• Exact combination varies per character
• Some professions are more commonly required
• Mastery must be complete (all skill boxes)

THE VILLAGE (PHASE 1):
• Force-sensitive characters enter the Village
• Complete meditation and training exercises
• Learn basic Force philosophy and control
• Unlock Force Sensitive skill tree

COMMON UNLOCK PATHS:
• Combat professions (often required)
• Crafting professions (frequently needed)
• Social professions (sometimes required)
• Utility professions (occasionally needed)

VILLAGE PHASES:
Phase 1: Force Sensitivity Training
Phase 2: Padawan Preparation
Phase 3: Advanced Force Studies
Phase 4: Trial Preparation

IMPORTANT NOTES:
• The unlock process is character-specific
• Some players may need 6+ masteries
• Village access requires Force sensitivity
• Process can take weeks or months

TIPS FOR SUCCESS:
• Keep detailed notes on holocron clues
• Master professions completely before moving on
• Be patient - the process takes time
• Consider multiple character approaches
• Join communities for support and advice

FORCE SENSITIVE INDICATORS:
• Successful holocron interactions
• Unusual meditation experiences
• Enhanced intuition and awareness
• Ability to sense other Force users`
    },
    {
      name: "The Village Phases",
      description: "Complete the four-phase training required for Jedi progression",
      location: "Dathomir - The Village",
      content: `THE VILLAGE TRAINING GUIDE:

OVERVIEW:
Enter the Force-sensitive Village on Dathomir to complete the four-phase training required for Jedi progression.

VILLAGE ACCESS:
• Must be Force-sensitive to enter
• Located on Dathomir in a hidden location
• Protected by Force barriers and illusions
• Only visible to those with Force potential

PHASE 1: FORCE SENSITIVITY
Objectives:
• Learn basic Force meditation techniques
• Understand Force philosophy and ethics
• Complete initial Force sensitivity training
• Pass the Council of First Knowledge tests

Activities:
• Meditation exercises with Force spirits
• Philosophy discussions with Jedi Masters
• Basic Force power demonstrations
• Ethical scenario training

PHASE 2: PADAWAN PREPARATION
Objectives:
• Advanced Force training and control
• Lightsaber construction and basics
• Jedi Code understanding and application
• Pass the Council of Reconciliation tests

Activities:
• Lightsaber crystal selection and attuning
• Basic lightsaber combat forms
• Force power training and refinement
• Jedi history and tradition studies

PHASE 3: ADVANCED FORCE STUDIES
Objectives:
• Master intermediate Force abilities
• Advanced lightsaber combat training
• Leadership and decision-making tests
• Pass the Council of Reassignment tests

Activities:
• Complex Force power combinations
• Advanced lightsaber techniques
• Mission leadership simulations
• Diplomatic and negotiation training

PHASE 4: TRIAL PREPARATION
Objectives:
• Final preparation for Jedi Trials
• Master-level Force ability demonstration
• Complete understanding of Jedi responsibilities
• Pass the High Council evaluation

Activities:
• Master-level Force demonstrations
• Final combat proficiency tests
• Ethical and moral challenge scenarios
• Preparation for real-world Jedi duties

VILLAGE FEATURES:
• Force-sensitive NPCs and trainers
• Ancient Jedi archives and holocrons
• Meditation chambers and training areas
• Lightsaber construction facilities

COMPLETION REQUIREMENTS:
• All four phases must be completed in sequence
• Each phase has specific skill requirements
• Tests become progressively more challenging
• Village access is time-limited per phase`
    },
    {
      name: "Padawan Trials",
      description: "Complete the initial Jedi training trials to progress from Force-sensitive to Padawan",
      location: "Various Jedi Locations",
      content: `PADAWAN TRIALS GUIDE:

OVERVIEW:
Complete the initial Jedi training trials to progress from Force-sensitive to Padawan. Learn the basics of lightsaber combat and Force powers.

TRIAL OF SKILL:
• Demonstrate lightsaber combat proficiency
• Show mastery of basic Force powers
• Complete combat scenarios against multiple opponents
• Pass weapon and Force technique examinations

Requirements:
• Lightsaber Combat skills
• Basic Force powers (Push, Pull, Healing)
• Combat experience with various enemy types
• Demonstration of tactical thinking

TRIAL OF COURAGE:
• Face dangerous situations without fear
• Protect innocent civilians from harm
• Stand against overwhelming odds
• Show bravery in the face of the Dark Side

Requirements:
• Complete dangerous rescue missions
• Face Dark Jedi or Sith opponents
• Protect non-combatants during attacks
• Resist fear and intimidation effects

TRIAL OF FLESH:
• Overcome physical limitations and pain
• Endure hardship and sacrifice
• Show dedication to the Jedi path
• Demonstrate selflessness over personal gain

Requirements:
• Survive challenging physical ordeals
• Make personal sacrifices for the greater good
• Show restraint and self-control
• Put others' needs before your own

TRIAL OF SPIRIT:
• Confront your inner darkness
• Resist temptation to the Dark Side
• Show mental discipline and focus
• Demonstrate emotional control

Requirements:
• Face visions of past failures and fears
• Resist Dark Side temptations
• Show mastery over anger and hatred
• Maintain Jedi principles under pressure

PADAWAN BENEFITS:
• Access to advanced Jedi training
• Increased Force power capacity
• Enhanced lightsaber combat abilities
• Recognition within Jedi communities

TRIAL LOCATIONS:
• Ancient Jedi temples
• Force-strong planets and locations
• Dangerous missions and battlefields
• Meditation chambers and test facilities

PREPARATION TIPS:
• Master basic Force powers first
• Gain combat experience with various enemies
• Study Jedi philosophy and the Code
• Practice meditation and emotional control
• Seek guidance from experienced Jedi`
    },
    {
      name: "Knight Trials",
      description: "Face the ultimate challenges to become a full Jedi Knight",
      location: "Advanced Jedi Locations",
      content: `KNIGHT TRIALS GUIDE:

OVERVIEW:
Face the ultimate challenges to become a full Jedi Knight. Master advanced lightsaber techniques and powerful Force abilities.

ADVANCED TRIAL OF SKILL:
• Master all lightsaber combat forms
• Demonstrate advanced Force techniques
• Lead other Jedi in complex missions
• Show tactical and strategic excellence

Requirements:
• Master-level lightsaber combat
• Advanced Force powers (Lightning, Drain, etc.)
• Leadership in group combat situations
• Tactical planning and execution

TRIAL OF INSIGHT:
• Show deep understanding of the Force
• Demonstrate wisdom in difficult decisions
• Solve complex moral and ethical dilemmas
• Guide others on their Jedi path

Requirements:
• Deep Force connection and understanding
• Wise decision-making in moral scenarios
• Mentoring of younger Jedi
• Resolution of complex conflicts

TRIAL OF LEADERSHIP:
• Lead Jedi teams in dangerous missions
• Make critical decisions under pressure
• Inspire and guide other Force users
• Show responsibility for others' well-being

Requirements:
• Successful mission leadership
• Crisis management abilities
• Team coordination and inspiration
• Responsibility for mission outcomes

FINAL TRIAL OF MASTERY:
• Face the greatest challenges alone
• Demonstrate complete Jedi mastery
• Show readiness for Knighthood
• Prove worthiness to train others

Requirements:
• Solo completion of epic challenges
• Mastery of combat and Force abilities
• Deep understanding of Jedi philosophy
• Readiness to accept full Jedi responsibilities

KNIGHT PRIVILEGES:
• Full Jedi Knight status and recognition
• Ability to train Padawan learners
• Access to restricted Jedi knowledge
• Leadership roles in Jedi operations
• Advanced lightsaber and Force techniques

TRIAL CHALLENGES:
• Ancient Sith temples and artifacts
• Powerful Dark Side opponents
• Complex moral and ethical scenarios
• Tests of wisdom, courage, and skill

MASTERY REQUIREMENTS:
• Complete mastery of chosen lightsaber form
• Advanced Force power specializations
• Deep philosophical understanding
• Proven leadership and teaching abilities

POST-KNIGHT DEVELOPMENT:
• Specialization in specific Jedi disciplines
• Training and mentoring of Padawans
• Leadership in Jedi Council operations
• Advanced missions and responsibilities`
    }
  ];

  const GuideSection = ({ title, guides }: { title: string, guides: Guide[] }) => (
    <div className="mb-12">
      <h4 className="text-xl font-medium text-white mb-6">{title}</h4>
      <div className="space-y-4">
        {guides.map((guide) => (
          <div key={guide.name} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors ${
                expandedGuide === guide.name ? "bg-[rgba(30,40,70,0.6)]" : "bg-[rgba(20,30,60,0.3)] hover:bg-[rgba(25,35,65,0.4)]"
              }`}
              onClick={() => toggleGuide(guide.name)}
            >
              <div>
                <h3 className="text-lg font-medium text-white">{guide.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{guide.description}</p>
                {guide.location && (
                  <p className="text-yellow-400 text-xs font-medium mt-1">Location: {guide.location}</p>
                )}
              </div>
              {expandedGuide === guide.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedGuide === guide.name && (
              <div className="px-6 py-4 bg-[rgba(13,13,30,0.6)]">
                <div className="text-gray-300 whitespace-pre-line font-sans space-y-4">
                  {guide.content.split('\n\n').map((paragraph, index) => (
                    <div key={index}>{paragraph}</div>
                  ))}
                </div>
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
          title="Adventure Guides"
          subtitle="Epic storylines and challenging dungeons across the galaxy"
          showLogo={true}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="section-title mb-6">Adventures Await in Star Wars Galaxies</h1>
              <hr className="border-gray-700 mb-8" />

              <div className="mb-8">
                <p className="text-gray-300 mb-6">
                  From epic theme park adventures to challenging dungeons and the path to becoming a Jedi Knight, 
                  SWG Infinity offers countless adventures across the galaxy. These comprehensive guides will help 
                  you navigate complex storylines, overcome dangerous challenges, and unlock the mysteries of the Force. 
                  Click on any adventure below to reveal detailed walkthroughs and strategies.
                </p>
              </div>

              <GuideSection title="Theme Park Adventures" guides={themeParkGuides} />
              <GuideSection title="Classic Dungeons" guides={dungeonGuides} />
              <GuideSection title="Jedi & Force Content" guides={jediGuides} />

              <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700 mt-8">
                <p className="text-gray-300">
                  These adventures represent some of the most challenging and rewarding content in Star Wars Galaxies. 
                  Many require group coordination, careful preparation, and mastery of your chosen professions. 
                  Don't hesitate to seek help from the community - the journey is often as rewarding as the destination.
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
