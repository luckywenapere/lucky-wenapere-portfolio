const expertiseItems = [
  {
    number: "01",
    title: "Graphic Design",
    description: "Branding, visual identity, posters, album covers, and digital design"
  },
  {
    number: "02", 
    title: "Filmmaking",
    description: "Directing, cinematography, and storytelling through visuals"
  },
  {
    number: "03",
    title: "Video Editing & Color Grading", 
    description: "Professional editing, color correction, and cinematic grading"
  },
  {
    number: "04",
    title: "Web Design & Full-Stack Development",
    description: "Designing and coding responsive, modern websites and apps"
  },
  {
    number: "05",
    title: "Creative Leadership",
    description: "Founder and leader of Innr Trth, guiding teams and projects"
  },
  {
    number: "06",
    title: "Music & Sound",
    description: "Singer, songwriter, and music producer creating original soundscapes"
  },
  {
    number: "07",
    title: "Writing",
    description: "Scriptwriting, storytelling, and songwriting with emotional impact"
  },
  {
    number: "08",
    title: "Talent & Brand Management",
    description: "Helping artists, brands, and businesses grow with strategy"
  },
  {
    number: "09",
    title: "Marketing & Strategy",
    description: "Building campaigns, creative strategies, and brand positioning"
  }
];

export default function ExpertiseSection() {
  return (
    <section className="relative min-h-screen w-full bg-white z-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">
            MY
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold text-black">
            EXPERTISE
          </h2>
          <div className="w-full h-px bg-black mt-8"></div>
        </div>

        {/* Expertise List */}
        <div className="space-y-12">
          {expertiseItems.map((item) => (
            <div key={item.number} className="grid grid-cols-12 gap-6 items-start">
              {/* Number */}
              <div className="col-span-1">
                <span className="text-2xl font-light text-gray-600">
                  {item.number}
                </span>
              </div>
              
              {/* Title and Description */}
              <div className="col-span-11">
                <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="w-full h-px bg-gray-200 mt-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}