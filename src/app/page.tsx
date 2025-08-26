// src/app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full font-sans">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/home-section-1.jpg" // put your uploaded image in /public
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Fixed top bar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-20 text-white">
        <a href="/" className="font-bold text-lg hover:opacity-80">
          LW
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-bold text-lg hover:opacity-80"
        >
          MENU
        </button>
      </header>

      {/* Sidebar menu (toggle) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-black/90 text-white p-6 z-30 shadow-lg">
          <button
            className="mb-6 font-bold hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            ✕ Close
          </button>
          <nav className="flex flex-col gap-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* Main hero content (centered image person) */}
      <main className="relative z-10 flex items-center justify-center min-h-screen">
        {/* The person image is already baked into your background, 
            so no extra content needed here unless you want text/buttons */}
      </main>
    </div>
  );
}
