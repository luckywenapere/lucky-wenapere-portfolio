"use client";
import Link from "next/link";

interface HeaderProps {
  headerTextColor: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ headerTextColor, menuOpen, setMenuOpen }: HeaderProps) {
  
  return (
    <header className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 transition-all duration-300 ${headerTextColor} bg-black`}>
      <Link href="/" className="font-bold text-lg hover:opacity-80 transition-opacity">
        LW
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="font-bold text-lg hover:opacity-80 transition-opacity"
      >
        MENU
      </button>
      {/* Sidebar menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-black text-white p-6 z-40 shadow-xl transform transition-transform duration-300">
            <button
              className="mb-6 font-bold hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              ✕ Close
            </button>
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  const expertiseSection = document.getElementById('expertise-section');
                  expertiseSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  const showreelSection = document.getElementById('showreel-section');
                  showreelSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                Projects
              </button>
              {/*
              <button 
                onClick={() => {
                  setMenuOpen(false);
                  const footer = document.getElementById('footer-section');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                Contact
              </button> */}
              <Link 
                href="/posts" 
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                Thoughts
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}