const clients = [
  "Afreximbank",
  "AATC",
  "Pentagon Securities",
  "MEAY Dev",
  "Kind Humanitarian Initiative",
];

export default function ClientsSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <div className="flex flex-col items-center">
        <h2 className="eyebrow">Trusted by</h2>
        <div className="mt-4 h-px w-10 bg-[var(--line)]" />
      </div>
      <p className="ui mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[1rem] font-medium tracking-[0.02em] text-[var(--foreground)]">
        {clients.map((c, i) => (
          <span key={c} className="flex items-center gap-6">
            {c}
            {i < clients.length - 1 && (
              <span className="text-[var(--muted)]">·</span>
            )}
          </span>
        ))}
      </p>
    </section>
  );
}
