"use client";

import { PageLayout } from "@/components/PageLayout";
import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";
import guildsData from "@/data/guilds.json";

interface Guild {
  name: string;
  leader: string;
  faction: "Imperial" | "Rebel" | "Neutral";
  memberCount: number;
  lastActive: string;
}

type SortField = 'name' | 'leader' | 'faction' | 'memberCount' | 'lastActive';
type SortDirection = 'asc' | 'desc';

export function GuildsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [factionFilter, setFactionFilter] = useState<string>('all');

  const guilds = guildsData.guilds as Guild[];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ChevronUp className="w-4 h-4 text-gray-500" />;
    }
    return sortDirection === 'asc' ? 
      <ChevronUp className="w-4 h-4 text-blue-400" /> : 
      <ChevronDown className="w-4 h-4 text-blue-400" />;
  };

  const getFactionColor = (faction: string) => {
    switch (faction) {
      case 'Imperial': return 'text-red-400 bg-red-600/20';
      case 'Rebel': return 'text-blue-400 bg-blue-600/20';
      case 'Neutral': return 'text-yellow-400 bg-yellow-600/20';
      default: return 'text-gray-400 bg-gray-600/20';
    }
  };

  const getActivityStatus = (lastActive: string) => {
    const today = new Date();
    const activeDate = new Date(lastActive);
    const diffTime = Math.abs(today.getTime() - activeDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 1) return { text: 'Today', color: 'text-green-400' };
    if (diffDays <= 3) return { text: `${diffDays}d ago`, color: 'text-green-400' };
    if (diffDays <= 7) return { text: `${diffDays}d ago`, color: 'text-yellow-400' };
    return { text: `${diffDays}d ago`, color: 'text-red-400' };
  };

  const filteredAndSortedGuilds = useMemo(() => {
    const filtered = guilds.filter(guild => {
      const matchesSearch = guild.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          guild.leader.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFaction = factionFilter === 'all' || guild.faction === factionFilter;
      return matchesSearch && matchesFaction;
    });

    return filtered.sort((a, b) => {
      let aValue: string | number = a[sortField];
      let bValue: string | number = b[sortField];

      if (sortField === 'lastActive') {
        aValue = new Date(aValue as string).getTime();
        bValue = new Date(bValue as string).getTime();
      }

      if (sortField === 'memberCount') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [guilds, searchTerm, factionFilter, sortField, sortDirection]);

  const factionCounts = guilds.reduce((acc, guild) => {
    acc[guild.faction] = (acc[guild.faction] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <PageLayout
      title="Guilds"
      subtitle="Browse active player guilds and organizations"
      heroClass="hero-section-guilds"
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
              The Guild directory is currently being developed. The data shown below is for demonstration purposes only.
            </p>
            <p className="text-gray-400 text-sm">
              We're working on integrating live guild data from the server. Check back soon for real guild information!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-300 mb-6">
          Discover active guilds across the galaxy. Join communities focused on combat, crafting, role-playing, 
          or general gameplay to enhance your Star Wars Galaxies experience.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-blue-400">{guilds.length}</div>
            <div className="text-gray-300 text-sm">Total Guilds</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-red-400">{factionCounts.Imperial || 0}</div>
            <div className="text-gray-300 text-sm">Imperial</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-blue-400">{factionCounts.Rebel || 0}</div>
            <div className="text-gray-300 text-sm">Rebel</div>
          </div>
          <div className="bg-[rgba(13,20,40,0.6)] p-4 rounded-lg border border-gray-700 text-center">
            <div className="text-2xl font-bold text-yellow-400">{factionCounts.Neutral || 0}</div>
            <div className="text-gray-300 text-sm">Neutral</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search guilds by name or leader..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[rgba(13,20,40,0.6)] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
            />
          </div>
          <select
            value={factionFilter}
            onChange={(e) => setFactionFilter(e.target.value)}
            className="px-4 py-3 bg-[rgba(13,20,40,0.6)] border border-gray-700 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
          >
            <option value="all">All Factions</option>
            <option value="Imperial">Imperial</option>
            <option value="Rebel">Rebel</option>
            <option value="Neutral">Neutral</option>
          </select>
        </div>
      </div>

      {/* Guilds Table */}
      <div className="bg-[rgba(13,20,40,0.6)] rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[rgba(13,20,40,0.8)] border-b border-gray-700">
              <tr>
                <th 
                  className="px-6 py-4 text-left text-white font-medium cursor-pointer hover:bg-[rgba(13,20,40,0.9)] transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Guild Name</span>
                    {getSortIcon('name')}
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left text-white font-medium cursor-pointer hover:bg-[rgba(13,20,40,0.9)] transition-colors"
                  onClick={() => handleSort('leader')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Guild Leader</span>
                    {getSortIcon('leader')}
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left text-white font-medium cursor-pointer hover:bg-[rgba(13,20,40,0.9)] transition-colors"
                  onClick={() => handleSort('faction')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Faction</span>
                    {getSortIcon('faction')}
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left text-white font-medium cursor-pointer hover:bg-[rgba(13,20,40,0.9)] transition-colors"
                  onClick={() => handleSort('memberCount')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Members</span>
                    {getSortIcon('memberCount')}
                  </div>
                </th>
                <th 
                  className="px-6 py-4 text-left text-white font-medium cursor-pointer hover:bg-[rgba(13,20,40,0.9)] transition-colors"
                  onClick={() => handleSort('lastActive')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Last Active</span>
                    {getSortIcon('lastActive')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedGuilds.map((guild, index) => {
                const activityStatus = getActivityStatus(guild.lastActive);
                return (
                  <tr 
                    key={guild.name}
                    className={`border-b border-gray-700 hover:bg-[rgba(13,20,40,0.4)] transition-colors ${
                      index % 2 === 0 ? 'bg-[rgba(13,20,40,0.2)]' : 'bg-transparent'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="text-white font-medium">{guild.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-blue-300">{guild.leader}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getFactionColor(guild.faction)}`}>
                        {guild.faction}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-300">{guild.memberCount}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={activityStatus.color}>{activityStatus.text}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {filteredAndSortedGuilds.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No guilds found matching your criteria</div>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter settings</p>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="mt-4 text-gray-400 text-sm">
        Showing {filteredAndSortedGuilds.length} of {guilds.length} guilds
      </div>

      {/* Guild Information */}
      <div className="mt-12 bg-[rgba(13,20,40,0.6)] p-6 rounded-lg border border-gray-700">
        <h3 className="text-white font-semibold text-lg mb-4">About Guilds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Guild Benefits</h4>
            <ul className="space-y-1 text-sm">
              <li>• Shared guild halls and facilities</li>
              <li>• Group activities and events</li>
              <li>• Knowledge sharing and mentorship</li>
              <li>• Coordinated PvP and PvE content</li>
              <li>• Social community and friendships</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Guild Types</h4>
            <ul className="space-y-1 text-sm">
              <li><span className="text-red-300">Imperial:</span> Serves the Galactic Empire</li>
              <li><span className="text-blue-300">Rebel:</span> Fights for the Rebellion</li>
              <li><span className="text-yellow-300">Neutral:</span> Independent organizations</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
