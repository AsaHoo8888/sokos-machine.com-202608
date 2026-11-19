import * as migration_20261027_144728_initial from './20261027_144728_initial';
import * as migration_20261028_022229_add_posts from './20261028_022229_add_posts';
import * as migration_20261028_024139_post_richtext_media from './20261028_024139_post_richtext_media';
import * as migration_20261028_051626_post_cover_image from './20261028_051626_post_cover_image';
import * as migration_20261028_115156_tracking from './20261028_115156_tracking';
import * as migration_20261119_014515_products from './20261119_014515_products';

export const migrations = [
  {
    up: migration_20261027_144728_initial.up,
    down: migration_20261027_144728_initial.down,
    name: '20261027_144728_initial',
  },
  {
    up: migration_20261028_022229_add_posts.up,
    down: migration_20261028_022229_add_posts.down,
    name: '20261028_022229_add_posts',
  },
  {
    up: migration_20261028_024139_post_richtext_media.up,
    down: migration_20261028_024139_post_richtext_media.down,
    name: '20261028_024139_post_richtext_media',
  },
  {
    up: migration_20261028_051626_post_cover_image.up,
    down: migration_20261028_051626_post_cover_image.down,
    name: '20261028_051626_post_cover_image',
  },
  {
    up: migration_20261028_115156_tracking.up,
    down: migration_20261028_115156_tracking.down,
    name: '20261028_115156_tracking',
  },
  {
    up: migration_20261119_014515_products.up,
    down: migration_20261119_014515_products.down,
    name: '20261119_014515_products'
  },
];
