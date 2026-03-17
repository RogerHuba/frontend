#!/usr/bin/env node

/**
 * Patch Notes Automation Script
 * Converts simple text format to JSON and updates patchNotes.json
 */

const fs = require('fs');
const path = require('path');

/**
 * Parse simple text format into structured data
 * 
 * Format:
 * Version: 2.1.0
 * Date: November 20, 2025
 * 
 * AREA_NAME:
 * + Addition description
 * - Bug fix description
 * * Change description
 */
function parseSimpleFormat(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);
  
  let version = '';
  let date = '';
  let currentArea = '';
  let currentHeading = null;
  let currentSubHeading = null;
  let currentSubSubHeading = null;
  const categories = {};
  
  function getCurrentTarget() {
    if (currentSubSubHeading) return currentSubSubHeading;
    if (currentSubHeading) return currentSubHeading;
    if (currentHeading) return currentHeading;
    if (currentArea && categories[currentArea]) {
      return categories[currentArea];
    }
    return null;
  }
  
  function parseHeadingLine(line) {
    const headingMatch = line.match(/^(>{1,3})\s*(.+)$/);
    if (!headingMatch) return null;
    
    const level = headingMatch[1].length; // 1, 2, or 3
    const content = headingMatch[2].trim();
    
    // Parse tags (+> format)
    const tags = [];
    const tagMatches = content.match(/\+>([^+>]+)/g);
    if (tagMatches) {
      tagMatches.forEach(tag => {
        tags.push(tag.replace('+>', '').trim());
      });
    }
    
    // Remove tags from title
    const title = content.replace(/\+>[^+>]+/g, '').trim();
    
    return { level, title, tags };
  }
  
  for (const line of lines) {
    // Parse version
    if (line.startsWith('Version:')) {
      version = line.replace('Version:', '').trim();
      continue;
    }
    
    // Parse date
    if (line.startsWith('Date:')) {
      date = line.replace('Date:', '').trim();
      continue;
    }
    
    // Parse area header (ends with colon, no > symbols)
    if (line.endsWith(':') && !line.includes('Version') && !line.includes('Date') && !line.includes('>')) {
      currentArea = line.slice(0, -1).trim();
      if (!categories[currentArea]) {
        categories[currentArea] = {
          description: null,
          headings: [],
          updates: []
        };
      }
      // Reset heading context
      currentHeading = null;
      currentSubHeading = null;
      currentSubSubHeading = null;
      continue;
    }
    
    // Parse heading lines (>, >>, >>>)
    const headingInfo = parseHeadingLine(line);
    if (headingInfo) {
      const newHeading = {
        level: headingInfo.level,
        title: headingInfo.title,
        tags: headingInfo.tags.length > 0 ? headingInfo.tags : undefined,
        updates: [],
        subHeadings: []
      };
      
      if (headingInfo.level === 1) {
        // Main heading
        if (currentArea && categories[currentArea]) {
          categories[currentArea].headings.push(newHeading);
          currentHeading = newHeading;
          currentSubHeading = null;
          currentSubSubHeading = null;
        }
      } else if (headingInfo.level === 2) {
        // Sub heading
        if (currentHeading) {
          currentHeading.subHeadings.push(newHeading);
          currentSubHeading = newHeading;
          currentSubSubHeading = null;
        }
      } else if (headingInfo.level === 3) {
        // Sub-sub heading
        if (currentSubHeading) {
          currentSubHeading.subHeadings = currentSubHeading.subHeadings || [];
          currentSubHeading.subHeadings.push(newHeading);
          currentSubSubHeading = newHeading;
        }
      }
      continue;
    }
    
    // Parse description (starts with -D)
    if (line.startsWith('-D ')) {
      const description = line.slice(3).trim(); // Remove '-D ' prefix
      const target = getCurrentTarget();
      if (target) {
        if (target.description !== undefined) {
          target.description = description;
        } else if (currentArea && categories[currentArea]) {
          categories[currentArea].description = description;
        }
      }
      continue;
    }
    
    // Parse update items - now supporting markdown keys
    if (line.startsWith('[NEW]') || line.startsWith('[BUG]') || line.startsWith('[CHANGE]') || 
        line.startsWith('[FIX]') || line.startsWith('[BALANCE]') || line.startsWith('[CONTENT]')) {
      
      let type = 'change';
      let description = '';
      
      if (line.startsWith('[NEW]')) {
        type = 'addition';
        description = line.replace('[NEW]', '').trim();
      } else if (line.startsWith('[BUG]') || line.startsWith('[FIX]')) {
        type = 'fix';
        description = line.replace(/^\[(BUG|FIX)\]/, '').trim();
      } else if (line.startsWith('[CHANGE]')) {
        type = 'change';
        description = line.replace('[CHANGE]', '').trim();
      } else if (line.startsWith('[BALANCE]')) {
        type = 'balance';
        description = line.replace('[BALANCE]', '').trim();
      } else if (line.startsWith('[CONTENT]')) {
        type = 'content';
        description = line.replace('[CONTENT]', '').trim();
      }
      
      const update = {
        type,
        description,
        markdown: true // Flag that this uses markdown
      };
      
      const target = getCurrentTarget();
      if (target && target.updates) {
        target.updates.push(update);
      }
      continue;
    }
    
    // Parse legacy update items (for backwards compatibility)
    if ((line.startsWith('+') || line.startsWith('-') || line.startsWith('*')) && !line.startsWith('-D')) {
      const symbol = line[0];
      const description = line.slice(1).trim();
      
      let type;
      switch (symbol) {
        case '+':
          type = 'addition';
          break;
        case '-':
          type = 'fix';
          break;
        case '*':
          type = 'change';
          break;
        default:
          type = 'change';
      }
      
      const update = {
        type,
        description,
        markdown: false // Legacy format
      };
      
      const target = getCurrentTarget();
      if (target && target.updates) {
        target.updates.push(update);
      }
    }
  }
  
  return { version, date, categories };
}

/**
 * Convert parsed data to full JSON structure
 */
function convertToJsonStructure(parsedData) {
  const { version, date, categories } = parsedData;
  
  // Create the patch object
  const patch = {
    id: `Infinity ${version} Patch – ${date}`,
    version: version,
    date: date,
    title: `Infinity ${version} Patch – ${date}`,
    categories: []
  };
  
  // Convert categories
  for (const [areaName, categoryData] of Object.entries(categories)) {
    if (categoryData.updates.length > 0 || categoryData.description || categoryData.headings.length > 0) {
      const category = {
        area: areaName,
        updates: categoryData.updates
      };
      
      // Add description if it exists
      if (categoryData.description) {
        category.description = categoryData.description;
      }
      
      // Add headings if they exist
      if (categoryData.headings.length > 0) {
        category.headings = categoryData.headings;
      }
      
      patch.categories.push(category);
    }
  }
  
  return patch;
}

/**
 * Insert new patch into existing patch notes JSON
 */
function insertPatchIntoJson(newPatch, existingData) {
  const patchDate = new Date(newPatch.date);
  const year = patchDate.getFullYear().toString();
  const month = patchDate.toLocaleString('en-US', { month: 'long' });
  
  // Find or create year
  let yearData = existingData.find(y => y.year === year);
  if (!yearData) {
    yearData = { year, months: [] };
    // Insert year in chronological order (newest first)
    const insertIndex = existingData.findIndex(y => parseInt(y.year) < parseInt(year));
    if (insertIndex === -1) {
      existingData.push(yearData);
    } else {
      existingData.splice(insertIndex, 0, yearData);
    }
  }
  
  // Find or create month
  let monthData = yearData.months.find(m => m.month === month);
  if (!monthData) {
    monthData = { month, patches: [] };
    // Insert month in reverse chronological order (newest first)
    const monthOrder = ['December', 'November', 'October', 'September', 'August', 'July', 
                       'June', 'May', 'April', 'March', 'February', 'January'];
    const insertIndex = yearData.months.findIndex(m => 
      monthOrder.indexOf(m.month) > monthOrder.indexOf(month)
    );
    if (insertIndex === -1) {
      yearData.months.push(monthData);
    } else {
      yearData.months.splice(insertIndex, 0, monthData);
    }
  }
  
  // Insert patch at the beginning (newest first)
  monthData.patches.unshift(newPatch);
  
  return existingData;
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
Usage: node patch-notes-automation.js <input-file>

Example input file format:
Version: 2.1.0
Date: November 20, 2025

JEDI:
+ Added new lightsaber crystal types
- Fixed Force Lightning not working properly
* Changed Force Jump range from 10m to 15m

COMBAT:
- Fixed rifle accuracy bug
* Reduced pistol damage by 5%
+ Added new combat animations
    `);
    process.exit(1);
  }
  
  const inputFile = args[0];
  const patchNotesPath = path.join(__dirname, '../src/data/patchNotes.json');
  
  try {
    // Read input file
    if (!fs.existsSync(inputFile)) {
      console.error(`Error: Input file "${inputFile}" not found`);
      process.exit(1);
    }
    
    const inputText = fs.readFileSync(inputFile, 'utf8');
    console.log('📖 Reading input file...');
    
    // Parse the simple format
    const parsedData = parseSimpleFormat(inputText);
    console.log(`✅ Parsed patch ${parsedData.version} for ${parsedData.date}`);
    
    // Convert to JSON structure
    const newPatch = convertToJsonStructure(parsedData);
    console.log(`🔄 Converted to JSON structure with ${newPatch.categories.length} categories`);
    
    // Read existing patch notes
    let existingData = [];
    if (fs.existsSync(patchNotesPath)) {
      existingData = JSON.parse(fs.readFileSync(patchNotesPath, 'utf8'));
    }
    
    // Insert new patch
    const updatedData = insertPatchIntoJson(newPatch, existingData);
    console.log('📝 Inserted patch into existing data');
    
    // Write back to file
    fs.writeFileSync(patchNotesPath, JSON.stringify(updatedData, null, 2));
    console.log(`✅ Successfully updated ${patchNotesPath}`);
    
    // Display summary
    console.log('\n📊 Summary:');
    console.log(`Version: ${newPatch.version}`);
    console.log(`Date: ${newPatch.date}`);
    console.log(`Categories: ${newPatch.categories.map(c => c.area).join(', ')}`);
    console.log(`Total updates: ${newPatch.categories.reduce((sum, c) => sum + c.updates.length, 0)}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { parseSimpleFormat, convertToJsonStructure, insertPatchIntoJson };