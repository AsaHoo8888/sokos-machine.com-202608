import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Inquiries } from "./collections/Inquiries.ts";
import { Pages } from "./collections/Pages.ts";
import { Users } from "./collections/Users.ts";
import { SiteSettings } from "./globals/SiteSettings.ts";
import { smtpEmailAdapter } from "./lib/smtp.ts";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages, Inquiries],
  email: smtpEmailAdapter,
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
