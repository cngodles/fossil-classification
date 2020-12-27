<?php
/**
 * Plugin Name: Fossid ID Card Block
 * Author: Clinton N. Godlesky
 * Description: Adds a custom block for adding scientific classification for a specimen.
 * Version: 1.0.0
 */

function fossil_id_gutenberg_blocks(){
  wp_register_script(
    'fossil-id-blocks-js',
    plugin_dir_url(__FILE__) . '/build/index.js', 
    array('wp-blocks','wp-editor', 'wp-block-editor', 'wp-components', 'wp-data')
  );
  wp_register_style(
    'fossil-id-blocks-css',
    plugin_dir_url(__FILE__) . 'css/style-fossil-id-editor.css',
    array( 'wp-edit-blocks' )
  );
  
  register_block_type(
    'fossil-id/basic-block-01', array(
      'editor_style' => 'fossil-id-blocks-css',
      'editor_script' => 'fossil-id-blocks-js'
    )
  );
}
add_action( 'init', 'fossil_id_gutenberg_blocks' );

function fossil_id_block_js() {
    // Register the block editor script.
    wp_register_script( 'fossil-id-block-js', plugin_dir_url(__FILE__) . 'gutenberg.modifications.js', 
											 [ 'wp-blocks', 'wp-edit-post' ]
											);
    // register block editor script.
    register_block_type( 'remove/block-style', [
        'editor_script' => 'fossil-id-block-js',
    ] );
}
add_action( 'init', 'fossil_id_block_js' );



function fossil_id_register_styles() {
	wp_enqueue_style( 'fossil-id-box-style', plugin_dir_url(__FILE__) . 'css/fossil-id-box.css', array(), $theme_version ); 
}
add_action( 'wp_enqueue_scripts', 'fossil_id_register_styles' );
