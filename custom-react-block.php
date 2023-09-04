<?php
/**
 * Plugin name: Custom Block
 * Description: The Custom Block
 */
function custom_react_block_script_register()
{
wp_enqueue_script('custom-react-block',plugin_dir_url(__FILE__).'custom-react-block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
}
add_action('enqueue_block_editor_assets','custom_react_block_script_register');

?>