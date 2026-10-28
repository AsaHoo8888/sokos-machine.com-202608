import * as migration_20261027_144728_initial from './20261027_144728_initial';
import * as migration_20261028_022229_add_posts from './20261028_022229_add_posts';
import * as migration_20261028_024139_post_richtext_media from './20261028_024139_post_richtext_media';
import * as migration_20261028_051626_post_cover_image from './20261028_051626_post_cover_image';

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
    name: '20261028_051626_post_cover_image'
  },
];
