import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Pages } from "./collections/Pages.ts";
import { Users } from "./collections/Users.ts";
import { SiteSettings } from "./globals/SiteSettings.ts";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages],
  globals: [SiteSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: "src/payload-types.ts",
  },
});
