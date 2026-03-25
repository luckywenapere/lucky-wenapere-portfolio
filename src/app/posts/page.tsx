import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { formatDate } from "@/lib/formatDate";
import { getAllPosts, getExcerpt } from "@/lib/posts";
import {
  absoluteUrl,
  defaultOpenGraphImage,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing from Lucky Wenapere on building, identity, ambition, and execution.",
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    title: `Writing | ${siteConfig.name}`,
    description:
      "Writing from Lucky Wenapere on building, identity, ambition, and execution.",
    url: absoluteUrl("/posts"),
    type: "website",
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Writing | ${siteConfig.name}`,
    description:
      "Writing from Lucky Wenapere on building, identity, ambition, and execution.",
    creator: siteConfig.xHandle,
    images: [defaultOpenGraphImage.url],
  },
};

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.meta.title,
    date: post.meta.date,
    author: post.meta.author,
    excerpt: getExcerpt(post.content, 190),
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Writing`,
    description:
      "Writing from Lucky Wenapere on building, identity, ambition, and execution.",
    url: absoluteUrl("/posts"),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <StructuredData data={structuredData} />
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="ui text-3xl font-semibold text-[var(--foreground)]">
          Writing
        </h1>
        <p className="mt-4 text-[1.12rem] leading-8">
          Notes on building, identity, ambition, and the work behind the work.
        </p>

        <ul className="mt-8 space-y-7">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-[var(--line)] pb-7">
              <p className="ui text-[0.9rem] text-[var(--muted)]">
                {formatDate(post.date)} · {post.author}
              </p>
              <h2 className="ui mt-2 text-[1.35rem] font-semibold leading-7 text-[var(--foreground)]">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 text-[1.05rem] leading-8">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
