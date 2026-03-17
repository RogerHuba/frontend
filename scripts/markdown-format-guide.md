# Markdown Patch Notes Format Guide

This enhanced format supports both the original simple format and rich Markdown formatting for more detailed patch notes.

## 🔧 **Update Type Keys**

Use these keys instead of symbols for better readability and markdown support:

- **`[NEW]`** = New features/additions (replaces `+`)
- **`[FIX]`** or **`[BUG]`** = Bug fixes (replaces `-`)
- **`[CHANGE]`** = Changes/adjustments (replaces `*`)
- **`[BALANCE]`** = Game balance adjustments
- **`[CONTENT]`** = New content additions

## 📝 **Markdown Support**

All content after the keys supports standard Markdown:

### Text Formatting:
- **Bold text** with `**bold**`
- *Italic text* with `*italic*`
- `Code/commands` with backticks
- Links with `[text](url)`

### Lists:
```
[NEW] Enhanced combat featuring:
  - Energy rifles
  - Plasma cannons
  - Advanced targeting systems
```

### Code and Commands:
```
[FIX] Fixed issue with `!guild` command not responding
[NEW] Added `/teleport` command for administrators
```

## 📋 **Complete Example**

```
Version: 2.3.0
Date: December 15, 2025

BATTLE OF HOTH:
-D A new large-scale conflict has erupted on the frozen planet of Hoth.

> Battle Mechanics +>New
-D Core battle systems that drive the conflict.

[NEW] **Faction-Based Warfare**: Join massive battles with unique objectives
[NEW] High-Stakes Combat featuring *AT-AT walkers*, `turrets`, and **elite droids**
[CONTENT] New weapon types including:
  - Energy rifles
  - Plasma cannons  
  - `Experimental prototypes`

>> Imperial Operations +>Exclusive
[NEW] Command **AT-AT walkers** in ground assault missions
[NEW] Deploy `probe droids` for reconnaissance operations
[FIX] Fixed issue where Imperial staging area was inaccessible

>>> Special Missions +>Elite
[CONTENT] Infiltrate enemy bases during battle chaos
[CONTENT] Rescue operations with **high risk/reward** mechanics

JEDI:
> Force Powers +>Rebalanced
[FIX] Fixed Force Lightning not working properly in combat
[CHANGE] Force Jump range increased from `10m` to `15m`
[BALANCE] **Force Push** damage reduced by 15% for PvP balance

> Lightsaber Combat +>Enhanced
[NEW] Enhanced blocking mechanics with *improved animations*
[NEW] **Crystal system overhaul** with rare types:
  - Krayt Dragon Pearls
  - Compressed crystals
  - Ancient Jedi crystals

BACKWARDS COMPATIBILITY:
+ Legacy additions still work with plus sign
- Legacy fixes still work with minus sign
* Legacy changes still work with asterisk
```

## 🎨 **Visual Results**

### NEW items show with:
- Green "NEW" badge
- **Bold**, *italic*, and `code` formatting rendered properly
- Lists with proper bullet points
- Links that are clickable

### FIX items show with:
- Blue "FIX" badge  
- Full markdown rendering support

### CHANGE/BALANCE items show with:
- Purple "CHANGE" or Yellow "BALANCE" badges
- Rich text formatting

## 🔄 **Migration Strategy**

1. **Existing patches** with `+`, `-`, `*` continue to work exactly as before
2. **New patches** can use either format or mix both
3. **Gradual transition** - teams can adopt markdown features as needed
4. **Discord bot** supports both formats automatically

## ✨ **Benefits**

- **Familiar Markdown** syntax that many team members already know
- **Rich formatting** for complex feature descriptions  
- **Backwards compatible** with existing patch notes
- **Better readability** for detailed technical changes
- **Consistent styling** with automatic formatting
- **Links support** for referencing external resources

## 🤖 **Discord Integration**

The Discord bot automatically detects and processes both formats:

### Old Format (still works):
```
+ New lightsaber crystal types
- Fixed Force Lightning bug
* Changed jump range
```

### New Format (enhanced):
```
[NEW] **New lightsaber crystal types** with special effects
[FIX] Fixed Force Lightning not working in `combat scenarios`
[CHANGE] Jump range increased from *10m* to **15m** for better mobility
```

Both formats work seamlessly in Discord and produce properly formatted website updates!