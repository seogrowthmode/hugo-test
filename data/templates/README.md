# Service Area CSV Templates

This directory contains template CSV files that you can use as a starting point for customizing the service area functionality. These templates demonstrate the proper structure and content format for the CSV files used by the service area system.

## Files Included

1. **city-list-template.csv** - Template for the main city list file
2. **service-template.csv** - Template for service-specific files

## How to Use These Templates

### For the City List

1. Make a copy of `city-list-template.csv` and rename it to `city-list.csv`
2. Place it in the `data` directory (one level up from this templates folder)
3. Replace the example data with your own cities, services, and content
4. Ensure you maintain the correct CSV format and column headers

### For Service-Specific Files

1. Make a copy of `service-template.csv` for each service you offer
2. Rename each copy to match your service slug (e.g., `ac-repair.csv`, `heating-installation.csv`)
3. Place these files in the `data` directory
4. Customize the content for each city where you offer the service
5. Ensure you maintain the correct CSV format and column headers

## Important Notes

- The column headers must match exactly what's shown in the templates
- Replace `[COMPANY NAME]` with your actual business name
- Create unique, location-specific content for each city to avoid duplicate content issues
- Ensure all slugs in the service-specific files match the slugs in the city list file
- The `mpg_parent` field in service files should match the `mpg_city_state_slug` of the corresponding city

## CSV Field Guidelines

### City List CSV

- **mpg_city**: Full city name (e.g., "Boston")
- **mpg_state**: Two-letter state abbreviation (e.g., "MA")
- **mpg_content**: Brief description of services in this city
- **mpg_parent**: Typically "service-areas" (parent page in site hierarchy)
- **mpg_title**: SEO title for the city page (keep under 60 characters)
- **mpg_meta_description**: Meta description (keep under 160 characters)
- **mpg_city_state_slug**: URL-friendly slug (e.g., "boston-ma")
- **mpg_service_X/mpg_service_X_slug**: Service name and slug pairs (up to 11 services)

### Service-Specific CSV

- **mpg_service**: Service name (e.g., "AC Installation")
- **mpg_city/mpg_state**: Location information
- **mpg_key_benefit_X/mpg_key_benefit_X_description**: Key benefits (up to 3)
- **mpg_service_step_X_title/mpg_service_step_X_description**: Service steps (up to 3)
- **mpg_local_commitment_X/mpg_local_commitment_X_description**: Local commitments (up to 3)
- **mpg_service_problem**: Common problems solved (location-specific)
- **mpg_contact_page_url**: Contact page URL
- **mpg_address/mpg_phone_number/mpg_email**: Contact information
- **mpg_faq_answer_X**: FAQ answers (up to 5, location-specific)
- **mpg_year**: Current year (update annually)
- **mpg_business_name**: Your business name
- **mpg_canonical_url**: Canonical URL for SEO
- **mpg_title**: SEO title (keep under 60 characters)
- **mpg_meta_description**: Meta description (keep under 160 characters)
- **mpg_slug**: Service slug (must match slug in city list)
- **testimonial_X/mpg_testimonial_X**: Testimonials (location-specific)
- **mpg_parent**: City-state slug this service belongs to

For more detailed information on customizing these files and implementing programmatic SEO, refer to the `PROGRAMMATIC_SEO_GUIDE.md` in the root directory.
