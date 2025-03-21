# Service Area Scripts

This directory contains utility scripts to help you work with the service area functionality.

## CSV Validation Script

The `validate-service-area-csv.js` script helps you validate your service area CSV files to ensure they are properly formatted and contain all required fields.

### Prerequisites

The script requires Node.js and the `csv-parse` package. If you haven't already installed the dependencies, run:

```bash
npm install csv-parse
```

### Usage

#### Direct Node.js Usage

```bash
node validate-service-area-csv.js [file-path]
```

Example:

```bash
# Validate the city list CSV
node validate-service-area-csv.js ../data/city-list.csv

# Validate a service-specific CSV
node validate-service-area-csv.js ../data/ac-installation.csv
```

#### Using Convenience Scripts

For easier usage, we've included convenience scripts for both Windows and Unix-based systems:

**Windows (CMD/PowerShell):**
```
validate-csv.bat [file-path]
```

**Unix/Linux/Mac (Bash):**
```
./validate-csv.sh [file-path]
```

If you run these scripts without a file path parameter, they will display available CSV files and prompt you to enter a path.

> Note: On Unix-based systems, you may need to make the script executable first:
> ```bash
> chmod +x validate-csv.sh
> ```

### What the Script Checks

The script performs the following validations:

#### For All CSV Files:
- Presence of required fields
- Valid file format
- Non-empty data

#### For City List CSV:
- Valid city-state slug format (lowercase, hyphens, alphanumeric)
- Valid service slug format
- No duplicate city-state combinations

#### For Service-Specific CSVs:
- Valid parent slug format (should match a city-state slug)
- Valid service slug format
- No duplicate city-service combinations
- Title length (warns if over 60 characters)
- Meta description length (warns if over 160 characters)

### Error and Warning Messages

The script provides two types of feedback:

- **Errors**: Critical issues that should be fixed before deploying (e.g., missing required fields, duplicate entries)
- **Warnings**: Potential issues that might affect SEO but won't break functionality (e.g., long titles, invalid slug formats)

### Example Output

```
=== Validating ac-installation.csv ===

Found 25 records.
✓ All required fields are present.
✓ All parent slugs are valid.
✓ All service slugs are valid.
✓ No duplicate city-service combinations found.
Warning: Found titles longer than 60 characters:
  - Boston, MA: 65 chars
✓ All meta descriptions are within the recommended length.

Validation completed successfully!
```

## Best Practices

1. **Validate Before Deployment**: Always run the validation script before deploying changes to your service area CSV files.

2. **Fix Critical Errors**: Address all errors (not just warnings) before deploying.

3. **Batch Validation**: When making changes to multiple files, validate each file individually.

4. **Regular Maintenance**: Run validation periodically, especially after making bulk changes or updates.

## Troubleshooting

If you encounter issues with the validation script:

1. **CSV Format Issues**: Ensure your CSV files are properly formatted with consistent delimiters and properly escaped quotes.

2. **Missing Fields**: Check that all required fields are present in your CSV files.

3. **Node.js Version**: Ensure you're using a compatible version of Node.js (v12 or higher recommended).

4. **Package Dependencies**: Verify that the `csv-parse` package is installed.
