import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MainSiteFooter, MainSiteHeader } from "@/components/main-site-shell";
import { PostContent } from "@/components/post-content";
import { getPublishedPost } from "@/lib/posts";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  return {
    title: `${post.seoTitle || post.title} | Sokos Machinery`,
    description: post.seoDescription || post.excerpt || undefined,
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();

  return (
    <main className="bg-white text-[#07111f]">
      <MainSiteHeader active="Articles" />
      <article className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Link className="text-sm font-semibold text-primary underline underline-offset-4" href="/posts">
            Back to articles
          </Link>
          <header className="mb-12 mt-10 border-b border-slate-200 pb-10">
            <h1 className="break-words text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
            {post.excerpt && <p className="mt-6 text-xl leading-8 text-slate-600">{post.excerpt}</p>}
          </header>
          <PostContent content={post.content} />
        </div>
      </article>
      <MainSiteFooter />
    </main>
  );
}
