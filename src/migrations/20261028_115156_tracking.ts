import { sql } from '@payloadcms/db-postgres'
import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" ADD COLUMN "tracking_gtm_id" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "tracking_ga_id" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "tracking_clarity_id" varchar;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings" DROP COLUMN "tracking_gtm_id";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_ga_id";
  ALTER TABLE "site_settings" DROP COLUMN "tracking_clarity_id";`)
}
