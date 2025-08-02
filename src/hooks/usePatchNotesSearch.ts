"use client";

import { useState, useMemo } from 'react';
import { YearPatchNotes, PatchNote, PatchCategory, PatchUpdate } from '@/data/patchNotes';

interface SearchResult {
  patch: PatchNote;
  yearData: YearPatchNotes;
  monthData: string;
  matchedCategories: PatchCategory[];
  matchedUpdates: { category: string; update: PatchUpdate }[];
}

export function usePatchNotesSearch(patchNotes: YearPatchNotes[]) {
  const [searchTerm, setSearchTerm] = useState('');

  // Search through patch notes
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const results: SearchResult[] = [];
    const term = searchTerm.toLowerCase().trim();

    patchNotes.forEach(yearData => {
      yearData.months.forEach(monthData => {
        monthData.patches.forEach(patch => {
          // Search in patch title, version, and date
          const patchMatches = 
            patch.title.toLowerCase().includes(term) ||
            patch.version.toLowerCase().includes(term) ||
            patch.date.toLowerCase().includes(term);

          // Search in categories and updates
          const matchedCategories: PatchCategory[] = [];
          const matchedUpdates: { category: string; update: PatchUpdate }[] = [];

          patch.categories?.forEach(category => {
            const categoryMatches = category.area.toLowerCase().includes(term);
            const categoryUpdates: PatchUpdate[] = [];

            category.updates.forEach(update => {
              if (update.description.toLowerCase().includes(term) || 
                  update.type.toLowerCase().includes(term)) {
                categoryUpdates.push(update);
                matchedUpdates.push({ category: category.area, update });
              }
            });

            if (categoryMatches || categoryUpdates.length > 0) {
              matchedCategories.push({
                area: category.area,
                updates: categoryUpdates.length > 0 ? categoryUpdates : category.updates
              });
            }
          });

          // If any matches found, add to results
          if (patchMatches || matchedCategories.length > 0 || matchedUpdates.length > 0) {
            results.push({
              patch,
              yearData,
              monthData: monthData.month,
              matchedCategories,
              matchedUpdates
            });
          }
        });
      });
    });

    return results;
  }, [patchNotes, searchTerm]);

  // Filter functions for different search modes
  const filterByType = useMemo(() => {
    return (type: 'addition' | 'fix' | 'change' | 'balance' | 'content') => {
      return searchResults.filter(result => 
        result.matchedUpdates.some(mu => mu.update.type === type) ||
        result.patch.categories?.some(cat => 
          cat.updates.some(update => update.type === type)
        )
      );
    };
  }, [searchResults]);

  const filterByCategory = useMemo(() => {
    return (category: string) => {
      return searchResults.filter(result =>
        result.matchedCategories.some(mc => 
          mc.area.toLowerCase().includes(category.toLowerCase())
        ) ||
        result.patch.categories?.some(cat => 
          cat.area.toLowerCase().includes(category.toLowerCase())
        )
      );
    };
  }, [searchResults]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    hasResults: searchResults.length > 0,
    filterByType,
    filterByCategory,
    totalResults: searchResults.length
  };
}
