# Patch Notes Update Guide

The patch notes are now pulled from `src/data/patchNotes.json` with a **categorized structure** for better organization!

The patch titles are automatically formatted as: **"Infinity {version} Patch Notes - {date}"**

## Adding a New Patch

Edit the `src/data/patchNotes.json` file and add a new patch object to the appropriate month's patches array:

```json
{
  "id": "2025-07-15",
  "version": "2.4.0",
  "date": "July 15, 2025",
  "title": "Summer Update",
  "categories": [
    {
      "area": "Jedi",
      "updates": [
        {"type": "balance", "description": "Force Absorb cooldown reduced from 500ms to 333ms in PVP"},
        {"type": "change", "description": "Jedi state set to Padawan when leaving FRS"},
        {"type": "addition", "description": "Added confirmation dialog when rejoining FRS at Force Shrine"}
      ]
    },
    {
      "area": "Combat",
      "updates": [
        {"type": "addition", "description": "Added new weapon types for Commando"},
        {"type": "balance", "description": "Rebalanced lightsaber damage output"}
      ]
    },
    {
      "area": "Crafting",
      "updates": [
        {"type": "fix", "description": "Fixed resource harvester efficiency calculations"}
      ]
    }
  ]
}
```

**Display Example:**

- **Main Title:** "Infinity 2.4.0 Patch Notes - July 15, 2025"
- **Original Title:** "Summer Update" (shown below in gold text)
- **Categories:** Each area (Jedi, Combat, Crafting) gets its own section with a gold header

## Recommended Category Areas

Here are some suggested category names to keep consistency:

- **Jedi** - Force powers, FRS, lightsaber changes
- **Combat** - Weapon changes, damage, targeting
- **Crafting** - Schematics, resources, harvesters
- **PvP** - Battlegrounds, damage values, mechanics
- **Housing** - Player houses, decorations, cities
- **Events** - Seasonal events, celebrations
- **General** - Travel, UI, misc improvements
- **Appearance** - Costumes, clothing, cosmetics
- **Cities** - Player cities, civic structures

## Update Types

- `addition` - New features or content (appears as "NEW" with green badge)
- `fix` - Bug fixes (appears as "FIX" with blue badge)  
- `change` - Changes to existing features (appears as "CHANGE" with purple badge)
- `balance` - Game balance adjustments (appears as "BALANCE" with yellow badge)
- `content` - New content like dungeons, quests, etc. (appears as "CONTENT" with indigo badge)

## Benefits of the New Structure

✅ **Organized by categories** - Group related changes together (Jedi, Combat, Crafting, etc.)
✅ **No more sequential ID management** - No need to figure out the next number  
✅ **Easier to read** - Players can quickly find changes relevant to their interests
✅ **JSON format** - Easy to edit and maintain
✅ **Order-based display** - Updates show in the order you write them
✅ **Less prone to errors** - No ID conflicts when multiple people edit
✅ **Dynamic title formatting** - Titles are automatically generated from version and date

**Important**: Edit the `src/data/patchNotes.json` file to add new patches, not the TypeScript file!

The patch updates will display in the exact order they appear within each category, so put the most important updates first within each area!
