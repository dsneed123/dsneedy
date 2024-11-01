import NavBar from "./components/NavBar";
import Image from 'next/image';

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

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-6">
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Centrebyte</h3>
              <p className="text-gray-100 mb-2">
                Centrebyte is a web marketplace powered by cryptocurrency, designed to facilitate seamless transactions between buyers and sellers.
              </p>
              <p className="text-gray-100 mb-2">
                Built using the Django web framework with a SQLite database, Centrebyte ensures secure and efficient handling of user data and transactions.
              </p>
              <p className="text-gray-100 mb-4">
                The front-end is crafted with HTML, CSS, and JavaScript, providing a responsive and intuitive user experience. Key features include user authentication, a customizable shopping cart, and integration with popular cryptocurrency payment gateways.
              </p>
              <a href="http://centrebyte.com" className="text-blue-400 hover:underline">
                View Project
              </a>
            </li>

            <li className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Core Roullete</h3>
              <p className="text-gray-300 mb-2">
                Core Roullete is an innovative web application built with React and Next.js that randomizes ab workouts to cater to users at beginner, intermediate, and advanced fitness levels. 
              </p>
              <p className="text-gray-300 mb-2">
                This application provides users with a diverse range of core exercises, ensuring an engaging and effective workout experience every time they visit the gym. By selecting workouts based on their fitness level, users can progressively challenge themselves and achieve their fitness goals.
              </p>
              <p className="text-gray-300 mb-4">
                In addition to workout randomization, Core Roullete features a dedicated section that offers researched core training advice and instructional how-tos, helping users to perform exercises correctly and safely. The user-friendly interface and responsive design make it accessible across all devices, encouraging users to stay committed to their fitness journey.
              </p>
              <a href="http://www.core-roulette.com/" className="text-blue-400 hover:underline">
                View Project
              </a>
            </li>
            {/* Add more projects as needed */}
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
