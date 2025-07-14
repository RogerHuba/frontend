import fs from 'fs';
import path from 'path';

// Read the real resource data from infinity_transformed.json
const infinityData = JSON.parse(fs.readFileSync('./src/data/infinity_transformed.json', 'utf8'));

console.log(`Found ${infinityData.resources.length} resources in infinity_transformed.json`);

// Convert infinity data to resources.json format
const convertedResources = {
  resources: infinityData.resources.map(resource => ({
    name: resource.name.value,
    type: resource.type.value,
    overallQuality: resource.overallQuality,
    stats: resource.stats,
    lastSeen: resource.lastSeen,
    planet: resource.planet
  }))
};

console.log(`Converting ${convertedResources.resources.length} resources from infinity format to resources.json format`);

// Show first few converted resources for verification
console.log('\nFirst 3 converted resources:');
convertedResources.resources.slice(0, 3).forEach((resource, index) => {
  console.log(`${index + 1}. ${resource.name} (${resource.type}) - ${resource.planet} - Last seen: ${resource.lastSeen}`);
});

// Write the converted data to resources.json
fs.writeFileSync('./src/data/resources.json', JSON.stringify(convertedResources, null, 2));

console.log(`\nSuccessfully replaced resources.json with ${convertedResources.resources.length} real resources from infinity_transformed.json`);
