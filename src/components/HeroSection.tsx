import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Reduced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Lighter vignette effect */}
        <div className="absolute inset-0 [background:radial-gradient(65%_55%_at_50%_40%,transparent,rgba(0,0,0,0.3))]" />
      </div>

      {/* Foreground portrait */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/img/hero-image.png"
          alt="Hero portrait"
          fill
          priority
          sizes="100vw"
          className="
            object-cover max-w-none
            object-bottom scale-[1.15]
            md:object-contain md:scale-100 md:object-center
          "
        />
      </div>
    </section>
  );
}