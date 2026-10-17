import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[78svh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="eyebrow">Oyin Wenapere</p>
      <h1 className="mt-8 max-w-2xl text-balance text-[2.6rem] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--foreground)] sm:text-[3.6rem]">
        I see the whole system.
      </h1>
      <div className="mx-auto mt-10 h-px w-16 bg-[var(--line)]" />
      <p className="ui mt-10 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">
        Technologist <span className="mx-2 text-[var(--muted)]">·</span> Polymath
      </p>
      <p className="mx-auto mt-8 max-w-xl text-pretty text-[1.2rem] leading-9 text-[var(--foreground)]">
        I think in first principles, work in long arcs, and turn ideas into
        things that run without me. Software, film, companies, frameworks:
        different mediums, one mind.
      </p>
      <p className="ui mt-8 text-[0.95rem] text-[var(--muted)]">
        Building{" "}
        <a href="https://urganize.app" target="_blank" rel="noopener noreferrer">
          Urganize
        </a>
        .
      </p>
      <p className="ui mt-12 text-[0.95rem] text-[var(--muted)]">
        <Link href="/posts">Writing</Link>
        <span className="mx-3">·</span>
        <a href="mailto:wenapere@urganize.app">Email</a>
        <span className="mx-3">·</span>
        <a
          href="https://www.linkedin.com/in/oyinwenapere"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="mx-3">·</span>
        <a
          href="https://github.com/luckywenapere"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
