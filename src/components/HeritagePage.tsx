"use client";

import { PageLayout } from "@/components/PageLayout";
import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Search, Package, Wrench, Star } from "lucide-react";
import Image from "next/image";
import schematicsData from "@/data/schematics.json";

interface Schematic {
  name: string;
  description: string;
  category: string;
  subcategory: string;
  rarity: string;
  imageUrl: string;
  requirements: string[];
  materials: string[];
  stats: Record<string, string>;
}

interface Category {
  name: string;
  schematics: Schematic[];
}

export function HeritagePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSchematics, setExpandedSchematics] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRarity, setSelectedRarity] = useState<string>("all");

  const categories: Category[] = schematicsData.categories;
  const allSchematics = categories.flatMap(cat => cat.schematics);

  const toggleSchematic = (schematicName: string) => {
    const newExpanded = new Set(expandedSchematics);
    if (newExpanded.has(schematicName)) {
      newExpanded.delete(schematicName);
    } else {
      newExpanded.add(schematicName);
    }
    setExpandedSchematics(newExpanded);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'common': return 'text-gray-400 bg-gray-600/20';
      case 'uncommon': return 'text-green-400 bg-green-600/20';
      case 'rare': return 'text-blue-400 bg-blue-600/20';
      case 'legendary': return 'text-purple-400 bg-purple-600/20';
      default: return 'text-gray-400 bg-gray-600/20';
    }
  };

  const getRarityIcon = (rarity: string) => {
    const count = rarity.toLowerCase() === 'legendary' ? 4 : 
                  rarity.toLowerCase() === 'rare' ? 3 :
                  rarity.toLowerCase() === 'uncommon' ? 2 : 1;
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-3 h-3 fill-current" />
    ));
  };

  const filteredSchematics = useMemo(() => {
    return allSchematics.filter(schematic => {
      const matchesSearch = schematic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          schematic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          schematic.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || schematic.category === selectedCategory;
      const matchesRarity = selectedRarity === 'all' || schematic.rarity === selectedRarity;
      return matchesSearch && matchesCategory && matchesRarity;
    });
  }, [allSchematics, searchTerm, selectedCategory, selectedRarity]);

  const groupedSchematics = useMemo(() => {
    const grouped: Record<string, Schematic[]> = {};
    filteredSchematics.forEach(schematic => {
      if (!grouped[schematic.category]) {
        grouped[schematic.category] = [];
      }
      grouped[schematic.category].push(schematic);
    });
    return grouped;
  }, [filteredSchematics]);

  const rarityCounts = allSchematics.reduce((acc, schematic) => {
    acc[schematic.rarity] = (acc[schematic.rarity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <PageLayout
      title="Heritage Schematics"
      subtitle="Discover rare and unique schematics from SWG Infinity's history"
      heroClass="hero-section-heritage"
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
              The Heritage Schematics database is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on integrating the complete heritage schematic collection. Check back soon for the full database!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-300 mb-6">
          Explore our collection of heritage decoration schematics - rare blueprints for unique 
          architectural and decorative items that can transform your settlements and structures. 
          These special schematics allow Master Architects to create distinctive decorative elements 
          from SWG Infinity's heritage collection.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-blue-400">{allSchematics.length}</div>
            <div className="text-gray-300 text-sm">Total Schematics</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-gray-400">{rarityCounts.Common || 0}</div>
            <div className="text-gray-300 text-sm">Common</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-green-400">{rarityCounts.Uncommon || 0}</div>
            <div className="text-gray-300 text-sm">Uncommon</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-blue-400">{rarityCounts.Rare || 0}</div>
            <div className="text-gray-300 text-sm">Rare</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-purple-400">{rarityCounts.Legendary || 0}</div>
            <div className="text-gray-300 text-sm">Legendary</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search schematics by name, description, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[rgba(13,20,40,0.6)] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-[rgba(13,20,40,0.6)] border border-gray-700 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="px-4 py-3 bg-[rgba(13,20,40,0.6)] border border-gray-700 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
          >
            <option value="all">All Rarities</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Legendary">Legendary</option>
          </select>
        </div>
      </div>

      {/* Schematics by Category */}
      <div className="space-y-6">
        {Object.entries(groupedSchematics).map(([categoryName, schematics]) => (
          <div key={categoryName} className="bg-[rgba(13,20,40,0.6)] rounded-lg border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <Package className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{categoryName}</h3>
                <span className="text-gray-400">({schematics.length} schematics)</span>
              </div>
            </div>
            
            <div className="space-y-2 p-4">
              {schematics.map((schematic) => (
                <div key={schematic.name} className="border border-gray-600 rounded-lg overflow-hidden">
                  {/* Schematic Header */}
                  <button
                    onClick={() => toggleSchematic(schematic.name)}
                    className="w-full p-4 text-left hover:bg-[rgba(13,20,40,0.4)] transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-white font-medium">{schematic.name}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getRarityColor(schematic.rarity)} flex items-center space-x-1`}>
                            <span>{schematic.rarity}</span>
                            <div className="flex ml-1">
                              {getRarityIcon(schematic.rarity)}
                            </div>
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{schematic.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                          <span>{schematic.subcategory}</span>
                          <span>•</span>
                          <span>{schematic.requirements.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {expandedSchematics.has(schematic.name) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedSchematics.has(schematic.name) && (
                    <div className="border-t border-gray-600 bg-[rgba(13,20,40,0.3)]">
                      <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Image */}
                          <div className="space-y-4">
                            <div className="relative h-64 w-full bg-gray-800 rounded-lg overflow-hidden border border-gray-600">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-gray-400">
                                  <Package className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                  <p className="text-sm">Schematic Image</p>
                                  <p className="text-xs">{schematic.name}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-white font-medium mb-2 flex items-center">
                                <Wrench className="w-4 h-4 mr-2" />
                                Requirements
                              </h5>
                              <div className="space-y-1">
                                {schematic.requirements.map((req, idx) => (
                                  <span key={idx} className="inline-block bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs mr-2">
                                    {req}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 className="text-white font-medium mb-2">Materials</h5>
                              <div className="space-y-1">
                                {schematic.materials.map((material, idx) => (
                                  <span key={idx} className="inline-block bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs mr-2">
                                    {material}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 className="text-white font-medium mb-2">Statistics</h5>
                              <div className="space-y-2">
                                {Object.entries(schematic.stats).map(([key, value]) => (
                                  <div key={key} className="flex justify-between text-sm">
                                    <span className="text-gray-400 capitalize">{key}:</span>
                                    <span className="text-white">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredSchematics.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 mx-auto text-gray-400 mb-4 opacity-50" />
          <div className="text-gray-400 text-lg">No schematics found</div>
          <p className="text-gray-500 mt-2">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Results Summary */}
      {filteredSchematics.length > 0 && (
        <div className="mt-6 text-gray-400 text-sm">
          Showing {filteredSchematics.length} of {allSchematics.length} schematics
        </div>
      )}

      {/* Heritage Information */}
      <div className="mt-12 bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
        <h3 className="text-white font-semibold text-lg mb-4">About Heritage Decorations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Decoration Benefits</h4>
            <ul className="space-y-1 text-sm">
              <li>• Unique visual appeal for settlements</li>
              <li>• Heritage items unavailable elsewhere</li>
              <li>• Master Architect crafting showcase</li>
              <li>• Enhanced city and building aesthetics</li>
              <li>• Collectible and rare decoration pieces</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Decoration Categories</h4>
            <ul className="space-y-1 text-sm">
              <li><span className="text-purple-300">Architectural:</span> Bridges, gates, archways</li>
              <li><span className="text-blue-300">Structural:</span> Block buildings, churches</li>
              <li><span className="text-green-300">Decorative:</span> Banners, statues, displays</li>
              <li><span className="text-yellow-300">Functional:</span> Antennas, billboards</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
