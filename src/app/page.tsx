"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerTextColor, setHeaderTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Change header text color based on scroll position
      // You can adjust this threshold based on your hero section height
      if (currentScrollY > window.innerHeight * 0.3) {
        setHeaderTextColor("text-black");
      } else {
        setHeaderTextColor("text-white");
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on menu items
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
      
      {/* Main content */}
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ToolsSection />
      </main>
      
      <Footer />
    </div>
  );
}