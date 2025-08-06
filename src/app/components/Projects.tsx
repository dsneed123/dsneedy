'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';

type ProjectType = 'Professional' | 'Personal' | 'Academic';

const projects = [
  {
    title: 'ProfoundSports Data Scraper',
    role: 'Contract Developer',
    category: 'Data Engineering',
    shortDescription: 'Python web scraper for athlete social media data collection and processing.',
    fullDescription: 'Developed a comprehensive Python web scraper using Requests and BeautifulSoup to extract 10,000+ athlete Twitter handles for marketing teams. Implemented data processing pipelines to organize information into Excel/CSV formats, reducing manual data entry by 90% and enabling marketing teams to focus on high-priority outreach activities.',
    technologies: 'Python, Requests, BeautifulSoup, Excel, CSV, Data Processing',
    impact: 'Processed 10,000+ athlete profiles, automated 90% of manual data collection',
    type: 'Professional' as ProjectType
  },
  {
    title: 'Centrebyte Marketplace',
    role: "Founder & Full-Stack Developer",
    category: 'Web Application',
    shortDescription: 'Cryptocurrency-powered e-commerce platform with integrated wallet functionality.',
    fullDescription: 'Founded and developed a complete cryptocurrency marketplace enabling secure transactions between buyers and sellers. Implemented features including instant payment processing, transparent transaction records, integrated wallet system, and reduced transaction fees. Built using Django framework with custom user authentication and payment processing systems.',
    technologies: 'Python, Django, SQLite, HTML, JavaScript, CSS, Cryptocurrency APIs',
    impact: 'Complete marketplace platform serving multiple users with integrated crypto payments',
    link: 'http://centrebyte.com',
    type: 'Personal' as ProjectType
  },
  {
    title: 'MUV Event Management App',
    role: 'Full-Stack Developer',
    category: 'Web Application',
    shortDescription: 'React-based event planning and management system with RSVP functionality.',
    fullDescription: 'Developed a comprehensive event management application using React for creating, customizing, and managing events. Features include event creation with date/time/location management, invitation system with integrated sharing options, RSVP tracking, automated reminder notifications, and responsive design for cross-device compatibility.',
    technologies: 'React, JavaScript, CSS, Node.js, API Integration',
    impact: 'Complete event management solution with automated RSVP tracking',
    type: 'Personal' as ProjectType
  },
  {
    title: 'Physics Simulation Engine',
    role: 'Developer',
    category: 'Systems Programming',
    shortDescription: 'Real-time 2D physics simulation with collision detection in Rust.',
    fullDescription: 'Built a dynamic 2D physics simulation engine in Rust featuring real-time collision detection and smooth animations. Implemented ball physics with velocity, position, and collision properties, boundary detection, and interactive particle systems. Demonstrates proficiency in systems programming and mathematical modeling.',
    technologies: 'Rust, minifb, Physics Algorithms, Real-time Rendering',
    impact: 'Real-time physics simulation with accurate collision mechanics',
    link: 'https://github.com/dsneed123/Bouncing_balls_rust',
    type: 'Academic' as ProjectType
  },
  {
    title: 'Cellular Automaton Simulation',
    role: 'Developer',
    category: 'Algorithm Implementation',
    shortDescription: 'Implementation of Langton\'s Ant Turing-complete cellular automaton.',
    fullDescription: 'Developed a simulation of Langton\'s Ant, a Turing-complete cellular automaton demonstrating emergent complexity from simple rules. Features multiple ant entities, grid state management, deterministic rule implementation, and pattern visualization. Showcases understanding of complex systems and algorithm implementation.',
    technologies: 'Rust, Cellular Automata, Algorithm Design, Pattern Recognition',
    impact: 'Educational demonstration of emergent complexity and Turing completeness',
    link: 'https://github.com/dsneed123/Langtons_ant',
    type: 'Academic' as ProjectType
  },
  {
    title: 'Solar System Visualization',
    role: 'Developer',
    category: 'Graphics Programming',
    shortDescription: 'Interactive astronomical simulation with realistic orbital mechanics.',
    fullDescription: 'Created an interactive Solar System simulation featuring realistic planetary orbits, scalable distances and sizes, dynamic zoom functionality, and accurate orbital period calculations. Demonstrates mathematical modeling, graphics programming, and user interface design skills.',
    technologies: 'Rust, Graphics Programming, Mathematical Modeling, User Interface',
    impact: 'Interactive educational tool for astronomical visualization',
    link: 'https://github.com/dsneed123/solar-system-rust',
    type: 'Academic' as ProjectType
  },
  {
    title: 'Cryptographic Security System',
    role: 'Developer',
    category: 'Security Programming',
    shortDescription: 'Implementation of Shamir\'s Secret Sharing cryptographic protocol.',
    fullDescription: 'Developed a secure implementation of Shamir\'s Secret Sharing scheme for distributed key management. Features polynomial-based secret splitting, threshold-based reconstruction using Lagrange interpolation, and secure key distribution. Demonstrates expertise in cryptography and security programming.',
    technologies: 'Python, Cryptography, Lagrange Interpolation, Security Protocols',
    impact: 'Secure distributed key management system for sensitive data protection',
    link: 'https://github.com/dsneed123/shamir_secret_sharing',
    type: 'Academic' as ProjectType
  },
  {
    title: 'Core Roulette Fitness Platform',
    role: 'Creator & Developer',
    category: 'Web Application',
    shortDescription: 'Personalized fitness application with workout randomization and tracking.',
    fullDescription: 'Created a comprehensive fitness platform providing randomized abdominal workouts for all fitness levels. Features exercise library management, difficulty progression, safety guidelines, instructional content, and responsive design for multiple devices. Focuses on user safety and proper exercise technique.',
    technologies: 'JavaScript, React, Next.js, Responsive Design, User Experience',
    impact: 'Fitness platform serving users across all skill levels with safety focus',
    link: 'http://www.core-roulette.com/',
    type: 'Personal' as ProjectType
  },
  {
    title: 'Weather Monitoring System',
    role: 'Developer',
    category: 'Web Application',
    shortDescription: 'Real-time weather application with location-based alerts and forecasting.',
    fullDescription: 'Developed a user-friendly weather application providing real-time weather data for any location. Features location-based weather alerts, customizable interface, responsive design for cross-device compatibility, and API integration for accurate weather data. Emphasizes clean design and user experience.',
    technologies: 'HTML, CSS, JavaScript, Weather APIs, Responsive Design',
    impact: 'Real-time weather tracking with personalized location-based alerts',
    link: 'https://dsneed123.github.io/weather-app-prototype/',
    type: 'Personal' as ProjectType
  },
];

const typeColors: Record<ProjectType, string> = {
  'Professional': 'bg-green-50 text-green-700 border-green-200',
  'Personal': 'bg-blue-50 text-blue-700 border-blue-200',
  'Academic': 'bg-purple-50 text-purple-700 border-purple-200'
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative w-full">
      {/* Clean Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6 !important;
          background: white !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 50% !important;
          width: 44px !important;
          height: 44px !important;
          margin-top: -22px !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.2s ease !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #f8fafc !important;
          border-color: #3b82f6 !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
        }
        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
        }
      `}</style>

      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="pb-12"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-white border border-gray-200 rounded-lg h-full hover:shadow-sm transition-shadow">
              <div className="p-5 flex flex-col h-full">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium border ${typeColors[project.type]}`}>
                      {project.type}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <OpenInNewIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {project.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Impact */}
                <div className="bg-gray-50 rounded p-3 mb-4">
                  <p className="text-xs text-gray-700">
                    <span className="font-medium">Impact:</span> {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.split(', ').slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.split(', ').length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.split(', ').length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => openModal(project)}
                  className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded text-sm font-medium transition-colors border border-gray-200 inline-flex items-center justify-center gap-2"
                >
                  <InfoIcon className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Clean Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gray-50 border-b border-gray-200 p-6 relative">
              <button
                className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 rounded"
                onClick={closeModal}
              >
                <CloseIcon className="w-5 h-5" />
              </button>
              <div className="pr-8">
                <span className={`inline-flex px-2 py-1 rounded text-xs font-medium border ${typeColors[selectedProject.type]} mb-2`}>
                  {selectedProject.type} Project
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-600 font-medium text-sm">
                  {selectedProject.role}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Impact */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-5">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Project Impact:</span> {selectedProject.impact}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.technologies.split(', ').map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-50 border border-gray-200 rounded p-2 text-center text-sm text-gray-700"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            {selectedProject.link && (
              <div className="bg-gray-50 border-t border-gray-200 p-6">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  <OpenInNewIcon className="w-4 h-4 mr-2" />
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;