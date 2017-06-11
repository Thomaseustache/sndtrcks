<div class="wrapper">

  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
		<?php 
			$url = get_field('youtube_url');
			$query_str = parse_url($url, PHP_URL_QUERY);
			parse_str($query_str, $query_params);
			// echo $query_params['v'];

		?>
      <div <?php post_class(); ?> data-ytid="<?php echo $query_params['v'] ?>">

        <h1 class="post-title"><?php the_title(); ?></h1>

        <div class="player-group">
          <h2><span class="track_name"><?php the_field('track_name'); ?></span><b class="track_author"><?php the_field('track_author'); ?></b></h2>
          <div class="player-thumb" style="background-image: url('<?php echo get_the_post_thumbnail_url( $page->ID, 'large' ); ?>')"></div>
         
          <h2><?php the_field('track_movie'); ?></h2>
        </div>

        <?php the_tags('<p class="post-tags">Tags : ', ', ', '</p>'); ?>


      </div>
      <div class="bg-player" style="background-image: url('<?php echo get_field('background_image')['url']; ?>')"></div>
    <?php endwhile; ?>
  <?php endif; ?>

<?php get_sidebar(); ?>

</div>