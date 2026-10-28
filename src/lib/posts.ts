import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

export async function getPublishedPosts(page: number) {
  const payload = await getPayload({ config });
  return payload.find({
    collection: "posts",
    overrideAccess: false,
    where: { status: { equals: "published" } },
    sort: "-updatedAt",
    limit: 12,
    page,
    depth: 1,
    select: { title: true, slug: true, excerpt: true, coverImage: true },
  });
}

export const getPublishedPost = cache(async (slug: string) => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    overrideAccess: false,
    where: {
      and: [{ slug: { equals: slug } }, { status: { equals: "published" } }],
    },
    limit: 1,
    depth: 1,
  });
  return docs[0] ?? null;
});
