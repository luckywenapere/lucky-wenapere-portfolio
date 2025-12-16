"use client";
import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  features: string[];
}

const ShowreelSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'vms',
      title: 'Visitor Management System',
      description: 'A comprehensive software solution for managing visitor check-ins, access control, and facility security. The system provides real-time tracking, automated notifications, and detailed reporting capabilities.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
      year: '2025',
      features: [
        'Real-time visitor check-in and check-out',
        'Access control and badge management',
        'Automated email notifications',
        'Advanced reporting and analytics',
        'User role-based permissions',
        'Mobile-responsive dashboard'
      ]
    }
  ];

  return (
    <section id="showreel-section" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">
            SOFTWARE
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-6">
            PROJECTS
          </h2>
          <div className="w-full h-px bg-black"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="space-y-6">
                {/* Year Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gray-200 text-gray-900">
                  {project.year}
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium border border-gray-300 hover:border-gray-500 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mt-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;