import NavBar from "./components/NavBar";
import Image from 'next/image';
import Projects from "./components/Projects";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';

const tiers = [
  {
    name: "Advanced",
    languages: [
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "Confident",
    languages: [
      { name: "C++" },
      { name: "React" },
      { name: "JavaScript" },
    ],
  },
  {
    name: "Intermediate",
    languages: [
      { name: "Java" },
      { name: "Rust" },
      { name: "Kotlin" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    name: "Novice",
    languages: [{name:"C#"}],
  },
  {
    name: "Beginner",
    languages: [{name: "Go"},
      {name: "PHP"}
    ],
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfff7] text-black flex flex-col">
      <title>Davis Sneed</title>
      <header className="bg-[#1E2A38] p-6 text-center">
        <Image 
          src="/media/headshot.jpeg" 
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
            <section id="Experience" className="mb-8 sm:mb-12 flex flex-col items-center w-full">
              <div className="transparent p-4 sm:p-8 rounded-lg flex flex-col items-center w-full">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Experience</h2>
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-1">
                    <span className="bg-gray-200 px-2 py-1 rounded">PROFOUNDSPORTS</span> – Contract Developer
                  </h3>
                  <p className="text-black-100 mb-2 text-sm sm:text-base">August – September 2024</p>
                  <ul className="list-disc list-inside text-black-300 text-lg sm:text-xl">
                    <li>Developed a Python web scraper using Requests and BeautifulSoup to extract 10,000+ athlete Twitter handles.</li>
                    <li>Processed and organized 10,000+ Twitter handles into Excel/CSV for easy access by marketing/outreach teams.</li>
                    <li>Automated data extraction reducing manual entry and allowing the marketing team to focus on high priority tasks.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Programming Languages Section */}
          <section id="programming-languages" className="mb-8 sm:mb-12 flex flex-col items-center lg:ml-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Programming Languages</h2>
            <div className="space-y-4 w-full">
              {tiers.map((tier, index) => (
                <div key={index} className="slide-in-once animate-slide-in">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{tier.name}</h3>
                  <ul className="inline-list">
                    {tier.languages.length > 0 ? (
                      tier.languages.map((lang, langIndex) => (
                        <li key={`${tier.name}-${langIndex}`} className="bg-gray-200 px-2 py-1 rounded text-sm sm:text-base">
                          {lang.name}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No languages in this tier</li>
                    )}
                  </ul>
                  {index < tiers.length - 1 && <hr className="border-t-2 border-[#1E2A38] my-4" />}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <section id="projects" className="mb-8 sm:mb-12 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects</h2>
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-8 sm:mb-12 flex flex-col items-center bg-[#F4F5F7] p-4 sm:p-8 rounded-lg shadow-md mt-10 w-[90%] sm:w-[50%] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Contact me</h2>
          <ul className="flex flex-col space-y-4 sm:space-y-6 w-full">
            <li className="transparent flex items-center justify-center">
              <a href="mailto:dlsneed1298@gmail.com" className="flex items-center text-blue-500 hover:underline">
                <ContactMailIcon className="text-blue-500" />
                <span className="ml-2">dlsneed1298@gmail.com</span>
              </a>
            </li>
            <li className="transparent flex items-center justify-center">
              <a href="https://www.linkedin.com/in/dsneedy" className="flex items-center text-blue-500 hover:underline">
                <PeopleIcon className="text-blue-500" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </li>
            <li className="transparent flex items-center justify-center">
              <a href="https://drive.google.com/file/d/1MgE3KXLxI0fDKaC_zx58EtIsknZqmEKj/view?usp=sharing" className="flex items-center text-blue-500 hover:underline">
                <ArticleIcon className="text-blue-500" />
                <span className="ml-2">Resume</span>
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
