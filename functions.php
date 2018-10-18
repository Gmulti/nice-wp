<?php

add_action('wp_enqueue_scripts', 'enqueue_scripts');

function enqueue_scripts()
{
    wp_enqueue_script('bundle', get_template_directory_uri() . '/dist/bundle.js');

    wp_localize_script('bundle', 'REACT_ENV', array(
        'baseUrl'         => get_bloginfo('url'),
    ));
}
