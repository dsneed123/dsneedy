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
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 w-85">
            Dynamic and motivated computer science student specializing in software development and security programming. I possess robust communication skills, enabling me to effectively convey complex technical concepts to diverse audiences. My focus is on delivering innovative solutions to both technical and everyday challenges, fostering collaboration and enhancing project outcomes. I am dedicated to continuous learning and applying best practices in software engineering to contribute meaningfully to team objectives and drive success in all initiatives.
          </p>
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
            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start max-w-full mx-auto">
              <ProjectImage
                src="/media/centrebyte.png" 
                alt="Centrebyte Marketplace" 
                className="mb-3 rounded mr-4" 
                width={128} 
                height={128} 
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">Centrebyte</h3>
                <p className="text-gray-100 mb-2">
                  A cryptocurrency-powered web marketplace for seamless buyer-seller transactions.
                </p>
                <p className="text-gray-100 mb-2">
                  Built with Django and SQLite, ensuring secure user data handling.
                </p>
                <p className="text-gray-100 mb-2">
                  Features include user authentication and a customizable shopping cart.
                </p>
                <p className="text-gray-100 mb-2">
                  <strong>Technologies:</strong> Python, Django, SQLite, HTML, CSS, JavaScript
                </p>
                <a href="http://centrebyte.com" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>

            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start max-w-full mx-auto">
              <ProjectImage
                src="/media/battleship.png" 
                alt="MUV Web App" 
                className="mb-3 rounded mr-4" 
                width={128} 
                height={128} 
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">MUV Web App</h3>
                <p className="text-gray-100 mb-2">
                  A party planning app built with React, designed to simplify event organization and management.
                </p>
                <p className="text-gray-100 mb-2">
                  Users can create events, set details like date and location, and send out invitations to friends and family.
                </p>
                <p className="text-gray-100 mb-2">
                  The app features a user-friendly interface, RSVP functionality, and reminders to ensure everyone is informed.
                </p>
                <p className="text-gray-100 mb-2">
                  <strong>Technologies:</strong> React, JavaScript, CSS
                </p>
                <a href="https://dsneed123.github.io/muv/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>



            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start max-w-full mx-auto">
              <ProjectImage
                src="/media/Core-roullete.png" 
                alt="Core roulette" 
                className="mb-3 rounded mr-4" 
                width={128} 
                height={128} 
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">Core Roullete</h3>
                <p className="text-gray-100 mb-2">
                  A web app that randomizes ab workouts for all fitness levels.
                </p>
                <p className="text-gray-100 mb-2">
                  Offers a variety of core exercises to keep workouts engaging.
                </p>
                <p className="text-gray-100 mb-2">
                  Includes core training advice and instructional content for safety.
                </p>
                <p className="text-gray-100 mb-2">
                  <strong>Technologies:</strong> JavaScript, React, Next.js
                </p>
                <a href="http://www.core-roulette.com/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>

            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start max-w-full mx-auto">
              <ProjectImage
                src="/media/weather-app.png" 
                alt="Weather app" 
                className="mb-3 rounded mr-4" 
                width={128} 
                height={128} 
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">Weather App Prototype</h3>
                <p className="text-gray-100 mb-2">
                  A user-friendly app for accessing real-time weather data.
                </p>
                <p className="text-gray-100 mb-2">
                  Features customizable UI and location-based weather alerts.
                </p>
                <p className="text-gray-100 mb-2">
                  Focuses on clean design and responsive functionality.
                </p>
                <p className="text-gray-100 mb-2">
                  <strong>Technologies:</strong> HTML, CSS, JavaScript
                </p>
                <a href="https://dsneed123.github.io/weather-app-prototype/" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </li>

            <li className="bg-gray-800 p-4 rounded-lg shadow-md flex items-start max-w-full mx-auto">
              <ProjectImage
                src="/media/battleship.png" 
                alt="Battleship UI Game" 
                className="mb-3 rounded mr-4" 
                width={128} 
                height={128} 
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">Battleship UI Game</h3>
                <p className="text-gray-100 mb-2">
                  A classic Battleship game built with a user-friendly interface that allows players to enjoy a strategic naval battle experience.
                </p>
                <p className="text-gray-100 mb-2">
                  Players can place their ships on the grid, take turns to guess the location of their opponent&apos;s ships, and track their hits and misses.
                </p>
                <p className="text-gray-100 mb-2">
                  The game features an animated interface, sound effects, and score tracking, enhancing the overall gameplay experience.
                </p>
                <p className="text-gray-100 mb-2">
                  <strong>Technologies:</strong> Java, JavaFX
                </p>
                <a href="https://dsneed123.github.io/battleship/" className="text-blue-400 hover:underline">View Project</a>
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
