/**
 * TypeScript interfaces for Patch Notes data structure
 */

export interface PatchUpdate {
  type: 'addition' | 'fix' | 'change' | 'balance' | 'content';
  description: string;
  markdown?: boolean; // Flag to indicate if description contains markdown
}

export interface PatchHeading {
  level: 1 | 2 | 3; // > = 1, >> = 2, >>> = 3
  title: string;
  tags?: string[]; // Optional tags like [New], [Updated], etc.
  description?: string; // Optional description with -D
  updates: PatchUpdate[];
  subHeadings?: PatchHeading[]; // Nested sub-headings
}

export interface PatchCategory {
  area: string; // e.g., "Jedi", "Combat", "Crafting", "General"
  description?: string; // Optional description for major content areas
  headings?: PatchHeading[]; // New structured headings
  updates: PatchUpdate[]; // Legacy flat updates for backwards compatibility
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