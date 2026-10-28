import type { Access, CollectionConfig } from "payload";
import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    defaultColumns: ["title", "slug", "status", "updatedAt"],
    useAsTitle: "title",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: ({ req: { user } }) => user ? true : { status: { equals: "published" } },
    update: authenticated,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "excerpt", type: "textarea" },
    { name: "coverImage", type: "upload", relationTo: "media" },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
      }),
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: ["draft", "published", "archived"],
      required: true,
    },
    { name: "seoTitle", type: "text" },
    { name: "seoDescription", type: "textarea" },
  ],
};
