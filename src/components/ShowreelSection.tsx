import React from 'react';

interface VideoItem {
  id: string;
  year: string;
  title: string;
}

const ShowreelSection: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: 'OAWxi2aB_BM',
      year: '2023',
      title: 'Showreel 2023'
    },
    {
      id: 'W3NKmRQwkRs',
      year: '2022', 
      title: 'Showreel 2022'
    },
    {
      id: 'NyTJ3L5i8BY',
      year: '2019',
      title: 'Showreel 2019'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showreel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of our finest work showcasing creativity, technical excellence, and storytelling mastery.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="space-y-12">
          {videos.map((video, index) => (
            <div key={`${video.id}-${video.year}`} className="group">
              {/* Video Container */}
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Year Badge */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 shadow-sm">
                    {video.year}
                  </span>
                </div>
                
                {/* Video Wrapper with Aspect Ratio */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          {/*<p className="text-lg text-gray-600 mb-6">
            Ready to create something extraordinary together?
          </p>
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Start Your Project
          </button>*/}
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;