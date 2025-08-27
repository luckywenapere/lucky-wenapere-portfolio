"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  headerTextColor: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ headerTextColor, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 transition-colors duration-300 ${headerTextColor}`}>
      <Link href="/" className="font-bold text-lg hover:opacity-80">
        LW
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="font-bold text-lg hover:opacity-80"
      >
        MENU
      </button>

      {/* Sidebar menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-black/90 text-white p-6 z-40 shadow-lg">
          <button
            className="mb-6 font-bold hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            ✕ Close
          </button>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}