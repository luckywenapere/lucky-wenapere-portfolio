"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ToolsSection from "@/components/ToolsSection";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerTextColor, setHeaderTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Change header text color based on scroll position
      if (currentScrollY > window.innerHeight * 0.3) {
        setHeaderTextColor("text-black");
      } else {
        setHeaderTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full font-sans">
      <Header 
        headerTextColor={headerTextColor} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      
      <HeroSection />
      <ExpertiseSection />
      <ToolsSection />
    </div>
  );
}