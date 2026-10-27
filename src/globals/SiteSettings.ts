import type { Access, GlobalConfig } from "payload";

const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [{ name: "siteName", type: "text", required: true }],
};
