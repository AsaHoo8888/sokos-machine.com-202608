import Image from "next/image";
import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import type { Media, Post } from "@/payload-types";
import styles from "./post-content.module.css";

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => {
    if (node.relationTo !== "media" || !node.value || typeof node.value !== "object") {
      return null;
    }
    const image = node.value as Media;
    if (!image.url || !image.width || !image.height) return null;

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
