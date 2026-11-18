import type { Access, CollectionConfig } from "payload";
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import { youtubeEmbedUrl } from "../lib/youtube.ts";

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
    { name: "coverImage", type: "upload", relationTo: "media", filterOptions: { mimeType: { contains: "image/" } } },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          BlocksFeature({
            blocks: [{
              slug: "youtube",
              labels: { singular: "YouTube 视频", plural: "YouTube 视频" },
              fields: [{
                name: "url",
                label: "YouTube 链接",
                type: "text",
                required: true,
                validate: (value: unknown) => Boolean(youtubeEmbedUrl(value)) || "请输入有效的 YouTube 视频链接",
              }],
            }],
          }),
        ],
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
