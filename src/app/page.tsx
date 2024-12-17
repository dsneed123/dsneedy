import NavBar from "./components/NavBar";
import Image from 'next/image';
import Projects from "./components/Projects";

const tiers = [
  {
    name: "Expert",
    languages: [
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    name: "Advanced",
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
      <header className="bg-[#ED6A5A] p-6 text-center">
        <Image 
          src="/media/headshot.jpeg" 
          alt="Davis Sneed" 
          className="w-32 h-32 rounded-full border-4 border-[blue]-500" 
          width={128} 
          height={128}
        />
        <h1 className="text-4xl text-white font-bold">Davis Sneed</h1>
        <NavBar />
      </header>

      <main id="top-container" className="flex-grow p-6">
        
        <div id="middle-container" className="flex col">
          <div className="flex-col w-2/3 mb-4">
          <section id="about" className="mb-12 flex flex-col items-center ml-2 h-full">
            
            <div className="bg-[#E6EBE0] p-4 rounded-lg shadow-md flex flex-col items-center max-w-full mx-auto h-full flex-grow">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-black-300 w-full">
              Creative computer scientist with an emphasis on software development and security programming with strong communication skills focused on delivering solutions to technical and everyday challenges.
              </p>
            
              <h2 className="text-3xl font-semibold mb-4">Education</h2>
              <ul className="space-y-6">
              <li className=" flex flex-col items-start max-w-full mx-auto">
                <h3 className="text-2xl font-semibold text-black mb-1">Gonzaga University, Spokane, WA</h3>
                <p className="text-black-100 mb-2">August 2021 - Graduating in May 2025</p>
                <p className="text-black-100 mb-2">
                Senior majoring in Computer Science and Computational Thinking with a concentration in Software Development, Security, and Philosophy.
                </p>
              </li>
              </ul>
              </div>
            </section>
            
          </div>

            <section id="programming-languages" className="mb-12 ml-2">
            <h2 className="text-3xl font-semibold mb-4">Programming Languages</h2>
            <div className="space-y-4">
              {tiers.map((tier) => (
              <div key={tier.name} className="mb-2">
                <h4 className="text-2xl font-medium mb-1">{tier.name}</h4>
                <ul className="flex flex-wrap gap-2">
                {tier.languages.length > 0 ? (
                  tier.languages.map((lang) => (
                  <li key={lang.name} className="bg-gray-200 px-2 py-1 rounded">{lang.name}</li>
                  ))
                ) : (
                  <li className="text-gray-500">No languages in this tier</li>
                )}
                </ul>
              </div>
              ))}
            </div>
            </section>


          
        </div>
        <section id="projects" className="mb-12 flex flex-col items-center ml-2">
        <Projects/>
        </section>
        <section id="contact" className="mb-12 flex flex-col items-center ml-2 bg-[#E6EBE0] p-4 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4">Contact me</h2>
              <ul className="space-y-6">
                <li className="transparent flex flex-col items-start max-w-full mx-auto">
                <h3 className="text-2xl font-semibold text-black mb-1">Contact Information</h3>
                <p className="text-black-100 mb-2">
                Email: <a href="mailto:dlsneed1298@gmail.com" className="text-blue-500 hover:underline">dlsneed1298@gmail.com</a>
                </p>
                <p className="text-black-100 mb-2">
                LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-blue-500 hover:underline">linkedin.com/in/your-linkedin-profile</a>
                </p>
                <p className="text-black-100 mb-2">
                Resume: <a href="https://www.your-resume-link.com" className="text-blue-500 hover:underline">your-resume-link.com</a>
                </p>
              </li>
              </ul>
            </section>
      </main>

      <footer className="bg-[#E6EBE0] text-center p-4">
        <p>&copy; {new Date().getFullYear()} Davis Sneed. All rights reserved.</p>
      </footer>
    </div>
  );
}
