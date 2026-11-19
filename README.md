This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Post images

Posts use Payload's Lexical rich text editor. Use the editor's Upload action to insert an image from Media or upload a new one. Image uploads require an authenticated user and alternative text.

Uploads are publicly readable and stored in `media/` at the project root. Production deployments must persist and back up this directory. Apply database changes with `npm run payload -- migrate`; the rich text migration preserves existing plain text in a paragraph. Rolling it back serializes rich text as JSON text and removes Media records, so back up before rollback.

Published articles are available at `/posts` and `/posts/[slug]`. The list shows 12 articles per page, newest updates first. Both routes read current published content on each request; drafts, archived posts, and unknown slugs return 404 on the detail route. Article metadata uses the Post SEO fields, and inline Media images render through Next.js Image.

Posts have an optional Cover Image selected from Media. The article list displays it above the text on mobile and beside the text on desktop; articles without a cover retain a text-only layout.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Tracking tools

In CMS → Site Settings → 追踪工具 / Tracking, enter a GTM container ID, GA4 measurement ID, or Microsoft Clarity project ID. Empty fields disable the corresponding tool. Settings refresh within approximately 60 seconds and apply to frontend pages only. Install other pixels through GTM; do not also configure GA4 or Clarity here if GTM already loads them.

Apply the tracking database migration before deploying. IDs are public identifiers; never enter API secrets. Before enabling tracking, update the privacy policy and configure any required consent management (for example, through GTM). This integration does not provide a consent banner or conversion events. GA4 enhanced measurement and GTM history triggers can handle client-side navigation.

Validate tracking ID fields with `node --test --experimental-strip-types src/lib/tracking.test.ts`.

## Products CMS

CMS → 产品 manages existing product names, models, images, descriptions, highlights,
YouTube links, parameters, SEO fields, ordering and publication status. Public product
routes read published CMS records on each request; drafts and archived products return
404. Category headings and series overview copy remain in code. Preserve slugs to keep
existing product URLs working. Uploaded cover images take precedence over the original
local image path. Technical parameters use a JSON matrix to retain multi-model tables.

Run `npm run test:products` to validate product access rules and source data.
Run `npm run sync:products` to import the 38 existing products, including the legacy
water monoblock page. Imports use a transaction and skip existing slugs, preserving CMS
edits; they do not overwrite or delete records. Original data files remain as the import
source. In production, apply database migrations before importing (`npm run payload -- migrate`);
local development uses Payload's existing schema push behavior. The import targets the
database configured by `DATABASE_URI`; it does not deploy the website.
