'use client'

import React, { useState, useMemo } from 'react'
import { Search, ChevronUp, ChevronDown, Filter, TrendingUp } from 'lucide-react'
import { PageLayout } from '@/components/PageLayout'
import resourcesData from '@/data/resources.json'

interface Resource {
  name: string
  type: string
  overallQuality: number
  stats: {
    [key: string]: number | undefined
  }
  lastSeen: string
  planet: string
}

type SortField = 'name' | 'type' | 'overallQuality' | 'planet' | 'lastSeen'
type SortDirection = 'asc' | 'desc'

const getQualityColor = (quality: number) => {
  if (quality >= 900) return 'text-purple-400'
  if (quality >= 800) return 'text-blue-400'
  if (quality >= 700) return 'text-green-400'
  if (quality >= 600) return 'text-yellow-400'
  return 'text-gray-400'
}

const getQualityBadge = (quality: number) => {
  if (quality >= 900) return 'bg-purple-600/20 text-purple-400 border-purple-500/50'
  if (quality >= 800) return 'bg-blue-600/20 text-blue-400 border-blue-500/50'
  if (quality >= 700) return 'bg-green-600/20 text-green-400 border-green-500/50'
  if (quality >= 600) return 'bg-yellow-600/20 text-yellow-400 border-yellow-500/50'
  return 'bg-gray-600/20 text-gray-400 border-gray-500/50'
}

const getPlanetColor = (planet: string) => {
  const planetColors: { [key: string]: string } = {
    'Corellia': 'text-blue-400 bg-blue-600/20',
    'Naboo': 'text-green-400 bg-green-600/20',
    'Tatooine': 'text-yellow-400 bg-yellow-600/20',
    'Dantooine': 'text-emerald-400 bg-emerald-600/20',
    'Rori': 'text-purple-400 bg-purple-600/20',
    'Talus': 'text-orange-400 bg-orange-600/20',
    'Yavin4': 'text-red-400 bg-red-600/20',
    'Endor': 'text-green-500 bg-green-700/20',
    'Lok': 'text-amber-400 bg-amber-600/20',
    'Kashyyyk': 'text-emerald-500 bg-emerald-700/20',
    'Dathomir': 'text-red-500 bg-red-700/20',
    'Mustafar': 'text-red-600 bg-red-800/20'
  }
  return planetColors[planet] || 'text-gray-400 bg-gray-600/20'
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState<SortField>('overallQuality')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [selectedPlanet, setSelectedPlanet] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [minQuality, setMinQuality] = useState(0)

  const resources: Resource[] = resourcesData.resources

  const planets = Array.from(new Set(resources.map(r => r.planet))).sort()
  const resourceTypes = Array.from(new Set(resources.map(r => r.type))).sort()

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection(field === 'overallQuality' ? 'desc' : 'asc')
    }
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ChevronUp className="w-4 h-4 text-gray-500" />
    }
    return sortDirection === 'asc' ? 
      <ChevronUp className="w-4 h-4 text-blue-400" /> : 
      <ChevronDown className="w-4 h-4 text-blue-400" />
  }

  const filteredAndSortedResources = useMemo(() => {
    const filtered = resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.type.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesPlanet = selectedPlanet === 'all' || resource.planet === selectedPlanet
      const matchesType = selectedType === 'all' || resource.type === selectedType
      const matchesQuality = resource.overallQuality >= minQuality
      
      return matchesSearch && matchesPlanet && matchesType && matchesQuality
    })

    return filtered.sort((a, b) => {
      let aValue: string | number = a[sortField]
      let bValue: string | number = b[sortField]
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = (bValue as string).toLowerCase()
      }
      
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })
  }, [resources, searchTerm, selectedPlanet, selectedType, minQuality, sortField, sortDirection])

  const topQualityResources = resources
    .sort((a, b) => b.overallQuality - a.overallQuality)
    .slice(0, 5)

  return (
    <PageLayout title="Best Resources" subtitle="Track and find the highest quality crafting resources currently spawning across all planets">
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
              The Resources tracker is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on integrating live resource data from the SWG API. Check back soon for real-time resource tracking!
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Resources</p>
              <p className="text-2xl font-bold text-blue-400">{resources.length}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Best Quality</p>
              <p className="text-2xl font-bold text-purple-400">{Math.max(...resources.map(r => r.overallQuality)).toFixed(1)}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Resource Types</p>
              <p className="text-2xl font-bold text-green-400">{resourceTypes.length}</p>
            </div>
            <Filter className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Planets</p>
              <p className="text-2xl font-bold text-yellow-400">{planets.length}</p>
            </div>
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Top Resources Quick View */}
      <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4">🏆 Top Quality Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {topQualityResources.map((resource, index) => (
            <div key={resource.name} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-yellow-400">#{index + 1}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium border ${getQualityBadge(resource.overallQuality)}`}>
                  {resource.overallQuality.toFixed(1)}
                </span>
              </div>
              <h4 className="font-semibold text-white text-sm mb-1 truncate">{resource.name}</h4>
              <p className="text-xs text-gray-400 mb-2 truncate">{resource.type}</p>
              <span className={`px-2 py-1 rounded text-xs ${getPlanetColor(resource.planet)}`}>
                {resource.planet}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedPlanet}
            onChange={(e) => setSelectedPlanet(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Planets</option>
            {planets.map(planet => (
              <option key={planet} value={planet}>{planet}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            {resourceTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Min Quality</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={minQuality}
              onChange={(e) => setMinQuality(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-xs text-gray-400">{minQuality}</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Showing</p>
            <p className="text-xl font-bold text-blue-400">{filteredAndSortedResources.length}</p>
          </div>
        </div>
      </div>

      {/* Resources Table */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th 
                  className="text-left p-4 cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Resource Name</span>
                    {getSortIcon('name')}
                  </div>
                </th>
                <th 
                  className="text-left p-4 cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => handleSort('type')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Type</span>
                    {getSortIcon('type')}
                  </div>
                </th>
                <th 
                  className="text-left p-4 cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => handleSort('overallQuality')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Overall Quality</span>
                    {getSortIcon('overallQuality')}
                  </div>
                </th>
                <th className="text-left p-4">Key Stats</th>
                <th 
                  className="text-left p-4 cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => handleSort('planet')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Planet</span>
                    {getSortIcon('planet')}
                  </div>
                </th>
                <th 
                  className="text-left p-4 cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => handleSort('lastSeen')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Last Seen</span>
                    {getSortIcon('lastSeen')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedResources.map((resource, index) => (
                <tr key={resource.name} className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${index % 2 === 0 ? 'bg-gray-850/30' : ''}`}>
                  <td className="p-4">
                    <span className="font-semibold text-white">{resource.name}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-300">{resource.type}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold text-lg ${getQualityColor(resource.overallQuality)}`}>
                        {resource.overallQuality.toFixed(1)}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getQualityBadge(resource.overallQuality)}`}>
                        {resource.overallQuality >= 900 ? 'Legendary' : 
                         resource.overallQuality >= 800 ? 'Excellent' :
                         resource.overallQuality >= 700 ? 'Great' :
                         resource.overallQuality >= 600 ? 'Good' : 'Average'}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      {Object.entries(resource.stats).slice(0, 6).map(([stat, value]) => (
                        value !== undefined && (
                          <div key={stat} className="bg-gray-800 px-2 py-1 rounded">
                            <span className="text-gray-400">{stat.slice(0, 3)}: </span>
                            <span className={`font-medium ${getQualityColor(value)}`}>{value}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPlanetColor(resource.planet)}`}>
                      {resource.planet}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-400 text-sm">{resource.lastSeen}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* No Results */}
      {filteredAndSortedResources.length === 0 && (
        <div className="text-center py-12">
          <TrendingUp className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No resources found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      )}
    </PageLayout>
  )
}
