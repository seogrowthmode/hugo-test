# Programmatic SEO Guide for Service Area Pages

This guide explains how to leverage the programmatic SEO capabilities of the service area functionality in this boilerplate. By customizing the CSV data files, organizations can easily create location-based service pages optimized for search engines.

## Table of Contents

- [System Overview](#system-overview)
- [CSV Data Structure](#csv-data-structure)
- [Customization Guide](#customization-guide)
- [SEO Best Practices](#seo-best-practices)
- [Advanced Strategies](#advanced-strategies)
- [Implementation Workflow](#implementation-workflow)
- [Monitoring and Optimization](#monitoring-and-optimization)
- [Troubleshooting](#troubleshooting)

## System Overview

The service area system generates three types of pages:

1. **Main Service Area Page** (`/service-area`)
   - Lists all cities grouped by state
   - Provides an overview of service coverage

2. **City Service Page** (`/service-area/[city-state-slug]`)
   - Shows all services available in a specific city
   - Creates location-specific landing pages

3. **Service Detail Page** (`/service-area/[city-state-slug]/[service-slug]`)
   - Provides detailed information about a specific service in a specific city
   - Targets specific service+location keywords

This hierarchical structure creates a powerful SEO architecture that targets location-specific service keywords, improving visibility in local search results.

## CSV Data Structure

The system relies on two types of CSV files:

### 1. City List CSV (`city-list.csv`)

This file defines all service locations and the services available in each location:

```
Key Columns:
- mpg_city: City name (e.g., "Philadelphia")
- mpg_state: State abbreviation (e.g., "PA")
- mpg_content: Brief description of services in this city
- mpg_parent: Parent page (typically "service-areas")
- mpg_title: SEO title for the city page
- mpg_meta_description: Meta description for the city page
- mpg_city_state_slug: URL slug for the city page (e.g., "philadelphia-pa")
- mpg_service_X/mpg_service_X_slug: Service names and slugs (up to 11 services)
```

### 2. Service-Specific CSVs (e.g., `ac-installation.csv`)

These files contain detailed information about a specific service across different locations:

```
Key Columns:
- mpg_service: Service name (e.g., "AC Installation")
- mpg_city/mpg_state: Location information
- mpg_key_benefit_X/mpg_key_benefit_X_description: Key benefits (up to 3)
- mpg_service_step_X_title/mpg_service_step_X_description: Service steps (up to 3)
- mpg_local_commitment_X/mpg_local_commitment_X_description: Local commitments (up to 3)
- mpg_service_problem: Common problems solved
- mpg_contact_page_url: Contact page URL
- mpg_address/mpg_phone_number/mpg_email: Contact information
- mpg_faq_answer_X: FAQ answers (up to 5)
- mpg_year: Current year
- mpg_business_name: Business name
- mpg_canonical_url: Canonical URL
- mpg_title: SEO title
- mpg_meta_description: Meta description
- mpg_slug: Service slug
- testimonial_X/mpg_testimonial_X: Testimonials
- mpg_parent: Parent page slug
```

## Customization Guide

### Step 1: Customize the City List CSV

1. **Identify Service Areas**:
   - Determine all cities/locations where your organization offers services
   - Consider market size, competition, and business priorities

2. **Create City Entries**:
   - Fill in basic information for each city (name, state, etc.)
   - Create SEO-friendly slugs for each city (e.g., "new-york-ny")
   - Write unique, location-specific meta titles and descriptions
   - List all services available in each location

   Example row:
   ```
   mpg_city,mpg_state,mpg_content,mpg_parent,mpg_title,mpg_meta_description,mpg_city_state_slug,mpg_service_1,mpg_service_1_slug,...
   "Boston","MA","Top HVAC services in Boston, MA from ABC Company. Reliable solutions for all your heating and cooling needs.","service-areas","HVAC Services in Boston, MA | ABC Company","Comprehensive HVAC services in Boston, MA by ABC Company","boston-ma","AC Installation","ac-installation",...
   ```

3. **Add Services for Each City**:
   - Include up to 11 services per city (mpg_service_1 through mpg_service_11)
   - Ensure service names and slugs are consistent across all cities
   - Use descriptive service names that include keywords

### Step 2: Create Service-Specific CSVs

1. **Create a CSV for Each Service**:
   - Name the file after the service slug (e.g., `hvac-repair.csv`)
   - Include entries for each city where the service is offered

2. **Customize Service Content**:
   - Write unique, location-specific content for each city
   - Include city name in descriptions where appropriate
   - Highlight location-specific benefits and commitments
   - Create city-specific FAQs and testimonials

   Example row:
   ```
   mpg_service,mpg_city,mpg_state,mpg_key_benefit_1,mpg_key_benefit_1_description,...
   "AC Installation","Boston","MA","Energy Efficiency","Our systems provide optimal energy efficiency for Boston's variable climate",...
   ```

3. **Optimize for Local Relevance**:
   - Reference local climate conditions
   - Mention neighborhood-specific information
   - Include local regulations or requirements
   - Address common problems specific to the area

### Step 3: Understand the Fallback Mechanism

The system includes a smart fallback mechanism:

1. **Primary Data Source**: The system first looks for a service-specific CSV file matching the service slug.

2. **Fallback to AC Installation**: If no service-specific CSV exists, it falls back to `ac-installation.csv`.

3. **Generic Fallback**: If neither exists, it generates generic content based on the city and service name.

This allows you to:
- Start with a single service CSV and gradually add more as needed
- Use `ac-installation.csv` as a template for other services
- Ensure all pages have content even before you've created custom content

## SEO Best Practices

### Title Tags and Meta Descriptions

1. **Title Tags**:
   - Include location + service keywords (e.g., "AC Installation in Boston, MA")
   - Keep titles under 60 characters
   - Include brand name (e.g., "| ABC Company")
   - Use a consistent format across all pages

2. **Meta Descriptions**:
   - Include location + service keywords naturally
   - Keep descriptions under 160 characters
   - Include a value proposition or call to action
   - Make each description unique

### Content Optimization

1. **Location-Specific Content**:
   - Include city name in headings and throughout content
   - Reference local landmarks, neighborhoods, or climate conditions
   - Address location-specific problems or needs
   - Include location-specific testimonials

2. **Structured Content**:
   - Use clear headings and subheadings
   - Break content into scannable sections
   - Include lists, steps, and FAQs
   - Ensure content is comprehensive (1000+ words for primary pages)

### Technical SEO

1. **URL Structure**:
   - Use consistent URL patterns (e.g., `/service-area/boston-ma/ac-installation`)
   - Keep URLs short and descriptive
   - Use hyphens to separate words
   - Include location and service keywords

2. **Canonical URLs**:
   - Use the `mpg_canonical_url` field to manage duplicate content
   - Set canonical URLs for similar service pages

3. **Internal Linking**:
   - Link between related service pages
   - Link from city pages to service pages
   - Include breadcrumb navigation
   - Use descriptive anchor text

## Advanced Strategies

### Content Scaling

To efficiently scale content across many locations:

1. **Template Approach**:
   - Create templates with placeholders for location names
   - Develop modular content blocks that can be reused
   - Use conditional logic to include/exclude sections based on location

2. **Tiered Content Strategy**:
   - Tier 1: Major markets (fully custom content)
   - Tier 2: Secondary markets (semi-custom content)
   - Tier 3: Smaller markets (template-based content)

3. **Content Rotation**:
   - Create multiple versions of key sections
   - Rotate content across similar locations
   - Update content periodically to keep it fresh

### Local Relevance Enhancement

1. **Local Data Integration**:
   - Include local climate data
   - Reference local building codes or regulations
   - Mention local utility companies or rebate programs

2. **Seasonal Content**:
   - Adjust content based on seasonal needs
   - Highlight different services during relevant seasons
   - Update content for seasonal promotions

3. **Competitive Differentiation**:
   - Research competitors in each location
   - Highlight unique selling points for each market
   - Address specific competitor weaknesses

### Schema Markup

Implement schema markup for:
- Local Business
- Service
- FAQ
- Review/Testimonial

This enhances search result appearance and can improve click-through rates.

## Template Files

To help you get started, we've provided template CSV files in the `data/templates` directory:

1. **city-list-template.csv** - Template for the main city list file
2. **service-template.csv** - Template for service-specific files
3. **README.md** - Detailed instructions for using the templates

These templates include example data that demonstrates the proper structure and content format. You can use them as a starting point for creating your own CSV files.

## Implementation Workflow

1. **Initial Setup**:
   - Copy the template files from `data/templates` to the `data` directory
   - Rename `city-list-template.csv` to `city-list.csv`
   - Rename `service-template.csv` to match your service slug (e.g., `ac-installation.csv`)
   - Customize the CSV files with your own data
   - Test the generation of pages

2. **Content Expansion**:
   - Add more service-specific CSVs as needed
   - Enhance content for high-priority locations
   - Implement schema markup

3. **Ongoing Maintenance**:
   - Update content seasonally or as services change
   - Add new locations as your service area expands
   - Monitor performance and enhance underperforming pages

## Monitoring and Optimization

1. **Performance Tracking**:
   - Monitor rankings for location+service keywords
   - Track organic traffic to service area pages
   - Measure conversion rates by location

2. **Content Enhancement**:
   - Identify high-performing pages and replicate success
   - Improve content for underperforming pages
   - Add more FAQs based on search queries

3. **Expansion Opportunities**:
   - Identify new location opportunities
   - Add new services to existing locations
   - Expand content depth for high-value pages

## Troubleshooting

### Common Issues

1. **Missing Pages**:
   - Verify city and service slugs match between CSV files
   - Check for typos in file names or slugs
   - Ensure CSV files are properly formatted

2. **Duplicate Content**:
   - Use canonical URLs for similar pages
   - Ensure each location has some unique content
   - Vary content structure across similar pages

3. **Poor Performance**:
   - Check for thin or generic content
   - Ensure proper keyword usage in titles and headings
   - Verify internal linking structure

### CSV Validation

We've included a validation script to help you check your CSV files for common issues:

```bash
# Navigate to the scripts directory
cd scripts

# Run the validation script on a CSV file
node validate-service-area-csv.js ../data/city-list.csv
node validate-service-area-csv.js ../data/ac-installation.csv
```

The script checks for:
1. Required fields
2. Valid slug formats
3. Duplicate entries
4. Title and meta description length
5. Other common formatting issues

Always validate your CSV files before deploying changes to ensure proper page generation.

---

By following this guide, you can effectively leverage the programmatic SEO capabilities of the service area functionality to create a robust network of location-based service pages optimized for search engines.
