/**
 * CSV Validation Script for Service Area Files
 * 
 * This script validates the structure and content of service area CSV files.
 * It checks for required fields, format consistency, and common issues.
 * 
 * Usage: node validate-service-area-csv.js [file-path]
 * Example: node validate-service-area-csv.js ../data/city-list.csv
 */

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Define required fields for each file type
const REQUIRED_FIELDS = {
  'city-list.csv': [
    'mpg_city', 
    'mpg_state', 
    'mpg_content', 
    'mpg_parent', 
    'mpg_title', 
    'mpg_meta_description', 
    'mpg_city_state_slug',
    'mpg_service_1',
    'mpg_service_1_slug'
  ],
  'service': [
    'mpg_service', 
    'mpg_city', 
    'mpg_state', 
    'mpg_key_benefit_1', 
    'mpg_key_benefit_1_description',
    'mpg_service_step_1_title',
    'mpg_service_step_1_description',
    'mpg_service_problem',
    'mpg_contact_page_url',
    'mpg_title',
    'mpg_meta_description',
    'mpg_slug',
    'mpg_parent'
  ]
};

// Get file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: Please provide a file path.');
  console.log('Usage: node validate-service-area-csv.js [file-path]');
  console.log('Example: node validate-service-area-csv.js ../data/city-list.csv');
  process.exit(1);
}

// Determine file type based on filename
const fileName = path.basename(filePath);
const fileType = fileName === 'city-list.csv' ? 'city-list.csv' : 'service';

// Read and parse the CSV file
try {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  console.log(`\n=== Validating ${fileName} ===\n`);
  
  // Check if file is empty
  if (records.length === 0) {
    console.error('Error: File is empty or has no data rows.');
    process.exit(1);
  }
  
  console.log(`Found ${records.length} records.`);
  
  // Check for required fields
  const firstRecord = records[0];
  const missingFields = REQUIRED_FIELDS[fileType].filter(field => !firstRecord.hasOwnProperty(field));
  
  if (missingFields.length > 0) {
    console.error('Error: Missing required fields:');
    missingFields.forEach(field => console.error(`  - ${field}`));
    process.exit(1);
  }
  
  console.log('✓ All required fields are present.');
  
  // Validate city-list.csv specific fields
  if (fileType === 'city-list.csv') {
    // Check for city-state-slug format
    const invalidSlugs = records.filter(record => {
      const slug = record.mpg_city_state_slug;
      return !slug || !slug.match(/^[a-z0-9-]+$/);
    });
    
    if (invalidSlugs.length > 0) {
      console.warn('Warning: Found invalid city-state slugs:');
      invalidSlugs.forEach(record => {
        console.warn(`  - ${record.mpg_city}, ${record.mpg_state}: "${record.mpg_city_state_slug}"`);
      });
    } else {
      console.log('✓ All city-state slugs are valid.');
    }
    
    // Check for service slugs format
    let invalidServiceSlugs = [];
    records.forEach(record => {
      for (let i = 1; i <= 11; i++) {
        const serviceField = `mpg_service_${i}`;
        const slugField = `mpg_service_${i}_slug`;
        
        if (record[serviceField] && record[slugField]) {
          if (!record[slugField].match(/^[a-z0-9-]+$/)) {
            invalidServiceSlugs.push({
              city: record.mpg_city,
              service: record[serviceField],
              slug: record[slugField]
            });
          }
        } else if (record[serviceField] && !record[slugField]) {
          console.warn(`Warning: Service "${record[serviceField]}" in ${record.mpg_city} has no slug.`);
        }
      }
    });
    
    if (invalidServiceSlugs.length > 0) {
      console.warn('Warning: Found invalid service slugs:');
      invalidServiceSlugs.forEach(item => {
        console.warn(`  - ${item.city}: "${item.service}" has invalid slug "${item.slug}"`);
      });
    } else {
      console.log('✓ All service slugs are valid.');
    }
    
    // Check for duplicate city-state combinations
    const cityStateCombos = {};
    records.forEach(record => {
      const combo = `${record.mpg_city}-${record.mpg_state}`;
      if (cityStateCombos[combo]) {
        cityStateCombos[combo]++;
      } else {
        cityStateCombos[combo] = 1;
      }
    });
    
    const duplicates = Object.entries(cityStateCombos)
      .filter(([_, count]) => count > 1)
      .map(([combo]) => combo);
    
    if (duplicates.length > 0) {
      console.error('Error: Found duplicate city-state combinations:');
      duplicates.forEach(combo => console.error(`  - ${combo}`));
    } else {
      console.log('✓ No duplicate city-state combinations found.');
    }
  }
  
  // Validate service-specific CSV fields
  if (fileType === 'service') {
    // Check for parent field matching city-state-slug format
    const invalidParents = records.filter(record => {
      const parent = record.mpg_parent;
      return !parent || !parent.match(/^[a-z0-9-]+$/);
    });
    
    if (invalidParents.length > 0) {
      console.warn('Warning: Found invalid parent slugs:');
      invalidParents.forEach(record => {
        console.warn(`  - ${record.mpg_city}, ${record.mpg_state}: "${record.mpg_parent}"`);
      });
    } else {
      console.log('✓ All parent slugs are valid.');
    }
    
    // Check for service slug format
    const invalidSlugs = records.filter(record => {
      const slug = record.mpg_slug;
      return !slug || !slug.match(/^[a-z0-9-]+$/);
    });
    
    if (invalidSlugs.length > 0) {
      console.warn('Warning: Found invalid service slugs:');
      invalidSlugs.forEach(record => {
        console.warn(`  - ${record.mpg_city}, ${record.mpg_state}: "${record.mpg_slug}"`);
      });
    } else {
      console.log('✓ All service slugs are valid.');
    }
    
    // Check for duplicate city-service combinations
    const cityServiceCombos = {};
    records.forEach(record => {
      const combo = `${record.mpg_city}-${record.mpg_state}-${record.mpg_service}`;
      if (cityServiceCombos[combo]) {
        cityServiceCombos[combo]++;
      } else {
        cityServiceCombos[combo] = 1;
      }
    });
    
    const duplicates = Object.entries(cityServiceCombos)
      .filter(([_, count]) => count > 1)
      .map(([combo]) => combo);
    
    if (duplicates.length > 0) {
      console.error('Error: Found duplicate city-service combinations:');
      duplicates.forEach(combo => console.error(`  - ${combo}`));
    } else {
      console.log('✓ No duplicate city-service combinations found.');
    }
    
    // Check for title and meta description length
    const longTitles = records.filter(record => record.mpg_title && record.mpg_title.length > 60);
    const longDescriptions = records.filter(record => record.mpg_meta_description && record.mpg_meta_description.length > 160);
    
    if (longTitles.length > 0) {
      console.warn('Warning: Found titles longer than 60 characters:');
      longTitles.forEach(record => {
        console.warn(`  - ${record.mpg_city}, ${record.mpg_state}: ${record.mpg_title.length} chars`);
      });
    } else {
      console.log('✓ All titles are within the recommended length.');
    }
    
    if (longDescriptions.length > 0) {
      console.warn('Warning: Found meta descriptions longer than 160 characters:');
      longDescriptions.forEach(record => {
        console.warn(`  - ${record.mpg_city}, ${record.mpg_state}: ${record.mpg_meta_description.length} chars`);
      });
    } else {
      console.log('✓ All meta descriptions are within the recommended length.');
    }
  }
  
  console.log('\nValidation completed successfully!');
  
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error(`Error: File not found: ${filePath}`);
  } else if (error.message.includes('Invalid Record Length')) {
    console.error('Error: CSV format is invalid. Check for missing commas or unescaped quotes.');
  } else {
    console.error('Error:', error.message);
  }
  process.exit(1);
}
