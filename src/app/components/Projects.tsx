'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProjectImage from './ProjectImage';
import 'swiper/css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
const projects = [
  {
    title: 'Centrebyte',
    imageSrc: '/media/centrebyte.png',
    imageAlt: 'Centrebyte Marketplace',
    shortDescription: 'A cryptocurrency-powered marketplace for seamless transactions.',
    fullDescription: 'A cryptocurrency-powered marketplace that facilitates seamless transactions between buyers and sellers. Users benefit from features like instant payment processing, transparent records, and reduced fees. The integrated cryptocurrency wallet enables quick deposits and withdrawals, allowing for secure trading without intermediaries.',
    technologies: 'Python, Django, SQLite, HTML, CSS, JavaScript',
    link: 'http://centrebyte.com'
  },
  {
    title: 'Rust Ball Animation',
    imageSrc: '/media/bouncing-balls.gif',
    imageAlt: 'Weather App',
    shortDescription: 'A dynamic 2D ball simulation built in Rust, showcasing real-time collision handling.',
    fullDescription: 'A dynamic 2D ball simulation built in Rust, showcasing real-time collision handling and smooth animations. The simulation includes multiple colorful balls bouncing within a defined area while interacting with each other. Each ball has unique properties such as velocity, position, and color. The simulation uses physics principles to handle collisions, reversing velocities when balls or boundaries are encountered.',
    technologies: 'Rust, minifb, rand',
    link: 'https://github.com/dsneed123/Bouncing_balls_rust'
  },
  {
    title: 'Shamir Secret Sharing Scheme',
    imageSrc: '/media/Figure_1.png',
    imageAlt: 'graph',
    shortDescription: 'An educational implementation of the Shamir Secret Sharing scheme.',
    fullDescription: 'An educational implementation of the Shamir Secret Sharing scheme, which splits a secret into multiple shares and requires a threshold number of shares to reconstruct the original secret. This cryptographic method ensures secure and distributed key management. The program allows users to specify the number of shares and threshold, then generates random coefficients to create a polynomial for splitting the secret. It supports secret reconstruction using Lagrange interpolation for any combination of shares that meets the threshold.',
    technologies: 'Python, Lagrange interpolation',
    link: 'https://github.com/dsneed123/shamir_secret_sharing'
  },
  {
    title: 'MUV Web App',
    imageSrc: '/media/centrebyte.png',
    imageAlt: 'MUV Web App',
    shortDescription: 'A dynamic party planning app built with React for event organization.',
    fullDescription: 'A dynamic party planning app built with React, designed to simplify event organization and management for users of all ages. Users can easily create and customize events, setting crucial details like date, time, and location, while effortlessly sending out invitations to friends and family through integrated sharing options. The app features a user-friendly interface that enhances user experience, complete with RSVP functionality and automated reminders to ensure that everyone stays informed and engaged throughout the planning process.',
    technologies: 'React, JavaScript, CSS',
    link: 'https://dsneed123.github.io/muv/'
  },
  {
    title: 'Core Roulette',
    imageSrc: '/media/Core-roullete.png',
    imageAlt: 'Core Roulette',
    shortDescription: 'A web app that randomizes abdominal workouts for fitness enthusiasts.',
    fullDescription: 'A web app designed to randomize abdominal workouts for users across all fitness levels, providing an engaging and dynamic exercise experience. Features a diverse library of core exercises, ensuring that workouts remain fresh and challenging, with options tailored to beginner, intermediate, and advanced users. Incorporates essential core training advice along with instructional content, prioritizing user safety and proper technique throughout each workout session.',
    technologies: 'JavaScript, React, Next.js',
    link: 'http://www.core-roulette.com/'
  },
  {
    title: 'Langton\'s Ant Simulation',
    imageSrc: '/media/langtons_ant.gif',
    imageAlt: 'Core Roulette',
    shortDescription: 'A simulation of Langton\'s Ant, a Turing-complete cellular automaton.',
    fullDescription: 'A mesmerizing simulation of Langton\'s Ant, a Turing-complete cellular automaton that creates complex patterns from simple rules. The simulation showcases multiple ants navigating a grid, flipping cell states and changing direction based on cell colors. Each ant begins on a randomly initialized grid and moves according to deterministic rules: turning left or right depending on whether the current cell is "black" or "white." This produces intricate, emergent patterns over time.',
    technologies: 'Rust, minifb, rand',
    link: 'https://github.com/dsneed123/Langtons_ant'
  },
  {
    title: 'Weather App Prototype',
    imageSrc: '/media/weather-app.png',
    imageAlt: 'Weather App',
    shortDescription: 'A user-friendly web application providing real-time weather data.',
    fullDescription: 'A user-friendly web application designed to provide real-time weather data for any location, offering an intuitive experience for users. Features a customizable user interface (UI) that allows users to select their preferred location and receive personalized weather alerts based on current conditions. Focuses on a clean design that is fully responsive, ensuring seamless functionality across a variety of devices, from desktops to mobile screens.',
    technologies: 'HTML, CSS, JavaScript, API integration',
    link: 'https://dsneed123.github.io/weather-app-prototype/'
  },
  
  {
    title: 'Solar System Simulation',
    imageSrc: '/media/solarsystem.gif',
    imageAlt: 'Solar System Simulation',
    shortDescription: 'A simulation of the Solar System with dynamic planetary orbits.',
    fullDescription: 'A visually engaging simulation of the Solar System, featuring planets with dynamic orbits around a central sun. This project brings the celestial movements of our Solar System to life using scalable properties for planetary distances, sizes, and orbital periods. Users can adjust the zoom level interactively to explore the system at various scales. Planets are rendered with realistic relative sizes and colors, and their positions are updated in real-time using angular velocity calculations to simulate orbital dynamics.',
    technologies: 'Rust, minifb, trigonometric calculations',
    link: 'https://github.com/your-repository-url'
  },
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
      {/* Left Arrow */}
      <ChevronLeftIcon
        id="custom-prev"
        style={{
          position: 'absolute',
          top: '50%',
          left: '-70px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          fontSize: '4rem',
          cursor: 'pointer',
        }}
      />
      <Swiper
        spaceBetween={15}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '#custom-prev',
          nextEl: '#custom-next',
        }}
      >
        {projects.map((project, index) => (
              <SwiperSlide
              className="bg-[#f0f0f0] p-5 h-full rounded flex flex-col justify-between items-start"
              key={index}
              style={{ height: "70vh" }}
              >
              <div className="flex flex-col items-start">
                <div >
                  <ProjectImage
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={400}
                    height={250}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                <strong>{project.title}</strong>
                </h3>
                <p>{project.shortDescription}</p>
              </div>
                <div>
                <button
                className="group flex items-center bg-gray-800 hover:bg-[#5ADDED] text-white rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-40 px-2 py-2"
                onClick={() => openModal(project)}
                >
                <OpenInFullIcon className="text-white group-hover:scale-125 transition-transform duration-300" />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Read More
                </span>
                </button>
                </div>
              </SwiperSlide>
        ))}
      </Swiper>
      {/* Right Arrow */}
      <ChevronRightIcon
        id="custom-next"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-70px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          fontSize: '4rem',
          cursor: 'pointer',
        }}
      />

      {/* Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '600px',
              width: '90%',
              position: 'relative',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <h2>{selectedProject.title}</h2>
            <ProjectImage
              src={selectedProject.imageSrc}
              alt={selectedProject.imageAlt}
              width={400}
              height={250}
            />
            <p>{selectedProject.fullDescription}</p>
            <p>
              <strong>Technologies:</strong> {selectedProject.technologies}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'blue',
                textDecoration: 'underline',
                marginTop: '10px',
                display: 'inline-block',
              }}
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;