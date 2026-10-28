import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { MainSiteFooter, MainSiteHeader } from "@/components/main-site-shell";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Articles | Sokos Machinery",
  description: "Articles and updates from Sokos Machinery on beverage filling and production lines.",
};

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: value } = await searchParams;
  const page = value === undefined ? 1 : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isSafeInteger(page) || page < 1) notFound();

  const posts = await getPublishedPosts(page);
  if (page > 1 && page > posts.totalPages) notFound();

  return (
    <main className="bg-white text-[#07111f]">
      <MainSiteHeader active="Articles" />
      <section className="bg-[#eef3f6] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <h1 className="text-5xl font-semibold md:text-7xl">Articles</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Ideas and updates on beverage filling, production lines, and Sokos machinery.
          </p>
        </div>
      </section>

      <section aria-label="Published articles" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          {posts.docs.length === 0 ? (
            <p className="text-lg text-slate-600">No articles published yet. Please check back soon.</p>
          ) : (
            <div className="divide-y divide-slate-200">
              {posts.docs.map((post, index) => {
                const cover = typeof post.coverImage === "object" ? post.coverImage : null;
                const coverUrl = cover?.url;
                return (
                  <article className="py-9 first:pt-0" key={post.id}>
                    <Link
                      className={`group grid gap-6 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary ${coverUrl ? "md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]" : ""}`}
                      href={`/posts/${encodeURIComponent(post.slug)}`}
                    >
                      {coverUrl && (
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <Image
                            fill
                            alt={cover.alt || post.title}
                            className="object-cover transition duration-500 group-hover:scale-105"
                            priority={index === 0}
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 240px, 320px"
                            src={coverUrl}
                          />
                        </div>
                      )}
                      <div className="flex min-w-0 flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="min-w-0 max-w-3xl">
                          <h2 className="break-words text-2xl font-semibold transition group-hover:text-primary md:text-4xl">
                            {post.title}
                          </h2>
                          {post.excerpt && <p className="mt-4 leading-8 text-slate-600">{post.excerpt}</p>}
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-primary">
                          Read article <ArrowRight aria-hidden="true" size={18} />
                        </span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}

          {posts.totalPages > 1 && (
            <nav aria-label="Article pagination" className="mt-12 flex flex-wrap items-center gap-6 text-sm font-semibold text-primary">
              {posts.hasPrevPage && <Link href={page === 2 ? "/posts" : `/posts?page=${page - 1}`}>Previous page</Link>}
              <span className="text-slate-600">Page {page} of {posts.totalPages}</span>
              {posts.hasNextPage && <Link href={`/posts?page=${page + 1}`}>Next page</Link>}
            </nav>
          )}
        </div>
      </section>
      <MainSiteFooter />
    </main>
  );
}
