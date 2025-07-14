'use client'

import React, { useState, useMemo } from 'react'
import { Search, Shield, Swords, Target, Clock, TrendingUp, Users, MapPin } from 'lucide-react'
import { PageLayout } from '@/components/PageLayout'
import gcwData from '@/data/galacticCivilWar.json'

interface FactionControl {
  planet: string
  imperial: number
  rebel: number
  imperialBases: number
  rebelBases: number
  lastUpdate: string
  status: string
}

interface PvPKill {
  id: string
  timestamp: string
  killer: string
  killerFaction: string
  killerProfession: string
  victim: string
  victimFaction: string
  victimProfession: string
  planet: string
  location: string
  killType: string
  bountyAmount?: number
}

interface TopPlayer {
  rank: number
  name: string
  profession: string
  kills: number
  deaths: number
  ratio: number
  lastActive: string
}

const getFactionColor = (faction: string) => {
  switch (faction.toLowerCase()) {
    case 'imperial': return 'text-red-400 bg-red-600/20 border-red-500/50'
    case 'rebel': return 'text-blue-400 bg-blue-600/20 border-blue-500/50'
    case 'neutral': return 'text-gray-400 bg-gray-600/20 border-gray-500/50'
    default: return 'text-gray-400 bg-gray-600/20 border-gray-500/50'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Imperial Controlled': return 'text-red-400 bg-red-600/20'
    case 'Rebel Controlled': return 'text-blue-400 bg-blue-600/20'
    case 'Contested': return 'text-yellow-400 bg-yellow-600/20'
    default: return 'text-gray-400 bg-gray-600/20'
  }
}

const getKillTypeColor = (killType: string) => {
  switch (killType) {
    case 'PvP': return 'text-red-400 bg-red-600/20'
    case 'Bounty Contract': return 'text-purple-400 bg-purple-600/20'
    case 'Duel': return 'text-blue-400 bg-blue-600/20'
    default: return 'text-gray-400 bg-gray-600/20'
  }
}

const timeAgo = (timestamp: string) => {
  const now = new Date()
  const past = new Date(timestamp)
  const diffMs = now.getTime() - past.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  return `${Math.floor(diffHours / 24)}d ago`
}

export default function GalacticCivilWarPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFaction, setSelectedFaction] = useState('all')
  const [selectedKillType, setSelectedKillType] = useState('all')
  const [selectedPlanet, setSelectedPlanet] = useState('all')

  const factionControl: FactionControl[] = gcwData.factionControl
  const recentKills: PvPKill[] = gcwData.recentPvPKills
  const topImperials: TopPlayer[] = gcwData.topPlayers.imperial
  const topRebels: TopPlayer[] = gcwData.topPlayers.rebel

  const planets = Array.from(new Set(recentKills.map(k => k.planet))).sort()
  const killTypes = Array.from(new Set(recentKills.map(k => k.killType))).sort()

  const filteredKills = useMemo(() => {
    return recentKills.filter(kill => {
      const matchesSearch = kill.killer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          kill.victim.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesFaction = selectedFaction === 'all' || 
                           kill.killerFaction.toLowerCase() === selectedFaction ||
                           kill.victimFaction.toLowerCase() === selectedFaction
      
      const matchesKillType = selectedKillType === 'all' || kill.killType === selectedKillType
      const matchesPlanet = selectedPlanet === 'all' || kill.planet === selectedPlanet
      
      return matchesSearch && matchesFaction && matchesKillType && matchesPlanet
    })
  }, [recentKills, searchTerm, selectedFaction, selectedKillType, selectedPlanet])

  const totalImperialBases = factionControl.reduce((acc, planet) => acc + planet.imperialBases, 0)
  const totalRebelBases = factionControl.reduce((acc, planet) => acc + planet.rebelBases, 0)
  const averageImperialControl = factionControl.reduce((acc, planet) => acc + planet.imperial, 0) / factionControl.length
  const averageRebelControl = factionControl.reduce((acc, planet) => acc + planet.rebel, 0) / factionControl.length

  return (
    <PageLayout title="Galactic Civil War" subtitle="Follow the ongoing battle between the Empire and Rebellion across the galaxy">
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
              The Galactic Civil War tracker is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on integrating live faction control and PvP data from the server. Check back soon for real-time GCW tracking!
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Imperial Bases</p>
              <p className="text-2xl font-bold text-red-400">{totalImperialBases}</p>
            </div>
            <Shield className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Rebel Bases</p>
              <p className="text-2xl font-bold text-blue-400">{totalRebelBases}</p>
            </div>
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Recent PvP Kills</p>
              <p className="text-2xl font-bold text-purple-400">{recentKills.length}</p>
            </div>
            <Swords className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Active Planets</p>
              <p className="text-2xl font-bold text-green-400">{factionControl.length}</p>
            </div>
            <MapPin className="w-8 h-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Faction Control Overview */}
      <div className="space-y-6 mb-8">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">🏛️ Overall Control</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-red-400 font-semibold">Imperial Empire</span>
                <span className="text-red-400 font-bold">{averageImperialControl.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-red-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${averageImperialControl}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-blue-400 font-semibold">Rebel Alliance</span>
                <span className="text-blue-400 font-bold">{averageRebelControl.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${averageRebelControl}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">🎯 Top Combatants</h3>
          <div className="space-y-4">
            {/* Most Kills 24 Hours */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-3 text-base">⚡ Most Kills (24h)</h4>
              <div className="grid grid-cols-3 gap-3">
                {topImperials.slice(0, 3).map((player, index) => (
                  <div key={`kills24-${player.name}`} className="bg-gray-700 rounded p-3 text-center">
                    <div className="text-white text-sm font-medium mb-1">{player.name}</div>
                    <div className="text-green-400 text-lg font-bold">{Math.floor(player.kills * 0.15)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Kills All Time */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-yellow-400 font-semibold mb-3 text-base">👑 Most Kills (All Time)</h4>
              <div className="grid grid-cols-3 gap-3">
                {topImperials.slice(0, 3).map((player, index) => (
                  <div key={`killsall-${player.name}`} className="bg-gray-700 rounded p-3 text-center">
                    <div className="text-white text-sm font-medium mb-1">{player.name}</div>
                    <div className="text-yellow-400 text-lg font-bold">{player.kills}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Deaths 24 Hours */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-red-400 font-semibold mb-3 text-base">💀 Most Deaths (24h)</h4>
              <div className="grid grid-cols-3 gap-3">
                {topRebels.slice(0, 3).map((player, index) => (
                  <div key={`deaths24-${player.name}`} className="bg-gray-700 rounded p-3 text-center">
                    <div className="text-white text-sm font-medium mb-1">{player.name}</div>
                    <div className="text-red-400 text-lg font-bold">{Math.floor(player.deaths * 0.2)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Deaths All Time */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-3 text-base">⚰️ Most Deaths (All Time)</h4>
              <div className="grid grid-cols-3 gap-3">
                {topRebels.slice(0, 3).map((player, index) => (
                  <div key={`deathsall-${player.name}`} className="bg-gray-700 rounded p-3 text-center">
                    <div className="text-white text-sm font-medium mb-1">{player.name}</div>
                    <div className="text-purple-400 text-lg font-bold">{player.deaths}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planet Control Table */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">🌍 Planetary Control & Base Counts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="text-left p-4">Planet</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Imperial Control</th>
                <th className="text-left p-4">Rebel Control</th>
                <th className="text-left p-4">Imperial Bases</th>
                <th className="text-left p-4">Rebel Bases</th>
                <th className="text-left p-4">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {factionControl.map((planet, index) => (
                <tr key={planet.planet} className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${index % 2 === 0 ? 'bg-gray-850/30' : ''}`}>
                  <td className="p-4">
                    <span className="font-semibold text-white">{planet.planet}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(planet.status)}`}>
                      {planet.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full"
                          style={{ width: `${planet.imperial}%` }}
                        ></div>
                      </div>
                      <span className="text-red-400 font-semibold">{planet.imperial.toFixed(1)}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${planet.rebel}%` }}
                        ></div>
                      </div>
                      <span className="text-blue-400 font-semibold">{planet.rebel.toFixed(1)}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-red-400 font-bold text-lg">{planet.imperialBases}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-blue-400 font-bold text-lg">{planet.rebelBases}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-400 text-sm">{timeAgo(planet.lastUpdate)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent PvP Kills Section */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">⚔️ Recent PvP Activity (Last 24-28 Hours)</h3>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedFaction}
              onChange={(e) => setSelectedFaction(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Factions</option>
              <option value="imperial">Imperial</option>
              <option value="rebel">Rebel</option>
              <option value="neutral">Neutral</option>
            </select>
            <select
              value={selectedKillType}
              onChange={(e) => setSelectedKillType(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Kill Types</option>
              {killTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
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
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="text-left p-4">Time</th>
                <th className="text-left p-4">Killer</th>
                <th className="text-left p-4">Victim</th>
                <th className="text-left p-4">Kill Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredKills.map((kill, index) => (
                <tr key={kill.id} className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${index % 2 === 0 ? 'bg-gray-850/30' : ''}`}>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{timeAgo(kill.timestamp)}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-white">{kill.killer}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getFactionColor(kill.killerFaction)}`}>
                          {kill.killerFaction}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-white">{kill.victim}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getFactionColor(kill.victimFaction)}`}>
                          {kill.victimFaction}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getKillTypeColor(kill.killType)}`}>
                      {kill.killType}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* No Results */}
      {filteredKills.length === 0 && (
        <div className="text-center py-12">
          <Swords className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No PvP activity found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      )}
    </PageLayout>
  )
}