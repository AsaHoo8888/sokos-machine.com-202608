import { createDirectus, rest, staticToken } from "@directus/sdk";

export type DirectusSchema = {
  global_settings: {
    id: string;
    site_name: string;
  }[];
  pages: {
    id: string;
    title: string;
    slug: string;
    status: "draft" | "published" | "archived";
    seo_title?: string | null;
    seo_description?: string | null;
  }[];
};

const directusUrl = process.env.DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_STATIC_TOKEN;

if (!directusUrl) {
  throw new Error("DIRECTUS_URL is not configured.");
}

export const directus = createDirectus<DirectusSchema>(directusUrl)
  .with(staticToken(directusToken ?? ""))
  .with(rest());
