"use client";

import { PageLayout } from "@/components/PageLayout";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import citiesData from "@/data/cities.json";

interface City {
  name: string;
  rank: string;
  specialization: string;
  location: string;
  mayor: string;
  population: number;
}

interface Planet {
  name: string;
  description: string;
  cities: City[];
}

export function CitiesPage() {
  const [expandedPlanets, setExpandedPlanets] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  
  const planets: Planet[] = citiesData.planets;

  const togglePlanet = (planetName: string) => {
    const newExpanded = new Set(expandedPlanets);
    if (newExpanded.has(planetName)) {
      newExpanded.delete(planetName);
    } else {
      newExpanded.add(planetName);
    }
    setExpandedPlanets(newExpanded);
  };

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Metropolis': return 'bg-purple-600/30 text-purple-300';
      case 'City': return 'bg-blue-600/30 text-blue-300';
      case 'Town': return 'bg-green-600/30 text-green-300';
      case 'Outpost': return 'bg-yellow-600/30 text-yellow-300';
      case 'Village': return 'bg-gray-600/30 text-gray-300';
      default: return 'bg-gray-600/30 text-gray-300';
    }
  };

  const filteredPlanets = planets.map(planet => ({
    ...planet,
    cities: planet.cities.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.mayor.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(planet => planet.cities.length > 0);

  return (
    <PageLayout
      title="Cities"
      subtitle="Discover player-built cities across the galaxy"
      heroClass="hero-section-cities"
    >
      {/* Under Construction Notice */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/50 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h3 className="text-xl font-bold text-yellow-400">Under Construction</h3>
            </div>
            <p className="text-gray-300 mb-2">
              The Cities directory is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on integrating live city data from the server. Check back soon for real city information!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-300 mb-6">
          Explore the diverse player-built cities scattered across the galaxy. Each city offers unique services, 
          specializations, and opportunities for players to call home. From bustling metropolises to quiet outposts, 
          find the perfect community to join your galactic adventure.
        </p>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search cities by name, specialization, or mayor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-[rgba(13,20,40,0.6)] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-blue-400">{planets.length}</div>
            <div className="text-gray-300 text-sm">Planets</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-green-400">{planets.reduce((acc, planet) => acc + planet.cities.length, 0)}</div>
            <div className="text-gray-300 text-sm">Total Cities</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-purple-400">{planets.reduce((acc, planet) => acc + planet.cities.reduce((cityAcc, city) => cityAcc + city.population, 0), 0).toLocaleString()}</div>
            <div className="text-gray-300 text-sm">Total Population</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-yellow-400">{Math.round(planets.reduce((acc, planet) => acc + planet.cities.reduce((cityAcc, city) => cityAcc + city.population, 0), 0) / planets.reduce((acc, planet) => acc + planet.cities.length, 0))}</div>
            <div className="text-gray-300 text-sm">Avg City Size</div>
          </div>
        </div>
      </div>

      {/* Planet-based Cities */}
      <div className="space-y-6">
        {filteredPlanets.map((planet) => (
          <div
            key={planet.name}
            className="bg-[rgba(13,20,40,0.6)] rounded-lg border border-gray-700 overflow-hidden"
          >
            {/* Planet Header */}
            <button
              onClick={() => togglePlanet(planet.name)}
              className="w-full p-6 text-left hover:bg-[rgba(13,20,40,0.8)] transition-colors flex items-center justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{planet.name}</h3>
                <p className="text-gray-300 mb-2">{planet.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-400">{planet.cities.length} cities</span>
                  <span className="text-green-400">{planet.cities.reduce((acc, city) => acc + city.population, 0).toLocaleString()} inhabitants</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                {expandedPlanets.has(planet.name) ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </button>

            {/* Cities List */}
            {expandedPlanets.has(planet.name) && (
              <div className="border-t border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
                  {planet.cities.map((city) => (
                    <div
                      key={city.name}
                      className="bg-[rgba(13,20,40,0.4)] rounded-lg border border-gray-600 p-4 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">{city.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getRankColor(city.rank)}`}>
                          {city.rank}
                        </span>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-400">Specialization:</span>
                          <p className="text-white font-medium">{city.specialization}</p>
                        </div>

                        <div>
                          <span className="text-gray-400">Mayor:</span>
                          <p className="text-blue-300 font-medium">{city.mayor}</p>
                        </div>

                        <div className="flex justify-between">
                          <div>
                            <span className="text-gray-400">Population:</span>
                            <p className="text-green-300 font-medium">{city.population.toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Location:</span>
                            <p className="text-gray-300 font-mono text-xs">{city.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-600">
                        <button className="w-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/50 text-blue-300 py-2 px-3 rounded text-sm transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
        <h3 className="text-white font-semibold text-lg mb-4">About Cities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h4 className="text-blue-400 font-medium mb-2">City Rankings</h4>
            <ul className="space-y-1 text-sm">
              <li><span className="text-purple-300">Metropolis:</span> 25+ citizens</li>
              <li><span className="text-blue-300">City:</span> 15+ citizens</li>
              <li><span className="text-green-300">Town:</span> 7+ citizens</li>
              <li><span className="text-yellow-300">Outpost:</span> Under 7 citizens</li>
              <li><span className="text-gray-300">Village:</span> Basic settlement</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">City Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Player housing and decoration</li>
              <li>• Specialized crafting facilities</li>
              <li>• Unique city services and vendors</li>
              <li>• Community events and activities</li>
              <li>• Political systems and governance</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
