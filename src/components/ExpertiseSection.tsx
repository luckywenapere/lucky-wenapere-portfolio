"use client";

export default function ExpertiseSection() {
  return (
    <section id="expertise-section" className="relative min-h-screen w-full bg-gray-100 z-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">
            MY
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold text-black">
            EXPERTISE
          </h2>
          <div className="w-full h-px bg-black mt-6"></div>
        </div>

        {/* Expertise Description */}
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            I am a multidisciplinary creative professional with a passion for storytelling and innovation across multiple mediums. With expertise in graphic design, filmmaking, and video production, I bring visual concepts to life through branding, cinematography, and professional color grading. My technical skills in web design and full-stack development enable me to create responsive, modern digital experiences.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            As the creator of Urganize, I guide the team with a vision of blending artistry with strategy. My creative capabilities extend to music production, songwriting, and scriptwriting, where I craft emotionally impactful narratives. I also specialize in talent and brand management, helping artists, brands, and businesses realize their full potential through strategic positioning, innovative marketing campaigns and the app.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Whether designing a visual identity, directing a film, developing a web application, or building a brand strategy, I combine creative excellence with strategic thinking to deliver solutions that resonate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
}