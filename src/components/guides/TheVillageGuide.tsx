"use client";

import React from 'react';
import Link from "next/link";
import { ArrowLeft, MapPin, Target, Award, Star, Users, Zap, Calendar, Trophy, CheckCircle, Clock, Shield, Swords, Wrench } from 'lucide-react';

export function TheVillageGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/guides/adventure-guides" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Adventure Guides
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            The Village
          </h1>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-5 w-5 mr-2 text-purple-400" />
            <span>Dathomir - Force-Sensitive Village</span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Master the Force-sensitive progression system on Dathomir. Complete four challenging phases 
            across multiple skill branches to unlock powerful abilities and unique rewards.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-semibold">Planet</h3>
            </div>
            <p className="text-gray-300">Dathomir</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Target className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold">Quest Items</h3>
            </div>
            <p className="text-gray-300">Sculptures, Crystals, Tools, Powerups</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Award className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-semibold">Starting Location</h3>
            </div>
            <p className="text-gray-300">Force-sensitive Village on Dathomir</p>
          </div>
        </div>

        {/* Skill Summary Tables */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Skill Branch Summary</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black/40 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
                <Swords className="h-5 w-5 mr-2" />
                Combat Prowess (CP)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">1) R Accuracy</span>
                  <span className="text-yellow-400">Banner</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">2) M Speed</span>
                  <span className="text-yellow-400">Melee Powerup</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">3) M Accuracy</span>
                  <span className="text-yellow-400">Power Crystal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">4) R Speed</span>
                  <span className="text-yellow-400">Sculpture 1/4</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Enhanced Reflexes (ER)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">1) Survival</span>
                  <span className="text-yellow-400">Sculpture 3/4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">2) Vehicular Control</span>
                  <span className="text-yellow-400">Focus Crystal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">3) R Defense</span>
                  <span className="text-yellow-400">Ranged Defense Buff</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">4) M Defense</span>
                  <span className="text-yellow-400">None</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Heightened Senses (HS)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">1) Persuasion</span>
                  <span className="text-yellow-400">+5CM Necklace, Plant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">2) Survey</span>
                  <span className="text-yellow-400">Inorganic Survey Tool</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">3) Luck</span>
                  <span className="text-yellow-400">Inorganic Survey Tool</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">4) Healing</span>
                  <span className="text-yellow-400">Bacta Tank</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
                <Wrench className="h-5 w-5 mr-2" />
                Crafting Mastery (CM)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">1) Assembly</span>
                  <span className="text-yellow-400">Sculpture 4/4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">2) Technique</span>
                  <span className="text-yellow-400">LS Crafting Tool</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">3) Experimentation</span>
                  <span className="text-yellow-400">LS Crafting Tool</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">4) Repair</span>
                  <span className="text-yellow-400">Sculpture 2/4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Critical Rules
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>One quest per phase only</strong> - Choose carefully, no aborting once committed</li>
            <li>• <strong>Talk to quest givers between milestones</strong> for bonus items/missions</li>
            <li>• <strong>Phase completion requirements must be met</strong> before advancing</li>
            <li>• <strong>Some quests have profession requirements</strong> (Master Medic, Novice Artisan, etc.)</li>
          </ul>
        </div>

        {/* Phase 1 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Phase 1
          </h2>
          <div className="grid gap-6">
            {/* CP - R.Accuracy */}
            <div className="bg-black/40 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">CP - Ranged Accuracy</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Capt Sarguillo (5313, -4161)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Aurilian Banner</p>
              </div>
              <p className="text-gray-300 mb-4">
                Complete 10 patrols (8 waypoints each). Avoid groups of more than 3 Sith, kill groups of 3 or less. 
                Complete 10 additional patrols for the Banner reward. Waypoint distances increase with each patrol 
                (final patrol can have 2k between waypoints).
              </p>
            </div>

            {/* ER - Survival */}
            <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">ER - Survival</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Whip (5283, -4226)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Aurilian Sculpture 3/4</p>
              </div>
              <p className="text-gray-300 mb-4">
                Rescue villagers from Sith encampments. Go to waypoint, find nearby encampment (~250m), 
                kill Sith pirate and thug, talk to captured villager, escort them back to base. 
                Must complete entire escort or mission fails. 5 rescues required.
              </p>
            </div>

            {/* HS - Persuasion */}
            <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">HS - Persuasion (Requires Master Medic)</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Silvarra (5391, -4075)</p>
                <p className="text-gray-300 mb-2"><strong>Rewards:</strong> +5 CM Exp Necklace, Special Plant</p>
              </div>
              <p className="text-gray-300 mb-4">
                Treat 5 villagers (unlock), +5 for necklace, +5 for plant. Use medical experimentation to cure diseases. 
                Treat last mentioned disease first, work up. Medicine can cure 2 diseases but may cause 1 new problem.
              </p>
              <div className="bg-black/30 rounded p-4 mt-4">
                <h4 className="font-semibold mb-2">Disease Experimentation Chart:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div>fever = 0-8%</div>
                  <div>vomiting = 8-16%</div>
                  <div>open sores = 17-25%</div>
                  <div>puss filled lesions = 25-33%</div>
                  <div>erratic heart rate = 33-41%</div>
                  <div>respiratory failure = 42-50%</div>
                  <div>lost vision = 50-58%</div>
                  <div>partial paralysis = 58-66%</div>
                  <div>violent spasms = 67-75%</div>
                  <div>bloody cough = 75-83%</div>
                  <div>swelling = 83-91%</div>
                  <div>internal bleeding = 92-100%</div>
                </div>
              </div>
            </div>

            {/* CM - Assembly */}
            <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">CM - Assembly</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Quharek (5373, -4181)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Aurilian Sculpture 4/4</p>
              </div>
              <p className="text-gray-300 mb-4">
                Sensor array repair mission. Retrieve 4 components from sensor array (5417, -4119), 
                use Recursive Analyzer at Chief Engineer's hut (5377, -4116) to create schematics, 
                craft and calibrate each component, return to sensor array.
              </p>
              <div className="bg-black/30 rounded p-4 mt-4">
                <h4 className="font-semibold mb-2">Required Components:</h4>
                <div className="space-y-1 text-sm">
                  <div><strong>Solid State Array:</strong> 100 Extrusive Ore, 10 Nabooian Water, 20 Polymer, 10 Copper</div>
                  <div><strong>Signal Amplifier:</strong> 70 Copper, 20 Carb Ore, 25 Tal Fiberplast, 20 Aluminum</div>
                  <div><strong>Gyroscopic Receiver:</strong> 50 Yavinian Wind, 20 Lub Oil, 45 Steel, 20 Copper</div>
                  <div><strong>Configuration Processor:</strong> 50 Rori Fiberplast, 30 Copper, 40 Aluminum, 15 Copper</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Phase 2 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Phase 2
          </h2>
          <div className="grid gap-6">
            {/* CP - M.Speed */}
            <div className="bg-black/40 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">CP - Melee Speed</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Dageerin (5238, -4189)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Melee PowerUp (+30% Speed, 500 uses)</p>
              </div>
              <p className="text-gray-300 mb-4">
                Track and destroy 8 enemy bases (max 3 per day, 24hr cooldown between sets). 
                Use tracking tool for threat level indication. Wait for journal update before engaging Sith. 
                Return to Dageerin after each mission. <strong>Cannot be applied to Lightsabers.</strong>
              </p>
            </div>

            {/* ER - Vehicular Control */}
            <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">ER - Vehicular Control</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Whip (5283, -4226)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Focus Crystal (+2k health, 2hrs, once per 3 days)</p>
              </div>
              <p className="text-gray-300 mb-4">
                Retrieve supplies from 5 crashed ships on Endor. Ships spawn within 500m of given waypoint 
                with Sith guards (~3k from starport, 7 Sith each: 2 thugs, 5 pirates). Supplies auto-transfer 
                when near camp. Return to Whip between missions. Does not stack with health buffs.
              </p>
            </div>

            {/* HS - Survey */}
            <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">HS - Survey (Requires Novice Artisan)</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Eozlin (5200, -4141)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Inorganic Survey Tool (Chemical, Gas, Mineral, Water)</p>
              </div>
              <p className="text-gray-300 mb-4">
                Find 50%+ concentrations of: Aluminum, Gemstone, Energy (Wind/Solar), Ore, Copper, Steel, Iron, Gas. 
                Force Crystal indicates next required resource. Survey and stand on 50%+ spot (no sampling needed). 
                Receive Sith resource loot for each successful survey.
              </p>
            </div>

            {/* CM - Technique */}
            <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">CM - Technique (Requires Novice Artisan, Capped Quest)</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Quharek (5247, -4032)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> LS Crafting Tool (0.00, 5-20 Guaranteed Critical Assemblies)</p>
              </div>
              <p className="text-gray-300 mb-4">
                Contribute 10 items to village crafting project. Talk to QT-QC droid (5193, -4196) for schematics/status. 
                Uses Sith resource loots (minimum 200 resources). Reward uses depend on winning categories (quality/quantity).
              </p>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Phase 3
          </h2>
          <div className="grid gap-6">
            {/* CP - M.Accuracy */}
            <div className="bg-black/40 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">CP - Melee Accuracy</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Capt Sarguillo (5313, -4161)</p>
                <p className="text-gray-300 mb-2"><strong>Rewards:</strong> Named Jedi Color Crystal, Power Crystal (if grouped)</p>
              </div>
              <p className="text-gray-300 mb-4">
                Capture enemy base commanders. Disable shields using Remote Frequency Codes found on base NPCs. 
                Kill 5 Sith to spawn commander, capture via radial menu, escort back within 1 hour. 
                Can partner with another player for bonus Power Crystal (+900 mind, 1.5hrs, once per 4 days).
              </p>
            </div>

            {/* Other Phase 3 missions */}
            <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">ER - Ranged Defense</h3>
              <p className="text-gray-300">Same as CP Phase 2 - destroy 8 enemy bases with tracking tool. Reward: 5 Use +10 Ranged Defense item.</p>
            </div>

            <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">HS - Luck (Requires Novice Artisan)</h3>
              <p className="text-gray-300">Same as HS Phase 2 - find 50%+ resource concentrations. Reward: Inorganic Survey Tool.</p>
            </div>

            <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">CM - Experimentation (Requires Novice Artisan, Capped Quest)</h3>
              <p className="text-gray-300">Contribute 20 items to village shield project. Same mechanics as Phase 2 but different components required.</p>
            </div>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Phase 4
          </h2>
          <div className="grid gap-6">
            {/* CP/ER Combined */}
            <div className="bg-black/40 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">CP - Ranged Speed / ER - Melee Defense</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Capt Sarguillo (5313, -4161)</p>
                <p className="text-gray-300 mb-2"><strong>Rewards:</strong> Sculpture 1/4 (R.Speed only), None (M.Defense)</p>
              </div>
              <p className="text-gray-300 mb-4">
                Village defense event every 2 hours. Kill 50 Sith Outlaws and 25 Sith Pirates. 
                Only need to register a hit for kill credit (target turns red on radar/map). 
                Choose either CP-R.Speed or ER-M.Defense when starting. Note: M.Defense gives no reward.
              </p>
            </div>

            {/* HS - Healing */}
            <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">HS - Healing</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Silvarra (5391, -4075)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Bacta Tank</p>
              </div>
              <p className="text-gray-300 mb-4">
                Heal 50 players during Sith raids (every 2 hours). Must be grouped with target, they must be 
                in combat with Sith Outlaw/Pirate. One heal per person counts. Heal additional 50 for reward.
              </p>
            </div>

            {/* CM - Repair */}
            <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">CM - Repair</h3>
              <div className="mb-4">
                <p className="text-gray-300 mb-2"><strong>NPC:</strong> Chief Engineer of Aurilia (5390, -4122)</p>
                <p className="text-gray-300 mb-2"><strong>Reward:</strong> Aurilian Sculpture 2/4</p>
              </div>
              <p className="text-gray-300 mb-4">
                Complex satellite tracking mission: Purchase assembly kit (530 credits), craft components, 
                buy tracking data (1100 credits), locate satellite, retrieve computer core, solve wire puzzle, 
                return configured core. <strong>Warning:</strong> Complete step 2 before step 3 or mission fails.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Tips */}
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Trophy className="h-6 w-6 text-yellow-400 mr-3" />
            Advanced Strategy Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-400">Mission Planning</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Check profession requirements before committing to quests</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Coordinate with others for group-dependent missions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Plan resource gathering for crafting missions in advance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Combat & Timing</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Village raids occur every 2 hours - be prepared</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Daily limits apply to some combat missions (24hr cooldowns)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Save high-end resources for medical experimentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
