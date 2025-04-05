<?php
/**
 * Plugin Name: MapVibe Jobs Display
 * Description: A simple plugin to display job listings in place of MapVibe integration
 * Version: 1.0.0
 * Author: Your Name
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

class MapVibe_Jobs_Plugin {
    
    public function __construct() {
        // Register activation hook
        register_activation_hook(__FILE__, array($this, 'activate'));
        
        // Enqueue scripts
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    }
    
    /**
     * Plugin activation
     */
    public function activate() {
        // Nothing to do on activation for now
    }
    
    /**
     * Enqueue scripts
     */
    public function enqueue_scripts() {
        // Enqueue the MapVibe Jobs JavaScript
        wp_enqueue_script(
            'mapvibe-jobs',
            plugin_dir_url(__FILE__) . 'js/mapvibe-jobs.js',
            array(),
            '1.0.0',
            true
        );
    }
}

// Initialize the plugin
new MapVibe_Jobs_Plugin();
