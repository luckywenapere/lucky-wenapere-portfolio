import type { Metadata } from "next";
import PostPageClient from "./PostPageClient";
import StructuredData from "@/components/StructuredData";
import { getExcerpt, getPostBySlug, getPostHtml, getPostSlugs } from "@/lib/posts";
import {
  absoluteUrl,
  defaultOpenGraphImage,
  siteConfig,
} from "@/lib/site";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  const description = getExcerpt(post.content, 160);
  const canonicalPath = `/posts/${post.slug}`;

  return {
    title: post.meta.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.meta.title,
      description,
      url: absoluteUrl(canonicalPath),
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description,
      creator: siteConfig.xHandle,
      images: [defaultOpenGraphImage.url],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const { meta, htmlContent } = await getPostHtml(params.slug);
  const description = getExcerpt(post.content, 160);
  const canonicalPath = `/posts/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      "@type": "Person",
      name: meta.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(canonicalPath),
    image: [defaultOpenGraphImage.url],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <PostPageClient meta={meta} htmlContent={htmlContent} />
    </>
  );
}
