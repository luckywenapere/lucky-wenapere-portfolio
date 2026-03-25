import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <p className="eyebrow">Founder of Urganize</p>
      <h1 className="ui mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
        Lucky Wenapere
      </h1>
      <div className="mt-8 space-y-5 text-[1.2rem] leading-9 text-[var(--foreground)]">
        <p>
          I&apos;m a founder and engineer working across software, product,
          brand, and media.
        </p>
        <p>
          Right now I&apos;m building Urganize and writing about execution,
          identity, and the work behind trying to build something real.
        </p>
        <p>I like clear thinking, strong taste, and momentum.</p>
      </div>
      <p className="ui mt-8 text-[0.97rem] text-[var(--muted)]">
        <Link href="/posts">Writing</Link>
        {" · "}
        <a href="mailto:luckywenapere@gmail.com">Email</a>
        {" · "}
        <a
          href="https://ng.linkedin.com/in/lucky-wenapere"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" · "}
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
