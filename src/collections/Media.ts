import path from "node:path";
import type { Access, CollectionConfig } from "payload";

const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  upload: {
    staticDir: path.resolve(process.cwd(), "media"),
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"],
  },
  fields: [{ name: "alt", type: "text", required: true }],
};
