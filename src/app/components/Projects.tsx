'use client';
import { useState } from 'react';
import ProjectImage from './ProjectImage';  // Ensure this is correctly imported.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


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
    title: 'Battleship GUI',
    imageSrc: '/media/battleship.png',
    imageAlt: 'Battleship GUI',
    shortDescription: 'A classic Battleship game with a user-friendly interface.',
    fullDescription: 'A classic Battleship game developed with a user-friendly interface that immerses players in a strategic naval battle experience, echoing the timeless board game. Players can place their ships on a grid and take turns guessing the locations of their opponent\'s ships while tracking their hits and misses throughout the game. The game is enhanced with an animated interface, engaging sound effects, and a scoring system, all designed to elevate the gameplay experience.',
    technologies: 'Java, JavaFX',
    link: 'https://dsneed123.github.io/battleship/'
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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleReadMore = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="mb-12 flex flex-col items-center ml-2">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}> {/* Use index as the unique key */}
            <div className="bg-[#E6EBE0] p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
              <ProjectImage
                src={project.imageSrc}
                alt={project.imageAlt}
                className="mb-3 rounded"
                width={128}
                height={128}
              />
              <div className="flex-1 text-center w-full">
                <h3 className="text-2xl font-semibold text-black mb-3">{project.title}</h3>
                <p className="text-black mb-2 text-left">{project.shortDescription}</p>
                {expandedProject === index && (
                  <p className="text-black mb-2 text-left">{project.fullDescription}</p>
                )}
                <button
                  onClick={() => handleReadMore(index)}
                  className="text-blue-400 hover:underline mt-2"
                >
                  {expandedProject === index ? 'Read Less' : 'Read More'}
                </button>
                <p className="text-black mb-2 text-left">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
