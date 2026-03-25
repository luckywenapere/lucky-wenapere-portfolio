"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("lucky-theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Header() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("lucky-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="mx-auto max-w-3xl px-6 pt-8">
      <div className="flex flex-col gap-3 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <Link
          href="/"
          className="ui text-[1.05rem] font-semibold text-[var(--foreground)]"
        >
          Lucky Wenapere
        </Link>

        <nav className="ui flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-[var(--muted)]">
          <Link href="/">Home</Link>
          <Link href="/posts">Writing</Link>
          <a
            href="mailto:luckywenapere@gmail.com"
          >
            Email
          </a>
          <a
            href="https://ng.linkedin.com/in/lucky-wenapere"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {theme && (
            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer text-[var(--link)]"
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
