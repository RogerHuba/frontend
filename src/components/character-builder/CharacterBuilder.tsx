"use client";

import { useState, useEffect } from "react";
import { getAllProfessions } from "./data/professionConverter.js";

// Type definitions
export interface Species {
  id: string;
  name: string;
  bonuses?: {
    [key: string]: number;
  };
  description?: string;
  homeworld?: string;
  modifiers?: {
    [key: string]: number;
  };
}

export interface SkillBox {
  id: string;
  name: string;
  prerequisites: string[];
  skillPoints: number;
  modifiers?: {
    [key: string]: number;
  };
  commands?: string[];
  certifications?: string[];
  title?: string | null;
  eliteLinks?: string[];
  reverseLinks?: string[];
  experience?: {
    type: string;
    amount: number;
    id: string;
  } | null;
  grants?: {
    modifiers?: {
      [key: string]: number;
    };
    commands?: string[];
    certifications?: string[];
  };
}

export interface SkillTree {
  name: string;
  boxes: SkillBox[];
}

export interface Profession {
  id: string;
  name: string;
  noviceBox: SkillBox;
  masterBox?: SkillBox;
  skillTrees: {
    [key: string]: SkillTree;
  };
  description?: string;
  type?: string;
  prerequisites?: string[];
}

export interface SkillModifier {
  skill: string;
  value: number;
  source: string;
}

export interface Command {
  name: string;
  description: string;
  source: string;
}

export interface Experience {
  type: string;
  amount: number;
  source: string;
}

export interface CharacterTemplate {
  id: string;
  name: string;
  speciesId: string;
  professionId: string;
  selectedSkillBoxes: string[];
  usedSkillPoints: number;
  createdAt: Date;
}

// Comprehensive SWG Species data with authentic stat bonuses
const swgSpecies: Species[] = [
  {
    id: "human",
    name: "Human",
    bonuses: {}, // No bonuses - baseline species
    description: "Versatile and adaptable, humans have no statistical bonuses or penalties.",
    homeworld: "Various"
  },
  {
    id: "twilek",
    name: "Twi'lek", 
    bonuses: { charisma: 5, constitution: -5 },
    description: "Graceful and charismatic, Twi'leks are natural performers and diplomats.",
    homeworld: "Ryloth"
  },
  {
    id: "zabrak",
    name: "Zabrak",
    bonuses: { strength: 5, constitution: 5, health: -10 },
    description: "Hardy and determined, Zabraks are known for their physical prowess.",
    homeworld: "Iridonia"
  },
  {
    id: "wookiee",
    name: "Wookiee",
    bonuses: { strength: 20, constitution: 10, health: 100, quickness: -15, stamina: -50 },
    description: "Powerful and loyal, Wookiees are among the strongest species in the galaxy.",
    homeworld: "Kashyyyk"
  },
  {
    id: "trandoshan",
    name: "Trandoshan",
    bonuses: { strength: 10, constitution: 15, health: 50, quickness: -10, willpower: -10 },
    description: "Tough reptilian warriors with natural regeneration and hunting instincts.",
    homeworld: "Trandosha"
  },
  {
    id: "bothan",
    name: "Bothan",
    bonuses: { agility: 15, stamina: 50, quickness: 5, strength: -10, constitution: -10 },
    description: "Agile and quick, Bothans excel at stealth and information gathering.",
    homeworld: "Bothawui"
  },
  {
    id: "rodian",
    name: "Rodian",
    bonuses: { agility: 10, quickness: 5, stamina: 25, constitution: -5, strength: -5 },
    description: "Agile hunters with excellent reflexes and tracking abilities.",
    homeworld: "Rodia"
  },
  {
    id: "mon_calamari",
    name: "Mon Calamari",
    bonuses: { intelligence: 15, willpower: 10, health: 25, strength: -10, constitution: -5 },
    description: "Intelligent and wise aquatic beings, excellent strategists and engineers.",
    homeworld: "Mon Cala"
  },
  {
    id: "sullustan",
    name: "Sullustan",
    bonuses: { intelligence: 10, willpower: 5, agility: 5, health: 25, strength: -5, constitution: -5 },
    description: "Clever and nimble, Sullustans are natural pilots and technicians.",
    homeworld: "Sullust"
  },
  {
    id: "ithorian",
    name: "Ithorian",
    bonuses: { willpower: 20, constitution: 10, health: 50, agility: -15, quickness: -10 },
    description: "Peaceful and wise 'Hammerheads' with strong connection to nature.",
    homeworld: "Ithor"
  }
];

// SkillTree Component (inline to avoid circular imports)
interface SkillTreeProps {
  profession: Profession;
  selectedSkillBoxes: string[];
  onSelectSkillBox: (id: string) => void;
  onActiveSkillChange: (skillId: string) => void;
  skillPointWarning: boolean;
  skillPoints: number;
  maxSkillPoints: number;
  onResetCharacter: () => void;
  onSpeciesChange: (speciesId: string) => void;
  selectedSpecies: Species;
  species: Species[];
  onProfessionChange: (profession: Profession) => void;
  findProfessionByDisplayName: (displayName: string) => Profession | undefined;
}

function SkillTree({ 
  profession, 
  selectedSkillBoxes, 
  onSelectSkillBox, 
  onActiveSkillChange,
  skillPointWarning,
  skillPoints,
  maxSkillPoints,
  onResetCharacter,
  onSpeciesChange,
  selectedSpecies,
  species,
  onProfessionChange,
  findProfessionByDisplayName
}: SkillTreeProps) {

  const renderSkillBox = (box: SkillBox, treeName?: string, boxIndex?: number, isNoviceOrMaster = false) => {
    const isSelected = selectedSkillBoxes.includes(box.id);
    
    // Check if prerequisites are met
    const prerequisitesMet = box.prerequisites.every((prereq: string) =>
      selectedSkillBoxes.includes(prereq)
    );
    
    // Check if there are enough skill points available for this box
    const remainingSkillPoints = maxSkillPoints - skillPoints;
    const canAffordBox = remainingSkillPoints >= box.skillPoints;

    // Enhanced styling for better visibility and differentiation
    let boxStyle: string;
    if (isSelected) {
      boxStyle = "bg-gradient-to-r from-yellow-600 to-yellow-500 border-2 border-yellow-400 text-black font-bold shadow-lg shadow-yellow-500/50 hover:from-yellow-500 hover:to-yellow-400 hover:border-yellow-300"; // Active - gold gradient with hover
    } else if ((prerequisitesMet || box.prerequisites.length === 0) && canAffordBox) {
      boxStyle = "bg-gradient-to-b from-[#2a2a6a] to-[#1a1a4a] border-2 border-[#4a4a8a] text-white cursor-pointer hover:bg-gradient-to-b hover:from-[#3a3a7a] hover:to-[#2a2a5a] hover:border-[#5a5a9a] font-medium shadow-md"; // Available - enhanced gradient with stronger borders
    } else {
      boxStyle = "bg-gradient-to-b from-[#1a1a3a] to-[#0d0d20] border-2 border-[#2a2a4a] text-gray-400 opacity-70 font-medium hover:from-[#2a2a4a] hover:to-[#1a1a3a] hover:border-[#3a3a5a] hover:opacity-80"; // Not available - darker with hover
    }

    // Simplified name for display
    let displayName = box.name;
    if (treeName && boxIndex !== undefined && !isNoviceOrMaster) {
      const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
      displayName = `${treeName} ${romanNumerals[boxIndex] || `${boxIndex + 1}`}`;
    }

    return (
      <div 
        key={box.id} 
        className={`w-full h-12 p-1 m-0.5 rounded-md flex items-center justify-center transition-all duration-200 ${boxStyle}`}
        onClick={() => {
          // Always allow clicking on any box - let the selection logic handle prerequisites
          onSelectSkillBox(box.id);
        }}
        onMouseEnter={() => onActiveSkillChange(box.id)}
        title={`${box.name} (${box.skillPoints} SP)${
          !prerequisitesMet && box.prerequisites.length > 0 
            ? ' - Prerequisites not met' 
            : !canAffordBox 
              ? ' - Not enough skill points' 
              : ''
        }`}
      >
        <p className="text-sm font-bold text-center leading-tight px-1 drop-shadow-lg">
          {displayName}
        </p>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 relative"
    style={{
      background: 'linear-gradient(to bottom, hsl(230, 73%, 8%), hsl(240, 71%, 19%))'
    }}
    >
      {/* Species Selector */}
      <select
        className="absolute left-1 top-1 bg-[#0d0d30] border border-[#2a2a6a] rounded text-white font-bold text-sm px-2 py-1 z-10"
        value={selectedSpecies.id}
        onChange={(e) => onSpeciesChange(e.target.value)}
      >
        <option value="">Select Species:</option>
        {species.map(s => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      {/* Profession Title */}
      <h2 className="text-white text-center font-bold text-lg uppercase mb-2 pt-8">
        {profession.name}
      </h2>

      {/* Skill Point Warning */}
      {skillPointWarning && (
        <div className="text-red-500 text-center bg-black font-bold text-lg p-2 mb-2">
          NOT ENOUGH SKILLPOINTS
        </div>
      )}

      {/* Skill Points Display */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="text-white font-bold">
          SP: {maxSkillPoints - skillPoints} / {maxSkillPoints}
        </div>
        <button
          onClick={onResetCharacter}
          className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded font-bold text-sm border border-red-500"
        >
          Reset Char
        </button>
      </div>

      {/* Master Box - only show if it has elite links */}
      {profession.masterBox && (
        <div className="flex justify-center mb-4">
          <div className="w-full max-w-xs">
            {/* Master Box Links - only if master unlocks elite professions */}
            {profession.masterBox.eliteLinks && profession.masterBox.eliteLinks.length > 0 && (
              <div className="text-center mb-2">
                <div className="space-y-1">
                  {profession.masterBox.eliteLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const targetProfession = findProfessionByDisplayName(link);
                        if (targetProfession) {
                          onProfessionChange(targetProfession);
                        }
                      }}
                      className="text-yellow-400 text-xs hover:text-yellow-300 cursor-pointer underline hover:no-underline text-left block w-full"
                      title={`Go to ${link}`}
                    >
                      To: {link}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {renderSkillBox(profession.masterBox, undefined, undefined, true)}
          </div>
        </div>
      )}

      {/* Skill Tree Branches */}
      <div className="flex gap-2 mb-4 flex-1 min-h-[200px]">
        {Object.entries(profession.skillTrees).map(([treeKey, tree]) => (
          <div key={treeKey} className="flex-1 flex flex-col justify-end bg-black/20 rounded-lg p-2">
            {/* Skill boxes from top to bottom (IV to I) */}
            <div className="space-y-2">
              {tree.boxes.slice().reverse().map((box, reverseIndex) => {
                const originalIndex = tree.boxes.length - 1 - reverseIndex;
                return (
                  <div key={box.id}>
                    {/* Show elite links above this box if it has any */}
                    {box.eliteLinks && box.eliteLinks.length > 0 && (
                      <div className="text-center mb-1">
                        <div className="space-y-1">
                          {box.eliteLinks.map((link, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                const targetProfession = findProfessionByDisplayName(link);
                                if (targetProfession) {
                                  onProfessionChange(targetProfession);
                                }
                              }}
                              className="text-yellow-400 text-xs hover:text-yellow-300 cursor-pointer underline hover:no-underline text-left block w-full"
                              title={`Go to ${link}`}
                            >
                              To: {link}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {renderSkillBox(box, tree.name, originalIndex)}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Novice Box */}
      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          {renderSkillBox(profession.noviceBox, undefined, undefined, true)}
          {/* Show reverse links for elite professions */}
          {profession.noviceBox.reverseLinks && profession.noviceBox.reverseLinks.length > 0 && (
            <div className="text-center mt-2">
              <div className="space-y-1">
                {profession.noviceBox.reverseLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const targetProfession = findProfessionByDisplayName(link);
                      if (targetProfession) {
                        onProfessionChange(targetProfession);
                      }
                    }}
                    className="text-yellow-400 text-xs hover:text-yellow-300 cursor-pointer underline hover:no-underline block w-full text-center"
                    title={`Go to ${link}`}
                  >
                    To: {link}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CharacterBuilder() {
  // Load professions from CONSTANTS data - now includes ALL professions
  const allProfessions = getAllProfessions();
  const [selectedProfession, setSelectedProfession] = useState<Profession>(allProfessions[0]); // Default to first profession
  
  // Maintain separate selection states for each profession
  const [professionSelections, setProfessionSelections] = useState<{[professionId: string]: string[]}>({});
  
  // Get current profession's selections, defaulting to empty array
  const selectedSkillBoxes = professionSelections[selectedProfession.id] || [];
  
  const [selectedSpecies, setSelectedSpecies] = useState<Species>(swgSpecies[0]);
  const [activeSkill, setActiveSkill] = useState<string>("");
  const [skillPointWarning, setSkillPointWarning] = useState(false);
  const [showSpeciesInfo, setShowSpeciesInfo] = useState(false);

  // Calculate skill points used across ALL professions
  const skillPoints = Object.entries(professionSelections).reduce((total, [professionId, selections]) => {
    // Find the profession for this selection set
    const profession = allProfessions.find((p: Profession) => p.id === professionId);
    if (!profession) return total;
    
    // Get all boxes for this profession
    const allBoxes = [
      profession.noviceBox,
      ...(profession.masterBox ? [profession.masterBox] : []),
      ...Object.values(profession.skillTrees).flatMap(tree => (tree as SkillTree).boxes)
    ];
    
    // Calculate skill points for this profession's selections
    const professionPoints = selections.reduce((profTotal, boxId) => {
      const box = allBoxes.find(b => b.id === boxId);
      return profTotal + (box?.skillPoints || 0);
    }, 0);
    
    return total + professionPoints;
  }, 0);

  const maxSkillPoints = 250;

  // Calculate modifiers, commands, and certifications based on selected skills
  const calculateSkillBenefits = () => {
    const modifiers: {[key: string]: number} = {};
    const commands: string[] = [];
    const certifications: string[] = [];
    const titles: string[] = [];

    // Aggregate benefits from ALL selected skill boxes across ALL professions
    for (const [professionId, selections] of Object.entries(professionSelections)) {
      const profession = allProfessions.find((p: Profession) => p.id === professionId);
      if (!profession) continue;
      
      // Get all boxes for this profession
      const allBoxes = [
        profession.noviceBox,
        ...(profession.masterBox ? [profession.masterBox] : []),
        ...Object.values(profession.skillTrees).flatMap(tree => (tree as SkillTree).boxes)
      ];
      
      // Add benefits from this profession's selected skills
      for (const boxId of selections) {
        const box = allBoxes.find(b => b.id === boxId);
        if (box) {
          // Add modifiers
          if (box.modifiers) {
            for (const [modifier, value] of Object.entries(box.modifiers)) {
              modifiers[modifier] = (modifiers[modifier] || 0) + value;
            }
          }
          
          // Add commands
          if (box.commands) {
            commands.push(...box.commands);
          }
          
          // Add certifications  
          if (box.certifications) {
            certifications.push(...box.certifications);
          }
          
          // Add titles
          if (box.title) {
            titles.push(box.title);
          }
        }
      }
    }

    return {
      modifiers,
      commands: [...new Set(commands)], // Remove duplicates
      certifications: [...new Set(certifications)], // Remove duplicates
      titles: [...new Set(titles)] // Remove duplicates
    };
  };

  const skillBenefits = calculateSkillBenefits();

  // Calculate experience requirements across all selected skills
  const calculateExperienceRequirements = () => {
    const experienceNeeded: {[experienceType: string]: number} = {};
    
    // Check all profession selections across all professions
    for (const [professionId, selections] of Object.entries(professionSelections)) {
      const profession = allProfessions.find((p: Profession) => p.id === professionId);
      if (!profession) continue;
      
      // Get all boxes for this profession
      const allBoxes = [
        profession.noviceBox,
        ...(profession.masterBox ? [profession.masterBox] : []),
        ...Object.values(profession.skillTrees).flatMap(tree => (tree as SkillTree).boxes)
      ];
      
      // Add experience for selected skills
      for (const boxId of selections) {
        const box = allBoxes.find(b => b.id === boxId);
        if (box && box.experience) {
          const expType = box.experience.type;
          experienceNeeded[expType] = (experienceNeeded[expType] || 0) + box.experience.amount;
        }
      }
    }
    
    return experienceNeeded;
  };

  const experienceRequirements = calculateExperienceRequirements();

  // Helper function to find profession by display name
  const findProfessionByDisplayName = (displayName: string): Profession | undefined => {
    return allProfessions.find((prof: Profession) => prof.name === displayName);
  };

  const handleSelectSkillBox = (id: string) => {
    setProfessionSelections(prev => {
      // Get current profession's selections
      const currentSelections = prev[selectedProfession.id] || [];
      
      // Get ALL skill boxes from ALL professions for cross-profession prerequisite lookup
      const getAllSkillBoxes = () => {
        const allSkillBoxes: SkillBox[] = [];
        for (const profession of allProfessions) {
          allSkillBoxes.push(profession.noviceBox);
          if (profession.masterBox) {
            allSkillBoxes.push(profession.masterBox);
          }
          Object.values(profession.skillTrees).forEach(tree => {
            allSkillBoxes.push(...(tree as SkillTree).boxes);
          });
        }
        return allSkillBoxes;
      };
      
      const allSkillBoxes = getAllSkillBoxes();
      
      // Helper function to find all prerequisites recursively (cross-profession)
      const getAllPrerequisites = (boxId: string): string[] => {
        const visited = new Set<string>();
        const prerequisites = new Set<string>();
        
        const traverse = (currentId: string) => {
          if (visited.has(currentId)) return;
          visited.add(currentId);
          
          const box = allSkillBoxes.find(b => b.id === currentId);
          if (!box) return;
          
          // Add all direct prerequisites
          for (const prereq of box.prerequisites) {
            prerequisites.add(prereq);
            traverse(prereq); // Recursively get prerequisites of prerequisites
          }
        };
        
        traverse(boxId);
        return Array.from(prerequisites);
      };
      
      // Helper function to find all dependents (boxes that require this one)
      const getAllDependents = (boxId: string): string[] => {
        const dependents: string[] = [];
        
        const findDependents = (targetId: string) => {
          for (const box of allSkillBoxes) {
            if (box.prerequisites.includes(targetId) && !dependents.includes(box.id)) {
              dependents.push(box.id);
              findDependents(box.id); // Recursively find dependents of dependents
            }
          }
        };
        
        findDependents(boxId);
        return dependents;
      };

      let newSelections: string[];
      
      if (currentSelections.includes(id)) {
        // Deselecting - remove this box and all its dependents from current profession
        const dependents = getAllDependents(id);
        newSelections = currentSelections.filter(boxId => boxId !== id && !dependents.includes(boxId));
        
        // Return updated profession selections for current profession only
        return {
          ...prev,
          [selectedProfession.id]: newSelections
        };
      } else {
        // Selecting - add this box and all required prerequisites across professions
        const prerequisites = getAllPrerequisites(id);
        const allRequiredBoxes = [...prerequisites, id]; // Include the target box
        
        // We need to organize prerequisites by profession
        const prerequisitesByProfession: {[professionId: string]: string[]} = {};
        
        for (const requiredBoxId of allRequiredBoxes) {
          // Find which profession this skill belongs to
          const owningProfession = allProfessions.find((prof: Profession) => {
            return prof.noviceBox.id === requiredBoxId ||
                   prof.masterBox?.id === requiredBoxId ||
                   Object.values(prof.skillTrees).some(tree => 
                     (tree as SkillTree).boxes.some(box => box.id === requiredBoxId)
                   );
          });
          
          if (owningProfession) {
            if (!prerequisitesByProfession[owningProfession.id]) {
              prerequisitesByProfession[owningProfession.id] = [];
            }
            prerequisitesByProfession[owningProfession.id].push(requiredBoxId);
          }
        }
        
        // Check if we can afford all prerequisites across all professions
        let totalCost = 0;
        for (const [profId, skillIds] of Object.entries(prerequisitesByProfession)) {
          const existingSkills = prev[profId] || [];
          for (const skillId of skillIds) {
            if (!existingSkills.includes(skillId)) {
              const box = allSkillBoxes.find((b: SkillBox) => b.id === skillId);
              totalCost += box?.skillPoints || 0;
            }
          }
        }
        
        // Calculate total current skill points across all professions
        let currentTotalPoints = 0;
        for (const [profId, selections] of Object.entries(prev)) {
          const profession = allProfessions.find((p: Profession) => p.id === profId);
          if (profession) {
            const professionBoxes = [
              profession.noviceBox,
              ...(profession.masterBox ? [profession.masterBox] : []),
              ...Object.values(profession.skillTrees).flatMap(tree => (tree as SkillTree).boxes)
            ];
            const professionPoints = selections.reduce((total, boxId) => {
              const box = professionBoxes.find(b => b.id === boxId);
              return total + (box?.skillPoints || 0);
            }, 0);
            currentTotalPoints += professionPoints;
          }
        }
        
        // If we can't afford all prerequisites, don't allow the selection
        if (currentTotalPoints + totalCost > 250) {
          return prev;
        }
        
        // Apply prerequisites to their respective professions
        const updatedSelections = { ...prev };
        for (const [profId, skillIds] of Object.entries(prerequisitesByProfession)) {
          const existingSkills = updatedSelections[profId] || [];
          const newSkills = [...existingSkills];
          
          for (const skillId of skillIds) {
            if (!newSkills.includes(skillId)) {
              newSkills.push(skillId);
            }
          }
          
          updatedSelections[profId] = newSkills;
        }
        
        return updatedSelections;
      }
    });
  };

  const handleActiveSkillChange = (skillId: string) => {
    setActiveSkill(skillId);
  };

  const handleResetCharacter = () => {
    setProfessionSelections({}); // Clear all profession selections
    setSkillPointWarning(false);
  };

  const handleSpeciesChange = (speciesId: string) => {
    const species = swgSpecies.find((s: Species) => s.id === speciesId);
    if (species) {
      setSelectedSpecies(species);
    }
  };

  // Check for skill point warning
  useEffect(() => {
    setSkillPointWarning(skillPoints > maxSkillPoints);
  }, [skillPoints, maxSkillPoints]);

  return (
    <div className="w-full min-h-[calc(100vh-150px)] flex flex-col p-4"
    style={{
      background: 'linear-gradient(to bottom, hsl(230, 73%, 8%), hsl(240, 71%, 19%))'
    }}
    >
      {/* Main Content - Three Column Layout */}
      <div className="flex flex-col lg:flex-row gap-4 h-[70vh]">
        {/* Left Sidebar - Professions, Experience, Modifiers */}
        <div className="w-full lg:w-1/5 flex flex-col gap-3 h-full">
          {/* Profession List */}
          <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
            <h3 className="text-white font-bold text-sm mb-2">Professions</h3>
            <div className="space-y-1">
              {allProfessions.map((profession: Profession, index: number) => {
                // Define category boundaries based on the ordered profession list
                const isFirstElite = index === 7; // After Scout (index 6)
                const isFirstForceSensitive = index === 33; // After Weaponsmith
                const isFirstJedi = index === 37; // After Heightened Senses
                
                const shouldShowSeparator = isFirstElite || isFirstForceSensitive || isFirstJedi;
                let categoryLabel = "";
                
                if (isFirstElite) categoryLabel = "Elite Professions";
                else if (isFirstForceSensitive) categoryLabel = "Force Sensitive Powers";
                else if (isFirstJedi) categoryLabel = "Jedi Skills";
                
                return (
                  <div key={profession.id}>
                    {/* Category Separator */}
                    {shouldShowSeparator && (
                      <div className="my-3 pt-2">
                        <div className="border-t border-[#2a2a6a] mb-2"></div>
                        <p className="text-yellow-400 font-bold text-xs uppercase tracking-wide text-center mb-2">
                          {categoryLabel}
                        </p>
                      </div>
                    )}
                    
                    {/* Profession Button */}
                    <button
                      onClick={() => {
                        setSelectedProfession(profession);
                        setSkillPointWarning(false);
                      }}
                      className={`w-full text-left px-2 py-1 rounded text-xs font-medium transition-colors ${
                        selectedProfession.id === profession.id
                          ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black border border-yellow-400'
                          : 'bg-[#0d0d30] text-white hover:bg-[#2a2a6a] border border-[#1a1a4a]'
                      }`}
                    >
                      {profession.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Tracker */}
          <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
            <h3 className="text-white font-bold text-sm mb-2">Experience</h3>
            <div className="space-y-1 text-xs">
              {Object.keys(experienceRequirements).length > 0 ? (
                Object.entries(experienceRequirements).map(([expType, amount]) => (
                  <div key={expType} className="text-white flex justify-between">
                    <span className="text-xs">{expType}:</span>
                    <span className="text-yellow-300 font-medium">{amount.toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <p className="text-white text-xs">No experience required</p>
              )}
            </div>
          </div>

          {/* Species Modifiers */}
          <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-bold text-sm">Modifiers</h3>
              <button
                onClick={() => setShowSpeciesInfo(!showSpeciesInfo)}
                className="text-yellow-400 hover:text-yellow-300 text-xs underline"
              >
                Info
              </button>
            </div>
            <div className="space-y-1 text-xs">
              {selectedSpecies && (
                <div className="mb-2">
                  <p className="text-yellow-400 font-bold mb-1 text-xs">{selectedSpecies.name}</p>
                  <p className="text-gray-300 text-xs mb-1 italic leading-tight">{selectedSpecies.description}</p>
                  {selectedSpecies.homeworld && (
                    <p className="text-gray-400 text-xs mb-1">Home: {selectedSpecies.homeworld}</p>
                  )}
                  {selectedSpecies.bonuses && Object.keys(selectedSpecies.bonuses).length > 0 ? (
                    <div className="space-y-1">
                      {Object.entries(selectedSpecies.bonuses).map(([attr, value]) => (
                        <div key={attr} className="text-white flex justify-between text-xs">
                          <span className="capitalize">{attr.replace(/_/g, ' ')}:</span>
                          <span className={`font-medium ${value > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {value > 0 ? '+' : ''}{value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-xs">No stat modifiers</p>
                  )}
                </div>
              )}
              {Object.keys(skillBenefits.modifiers).length > 0 ? (
                Object.entries(skillBenefits.modifiers).map(([modifier, value]) => (
                  <div key={modifier} className="text-white flex justify-between">
                    <span>{modifier}:</span>
                    <span className="text-yellow-300">+{value}</span>
                  </div>
                ))
              ) : (
                <p className="text-white text-sm">No skill modifiers</p>
              )}
            </div>
          </div>
        </div>

        {/* Center - Skill Tree */}
        <div className="flex-1 h-full">
          <SkillTree
            profession={selectedProfession}
            selectedSkillBoxes={selectedSkillBoxes}
            onSelectSkillBox={handleSelectSkillBox}
            onActiveSkillChange={handleActiveSkillChange}
            skillPointWarning={skillPointWarning}
            skillPoints={skillPoints}
            maxSkillPoints={maxSkillPoints}
            onResetCharacter={handleResetCharacter}
            onSpeciesChange={handleSpeciesChange}
            selectedSpecies={selectedSpecies}
            species={swgSpecies}
            onProfessionChange={setSelectedProfession}
            findProfessionByDisplayName={findProfessionByDisplayName}
          />
        </div>

        {/* Right Sidebar - Commands, Certifications, Titles */}
        <div className="w-full lg:w-1/5 flex flex-col gap-3 h-full">
          {/* Commands */}
          <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
            <h3 className="text-white font-bold text-sm mb-2">Commands</h3>
            <div className="space-y-1 text-xs">
              {skillBenefits.commands.length > 0 ? (
                skillBenefits.commands.map((command, index) => (
                  <div key={index} className="text-white">
                    {command}
                  </div>
                ))
              ) : (
                <p className="text-white text-xs">No commands</p>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
            <h3 className="text-white font-bold text-sm mb-2">Certifications</h3>
            <div className="space-y-1 text-xs">
              {skillBenefits.certifications.length > 0 ? (
                skillBenefits.certifications.map((cert, index) => (
                  <div key={index} className="text-white">
                    {cert}
                  </div>
                ))
              ) : (
                <p className="text-white text-xs">No certifications</p>
              )}
            </div>
          </div>

          {/* Titles */}
          <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 flex flex-col">
            <h3 className="text-white font-bold text-sm mb-2">Titles</h3>
            <div className="space-y-1 text-xs overflow-y-auto flex-1">
              {skillBenefits.titles.length > 0 ? (
                skillBenefits.titles.map((title, index) => (
                  <div
                    key={index}
                    className="text-white bg-[#2a2a6a] px-2 py-1 rounded border border-[#3a3a7a]"
                  >
                    {title}
                  </div>
                ))
              ) : (
                <p className="text-white text-xs">No titles</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Hover Detail Boxes */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 h-48">
        {/* Skill Modifiers Box */}
        <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
          <h3 className="text-white font-bold text-sm mb-2">Skill Modifiers</h3>
          <div className="space-y-1 text-xs">
            {activeSkill ? (
              (() => {
                // Find the active skill box details
                const allBoxes = [
                  selectedProfession.noviceBox,
                  ...(selectedProfession.masterBox ? [selectedProfession.masterBox] : []),
                  ...Object.values(selectedProfession.skillTrees).flatMap(tree => tree.boxes)
                ];
                const activeBox = allBoxes.find(box => box.id === activeSkill);
                
                if (activeBox && activeBox.modifiers && Object.keys(activeBox.modifiers).length > 0) {
                  return Object.entries(activeBox.modifiers).map(([modifier, value]) => (
                    <div key={modifier} className="text-white flex justify-between">
                      <span className="capitalize">{modifier.replace(/_/g, ' ')}:</span>
                      <span className="text-yellow-300">+{value}</span>
                    </div>
                  ));
                } else {
                  return <p className="text-gray-400 text-xs">No modifiers for this skill</p>;
                }
              })()
            ) : (
              <p className="text-gray-400 text-xs">Hover over a skill to see modifiers</p>
            )}
          </div>
        </div>

        {/* Commands/Certifications Box */}
        <div className="flex-1 bg-[#1a1a4a] border border-[#2a2a6a] rounded-2xl p-2 overflow-y-auto">
          <h3 className="text-white font-bold text-sm mb-2">Commands & Certifications</h3>
          <div className="space-y-1 text-xs">
            {activeSkill ? (
              (() => {
                // Find the active skill box details
                const allBoxes = [
                  selectedProfession.noviceBox,
                  ...(selectedProfession.masterBox ? [selectedProfession.masterBox] : []),
                  ...Object.values(selectedProfession.skillTrees).flatMap(tree => tree.boxes)
                ];
                const activeBox = allBoxes.find(box => box.id === activeSkill);
                
                if (activeBox) {
                  const hasCommands = activeBox.commands && activeBox.commands.length > 0;
                  const hasCertifications = activeBox.certifications && activeBox.certifications.length > 0;
                  
                  if (hasCommands || hasCertifications) {
                    return (
                      <div className="space-y-2">
                        {hasCommands && (
                          <div>
                            <p className="text-yellow-400 font-bold text-xs mb-1">Commands:</p>
                            {activeBox.commands!.map((command, index) => (
                              <p key={index} className="text-white text-xs">• {command}</p>
                            ))}
                          </div>
                        )}
                        {hasCertifications && (
                          <div>
                            <p className="text-yellow-400 font-bold text-xs mb-1">Certifications:</p>
                            {activeBox.certifications!.map((cert, index) => (
                              <p key={index} className="text-white text-xs">• {cert}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return <p className="text-gray-400 text-xs">No commands or certifications for this skill</p>;
                  }
                } else {
                  return <p className="text-gray-400 text-xs">No skill data available</p>;
                }
              })()
            ) : (
              <p className="text-gray-400 text-xs">Hover over a skill to see commands & certifications</p>
            )}
          </div>
        </div>
      </div>

      {/* Species Information Modal */}
      {showSpeciesInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a4a] border border-[#2a2a6a] rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white font-bold text-xl">Species Comparison</h2>
                <button
                  onClick={() => setShowSpeciesInfo(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {swgSpecies.map((species) => (
                  <div
                    key={species.id}
                    className={`bg-[#0d0d30] border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedSpecies.id === species.id
                        ? 'border-yellow-400 bg-yellow-900/20'
                        : 'border-[#2a2a6a] hover:border-[#4a4a8a]'
                    }`}
                    onClick={() => {
                      setSelectedSpecies(species);
                      setShowSpeciesInfo(false);
                    }}
                  >
                    <h3 className="text-yellow-400 font-bold text-lg mb-2">{species.name}</h3>
                    <p className="text-gray-300 text-sm mb-3 italic">{species.description}</p>
                    {species.homeworld && (
                      <p className="text-gray-400 text-xs mb-3">Homeworld: {species.homeworld}</p>
                    )}
                    
                    {species.bonuses && Object.keys(species.bonuses).length > 0 ? (
                      <div className="space-y-2">
                        <p className="text-white font-medium text-sm">Stat Modifiers:</p>
                        {Object.entries(species.bonuses).map(([attr, value]) => (
                          <div key={attr} className="flex justify-between text-sm">
                            <span className="text-gray-300 capitalize">{attr.replace(/_/g, ' ')}:</span>
                            <span className={`font-medium ${value > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {value > 0 ? '+' : ''}{value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm">No stat modifiers - versatile baseline species</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[#0d0d30] rounded-lg">
                <h3 className="text-yellow-400 font-bold mb-2">Species Selection Tips:</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• <span className="text-green-400">Positive bonuses</span> improve that attribute</li>
                  <li>• <span className="text-red-400">Negative penalties</span> reduce that attribute</li>
                  <li>• Consider your profession choice when selecting species</li>
                  <li>• Humans are versatile with no bonuses or penalties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
