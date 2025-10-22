import { Metadata } from "next";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ShowreelSection from "@/components/ShowreelSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lucky Wenapere – Portfolio & Creative Projects",
  description:
    "Official website of Lucky Wenapere. Explore my portfolio, expertise, creative showreel, and tools I use to build impactful projects.",
  keywords: ["Lucky Wenapere", "portfolio", "showreel", "creative projects", "next.js", "Luckydidthis", "Lucky Wena"],
  authors: [{ name: "Lucky Wenapere" }],
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerTextColor, setHeaderTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > window.innerHeight * 0.3) {
        setHeaderTextColor("text-black");
      } else {
        setHeaderTextColor("text-white");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="relative w-full font-sans min-h-screen">
      <Header
        headerTextColor={headerTextColor}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <HeroSection />
        <ExpertiseSection />
        <ShowreelSection />
        <ToolsSection />
      </main>

      <Footer />
    </div>
  );
}