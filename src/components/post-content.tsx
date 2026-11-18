import Image from "next/image";
import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import type { Media, Post } from "@/payload-types";
import { youtubeEmbedUrl } from "@/lib/youtube";
import styles from "./post-content.module.css";

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    youtube: ({ node }: { node: { fields: { url?: unknown } } }) => {
      const src = youtubeEmbedUrl(node.fields.url);
      if (!src) return null;
      return (
        <iframe
          className="my-8 aspect-video w-full border-0"
          src={src}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      );
    },
  },
  upload: ({ node }) => {
    if (node.relationTo !== "media" || !node.value || typeof node.value !== "object") {
      return null;
    }
    const image = node.value as Media;
    if (!image.url) return null;
    if (image.mimeType === "video/mp4" || image.mimeType === "video/webm") {
      return (
        <video aria-label={image.alt} className="my-8 h-auto w-full" controls preload="metadata">
          <source src={image.url} type={image.mimeType} />
          <a href={image.url}>{image.alt}</a>
        </video>
      );
    }
    if (!image.mimeType?.startsWith("image/") || !image.width || !image.height) return null;

    return (
      <Image
        alt={image.alt}
        className="my-8 h-auto w-full"
        height={image.height}
        sizes="(max-width: 768px) 100vw, 768px"
        src={image.url}
        width={image.width}
      />
    );
  },
});

export function PostContent({ content }: { content: Post["content"] }) {
  return <RichText className={styles.content} converters={converters} data={content} />;
}
