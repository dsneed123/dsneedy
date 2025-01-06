import NavBar from "./components/NavBar";
import Image from 'next/image';
import Projects from "./components/Projects";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';

const tiers = [
  {
    name: "Highly Confident",
    languages: [
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
    ],
  },
  {
    name: "Confident",
    languages: [
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Java" },
      { name: "Rust" },

    ],
  },
  {
    name: "Learning",
    languages: [
      { name: "C" },
      { name: "Kotlin" },
      { name: "SQL" },
      { name: "Go" },
      { name: "PHP" },
    ],
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfff7] text-black flex flex-col">
      <title>Davis Sneed</title>
      <header className="bg-[#1E2A38] p-6 text-center">
        <Image 
          src="/media/headshot.png" 
          alt="Davis Sneed" 
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 rounded-full border-2 border-[#ffffff] mx-auto" 
          width={180} 
          height={180}
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-3 sm:mb-5">Davis Sneed</h1>
        <NavBar />
      </header>

      <main id="top-container" className="flex-grow p-4 sm:p-6">
        <div id="middle-container" className="flex flex-col lg:flex-row">
          {/* About Me Section */}
          <div className="flex-col w-full lg:w-2/3 mb-4">
            <section id="about" className="mb-8 sm:mb-12 flex flex-col items-center w-full">
              <div className="bg-[#F4F5F7] p-4 sm:p-8 rounded-lg shadow-md flex flex-col items-center w-full">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-black-300 text-lg sm:text-xl w-full text-left">
                  Creative computer scientist with an emphasis on software development and security programming with strong communication skills focused on delivering solutions to technical and everyday challenges.
                </p>
                <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-semibold mb-4">Education</h2>
                <ul className="space-y-4 sm:space-y-6 w-full">
                  <li className="flex flex-col items-start w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-1">Gonzaga University, Spokane, WA</h3>
                    <p className="text-black-100 mb-2 text-sm sm:text-base">August 2021 - Graduating in May 2025</p>
                    <p className="text-black-100 mb-2 text-lg sm:text-xl">
                      Senior majoring in Computer Science and Computational Thinking with a concentration in Software Development, Security, and Philosophy.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            
          </div>

          {/* Programming Languages Section */}
            <section id="programming-languages" className="mb-8 sm:mb-12 flex flex-col items-center lg:ml-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Programming Languages</h2>
            <div className="space-y-4 w-full">
              {tiers.map((tier, index) => (
              <div key={index} className="slide-in-once animate-slide-in text-center">
                <ul className="inline-list flex flex-wrap justify-center gap-2">
                {tier.languages.length > 0 ? (
                  tier.languages.map((lang, langIndex) => (
                  <li key={`${tier.name}-${langIndex}`} className="bg-gray-200 px-2 py-1 rounded text-md sm:text-xl">
                    {lang.name}
                  </li>
                  ))
                ) : (
                  <li className="text-gray-500">No languages in this tier</li>
                )}
                </ul>
                {index < tiers.length - 1 && <hr className="border-0 my-4" />}
              </div>
              ))}
            </div>
            </section>
        </div>

        {/* Projects Section */}
        <section id="projects" className="mb-8 sm:mb-12 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects and Experience</h2>
          <Projects />
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="mb-8 sm:mb-12 flex flex-col items-center bg-[#F4F5F7] p-4 sm:p-8 rounded-lg shadow-md mt-10 w-[90%] sm:w-[60%] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Contact me</h2>
          <ul className="flex flex-wrap gap-4 sm:gap-6 w-full justify-center">
            {/* Email */}
            <li className="flex items-center">
              <a 
                href="mailto:dlsneed1298@gmail.com" 
                className="flex items-center bg-[#1E2A38] text-white rounded-md px-4 py-3 sm:py-2 shadow hover:bg-[#0079b3] transition-all"
              >
                <ContactMailIcon className="text-white" />
                <span className="ml-2 font-source-sans-pro text-sm sm:text-base">
                  dlsneed1298@gmail.com
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li className="flex items-center">
              <a 
                href="https://www.linkedin.com/in/dsneedy" 
                className="flex items-center bg-[#1E2A38] text-white rounded-md px-4 py-3 sm:py-2 shadow hover:bg-[#0079b3] transition-all"
              >
                <PeopleIcon className="text-white" />
                <span className="ml-2 font-source-sans-pro text-sm sm:text-base">
                  LinkedIn
                </span>
              </a>
            </li>

            {/* Resume */}
            <li className="flex items-center">
              <a 
                href="https://drive.google.com/file/d/1rWkEiw7PG9ilftvXd4BzggktxhSeVk7O/view?usp=sharing" 
                className="flex items-center bg-[#1E2A38] text-white rounded-md px-4 py-3 sm:py-2 shadow hover:bg-[#0079b3] transition-all"
              >
                <ArticleIcon className="text-white" />
                <span className="ml-2 font-source-sans-pro text-sm sm:text-base">
                  Resume
                </span>
              </a>
            </li>
          </ul>
        </section>

      </main>

      <footer className="bg-[#F4F5F7] text-center p-4">
        <p>&copy; {new Date().getFullYear()} Davis Sneed. All rights reserved.</p>
      </footer>
    </div>
  );
}
