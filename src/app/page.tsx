"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const projects = [
  {
    title: 'Centrebyte Marketplace',
    role: 'Founder & Full-Stack Developer',
    type: 'Personal',
    description: 'Complete cryptocurrency marketplace with integrated wallet, instant payments, and secure trading infrastructure.',
    technologies: ['Python', 'Django', 'JavaScript', 'Crypto APIs'],
    impact: 'Full marketplace platform',
    link: 'http://centrebyte.com',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'MUV Event Manager',
    role: 'Full-Stack Developer',
    type: 'Personal',
    description: 'React-based event planning platform with RSVP tracking, automated reminders, and multi-device compatibility.',
    technologies: ['React', 'JavaScript', 'CSS', 'Node.js'],
    impact: 'Complete event management',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Physics Simulation Engine',
    role: 'Developer',
    type: 'Academic',
    description: 'Real-time 2D physics simulation with collision detection, particle systems, and interactive mechanics in Rust.',
    technologies: ['Rust', 'minifb', 'Physics'],
    impact: 'Real-time physics engine',
    link: 'https://github.com/dsneed123/Bouncing_balls_rust',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Cryptographic Security System',
    role: 'Developer',
    type: 'Academic',
    description: 'Shamir\'s Secret Sharing implementation for distributed key management with Lagrange interpolation.',
    technologies: ['Python', 'Cryptography', 'Math'],
    impact: 'Secure key management',
    link: 'https://github.com/dsneed123/shamir_secret_sharing',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Core Roulette Fitness',
    role: 'Creator & Developer',
    type: 'Personal',
    description: 'Personalized fitness platform with workout randomization, progress tracking, and safety-focused training.',
    technologies: ['React', 'Next.js', 'JavaScript'],
    impact: 'Multi-level fitness platform',
    link: 'http://www.core-roulette.com/',
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Solar System Visualization',
    role: 'Developer',
    type: 'Academic',
    description: 'Interactive astronomical simulation with realistic orbital mechanics, scalable distances, and dynamic zoom functionality.',
    technologies: ['Rust', 'Graphics', 'Math'],
    impact: 'Interactive educational tool',
    link: 'https://github.com/dsneed123/solar-system-rust',
    color: 'from-yellow-500 to-orange-600'
  }
];

const experience = [
  {
    title: 'Contract Developer',
    company: 'ProfoundSports',
    period: '2024',
    type: 'Professional',
    description: 'Developed and deployed automated athlete social media data collection system processing 10,000+ profiles. Built Python web scraper using Requests and BeautifulSoup with data processing pipelines for Excel/CSV export, reducing manual data entry by 90% and enabling marketing teams to focus on high-priority outreach activities.',
    technologies: ['Python', 'BeautifulSoup', 'Excel', 'CSV', 'Data Processing'],
    impact: '10,000+ profiles processed, 90% reduction in manual work',
    color: 'from-emerald-500 to-teal-600'
  }
];

const skills = {
  'Expert': { level: 95, items: ['Python', 'HTML', 'CSS', 'React'], color: 'bg-emerald-500' },
  'Advanced': { level: 80, items: ['JavaScript', 'C++', 'Java', 'Rust'], color: 'bg-blue-500' },
  'Proficient': { level: 65, items: ['C', 'Kotlin', 'SQL', 'Go', 'PHP'], color: 'bg-purple-500' }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <title>Davis Sneed - Software Developer</title>

      {/* Modern Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border border-white/20">
          <div className="hidden md:flex items-center space-x-6">
            {[
              { id: 'about', label: 'About', icon: PersonIcon },
              { id: 'education', label: 'Education', icon: SchoolIcon },
              { id: 'experience', label: 'Experience', icon: WorkIcon },
              { id: 'skills', label: 'Skills', icon: CodeIcon },
              { id: 'projects', label: 'Projects', icon: WorkIcon },
              { id: 'contact', label: 'Contact', icon: EmailIcon }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-xs">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md shadow-lg rounded-xl p-4 border border-white/20">
            <div className="space-y-2">
              {[
                { id: 'about', label: 'About', icon: PersonIcon },
                { id: 'education', label: 'Education', icon: SchoolIcon },
                { id: 'experience', label: 'Experience', icon: WorkIcon },
                { id: 'skills', label: 'Skills', icon: CodeIcon },
                { id: 'projects', label: 'Projects', icon: WorkIcon },
                { id: 'contact', label: 'Contact', icon: EmailIcon }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Image 
                src="/media/headshot.png" 
                alt="Davis Sneed" 
                className="relative w-75 h-75 rounded-full object-cover border-4 border-white shadow-2xl" 
                width={195} 
                height={195}
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Davis Sneed
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Computer Science Student & Software Developer
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <SchoolIcon className="w-4 h-4 text-blue-500" />
                  <span>Gonzaga University Graduate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarTodayIcon className="w-4 h-4 text-purple-500" />
                  <span>Class of 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocationOnIcon className="w-4 h-4 text-pink-500" />
                  <span>Seattle, WA</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a 
                  href="mailto:dlsneed1298@gmail.com"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <ContactMailIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Get In Touch</span>
                  </div>
                </a>
                <a 
                  href="https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing"
                  className="group bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <ArticleIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Resume</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Intro */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Recent Gonzaga University graduate with expertise in 
              <span className="font-semibold text-blue-600"> full-stack development</span>, 
              <span className="font-semibold text-purple-600"> security programming</span>, and 
              <span className="font-semibold text-pink-600"> system design</span>. 
              Seeking opportunities to bring fresh perspectives and proven technical skills to innovative teams.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl p-6 shadow-xl border border-white/50 backdrop-blur-sm">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Gonzaga University</h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  Bachelor of Science in Computer Science and Computational Thinking
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Concentration:</strong> Software Development • Security • Philosophy
                </p>
                <p className="text-gray-600 flex items-center">
                  <LocationOnIcon className="w-4 h-4 mr-2" />
                  Spokane, Washington
                </p>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-5 shadow-lg">
                  <div className="text-3xl font-bold mb-2">2025</div>
                  <div className="text-blue-100 mb-2">Graduate</div>
                  <div className="text-sm text-blue-200">Aug 2021 - May 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-12 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
                <div className={`h-1.5 bg-gradient-to-r ${exp.color}`}></div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <div className={`bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-lg p-3 border-l-4 border-gradient-to-b ${exp.color.replace('to-', 'border-')}`}>
                          <p className="text-xs font-semibold text-gray-700">
                            <span className="text-gray-500">Impact:</span> {exp.impact}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 hover:text-emerald-800 rounded text-xs font-medium transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:col-span-1 flex items-center justify-center">
                      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl p-4 text-center shadow-lg">
                        <div className="text-2xl font-bold mb-1">Contract</div>
                        <div className="text-emerald-100 text-sm">Professional Work</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([level, { level: percentage, items, color }]) => (
              <div key={level} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{level}</h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${color} rounded-full`}></div>
                    <span className="text-white/80 font-medium text-sm">{percentage}%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium text-sm">{skill}</span>
                        <div className="w-12 bg-white/20 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full ${color} rounded-full transition-all duration-1000 delay-${skillIndex * 100}`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              A showcase of innovative solutions spanning web development, systems programming, and cryptography
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                        project.type === 'Professional' ? 'bg-green-100 text-green-700' :
                        project.type === 'Personal' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {project.type} Project
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 mb-3">{project.role}</p>
                    </div>
                    
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                      >
                        <OpenInNewIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className={`bg-gradient-to-r ${project.color} bg-opacity-10 rounded-lg p-3 border-l-4 border-gradient-to-b ${project.color.replace('to-', 'border-')}`}>
                      <p className="text-xs font-semibold text-gray-700">
                        <span className="text-gray-500">Impact:</span> {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded text-xs font-medium transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent graduate available for full-time software engineering opportunities. 
              Based in Seattle, ready to contribute to innovative projects and grow with your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:dlsneed1298@gmail.com" 
              className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <ContactMailIcon className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-3 text-sm">Direct Communication</p>
              <p className="text-blue-600 font-medium text-sm">dlsneed1298@gmail.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/dsneedy" 
              className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <PeopleIcon className="w-10 h-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-3 text-sm">Professional Network</p>
              <p className="text-purple-600 font-medium text-sm">Connect & Network</p>
            </a>

            <a 
              href="https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing" 
              className="group bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <ArticleIcon className="w-10 h-10 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Resume</h3>
              <p className="text-blue-100 mb-3 text-sm">Complete Background</p>
              <p className="text-white font-medium text-sm">Download PDF</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Davis Sneed
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved. Built with React, Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}