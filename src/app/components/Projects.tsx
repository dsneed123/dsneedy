'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import CloseIcon from '@mui/icons-material/Close';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
const projects = [
  {
    title: 'ProfoundSports',
    role: 'Contract Developer',
  
    imageAlt: 'PROFOUNDSPORTS',
    shortDescription: 'Developed a webscraper to locate athlete twitter accounts.',
    fullDescription: 'Developed a Python web scraper using Requests and BeautifulSoup to extract 10,000+ athlete Twitter handles. Processed and organized 10,000+ Twitter handles into Excel/CSV for easy access by marketing/outreach teams. Automated data extraction reducing manual entry and allowing the marketing team to focus on high priority tasks.',
    technologies: 'Python, Requests, BeautifulSoup, Excel, CSV',
    link: 'http://profoundsports.com'
  },
  {
    title: 'Centrebyte',
    role: "founder and full-stack developer",
    imageSrc: '/media/centrebyte.png',
    imageAlt: 'Centrebyte Marketplace',
    shortDescription: 'A cryptocurrency-powered marketplace for seamless transactions.',
    fullDescription: 'A cryptocurrency-powered marketplace that facilitates seamless transactions between buyers and sellers. Users benefit from features like instant payment processing, transparent records, and reduced fees. The integrated cryptocurrency wallet enables quick deposits and withdrawals, allowing for secure trading without intermediaries.',
    technologies: 'Python, Django, SQLite, HTML, JavaScript, CSS',
    link: 'http://centrebyte.com'
  },
  {
    title: 'MUV Web App',
    role:'Full-Stack Developer',
    imageSrc: '/media/centrebyte.png',
    imageAlt: 'MUV Web App',
    shortDescription: 'A dynamic party planning app built with React for event organization.',
    fullDescription: 'A dynamic party planning app built with React, designed to simplify event organization and management for users of all ages. Users can easily create and customize events, setting crucial details like date, time, and location, while effortlessly sending out invitations to friends and family through integrated sharing options. The app features a user-friendly interface that enhances user experience, complete with RSVP functionality and automated reminders to ensure that everyone stays informed and engaged throughout the planning process.',
    technologies: 'React, JavaScript, CSS',
    link: 'https://github.com/MaximilianJB/muv-web-app'
  },

  {
    title: 'Rust Ball Animation',
    role :'Developer',
    imageSrc: '/media/bouncing-balls.gif',
    imageAlt: 'Weather App',
    shortDescription: 'A dynamic 2D ball simulation built in Rust, showcasing real-time collision handling.',
    fullDescription: 'A dynamic 2D ball simulation built in Rust, showcasing real-time collision handling and smooth animations. The simulation includes multiple colorful balls bouncing within a defined area while interacting with each other. Each ball has unique properties such as velocity, position, and color. The simulation uses physics principles to handle collisions, reversing velocities when balls or boundaries are encountered.',
    technologies: 'Rust, minifb, rand',
    link: 'https://github.com/dsneed123/Bouncing_balls_rust'
  },
  {
    title: 'Langton\'s Ant Simulation',
    role :'Developer',
    imageSrc: '/media/langtons_ant.gif',
    imageAlt: 'Core Roulette',
    shortDescription: 'A simulation of Langton\'s Ant, a Turing-complete cellular automaton.',
    fullDescription: 'A simulation of Langton\'s Ant, a Turing-complete cellular automaton that creates complex patterns from simple rules. The simulation showcases multiple ants navigating a grid, flipping cell states and changing direction based on cell colors. Each ant begins on a randomly initialized grid and moves according to deterministic rules: turning left or right depending on whether the current cell is "black" or "white." This produces intricate, emergent patterns over time.',
    technologies: 'Rust, minifb, rand',
    link: 'https://github.com/dsneed123/Langtons_ant'
  },
  {
    title: 'Solar System Simulation',
    role :'Developer',
    imageSrc: '/media/solarsystem.gif',
    imageAlt: 'Solar System Simulation',
    shortDescription: 'A simulation of the Solar System with dynamic planetary orbits.',
    fullDescription: 'A visually engaging simulation of the Solar System, featuring planets with dynamic orbits around a central sun. This project brings the celestial movements of our Solar System to life using scalable properties for planetary distances, sizes, and orbital periods. Users can adjust the zoom level interactively to explore the system at various scales. Planets are rendered with realistic relative sizes and colors, and their positions are updated in real-time using angular velocity calculations to simulate orbital dynamics.',
    technologies: 'Rust, minifb, trigonometry',
    link: 'https://github.com/dsneed123/solar-system-rust'
  },
  {
    title: 'Shamir Secret Sharing Scheme',
    imageSrc: '/media/Figure_1.png',
    imageAlt: 'graph',
    role :'Developer',
    shortDescription: 'An educational implementation of the Shamir Secret Sharing scheme.',
    fullDescription: 'An educational implementation of the Shamir Secret Sharing scheme, which splits a secret into multiple shares and requires a threshold number of shares to reconstruct the original secret. This cryptographic method ensures secure and distributed key management. The program allows users to specify the number of shares and threshold, then generates random coefficients to create a polynomial for splitting the secret. It supports secret reconstruction using Lagrange interpolation for any combination of shares that meets the threshold.',
    technologies: 'Python, Lagrange interpolation',
    link: 'https://github.com/dsneed123/shamir_secret_sharing'
  },
  {
    title: 'Core Roulette',
    role :'Creator and Developer',
    imageSrc: '/media/Core-roullete.png',
    imageAlt: 'Core Roulette',
    shortDescription: 'A web app that randomizes abdominal workouts for fitness enthusiasts.',
    fullDescription: 'A web app designed to randomize abdominal workouts for users across all fitness levels, providing an engaging and dynamic exercise experience. Features a diverse library of core exercises, ensuring that workouts remain fresh and challenging, with options tailored to beginner, intermediate, and advanced users. Incorporates essential core training advice along with instructional content, prioritizing user safety and proper technique throughout each workout session.',
    technologies: 'JavaScript, React, Next.js',
    link: 'http://www.core-roulette.com/'
  },
  {
    title: 'Weather App Prototype',
    role :'Developer',
    imageSrc: '/media/weather-app.png',
    imageAlt: 'Weather App',
    shortDescription: 'A user-friendly web application providing real-time weather data.',
    fullDescription: 'A user-friendly web application designed to provide real-time weather data for any location, offering an intuitive experience for users. Features a customizable user interface (UI) that allows users to select their preferred location and receive personalized weather alerts based on current conditions. Focuses on a clean design that is fully responsive, ensuring seamless functionality across a variety of devices, from desktops to mobile screens.',
    technologies: 'HTML, CSS, JavaScript, API',
    link: 'https://dsneed123.github.io/weather-app-prototype/'
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
    <div className="relative w-11/12 mx-auto">
      <div
      id="swiper-button-prev"
      className="swiper-button-prev absolute top-1/2 left-[-300px] transform -translate-y-1/2 z-10 text-4xl cursor-pointer"
      />

      <Swiper
      spaceBetween={15}
      modules={[Navigation, Pagination]}
      slidesPerView={1} // Default for mobile (1 slide per view)
      breakpoints={{
        640: {
        slidesPerView: 2, // For screens larger than 640px
        },
        1024: {
        slidesPerView: 3, // For screens larger than 1024px (desktop view)
        },
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        el: '.swiper-custom-pagination',
      }}
      >
      {projects.map((project, index) => (
        <SwiperSlide
        key={index}
        className="bg-[#F4F5F7] p-5 h-50 rounded-2xl flex flex-col justify-between items-start"
        style={{ height: "55vh", position: "relative" }}
        >
        <div className="flex flex-col items-start h-full">
          <div className="flex flex-col justify-between w-full mt-2 mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-center w-full text-[#2b2b2b]">
            {project.title}
          </h2>
          <p className="text-center w-full mt-1 text-l text-[#2b2b2b]">
            <strong>{project.role}</strong>
          </p>
          <p className="text-center w-full mt-10 text-l">
            {project.shortDescription}
          </p>
          </div>
          <div className="flex-grow flex items-center justify-center w-full">
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.split(', ').map((tech, techIndex) => (
            <span key={techIndex} className="bg-gray-200 px-3 py-2 rounded text-md sm:text-md">
              {tech}
            </span>
            ))}
          </div>
          {/* <div className="object-cover w-full">
            <ProjectImage
            src={project.imageSrc}
            alt={project.imageAlt}
            width={250}
            height={250}
            />
          </div> */}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <button
          className="group flex items-center bg-[#1E2A38] hover:bg-[#1E2A38] text-white rounded-full transition-all duration-300 overflow-hidden w-10 hover:w-40 px-2 py-2"
          onClick={() => openModal(project)}
          >
          <ZoomOutMapIcon className="text-white group-hover:scale-125 transition-transform duration-300" />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Read More
          </span>
          </button>
        </div>
        </SwiperSlide>
      ))}
      </Swiper>
      <div
      id="swiper-button-next"
      className="swiper-button-next absolute top-1/2 right-[-70px] transform -translate-y-1/2 z-10 text-4xl cursor-pointer"
      />

      <div className="swiper-custom-pagination justify-center flex w-full mt-5" />

      {selectedProject && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-lg w-11/12 relative">
        <button
          className="absolute top-2 right-2 bg-transparent border-none text-2xl cursor-pointer"
          onClick={closeModal}
        >
          <CloseIcon />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-[#00A9E0]">
          {selectedProject.title}
        </h2>
        {/* <ProjectImage
          src={selectedProject.imageSrc}
          alt={selectedProject.imageAlt}
          width={400}
          height={250}
        /> */}
        <p className="mt-6 text-lg">{selectedProject.fullDescription}</p>
        <p className="mt-4 text-lg">
          <strong>Technologies:</strong> {selectedProject.technologies}
          <div className="flex flex-wrap gap-2 mt-4">
          {selectedProject.technologies.split(', ').map((tech, techIndex) => (
            <span key={techIndex} className="bg-gray-200 px-3 py-2 rounded text-lg sm:text-xl">
            {tech}
            </span>
          ))}
          </div>
        </p>
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-6 inline-block text-lg"
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
