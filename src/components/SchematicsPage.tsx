'use client'

import React, { useState, useMemo } from 'react'
import { Search, ChevronDown, Wrench, Package, Zap, Clock, TrendingUp, MapPin, Star } from 'lucide-react'
import { PageLayout } from '@/components/PageLayout'
import schematicsData from '@/data/schematics.json'

interface Resource {
  name: string
  amount: number
  caps: string[]
  contribution: string
}

interface Component {
  name: string
  quantity: number
  source: string
}

interface Schematic {
  id: string
  name: string
  category: string
  complexity: number
  xpReward: number
  description: string
  resources: Resource[]
  components: Component[]
  tools: string[]
  skills: string[]
}

interface BestResource {
  name: string
  planet: string
  stats: Record<string, number>
  spawned: string
  concentration: string
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'armor': return 'text-red-400 bg-red-600/20 border-red-500/50'
    case 'weapon': return 'text-orange-400 bg-orange-600/20 border-orange-500/50'
    case 'architect': return 'text-blue-400 bg-blue-600/20 border-blue-500/50'
    case 'artisan': return 'text-purple-400 bg-purple-600/20 border-purple-500/50'
    case 'bio-engineer': return 'text-green-400 bg-green-600/20 border-green-500/50'
    case 'chef': return 'text-yellow-400 bg-yellow-600/20 border-yellow-500/50'
    case 'droid engineer': return 'text-cyan-400 bg-cyan-600/20 border-cyan-500/50'
    case 'entertainer': return 'text-pink-400 bg-pink-600/20 border-pink-500/50'
    case 'shipwright': return 'text-indigo-400 bg-indigo-600/20 border-indigo-500/50'
    case 'tailor': return 'text-teal-400 bg-teal-600/20 border-teal-500/50'
    default: return 'text-gray-400 bg-gray-600/20 border-gray-500/50'
  }
}

const getComplexityColor = (complexity: number) => {
  if (complexity <= 15) return 'text-green-400'
  if (complexity <= 25) return 'text-yellow-400'
  if (complexity <= 30) return 'text-orange-400'
  return 'text-red-400'
}

const getConcentrationColor = (concentration: string) => {
  switch (concentration.toLowerCase()) {
    case 'heavy': return 'text-green-400'
    case 'good': return 'text-blue-400'
    case 'fair': return 'text-yellow-400'
    case 'poor': return 'text-red-400'
    default: return 'text-gray-400'
  }
}

const timeAgo = (timestamp: string) => {
  const now = new Date()
  const past = new Date(timestamp)
  const diffMs = now.getTime() - past.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  return `${diffDays} days ago`
}

export default function SchematicsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSchematic, setSelectedSchematic] = useState<Schematic | null>(null)
  
  const categories: string[] = schematicsData.categories
  const schematics: Schematic[] = schematicsData.schematics
  const bestResources: Record<string, BestResource> = schematicsData.bestResources

  const filteredSchematics = useMemo(() => {
    return schematics.filter(schematic => {
      const matchesSearch = schematic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          schematic.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || schematic.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [schematics, searchTerm, selectedCategory])

  const getBestResourceForSchematic = (resourceName: string) => {
    return bestResources[resourceName] || null
  }

  return (
    <PageLayout title="Schematic Browser" subtitle="Browse crafting schematics, resource requirements, and find the best materials for your projects">
      
      {/* Under Construction Notice */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/50 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-yellow-400">Under Construction</h3>
            </div>
            <p className="text-gray-300 mb-2">
              The schematic browser is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on integrating live resource data and complete schematic information from the server. Check back soon for the full crafting experience!
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search schematics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Schematic List */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Schematics ({filteredSchematics.length})
            </h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {filteredSchematics.map((schematic, index) => (
              <div
                key={schematic.id}
                onClick={() => setSelectedSchematic(schematic)}
                className={`p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer transition-colors ${
                  selectedSchematic?.id === schematic.id ? 'bg-gray-800' : ''
                } ${index % 2 === 0 ? 'bg-gray-850/30' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{schematic.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(schematic.category)}`}>
                    {schematic.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{schematic.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-gray-400" />
                    <span className={getComplexityColor(schematic.complexity)}>
                      Complexity: {schematic.complexity}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="text-green-400">
                      XP: {schematic.xpReward.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schematic Details */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          {selectedSchematic ? (
            <>
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{selectedSchematic.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(selectedSchematic.category)}`}>
                    {selectedSchematic.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{selectedSchematic.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Complexity: </span>
                    <span className={getComplexityColor(selectedSchematic.complexity)}>
                      {selectedSchematic.complexity}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">XP Reward: </span>
                    <span className="text-green-400">{selectedSchematic.xpReward.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Resources Required */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Resources Required
                  </h4>
                  <div className="space-y-3">
                    {selectedSchematic.resources.map((resource, index) => {
                      const bestResource = getBestResourceForSchematic(resource.name)
                      return (
                        <div key={index} className="bg-gray-800 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="font-medium text-white">{resource.name}</span>
                              <span className="text-gray-400 ml-2">({resource.amount} units)</span>
                            </div>
                            <div className="text-right text-sm">
                              <div className="text-gray-400">Caps: {resource.caps.join(', ')}</div>
                              <div className="text-blue-400">{resource.contribution}</div>
                            </div>
                          </div>
                          
                          {bestResource && (
                            <div className="mt-3 pt-3 border-t border-gray-700">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-green-400 font-medium">{bestResource.name}</div>
                                  <div className="flex items-center text-sm text-gray-400">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {bestResource.planet}
                                    <span className="mx-2">•</span>
                                    <span className={getConcentrationColor(bestResource.concentration)}>
                                      {bestResource.concentration}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right text-sm">
                                  <div className="flex space-x-2">
                                    {Object.entries(bestResource.stats).map(([cap, value]) => (
                                      <span key={cap} className="text-yellow-400">
                                        {cap}: {value}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="text-gray-400 flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {timeAgo(bestResource.spawned)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Components Required */}
                {selectedSchematic.components.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Components Required
                    </h4>
                    <div className="space-y-2">
                      {selectedSchematic.components.map((component, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                          <span className="text-white">{component.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400">x{component.quantity}</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              component.source === 'crafted' ? 'bg-blue-600/20 text-blue-400' :
                              component.source === 'looted' ? 'bg-yellow-600/20 text-yellow-400' :
                              'bg-purple-600/20 text-purple-400'
                            }`}>
                              {component.source}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools & Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Wrench className="w-4 h-4 mr-2" />
                      Tools Required
                    </h4>
                    <div className="space-y-2">
                      {selectedSchematic.tools.map((tool, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-2 text-white text-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Skills Required
                    </h4>
                    <div className="space-y-2">
                      {selectedSchematic.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-2 text-green-400 text-sm font-medium">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 text-center">
              <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">Select a Schematic</h3>
              <p className="text-gray-500">Choose a schematic from the list to view its crafting requirements and best resource recommendations</p>
            </div>
          )}
        </div>
      </div>

      {/* No Results */}
      {filteredSchematics.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No schematics found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter</p>
        </div>
      )}
    </PageLayout>
  )
}
