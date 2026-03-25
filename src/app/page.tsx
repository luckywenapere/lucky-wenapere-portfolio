import { Metadata } from "next";
import HomeClient from "./HomeClient";
import StructuredData from "@/components/StructuredData";
import { getAllPosts, getExcerpt } from "@/lib/posts";
import {
  defaultOpenGraphImage,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.xHandle,
    images: [defaultOpenGraphImage.url],
  },
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3).map((post) => ({
    slug: post.slug,
    title: post.meta.title,
    date: post.meta.date,
    excerpt: getExcerpt(post.content, 156),
  }));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      image: defaultOpenGraphImage.url,
      email: `mailto:${siteConfig.email}`,
      sameAs: [...siteConfig.socialLinks],
      description: siteConfig.description,
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <HomeClient latestPosts={latestPosts} />
    </>
  );
}
