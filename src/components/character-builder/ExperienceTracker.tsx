"use client";

interface SkillBoxForExperience {
  id: string;
  xpCost: number;
}

interface ExperienceTrackerProps {
  selectedSkillBoxes: string[];
  getAllSkillBoxes: () => SkillBoxForExperience[];
}

export function ExperienceTracker({ selectedSkillBoxes, getAllSkillBoxes }: ExperienceTrackerProps) {
  const calculateExperience = () => {
    const experienceMap: { [key: string]: number } = {};
    const allBoxes = getAllSkillBoxes();

    for (const boxId of selectedSkillBoxes) {
      const box = allBoxes.find((b: SkillBoxForExperience) => b.id === boxId);
      if (box && box.xpCost > 0) {
        // Mock experience type - in real implementation this would come from skill data
        const expType = "Combat";
        experienceMap[expType] = (experienceMap[expType] || 0) + box.xpCost;
      }
    }

    return Object.entries(experienceMap);
  };

  const experienceEntries = calculateExperience();

  return (
    <div className="bg-[#00434c] border border-[#36b2bc] rounded-2xl p-2 flex-1">
      <h4 className="text-white text-center mb-2 font-bold text-sm">My Experience</h4>
      <div className="bg-[#008ca7] border border-[#36b2bc] rounded-2xl p-2 h-full overflow-auto">
        {experienceEntries.length === 0 ? (
          <p className="text-white text-sm">No experience gained yet</p>
        ) : (
          <div className="space-y-1">
            {experienceEntries.map(([type, amount]) => (
              <div key={type} className="flex justify-between border-b border-[#36b2bc] pb-1">
                <p className="text-white text-sm">{type}</p>
                <p className="text-white text-sm">+{amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
