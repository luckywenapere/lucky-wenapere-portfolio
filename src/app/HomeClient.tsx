"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ShowreelSection from "@/components/ShowreelSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
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