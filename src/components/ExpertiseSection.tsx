export default function ExpertiseSection() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-10"
    >
      <div className="border-t border-[var(--line)] pt-8">
        <h2 className="ui text-[1.05rem] font-semibold text-[var(--foreground)]">
          About
        </h2>
        <div className="mt-5 space-y-4 text-[1.12rem] leading-8">
          <p>
            My work usually sits at the intersection of product, software, and
            creative direction.
          </p>
          <p>
            I like building from the inside: deciding what should exist, making
            it usable, and shaping how it is presented.
          </p>
          <p>
            The recurring themes are execution, taste, and range without losing
            focus.
          </p>
        </div>
      </div>

      <div id="current" className="border-t border-[var(--line)] pt-8 mt-10">
        <h2 className="ui text-[1.05rem] font-semibold text-[var(--foreground)]">
          Current
        </h2>
        <div className="mt-5 space-y-4 text-[1.12rem] leading-8">
          <p>
            Urganize is the main thing I&apos;m building right now.
          </p>
          <p>
            The work includes product, engineering, distribution, and
            leadership.
          </p>
          <p>
            It is the clearest expression of how I operate now: hands-on,
            ambitious, and close to the work itself.
          </p>
        </div>
      </div>
    </section>
  );
}
