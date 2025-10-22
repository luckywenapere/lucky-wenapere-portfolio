import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Lucky Wenapere – Portfolio & Creative Projects",
  description:
    "Official website of Lucky Wenapere. Explore my portfolio, expertise, creative showreel, and tools I use to build impactful projects.",
  keywords: ["Lucky Wenapere", "portfolio", "showreel", "creative projects", "next.js", "Luckydidthis", "Lucky Wena"],
  authors: [{ name: "Lucky Wenapere" }],
  verification: {
    google: "pyUkNjr57PrE-5ziJNrc3Iy8W9OY1SMdd0Lms52Ywow",
  },
  openGraph: {
    title: "Lucky Wenapere – Portfolio & Creative Projects",
    description:
      "Discover my expertise, creative works, and tools. Dive into my showreel and explore impactful projects.",
    url: "https://lucky-wenapere.vercel.app",
    siteName: "Lucky Wenapere",
    images: [
      {
        url: "https://lucky-wenapere.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucky Wenapere Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Wenapere – Portfolio & Creative Projects",
    description:
      "Official site of Lucky Wenapere. Explore my portfolio, creative expertise, and projects.",
    images: ["https://lucky-wenapere.vercel.app/og-image.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}