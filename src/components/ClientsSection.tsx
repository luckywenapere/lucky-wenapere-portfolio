const clients = [
  "Afreximbank",
  "AATC",
  "Pentagon Securities",
  "Lilian Ogechi Missionary Foundation",
];

export default function ClientsSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <div className="border-t border-[var(--line)] pt-8">
        <h2 className="ui text-[1.05rem] font-semibold text-[var(--foreground)]">
          Some organizations I&apos;ve worked with
        </h2>
        <p className="mt-5 text-[1.12rem] leading-8">
          {clients.join(", ")}.
        </p>
      </div>
    </section>
  );
}
