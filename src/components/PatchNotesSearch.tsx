"use client";

import { Search, X, Filter } from "lucide-react";
import { useState } from "react";

interface PatchNotesSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalResults: number;
  hasResults: boolean;
  onFilterByType?: (type: 'addition' | 'fix' | 'change' | 'balance' | 'content' | null) => void;
  onFilterByCategory?: (category: string) => void;
}

export function PatchNotesSearch({ 
  searchTerm, 
  onSearchChange, 
  totalResults, 
  hasResults,
  onFilterByType,
  onFilterByCategory 
}: PatchNotesSearchProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTypeFilter, setActiveTypeFilter] = useState<string | null>(null);

  const handleClearSearch = () => {
    onSearchChange('');
    setActiveTypeFilter(null);
  };

  const handleTypeFilter = (type: 'addition' | 'fix' | 'change' | 'balance' | 'content') => {
    const newFilter = activeTypeFilter === type ? null : type;
    setActiveTypeFilter(newFilter);
    onFilterByType?.(newFilter);
  };

  const typeFilters = [
    { type: 'addition' as const, label: 'NEW', color: 'bg-green-900 text-green-200' },
    { type: 'fix' as const, label: 'FIX', color: 'bg-blue-900 text-blue-200' },
    { type: 'change' as const, label: 'CHANGE', color: 'bg-purple-900 text-purple-200' },
    { type: 'balance' as const, label: 'BALANCE', color: 'bg-yellow-900 text-yellow-200' },
    { type: 'content' as const, label: 'CONTENT', color: 'bg-indigo-900 text-indigo-200' },
  ];

  return (
    <div className="mb-8 space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search patch notes by title, version, category, or content..."
          className="w-full pl-10 pr-12 py-3 bg-[rgba(13,20,40,0.8)] border border-[#1a1a4a] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--swg-accent-gold))] focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results Summary */}
      {searchTerm && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            {hasResults ? (
              <span>Found <span className="text-[hsl(var(--swg-accent-gold))] font-semibold">{totalResults}</span> patch note{totalResults !== 1 ? 's' : ''} matching "<span className="text-white">{searchTerm}</span>"</span>
            ) : (
              <span>No results found for "<span className="text-white">{searchTerm}</span>"</span>
            )}
          </div>
          
          {hasResults && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors border border-[#1a1a4a] rounded-md hover:border-[hsl(var(--swg-accent-gold))]"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          )}
        </div>
      )}

      {/* Filters */}
      {searchTerm && hasResults && showFilters && (
        <div className="bg-[rgba(13,20,40,0.6)] border border-[#1a1a4a] rounded-md p-4">
          <h4 className="text-white font-medium mb-3">Filter by Type</h4>
          <div className="flex flex-wrap gap-2">
            {typeFilters.map(({ type, label, color }) => (
              <button
                key={type}
                onClick={() => handleTypeFilter(type)}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                  activeTypeFilter === type
                    ? `${color} ring-2 ring-[hsl(var(--swg-accent-gold))] ring-opacity-50`
                    : `${color} opacity-60 hover:opacity-100`
                }`}
              >
                {label}
              </button>
            ))}
            {activeTypeFilter && (
              <button
                onClick={() => handleTypeFilter(activeTypeFilter as 'addition' | 'fix' | 'change' | 'balance' | 'content')}
                className="px-3 py-1 text-xs font-medium rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
