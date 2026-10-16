const now = [
  { name: "Urganize", role: "Building" },
  { name: "Afreximbank, African Trade Centre", role: "Tech & video" },
  { name: "MEAY", role: "Growth" },
  { name: "Kind Humanitarian Initiative", role: "Volunteer tech lead" },
  { name: "Master's in Information Technology", role: "In progress" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="eyebrow">{children}</h2>
      <div className="mt-4 h-px w-10 bg-[var(--line)]" />
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <>
      <section
        id="approach"
        className="mx-auto max-w-2xl scroll-mt-24 px-6 py-16 text-center"
      >
        <SectionTitle>About</SectionTitle>
        <div className="mt-10 space-y-6 text-pretty text-[1.16rem] leading-9">
          <p>
            I&apos;m interested in how things actually work: people, markets,
            attention, time. I study them until the pattern shows, then I
            design around it.
          </p>
          <p>
            I&apos;ve directed films, managed artists, engineered products and
            started companies. The medium changes. The method doesn&apos;t:
            understand it completely, decide clearly, execute without noise.
          </p>
          <p>
            I&apos;ve walked away from things I built to make room for bigger
            ones. I&apos;ve learned that the long game belongs to people who
            protect their minds and bodies. And I keep my word. When I say
            something will happen, it happens.
          </p>
        </div>
        <p className="mt-12 text-[1.6rem] italic tracking-[-0.01em] text-[var(--foreground)]">
          Everything so far is Day 1.
        </p>
      </section>

      <section
        id="current"
        className="mx-auto max-w-2xl scroll-mt-24 px-6 py-16 text-center"
      >
        <SectionTitle>Now</SectionTitle>
        <ul className="mt-10 space-y-5">
          {now.map((item) => (
            <li key={item.name} className="flex flex-col items-center gap-1">
              <span className="text-[1.25rem] text-[var(--foreground)]">
                {item.name}
              </span>
              <span className="ui text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {item.role}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
