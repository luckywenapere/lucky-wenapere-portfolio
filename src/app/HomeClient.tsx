"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ShowreelSection from "@/components/ShowreelSection";

import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";


export default function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerTextColor = "text-white";

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
        <ClientsSection />
        <ToolsSection />
      </main>
      <Footer />
    </div>
  );
}