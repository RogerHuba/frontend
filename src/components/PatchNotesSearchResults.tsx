"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { YearPatchNotes, PatchUpdate } from '@/data/patchNotes';

interface SearchResult {
  patch: {
    id: string;
    version: string;
    date: string;
    title: string;
    categories?: {
      area: string;
      updates: PatchUpdate[];
    }[];
  };
  yearData: YearPatchNotes;
  monthData: string;
  matchedCategories: {
    area: string;
    updates: PatchUpdate[];
  }[];
  matchedUpdates: { category: string; update: PatchUpdate }[];
}

interface PatchNotesSearchResultsProps {
  results: SearchResult[];
  searchTerm: string;
  onFormatPatchTitle: (version: string, date: string) => string;
  onRenderPatchUpdate: (update: PatchUpdate, index: number) => React.ReactNode;
}

export function PatchNotesSearchResults({ 
  results, 
  searchTerm, 
  onFormatPatchTitle, 
  onRenderPatchUpdate 
}: PatchNotesSearchResultsProps) {
  const [expandedResults, setExpandedResults] = useState<string[]>([]);

  const toggleResult = (patchId: string) => {
    setExpandedResults(prev =>
      prev.includes(patchId)
        ? prev.filter(id => id !== patchId)
        : [...prev, patchId]
    );
  };

  // Function to highlight search terms in text
  const highlightSearchTerm = (text: string, term: string) => {
    if (!term.trim()) return text;
    
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-400 text-black font-semibold px-1 py-0.5 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No patch notes found matching your search.</p>
        <p className="text-gray-500 text-sm mt-2">Try different keywords or check your spelling.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => {
        const isExpanded = expandedResults.includes(result.patch.id);
        
        return (
          <div key={result.patch.id} className="bg-[rgba(13,20,40,0.8)] border border-[#1a1a4a] rounded-md overflow-hidden">
            {/* Result Header */}
            <button
              className="w-full flex items-center justify-between p-4 text-left hover:bg-[rgba(13,20,40,0.9)] transition-colors"
              onClick={() => toggleResult(result.patch.id)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 bg-[hsl(var(--swg-accent-gold))] text-black font-medium rounded">
                    {result.yearData.year} - {result.monthData}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">
                  {highlightSearchTerm(
                    onFormatPatchTitle(result.patch.version, result.patch.date),
                    searchTerm
                  )}
                </h3>
                <p className="text-[hsl(var(--swg-accent-gold))] text-sm mt-1">
                  Original Title: {highlightSearchTerm(result.patch.title, searchTerm)}
                </p>
                
                {/* Show matched categories/updates preview */}
                {(result.matchedCategories.length > 0 || result.matchedUpdates.length > 0) && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {result.matchedCategories.slice(0, 3).map((category, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-200 rounded">
                        {highlightSearchTerm(category.area, searchTerm)}
                      </span>
                    ))}
                    {result.matchedUpdates.length > 0 && (
                      <span className="text-xs px-2 py-1 bg-green-900 bg-opacity-30 text-green-200 rounded">
                        {result.matchedUpdates.length} matching update{result.matchedUpdates.length !== 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              {isExpanded ? (
                <ChevronDown className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] flex-shrink-0 ml-4" />
              ) : (
                <ChevronRight className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] flex-shrink-0 ml-4" />
              )}
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="px-4 pb-4 bg-[rgba(13,20,40,0.4)]">
                <div className="space-y-6">
                  {result.patch.categories?.map((category, categoryIndex) => {
                    // Show all updates if category matches, or only matched updates
                    const categoryMatches = result.matchedCategories.some(mc => mc.area === category.area);
                    const matchedUpdatesForCategory = result.matchedUpdates
                      .filter(mu => mu.category === category.area)
                      .map(mu => mu.update);
                    
                    const updatesToShow = categoryMatches 
                      ? category.updates 
                      : matchedUpdatesForCategory.length > 0 
                        ? matchedUpdatesForCategory 
                        : [];

                    if (updatesToShow.length === 0) return null;

                    return (
                      <div key={categoryIndex} className="space-y-3">
                        <h4 className="text-[hsl(var(--swg-accent-gold))] font-semibold text-lg border-b border-[#1a1a4a] pb-2">
                          {highlightSearchTerm(category.area, searchTerm)}
                        </h4>
                        <div className="space-y-3">
                          {updatesToShow.map((update, updateIndex) => {
                            // Custom render for search results with highlighting
                            let badgeColor = "";
                            let badgeText = "";

                            switch (update.type) {
                              case "addition":
                                badgeColor = "bg-green-900 text-green-200";
                                badgeText = "NEW";
                                break;
                              case "fix":
                                badgeColor = "bg-blue-900 text-blue-200";
                                badgeText = "FIX";
                                break;
                              case "change":
                                badgeColor = "bg-purple-900 text-purple-200";
                                badgeText = "CHANGE";
                                break;
                              case "balance":
                                badgeColor = "bg-yellow-900 text-yellow-200";
                                badgeText = "BALANCE";
                                break;
                              case "content":
                                badgeColor = "bg-indigo-900 text-indigo-200";
                                badgeText = "CONTENT";
                                break;
                            }

                            return (
                              <div key={updateIndex} className="flex items-start mb-3">
                                <span className={`inline-block rounded px-2 py-1 text-xs font-medium mr-3 ${badgeColor}`}>
                                  {badgeText}
                                </span>
                                <p className="text-gray-300">
                                  {highlightSearchTerm(update.description, searchTerm)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
