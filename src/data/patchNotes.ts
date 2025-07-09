/**
 * TypeScript interfaces for Patch Notes data structure
 */

export interface PatchUpdate {
  type: 'addition' | 'fix' | 'change' | 'balance' | 'content';
  description: string;
}

export interface PatchCategory {
  area: string; // e.g., "Jedi", "Combat", "Crafting", "General"
  updates: PatchUpdate[];
}

export interface PatchNote {
  id: string;
  version: string;
  date: string;
  title: string;
  categories: PatchCategory[];
}

export interface MonthPatchNotes {
  month: string;
  patches: PatchNote[];
}

export interface YearPatchNotes {
  year: string;
  months: MonthPatchNotes[];
}