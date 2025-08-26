// src/app/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerTextColor, setHeaderTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Change header text color based on scroll position
      // Adjust this value based on when the expertise section becomes visible
      if (currentScrollY > window.innerHeight * 0.3) {
        setHeaderTextColor("text-black");
      } else {
        setHeaderTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const expertiseItems = [
    {
      number: "01",
      title: "Graphic Design",
      description: "Branding, visual identity, posters, album covers, and digital design"
    },
    {
      number: "02", 
      title: "Filmmaking",
      description: "Directing, cinematography, and storytelling through visuals"
    },
    {
      number: "03",
      title: "Video Editing & Color Grading", 
      description: "Professional editing, color correction, and cinematic grading"
    },
    {
      number: "04",
      title: "Web Design & Full-Stack Development",
      description: "Designing and coding responsive, modern websites and apps"
    },
    {
      number: "05",
      title: "Creative Leadership",
      description: "Founder and leader of Innr Trth, guiding teams and projects"
    },
    {
      number: "06",
      title: "Music & Sound",
      description: "Singer, songwriter, and music producer creating original soundscapes"
    },
    {
      number: "07",
      title: "Writing",
      description: "Scriptwriting, storytelling, and songwriting with emotional impact"
    },
    {
      number: "08",
      title: "Talent & Brand Management",
      description: "Helping artists, brands, and businesses grow with strategy"
    },
    {
      number: "09",
      title: "Marketing & Strategy",
      description: "Building campaigns, creative strategies, and brand positioning"
    }
  ];

  return (
    <div className="relative w-full font-sans">
      {/* Fixed top bar */}
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 transition-colors duration-300 ${headerTextColor}`}>
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
        <div className="fixed top-0 right-0 h-full w-64 bg-black/90 text-white p-6 z-40 shadow-lg">
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

      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/img/bg.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        {/* Foreground face image (overlayed) */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <Image
            src="/img/hero-image.png"
            alt="Hero portrait"
            fill
            priority
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative min-h-screen w-full bg-white z-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">
              MY
            </h2>
            <h2 className="text-6xl md:text-8xl font-bold text-black">
              EXPERTISE
            </h2>
            <div className="w-full h-px bg-black mt-8"></div>
          </div>

          {/* Expertise List */}
          <div className="space-y-12">
            {expertiseItems.map((item) => (
              <div key={item.number} className="grid grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="col-span-1">
                  <span className="text-2xl font-light text-gray-600">
                    {item.number}
                  </span>
                </div>
                
                {/* Title and Description */}
                <div className="col-span-11">
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="w-full h-px bg-gray-200 mt-8"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools of the Trade Section */}
      <section className="relative w-full bg-gray-900 z-20 py-20">
        <div className="px-6 md:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Tools of the Trade
            </h2>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {/* Graphic Design Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/coreldraw.png"
                  alt="CorelDRAW"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">CorelDRAW</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/canva.png"
                  alt="Canva"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Canva</span>
            </div>

            {/* Filmmaking / Video Editing Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/premiere-pro.png"
                  alt="Adobe Premiere Pro"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Premiere Pro</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/after-effects.png"
                  alt="After Effects"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">After Effects</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/davinci-resolve.png"
                  alt="DaVinci Resolve"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">DaVinci Resolve</span>
            </div>

            {/* Web Development & Coding Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/html.png"
                  alt="HTML"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">HTML</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/css.png"
                  alt="CSS"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">CSS</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/javascript.png"
                  alt="JavaScript"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">JavaScript</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/php.png"
                  alt="PHP"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">PHP</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/nextjs.png"
                  alt="Next.js"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Next.js</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/bootstrap.png"
                  alt="Bootstrap"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Bootstrap</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/wordpress.png"
                  alt="WordPress"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">WordPress</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/github.png"
                  alt="GitHub"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">GitHub</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/tailwind-css.png"
                  alt="Tailwind CSS"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Tailwind CSS</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/typescript.png"
                  alt="TypeScript"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">TypeScript</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/photoshop.png"
                  alt="Photoshop"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Photoshop</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/vscode.png"
                  alt="VS Code"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">VS Code</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/cli.png"
                  alt="CLI"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">CLI</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/notion.png"
                  alt="Notion"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Notion</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/slack.png"
                  alt="Slack"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Slack</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/zoom.png"
                  alt="Zoom"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Zoom</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/microsoft-teams.png"
                  alt="Microsoft Teams"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">MS Teams</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/nodejs.png"
                  alt="Node.js"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Node.js</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/npm.png"
                  alt="NPM"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">NPM</span>
            </div>

            {/* Music Production Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/fl-studio.png"
                  alt="FL Studio"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">FL Studio</span>
            </div>

            {/* Writing & Strategy Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/celtx.png"
                  alt="Celtx"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Celtx</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/final-draft.png"
                  alt="Final Draft"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Final Draft</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/google-docs.png"
                  alt="Google Docs"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Google Docs</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/microsoft-word.png"
                  alt="Microsoft Word"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Microsoft Word</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}