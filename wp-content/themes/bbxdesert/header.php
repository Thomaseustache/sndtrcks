<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/reset.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/style.css">
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>
  
    <header class="site-header">
      <?php if ( is_single() ): ?>
        <p class="site-name">
          <a href="<?php bloginfo('home'); ?>"><?php bloginfo('name'); ?></a>
        </p>
        <p class="site-description">
          <?php bloginfo('description'); ?>
        </p>
      <?php else: ?>
        <h1 class="site-name">
          <a href="<?php bloginfo('home'); ?>"><?php bloginfo('name'); ?></a>
        </h1>
        <h2 class="site-description">
          <?php bloginfo('description'); ?>
        </h2>
      <?php endif; ?>
    </header>