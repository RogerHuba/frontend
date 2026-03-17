# Patch Notes Automation

This script converts simple text format patch notes into the JSON format used by the website.

## Simple Text Format

Create a text file with this format:

```
Version: 2.1.0
Date: November 20, 2025

AREA_NAME:
+ New feature description
- Bug fix description
* Change/adjustment description

ANOTHER_AREA:
+ Another new feature
- Another bug fix
* Another change
```

### Symbols:
- `+` = New features/additions
- `-` = Bug fixes
- `*` = Changes/adjustments/balance updates

### Area Names:
Common area names you can use:
- JEDI
- COMBAT
- CRAFTING
- PVP
- CREATURES
- PROFESSIONS
- UI/UX
- EVENTS
- MISCELLANEOUS
- PERFORMANCE

## Usage

1. Create your patch notes in a text file (see `sample-patch.txt`)
2. Run the automation script:

```bash
# Navigate to the project root
cd /path/to/frontend

# Run the script
node scripts/patch-notes-automation.js scripts/your-patch-file.txt
```

## Example

```bash
# Using the sample file
node scripts/patch-notes-automation.js scripts/sample-patch.txt
```

This will:
1. Parse your simple text file
2. Convert it to the proper JSON structure
3. Insert it into `src/data/patchNotes.json`
4. Maintain proper chronological order (newest patches first)

## What the Script Does

- ✅ Converts simple text to complex JSON structure
- ✅ Automatically creates year/month entries if needed
- ✅ Inserts patches in chronological order (newest first)
- ✅ Generates proper patch IDs and titles
- ✅ Maps symbols (+, -, *) to proper update types
- ✅ Validates input format and provides helpful error messages

## Tips for Non-Technical Users

1. **Keep it simple**: Just follow the format exactly
2. **Use clear area names**: Stick to common game areas like JEDI, COMBAT, etc.
3. **One line per change**: Each + - or * should be on its own line
4. **Don't forget the colon**: Area names must end with a colon (:)
5. **Check your spacing**: The script is forgiving but consistent spacing helps

## Sample Output

The script will show you:
```
📖 Reading input file...
✅ Parsed patch 2.1.0 for November 20, 2025
🔄 Converted to JSON structure with 4 categories
📝 Inserted patch into existing data
✅ Successfully updated /path/to/patchNotes.json

📊 Summary:
Version: 2.1.0
Date: November 20, 2025
Categories: JEDI, COMBAT, CRAFTING, MISCELLANEOUS
Total updates: 15
```