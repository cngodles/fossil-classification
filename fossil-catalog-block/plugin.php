<?php
/**
 * Plugin Name: Gutenburg Catalog Block
 * Author: Clinton N. Godlesky
 * Description: Adds a custom block for adding catalog numbers for specimens.
 * Version: 1.0.1
 */
  
function loadMyBlock() {
  wp_enqueue_script(
    'my-new-block',
    plugin_dir_url(__FILE__) . 'catalog-block-build.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'loadMyBlock');
