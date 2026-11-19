import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_products_category_slug" AS ENUM('water-treatment', 'blending', 'blow-molding-machine', 'filling-machine', 'labeling-machine', 'packaging-machine', 'palletizing-machine', 'co2-mixer', 'depalletizer');
  CREATE TYPE "public"."enum_products_family" AS ENUM('water-filling-machine', 'carbonated-beverages-filling-machine', 'juice-filling-machine', 'glass-bottle-beer-filling-machine', 'auxiliary', 'water-filling-monoblock');
  CREATE TYPE "public"."enum_products_status" AS ENUM('draft', 'published', 'archived');
  CREATE TABLE "products_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "products_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"model" varchar NOT NULL,
  	"category_slug" "enum_products_category_slug" NOT NULL,
  	"family" "enum_products_family" NOT NULL,
  	"category_label" varchar,
  	"image" varchar NOT NULL,
  	"cover_image_id" integer,
  	"video_url" varchar,
  	"heads" varchar,
  	"short_description" varchar NOT NULL,
  	"parameters" jsonb NOT NULL,
  	"sort_order" numeric DEFAULT 0 NOT NULL,
  	"status" "enum_products_status" DEFAULT 'draft' NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "products_id" integer;
  ALTER TABLE "products_description" ADD CONSTRAINT "products_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_highlights" ADD CONSTRAINT "products_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products" ADD CONSTRAINT "products_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_description_order_idx" ON "products_description" USING btree ("_order");
  CREATE INDEX "products_description_parent_id_idx" ON "products_description" USING btree ("_parent_id");
  CREATE INDEX "products_highlights_order_idx" ON "products_highlights" USING btree ("_order");
  CREATE INDEX "products_highlights_parent_id_idx" ON "products_highlights" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");
  CREATE INDEX "products_category_slug_idx" ON "products" USING btree ("category_slug");
  CREATE INDEX "products_family_idx" ON "products" USING btree ("family");
  CREATE INDEX "products_cover_image_idx" ON "products" USING btree ("cover_image_id");
  CREATE INDEX "products_updated_at_idx" ON "products" USING btree ("updated_at");
  CREATE INDEX "products_created_at_idx" ON "products" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_products_id_idx" ON "payload_locked_documents_rels" USING btree ("products_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_products_fk";
   ALTER TABLE "products_description" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "products_highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "products" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "products_description" CASCADE;
  DROP TABLE "products_highlights" CASCADE;
  DROP TABLE "products" CASCADE;
  
  DROP INDEX "payload_locked_documents_rels_products_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "products_id";
  DROP TYPE "public"."enum_products_category_slug";
  DROP TYPE "public"."enum_products_family";
  DROP TYPE "public"."enum_products_status";`)
}
