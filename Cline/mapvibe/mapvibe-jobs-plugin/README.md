# MapVibe Jobs Display Plugin

This WordPress plugin provides a simple solution to display job listings on your website, replacing the MapVibe integration that was experiencing issues.

## Installation

1. Download the plugin files as a ZIP archive
2. Upload the ZIP file through the WordPress admin panel (Plugins > Add New > Upload Plugin)
3. Activate the plugin through the 'Plugins' menu in WordPress

## Usage

The plugin automatically adds JavaScript that will populate any div with the ID `mapvibe-recent-jobs-container` with job listings.

Your website already has this div in place on the About page, so the job listings should appear there automatically after activating the plugin.

## Customizing Job Listings

To customize the job listings, edit the `js/mapvibe-jobs.js` file in the plugin directory. You can modify the `jobs` array to add, remove, or change job listings.

Each job listing should have the following format:

```javascript
{
  title: "Job Title",
  location: "Job Location",
  description: "Job Description",
  applyLink: "URL to application page"
}
```

## Support

If you need assistance with this plugin, please contact your website administrator.
