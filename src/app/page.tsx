import NavBar from "./components/NavBar";
import Image from 'next/image';
import ProjectImage from "./components/ProjectImage";

const languages = [
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 90 },
  { name: "Java", level: 75 },
  { name: "C++", level: 85 },
  { name: "React", level: 80 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <title>Davis Sneed</title>
      <header className="bg-gray-800 p-6 text-center">
        <Image 
          src="/media/headshot.jpeg" 
          alt="Davis Sneed" 
          className="w-32 h-32 rounded-full border-4 border-blue-500" 
          width={128} 
          height={128}
        />
        <h1 className="text-4xl font-bold">Davis Sneed</h1>
        <NavBar />
      </header>

      <main className="flex-grow p-6">
      <section id="about" className="mb-12 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full  mx-auto">
          <p className="text-gray-300 w-full">
          Senior at Gonzaga University | Focused on software development and cybersecurity | Building secure, efficient solutions | Open to collaboration and learning.
          </p>
        </div>
      </section>

        <section id="education" className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <ul className="space-y-6">
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-start max-w-full mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-1">Gonzaga University, Spokane, WA</h3>
              <p className="text-gray-100 mb-2">August 2021 - Present</p>
              <p className="text-gray-100 mb-2">
                Junior majoring in Computer Science and Computational Thinking with a concentration in Software Development, Security, and Philosophy.
              </p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-start max-w-full mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-1">Central Catholic High School, Portland, OR</h3>
              <p className="text-gray-100 mb-2">August 2017 - June 2021</p>
            </li>
          </ul>
        </section>


        <section id="programming-languages" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Programming Languages</h2>
          <ul className="space-y-4">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between">
                <span>{lang.name}</span>
                <div className="relative w-2/3 h-4 bg-gray-700 rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-gray-300">{lang.level}%</span>
              </li>
            ))}
          </ul>
        </section>
        <section id="projects" className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-6">
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
              <ProjectImage
                src="/media/centrebyte.png" 
                alt="Centrebyte Marketplace" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
              <div className="flex-1 text-center w-full">
                <h3 className="text-2xl font-semibold text-white mb-3">Centrebyte</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A cryptocurrency-powered marketplace that facilitates seamless transactions between buyers and sellers. Users benefit from features like instant payment processing, transparent records, and reduced fees. The integrated cryptocurrency wallet enables quick deposits and withdrawals, allowing for secure trading without intermediaries.
                </p>


                <p className="text-gray-100 mb-2 text-left">
                  Built with Django and SQLite, ensuring secure user data handling.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Features include user authentication and a customizable shopping cart, a crypto wallet, a checkout system based on the Bitcoin network, and the ability to sell and purchase products.
                </p>

                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Python, Django, SQLite, HTML, CSS, JavaScript
                </p>
                <a href="http://centrebyte.com" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
            <ProjectImage
                src="/media/bouncing-balls.gif" 
                alt="Weather App" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-semibold text-white mb-3">Rust Ball Animation</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A dynamic 2D ball simulation built in Rust, showcasing real-time collision handling and smooth animations. The simulation includes multiple colorful balls bouncing within a defined area while interacting with each other.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Each ball has unique properties such as velocity, position, and color. The simulation uses physics principles to handle collisions, reversing velocities when balls or boundaries are encountered.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  The animation leverages the <strong>minifb</strong> library for creating a lightweight window and rendering graphics efficiently. It also incorporates randomization for initializing ball properties, ensuring diverse and engaging visual effects.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Developed using Rust with <strong>minifb</strong> for graphics rendering and <strong>rand</strong> for generating random ball attributes. This project demonstrates Rust&apos;s performance and capabilities in graphical applications.
                </p>
                <a href="https://github.com/dsneed123/Bouncing_balls_rust" className="text-blue-400 hover:underline">
                  View Project
                </a>
              </div>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
            <ProjectImage
                src="/media/Figure_1.png" 
                alt="graph" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-semibold text-white mb-3">Shamir Secret Sharing Scheme</h3>
                <p className="text-gray-100 mb-2 text-left">
                  An educational implementation of the Shamir Secret Sharing scheme, which splits a secret into multiple shares and requires a threshold number of shares to reconstruct the original secret. This cryptographic method ensures secure and distributed key management.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  The program allows users to specify the number of shares and threshold, then generates random coefficients to create a polynomial for splitting the secret. It supports secret reconstruction using Lagrange interpolation for any combination of shares that meets the threshold.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Developed in Python, leveraging mathematical operations for modular arithmetic and Lagrange interpolation, and includes command-line argument parsing for ease of use.
                </p>
                <a href="https://github.com/dsneed123/shamir_secret_sharing" className="text-blue-400 hover:underline">
                  View Project
                </a>
              </div>
            </li>



            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
              <div className="flex-1 text-center w-full">
                <h3 className="text-2xl font-semibold text-white mb-3">MUV Web App</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A dynamic party planning app built with React, designed to simplify event organization and management for users of all ages.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Users can easily create and customize events, setting crucial details like date, time, and location, while effortlessly sending out invitations to friends and family through integrated sharing options.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  The app features a user-friendly interface that enhances user experience, complete with RSVP functionality and automated reminders to ensure that everyone stays informed and engaged throughout the planning process.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Built with React, JavaScript, and CSS, ensuring a smooth and responsive performance across devices.
                </p>
                <a href="https://dsneed123.github.io/muv/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>


            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
              <ProjectImage
                src="/media/Core-roullete.png" 
                alt="Core Roulette" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
              <div className="flex-1 text-center w-full">
                <h3 className="text-2xl font-semibold text-white mb-3">Core Roulette</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A web app designed to randomize abdominal workouts for users across all fitness levels, providing an engaging and dynamic exercise experience.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Features a diverse library of core exercises, ensuring that workouts remain fresh and challenging, with options tailored to beginner, intermediate, and advanced users.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Incorporates essential core training advice along with instructional content, prioritizing user safety and proper technique throughout each workout session.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Developed using JavaScript with React for the front-end, and Next.js for server-side rendering, enhancing performance and SEO.
                </p>
                <a href="http://www.core-roulette.com/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
            <ProjectImage
                src="/media/langtons_ant.gif" 
                alt="Core Roulette" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">Langton&apos;s Ant Simulation</h3>
              <p className="text-gray-100 mb-2 text-left">
                A mesmerizing simulation of Langton&apos;s Ant, a Turing-complete cellular automaton that creates complex patterns from simple rules. The simulation showcases multiple ants navigating a grid, flipping cell states and changing direction based on cell colors.
              </p>
              <p className="text-gray-100 mb-2 text-left">
                Each ant begins on a randomly initialized grid and moves according to deterministic rules: turning left or right depending on whether the current cell is &quot;black&quot; or &quot;white.&quot; This produces intricate, emergent patterns over time.
              </p>
              <p className="text-gray-100 mb-2 text-left">
                The simulation is implemented with the <strong>minifb</strong> library, offering a visually rich and performance-efficient grid display. It supports multiple ants interacting on the same grid, with dynamic reinitialization using the Enter key.
              </p>
              <p className="text-gray-100 mb-2 text-left">
                <strong>Technologies:</strong> Built using Rust with <strong>minifb</strong> for rendering and <strong>rand</strong> for initializing random ant positions. The use of a lightweight graphics library ensures smooth animation and grid updates.
              </p>
              <a href="https://github.com/dsneed123/Langtons_ant" className="text-blue-400 hover:underline">
                View Project
              </a>
            </div>
          </li>



          <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
              <ProjectImage
                src="/media/weather-app.png" 
                alt="Weather App" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
              <div className="flex-1 text-center w-full">
                <h3 className="text-2xl font-semibold text-white mb-3">Weather App Prototype</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A user-friendly web application designed to provide real-time weather data for any location, offering an intuitive experience for users.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Features a customizable user interface (UI) that allows users to select their preferred location and receive personalized weather alerts based on current conditions.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Focuses on a clean design that is fully responsive, ensuring seamless functionality across a variety of devices, from desktops to mobile screens.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Built using HTML for structure, CSS for styling, and JavaScript for dynamic functionality, with API integration for fetching live weather data.
                </p>
                <a href="https://dsneed123.github.io/weather-app-prototype/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>

            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-semibold text-white mb-3">Battleship GUI</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A classic Battleship game developed with a user-friendly interface that immerses players in a strategic naval battle experience, echoing the timeless board game.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Players can place their ships on a grid and take turns guessing the locations of their opponent&apos;s ships while tracking their hits and misses throughout the game.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  The game is enhanced with an animated interface, engaging sound effects, and a scoring system, all designed to elevate the gameplay experience and maintain player engagement.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Developed using Java with JavaFX for rich graphical user interface capabilities, ensuring smooth animations and interactions.
                </p>
                <a href="https://dsneed123.github.io/battleship/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>

            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto">
            <ProjectImage
                src="/media/solarsystem.gif" 
                alt="Weather App" 
                className="mb-3 rounded" 
                width={128} 
                height={128} 
              />
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-semibold text-white mb-3">Solar System Simulation</h3>
                <p className="text-gray-100 mb-2 text-left">
                  A visually engaging simulation of the Solar System, featuring planets with dynamic orbits around a central sun. This project brings the celestial movements of our Solar System to life using scalable properties for planetary distances, sizes, and orbital periods.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  Users can adjust the zoom level interactively to explore the system at various scales. Planets are rendered with realistic relative sizes and colors, and their positions are updated in real-time using angular velocity calculations to simulate orbital dynamics.
                </p>
                <p className="text-gray-100 mb-2 text-left">
                  <strong>Technologies:</strong> Developed in Rust using the Minifb library for efficient rendering, with advanced trigonometric calculations to animate planetary orbits.
                </p>
                <a href="https://github.com/your-repository-url" className="text-blue-400 hover:underline">
                  View Project
                </a>
              </div>
            </li>


          

          </ul>
        </section>







        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-4">If you would like to get in touch, feel free to reach out!</p>
          <form className="bg-gray-800 p-6 rounded-lg shadow-md">
            <label className="block mb-4">
              Name:
              <input type="text" name="name" required className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded p-2 focus:outline-none focus:ring focus:ring-blue-400" />
            </label>
            <label className="block mb-4">
              Email:
              <input type="email" name="email" required className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded p-2 focus:outline-none focus:ring focus:ring-blue-400" />
            </label>
            <label className="block mb-4">
              Message:
              <textarea name="message" required className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded p-2 focus:outline-none focus:ring focus:ring-blue-400" />
            </label>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Send</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; {new Date().getFullYear()} Davis Sneed. All rights reserved.</p>
      </footer>
    </div>
  );
}
