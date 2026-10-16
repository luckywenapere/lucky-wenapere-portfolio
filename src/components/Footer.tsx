export default function Footer() {
  const links = [
    { label: "Email", href: "mailto:wenapere@urganize.app" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oyinwenapere" },
    { label: "GitHub", href: "https://github.com/luckywenapere" },
    { label: "X", href: "https://x.com/oyinwenapere" },
    { label: "Instagram", href: "https://instagram.com/oyinwenapere" },
    { label: "WhatsApp", href: "https://wa.me/+2347067367057" },
  ];

  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 py-10">
      <div className="border-t border-[var(--line)] pt-6">
        <p className="ui text-[0.95rem] text-[var(--muted)]">
          Oyin Wenapere
        </p>
        <p className="ui mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-[var(--muted)]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </p>
        <div className="ui mt-3 text-[0.95rem] text-[var(--muted)]">
          Founder, engineer, creative operator.
        </div>
      </div>
    </footer>
  );
}
