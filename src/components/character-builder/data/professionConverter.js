import { ALL_PROFESSIONS, SKILLS, EXPERIENCE_TITLES } from './CONSTANTS.js';

// Helper function to get prerequisites based on novice_links
function getNovicelinkPrerequisites(noviceLinks, targetProfessionKey) {
  if (!noviceLinks || noviceLinks.length === 0 || noviceLinks[0] === "") {
    return []; // Basic professions have no prerequisites
  }

  // Specific mappings for elite profession requirements
  const elitePrerequisites = {
    // Combat elite professions
    'combat_rifleman': ['combat_marksman_rifle_04'],
    'combat_pistol': ['combat_marksman_pistol_04'],
    'combat_carbine': ['combat_marksman_carbine_04'],
    'combat_unarmed': ['combat_brawler_unarmed_04'],
    'combat_1hsword': ['combat_brawler_1handmelee_04'],
    'combat_2hsword': ['combat_brawler_2handmelee_04'],
    'combat_polearm': ['combat_brawler_polearm_04'],
    'combat_smuggler': ['combat_marksman_pistol_04', 'combat_brawler_unarmed_04'], // Requires both
    'combat_bountyhunter': ['combat_marksman_master'],
    'combat_commando': ['combat_marksman_master', 'combat_brawler_unarmed_04'], // Requires both
    
    // Social elite professions
    'social_dancer': ['social_entertainer_dance_04'],
    'social_musician': ['social_entertainer_music_04'],
    'social_imagedesigner': ['social_entertainer_hairstyle_04'],
    
    // Science elite professions
    'science_doctor': ['science_medic_master'],
    'science_combatmedic': ['science_medic_crafting_04', 'combat_marksman_support_04'], // Requires both
    
    // Outdoors elite professions
    'outdoors_ranger': ['outdoors_scout_master'],
    'outdoors_creaturehandler': ['outdoors_scout_harvest_04'],
    'outdoors_bio_engineer': ['outdoors_scout_harvest_04', 'science_medic_crafting_04'], // Requires both
    'outdoors_squadleader': ['outdoors_scout_camp_04', 'combat_marksman_support_04'], // Requires both
    
    // Crafting elite professions
    'crafting_armorsmith': ['crafting_artisan_engineering_04'],
    'crafting_weaponsmith': ['crafting_artisan_engineering_04'],
    'crafting_architect': ['crafting_artisan_engineering_04'],
    'crafting_droidengineer': ['crafting_artisan_engineering_04'],
    'crafting_chef': ['crafting_artisan_domestic_04'],
    'crafting_tailor': ['crafting_artisan_domestic_04'],
    'crafting_merchant': ['crafting_artisan_business_04'],
  };

  return elitePrerequisites[targetProfessionKey] || [];
}

// Helper function to convert elite profession keys to display names
function getEliteLinks(links) {
  if (!links || links.length === 0) {
    return [];
  }

  const professionNames = {
    'combat_rifleman': 'Rifleman',
    'combat_pistol': 'Pistoleer', 
    'combat_carbine': 'Carbineer',
    'combat_unarmed': 'Teras Kasi Artist',
    'combat_1hsword': 'Fencer',
    'combat_2hsword': 'Swordsman',
    'combat_polearm': 'Pikeman',
    'social_dancer': 'Dancer',
    'social_musician': 'Musician',
    'science_doctor': 'Doctor',
    'outdoors_ranger': 'Ranger',
    'outdoors_creaturehandler': 'Bio-Engineer',
    'outdoors_bio_engineer': 'Bio-Engineer',
    'crafting_armorsmith': 'Armorsmith',
    'crafting_weaponsmith': 'Weaponsmith',
    'crafting_chef': 'Chef',
    'crafting_tailor': 'Tailor',
    'crafting_architect': 'Architect',
    'crafting_droidengineer': 'Droid Engineer',
    'crafting_merchant': 'Merchant',
    'combat_smuggler': 'Smuggler',
    'combat_bountyhunter': 'Bounty Hunter',
    'combat_commando': 'Commando',
    'science_combatmedic': 'Combat Medic',
    'social_imagedesigner': 'Image Designer',
    'outdoors_squadleader': 'Squad Leader'
  };

  return links.map(link => professionNames[link] || link).filter(Boolean);
}

// Get reverse links for elite professions to show their prerequisite basic professions
function getReverseLinks(professionKey) {
  // Mapping of elite professions to their basic profession prerequisites
  const reverseLinks = {
    // Combat elite professions
    'combat_rifleman': ['Marksman'],
    'combat_pistol': ['Marksman'], 
    'combat_carbine': ['Marksman'],
    'combat_unarmed': ['Brawler'],
    'combat_1hsword': ['Brawler'],
    'combat_2hsword': ['Brawler'],
    'combat_polearm': ['Brawler'],
    'combat_smuggler': ['Marksman', 'Brawler'],
    'combat_bountyhunter': ['Marksman'],
    'combat_commando': ['Marksman', 'Brawler'],
    
    // Social elite professions
    'social_dancer': ['Entertainer'],
    'social_musician': ['Entertainer'],
    'social_imagedesigner': ['Entertainer'],
    
    // Science elite professions
    'science_doctor': ['Medic'],
    'science_combatmedic': ['Medic', 'Marksman'],
    
    // Outdoors elite professions
    'outdoors_ranger': ['Scout'],
    'outdoors_creaturehandler': ['Scout'],
    'outdoors_bio_engineer': ['Scout', 'Medic'],
    'outdoors_squadleader': ['Scout', 'Marksman'],
    
    // Crafting elite professions
    'crafting_armorsmith': ['Artisan'],
    'crafting_weaponsmith': ['Artisan'],
    'crafting_architect': ['Artisan'],
    'crafting_droidengineer': ['Artisan'],
    'crafting_chef': ['Artisan'],
    'crafting_tailor': ['Artisan'],
    'crafting_merchant': ['Artisan'],
  };

  return reverseLinks[professionKey] || [];
}

// Get skill points for novice box based on profession type
function getNoviceSkillPoints(professionKey) {
  // Force Sensitive professions are 0 points
  if (professionKey.startsWith('force_sensitive_')) {
    return 0;
  }
  
  // Politician and Merchant are 0 points
  if (professionKey === 'social_politician' || professionKey === 'crafting_merchant') {
    return 0;
  }
  
  // Elite professions (combat, social, science, outdoors, crafting elites) are 6 points
  const eliteProfessions = [
    'combat_rifleman', 'combat_pistol', 'combat_carbine', 'combat_unarmed',
    'combat_1hsword', 'combat_2hsword', 'combat_polearm', 'combat_smuggler',
    'combat_bountyhunter', 'combat_commando', 'social_dancer', 'social_musician',
    'social_imagedesigner', 'science_doctor', 'science_combatmedic',
    'outdoors_ranger', 'outdoors_creaturehandler', 'outdoors_bio_engineer',
    'outdoors_squadleader', 'crafting_armorsmith', 'crafting_weaponsmith',
    'crafting_architect', 'crafting_droidengineer', 'crafting_chef', 'crafting_tailor'
  ];
  
  if (eliteProfessions.includes(professionKey)) {
    return 6;
  }
  
  // Jedi professions have 8 points
  if (professionKey.startsWith('force_discipline_')) {
    return 8;
  }
  
  // Basic professions are 15 points
  return 15;
}

// Get skill points for master box based on profession type
function getMasterSkillPoints(professionKey) {
  // Force Sensitive professions are 0 points
  if (professionKey.startsWith('force_sensitive_')) {
    return 0;
  }
  
  // Politician and Merchant are 0 points
  if (professionKey === 'social_politician' || professionKey === 'crafting_merchant') {
    return 0;
  }
  
  // All other professions (basic, elite, and Jedi) have 1 point for master
  return 1;
}

// Get skill points for branch skills based on profession type and skill index
function getBranchSkillPoints(professionKey, skillIndex) {
  // Force Sensitive professions are 0 points
  if (professionKey.startsWith('force_sensitive_')) {
    return 0;
  }
  
  // Politician and Merchant are 0 points
  if (professionKey === 'social_politician' || professionKey === 'crafting_merchant') {
    return 0;
  }
  
  // Elite professions: 5, 4, 3, 2 points (for indices 0, 1, 2, 3)
  const eliteProfessions = [
    'combat_rifleman', 'combat_pistol', 'combat_carbine', 'combat_unarmed',
    'combat_1hsword', 'combat_2hsword', 'combat_polearm', 'combat_smuggler',
    'combat_bountyhunter', 'combat_commando', 'social_dancer', 'social_musician',
    'social_imagedesigner', 'science_doctor', 'science_combatmedic',
    'outdoors_ranger', 'outdoors_creaturehandler', 'outdoors_bio_engineer',
    'outdoors_squadleader', 'crafting_armorsmith', 'crafting_weaponsmith',
    'crafting_architect', 'crafting_droidengineer', 'crafting_chef', 'crafting_tailor'
  ];
  
  if (eliteProfessions.includes(professionKey)) {
    return [5, 4, 3, 2][skillIndex] || 2;
  }
  
  // Jedi professions: 8, 6, 4, 2 points (for indices 0, 1, 2, 3)
  if (professionKey.startsWith('force_discipline_')) {
    return [8, 6, 4, 2][skillIndex] || 2;
  }
  
  // Basic professions: 2, 3, 4, 5 points (for indices 0, 1, 2, 3)
  return skillIndex + 2;
}

// Convert CONSTANTS.js profession data to our CharacterBuilder format
export function convertProfessionData(professionKey, professionData) {
  // Map profession key to display name
  const professionNames = {
    'combat_brawler': 'Brawler',
    'combat_marksman': 'Marksman', 
    'science_medic': 'Medic',
    'outdoors_scout': 'Scout',
    'crafting_artisan': 'Artisan',
    'social_entertainer': 'Entertainer',
    'social_politician': 'Politician',
    // Elite professions
    'combat_rifleman': 'Rifleman',
    'combat_pistol': 'Pistoleer',
    'combat_carbine': 'Carbineer',
    'combat_unarmed': 'Teras Kasi Artist',
    'combat_1hsword': 'Fencer',
    'combat_2hsword': 'Swordsman',
    'combat_polearm': 'Pikeman',
    'social_dancer': 'Dancer',
    'social_musician': 'Musician',
    'science_doctor': 'Doctor',
    'outdoors_ranger': 'Ranger',
    'outdoors_creaturehandler': 'Creature Handler',
    'outdoors_bio_engineer': 'Bio-Engineer',
    'crafting_armorsmith': 'Armorsmith',
    'crafting_weaponsmith': 'Weaponsmith',
    'crafting_chef': 'Chef',
    'crafting_tailor': 'Tailor',
    'crafting_architect': 'Architect',
    'crafting_droidengineer': 'Droid Engineer',
    'crafting_merchant': 'Merchant',
    'combat_smuggler': 'Smuggler',
    'combat_bountyhunter': 'Bounty Hunter',
    'combat_commando': 'Commando',
    'science_combatmedic': 'Combat Medic',
    'social_imagedesigner': 'Image Designer',
    'outdoors_squadleader': 'Squad Leader',
    // Force Sensitive
    'force_sensitive_combat_prowess': 'Combat Prowess',
    'force_sensitive_enhanced_reflexes': 'Enhanced Reflexes',
    'force_sensitive_crafting_mastery': 'Crafting Mastery',
    'force_sensitive_heightened_senses': 'Heightened Senses',
    // Jedi
    'force_discipline_light_saber': 'Lightsaber',
    'force_discipline_powers': 'Powers',
    'force_discipline_healing': 'Healing',
    'force_discipline_enhancements': 'Enhancements',
    'force_discipline_defender': 'Defender'
  };

  // Map branch names to display names
  const branchNames = {
    'branch_1': getBranchName(professionKey, 1),
    'branch_2': getBranchName(professionKey, 2),
    'branch_3': getBranchName(professionKey, 3),
    'branch_4': getBranchName(professionKey, 4)
  };

  // Get skill benefits for novice box
  const noviceBenefits = getSkillBenefits(professionData.novice);

  const converted = {
    id: professionKey,
    name: professionNames[professionKey] || professionKey,
    noviceBox: {
      id: professionData.novice,
      name: `Novice ${professionNames[professionKey] || professionKey}`,
      prerequisites: getNovicelinkPrerequisites(professionData.novice_links, professionKey),
      skillPoints: getNoviceSkillPoints(professionKey), // Use helper function for novice skill points
      modifiers: {},
      commands: noviceBenefits.commands,
      certifications: noviceBenefits.certifications,
      title: noviceBenefits.title,
      reverseLinks: getReverseLinks(professionKey), // Add reverse links for elite professions
      experience: getExperienceRequirements(professionData.novice)
    },
    skillTrees: {},
    masterBox: professionData.master ? (() => {
      const masterBenefits = getSkillBenefits(professionData.master);
      return {
        id: professionData.master,
        name: `Master ${professionNames[professionKey] || professionKey}`,
        prerequisites: [], // Will be filled based on branch_4 skills
        skillPoints: getMasterSkillPoints(professionKey), // Use helper function for master skill points
        modifiers: {},
        commands: masterBenefits.commands,
        certifications: masterBenefits.certifications,
        title: masterBenefits.title,
        experience: getExperienceRequirements(professionData.master)
      };
    })() : undefined
  };

  // Convert branches to skill trees
  for (let i = 1; i <= 4; i++) {
    const branchKey = `branch_${i}`;
    const branch = professionData[branchKey];
    
    if (branch && branch.skills) {
      const treeName = branchNames[branchKey];
      
      // Fix missing Merchant link in Artisan Business branch
      let branchLinks = branch.links || [];
      if (professionKey === 'crafting_artisan' && branchKey === 'branch_3') {
        branchLinks = [...branchLinks, 'crafting_merchant']; // Add missing Merchant link
      }
      
      converted.skillTrees[branchKey] = {
        name: treeName,
        boxes: branch.skills.map((skillId, index) => {
          const skillBenefits = getSkillBenefits(skillId);
          return {
            id: skillId,
            name: `${treeName} ${['I', 'II', 'III', 'IV'][index]}`,
            prerequisites: index === 0 ? [professionData.novice] : [branch.skills[index - 1]],
            skillPoints: getBranchSkillPoints(professionKey, index), // Use helper function for branch skill points
            modifiers: {},
            commands: skillBenefits.commands,
            certifications: skillBenefits.certifications,
            title: skillBenefits.title,
            // Add elite profession links for the 4th skill (index 3)
            eliteLinks: index === 3 ? getEliteLinks(branchLinks) : [],
            experience: getExperienceRequirements(skillId)
          };
        })
      };
    }
  }

  // Set master box prerequisites to all branch_4 skills
  if (converted.masterBox) {
    const masterPrereqs = [];
    for (let i = 1; i <= 4; i++) {
      const branch = professionData[`branch_${i}`];
      if (branch && branch.skills && branch.skills.length > 0) {
        masterPrereqs.push(branch.skills[branch.skills.length - 1]); // Last skill in branch
      }
    }
    converted.masterBox.prerequisites = masterPrereqs;
    // Add master links
    converted.masterBox.eliteLinks = getEliteLinks(professionData.master_links);
  }

  return converted;
}

function getBranchName(professionKey, branchNumber) {
  // Map profession + branch to skill tree names
  const branchMappings = {
    // Basic professions
    'combat_brawler': ['Unarmed', 'One Handed', 'Two Handed', 'Polearm'],
    'combat_marksman': ['Rifle', 'Pistol', 'Carbine', 'Support'],
    'science_medic': ['Injury', 'Injury Speed', 'Ability', 'Crafting'],
    'outdoors_scout': ['Movement', 'Tools', 'Harvest', 'Camp'],
    'crafting_artisan': ['Engineering', 'Domestic', 'Business', 'Survey'],
    'social_entertainer': ['Hairstyle', 'Music', 'Dance', 'Healing'],
    'social_politician': ['Fiscal Policy', 'Planetary Development', 'Bureaucracy', 'Civic'],
    
    // Elite professions
    'combat_rifleman': ['Accuracy', 'Speed', 'Support', 'Master'],
    'combat_pistol': ['Speed', 'Accuracy', 'Support', 'Master'],
    'combat_carbine': ['Accuracy', 'Speed', 'Support', 'Master'],
    'combat_unarmed': ['Body Shot', 'Center of Being', 'Harmony', 'Master'],
    'combat_1hsword': ['One Handed Sword', 'Duelist', 'Master', 'Lightening'],
    'combat_2hsword': ['Two Handed Sword', 'Heavy Weapons', 'Master', 'Execution'],
    'combat_polearm': ['Polearm', 'Lightening Strike', 'Master', 'Area Attack'],
    'social_dancer': ['Popular', 'Formal', 'Exotic', 'Master'],
    'social_musician': ['Wind', 'Percussion', 'Stringed', 'Master'],
    'science_doctor': ['Organic Chemistry', 'Anatomy', 'Pathology', 'Master'],
    'outdoors_ranger': ['Tracking', 'Hunting', 'Scouting', 'Master'],
    'outdoors_creaturehandler': ['Taming', 'Training', 'Management', 'Master'],
    'outdoors_bio_engineer': ['DNA Sampling', 'Creature Knowledge', 'Genetic Engineering', 'Master'],
    'crafting_armorsmith': ['Personal Armor', 'Reconnaissance Armor', 'Battle Armor', 'Master'],
    'crafting_weaponsmith': ['Projectile Weapons', 'Heavy Weapons', 'Munitions', 'Master'],
    'crafting_chef': ['Nutrition', 'Preparation', 'Design', 'Master'],
    'crafting_tailor': ['Casual Wear', 'Field Wear', 'Formal Wear', 'Master'],
    'crafting_architect': ['Surveying', 'Residential', 'Commercial', 'Master'],
    'crafting_droidengineer': ['Production', 'Maintenance', 'Advanced', 'Master'],
    'crafting_merchant': ['Domestic Goods', 'Capital', 'Advertising', 'Master'],
    'combat_smuggler': ['Underworld', 'Spice', 'Slicing', 'Master'],
    'combat_bountyhunter': ['Investigation', 'Acquisition', 'Target', 'Master'],
    'combat_commando': ['Assault', 'Support', 'Advanced', 'Master'],
    'science_combatmedic': ['Healing', 'Support', 'Advanced', 'Master'],
    'social_imagedesigner': ['Holoemote', 'Cosmetics', 'Styling', 'Master'],
    'outdoors_squadleader': ['Leadership', 'Tactics', 'Formation', 'Master'],
    
    // Force Sensitive
    'force_sensitive_combat_prowess': ['Enhanced', 'Accuracy', 'Force', 'Master'],
    'force_sensitive_enhanced_reflexes': ['Reflexes', 'Coordination', 'Prowess', 'Master'],
    'force_sensitive_crafting_mastery': ['Assembly', 'Experimentation', 'Technique', 'Master'],
    'force_sensitive_heightened_senses': ['Awareness', 'Powersensing', 'Danger Sense', 'Master'],
    
    // Jedi Disciplines
    'force_discipline_light_saber': ['Basics', 'Single Saber', 'Dual Wield', 'Master'],
    'force_discipline_powers': ['Basics', 'Adept', 'Manipulation', 'Master'],
    'force_discipline_healing': ['Basics', 'Self Healing', 'Healing Others', 'Master'],
    'force_discipline_enhancements': ['Basics', 'Inner Strength', 'Clarity', 'Master'],
    'force_discipline_defender': ['Basics', 'Heightened Senses', 'Attuned Defense', 'Master']
  };

  const branches = branchMappings[professionKey];
  if (branches && branches[branchNumber - 1]) {
    return branches[branchNumber - 1];
  }

  // Default branch names
  return `Branch ${branchNumber}`;
}

// Helper function to get experience requirements for a skill
function getExperienceRequirements(skillId) {
  const skillData = SKILLS[skillId];
  if (!skillData || !skillData.xp) {
    return null;
  }
  
  const { id: expId, cost } = skillData.xp;
  if (!expId || cost === 0) {
    return null;
  }
  
  const experienceType = EXPERIENCE_TITLES[expId];
  if (!experienceType) {
    return null;
  }
  
  return {
    type: experienceType,
    amount: cost,
    id: expId
  };
}

// Helper function to get skill benefits (commands, certifications, titles) for a skill
function getSkillBenefits(skillId) {
  const skillData = SKILLS[skillId];
  if (!skillData) {
    return {
      commands: [],
      certifications: [],
      title: null
    };
  }
  
  // Extract commands from the skill data, filtering out only internal identifiers
  const allCommands = skillData.commands || [];
  const commands = allCommands.filter(command => {
    // Filter out only internal private identifiers - keep actual user commands
    return !command.startsWith('private_');
  });
  
  // Extract certifications from schematics, filtering out internal group identifiers
  const allSchematics = skillData.schematics || [];
  const certifications = allSchematics.filter(schematic => {
    // Filter out placeholders and internal group identifiers
    return schematic !== "_" && 
           !schematic.includes('Group') &&
           !schematic.includes('Newbie');
  });
  
  // Extract title
  const title = skillData.title && skillData.title.trim() !== "" ? skillData.title : null;
  
  return {
    commands,
    certifications,
    title
  };
}

// Get all available professions in organized order
export function getAllProfessions() {
  // Ordered profession keys according to user specification
  const orderedKeys = [
    // Basic starter professions (alphabetical)
    'crafting_artisan',      // Artisan
    'combat_brawler',        // Brawler
    'social_entertainer',    // Entertainer
    'combat_marksman',       // Marksman
    'science_medic',         // Medic
    'social_politician',     // Politician
    'outdoors_scout',        // Scout
    
    // Elite professions (alphabetical)
    'crafting_architect',    // Architect
    'crafting_armorsmith',   // Armorsmith
    'outdoors_bio_engineer', // Bio-Engineer
    'combat_bountyhunter',   // Bounty Hunter
    'combat_carbine',        // Carbineer
    'crafting_chef',         // Chef
    'science_combatmedic',   // Combat Medic
    'combat_commando',       // Commando
    'outdoors_creaturehandler', // Creature Handler
    'social_dancer',         // Dancer
    'science_doctor',        // Doctor
    'crafting_droidengineer', // Droid Engineer
    'combat_1hsword',        // Fencer
    'social_imagedesigner',  // Image Designer
    'crafting_merchant',     // Merchant
    'social_musician',       // Musician
    'combat_polearm',        // Pikeman
    'combat_pistol',         // Pistoleer
    'outdoors_ranger',       // Ranger
    'combat_rifleman',       // Rifleman
    'combat_smuggler',       // Smuggler
    'outdoors_squadleader',  // Squad Leader
    'combat_2hsword',        // Swordsman
    'crafting_tailor',       // Tailor
    'combat_unarmed',        // Teras Kasi Artist
    'crafting_weaponsmith',  // Weaponsmith
    
    // Force Sensitive Powers
    'force_sensitive_combat_prowess',    // Combat Prowess
    'force_sensitive_crafting_mastery',  // Crafting Mastery
    'force_sensitive_enhanced_reflexes', // Enhanced Reflexes
    'force_sensitive_heightened_senses', // Heightened Senses
    
    // Jedi Skills
    'force_discipline_defender',         // Defender
    'force_discipline_enhancements',     // Enhancer
    'force_discipline_healing',          // Healing
    'force_discipline_light_saber',      // Lightsaber
    'force_discipline_powers'            // Powers
  ];
  
  const professions = [];
  
  // Add professions in the specified order
  for (const key of orderedKeys) {
    if (ALL_PROFESSIONS[key]) {
      professions.push(convertProfessionData(key, ALL_PROFESSIONS[key]));
    }
  }
  
  return professions;
}

// Get basic professions only
export function getBasicProfessions() {
  const basicKeys = [
    'combat_brawler',
    'combat_marksman', 
    'science_medic',
    'outdoors_scout',
    'crafting_artisan',
    'social_entertainer',
    'social_politician'
  ];
  
  return basicKeys
    .filter(key => ALL_PROFESSIONS[key])
    .map(key => convertProfessionData(key, ALL_PROFESSIONS[key]));
}

// Get elite professions only
export function getEliteProfessions() {
  const eliteKeys = [
    'combat_rifleman',
    'combat_pistol',
    'combat_carbine',
    'combat_unarmed',
    'combat_1hsword',
    'combat_2hsword',
    'combat_polearm',
    'social_dancer',
    'social_musician',
    'science_doctor',
    'outdoors_ranger',
    'outdoors_creaturehandler',
    'outdoors_bio_engineer',
    'crafting_armorsmith',
    'crafting_weaponsmith',
    'crafting_chef',
    'crafting_tailor',
    'crafting_architect',
    'crafting_droidengineer',
    'crafting_merchant',
    'combat_smuggler',
    'combat_bountyhunter',
    'combat_commando',
    'science_combatmedic',
    'social_imagedesigner',
    'outdoors_squadleader'
  ];
  
  return eliteKeys
    .filter(key => ALL_PROFESSIONS[key])
    .map(key => convertProfessionData(key, ALL_PROFESSIONS[key]));
}

// Get force sensitive professions only
export function getForceSensitiveProfessions() {
  const forceKeys = [
    'force_sensitive_combat_prowess',
    'force_sensitive_enhanced_reflexes',
    'force_sensitive_crafting_mastery',
    'force_sensitive_heightened_senses'
  ];
  
  return forceKeys
    .filter(key => ALL_PROFESSIONS[key])
    .map(key => convertProfessionData(key, ALL_PROFESSIONS[key]));
}

// Get Jedi disciplines only
export function getJediProfessions() {
  const jediKeys = [
    'force_discipline_light_saber',
    'force_discipline_powers',
    'force_discipline_healing',
    'force_discipline_enhancements',
    'force_discipline_defender'
  ];
  
  return jediKeys
    .filter(key => ALL_PROFESSIONS[key])
    .map(key => convertProfessionData(key, ALL_PROFESSIONS[key]));
}

// Get professions organized by category
export function getProfessionsByCategory() {
  return {
    basic: getBasicProfessions(),
    elite: getEliteProfessions(),
    forceSensitive: getForceSensitiveProfessions(),
    jedi: getJediProfessions()
  };
}
