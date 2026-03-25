import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getAllPosts, getExcerpt } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Lucky Wenapere",
  description:
    "Founder of Urganize. Engineer, creative operator, and builder working across product, software, brand, and media.",
  keywords: [
    "Lucky Wenapere",
    "Urganize",
    "founder",
    "engineer",
    "creative operator",
    "builder",
  ],
  authors: [{ name: "Lucky Wenapere" }],
  verification: {
    google: "pyUkNjr57PrE-5ziJNrc3Iy8W9OY1SMdd0Lms52Ywow",
    other: {
      msvalidate: ["AB4A2213C8F53CCA8168D621E35D9363"],
    },
  },
  openGraph: {
    title: "Lucky Wenapere",
    description:
      "Founder of Urganize. Engineer, creative operator, and builder working across product, software, brand, and media.",
    url: "https://lucky-wenapere.vercel.app",
    siteName: "Lucky Wenapere",
    images: [
      {
        url: "https://lucky-wenapere.vercel.app/img/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Lucky Wenapere",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Wenapere",
    description:
      "Founder of Urganize. Engineer, creative operator, and builder working across product, software, brand, and media.",
    images: ["https://lucky-wenapere.vercel.app/img/hero-image.png"],
  },
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3).map((post) => ({
    slug: post.slug,
    title: post.meta.title,
    date: post.meta.date,
    excerpt: getExcerpt(post.content, 156),
  }));

  return <HomeClient latestPosts={latestPosts} />;
}
