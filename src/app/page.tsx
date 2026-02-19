import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Lucky Wenapere",
  description:
    "Official website of Lucky Wenapere. Explore Lucky's expertise.",
  keywords: ["Lucky Wenapere", "portfolio", "showreel", "creative projects", "next.js", "Luckydidthis", "Lucky Wena"],
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
      "Discover Lucky's expertise, creative works, and tools. Dive into his showreel and explore impactful projects.",
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
    title: "Lucky Wenapere",
    description:
      "Official site of Lucky Wenapere. Explore his portfolio, creative expertise, and projects.",
    images: ["https://lucky-wenapere.vercel.app/og-image.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}