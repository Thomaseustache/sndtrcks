<?php get_header(); ?>

  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
      <div <?php post_class(); ?>>

        <h1 class="post-title"><?php the_title(); ?></h1>

        <div class="player-group">
          <h2><span class="track_name"><?php the_field('track_name'); ?></span><b class="track_author"><?php the_field('track_author'); ?></b></h2>
          <div class="player-thumb"><?php echo get_the_post_thumbnail_url( $page->ID, 'large' ); ?></div>
          <div id="player" data-url="<?php the_field('youtube_url'); ?>"><?php the_field('youtube_url'); ?></div>
          <h2><?php the_field('track_movie'); ?></h2>
        </div>

        <?php the_tags('<p class="post-tags">Tags : ', ', ', '</p>'); ?>


      </div>
    <?php endwhile; ?>
  <?php endif; ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>