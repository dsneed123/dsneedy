"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'TARS',
    role: 'Creator',
    year: '2026',
    type: 'Systems',
    description: 'Autonomous coding agent that runs unattended on a Mac Mini cluster. Discovers tasks from GitHub issues and a web platform, plans and writes code via Claude CLI in headless mode, runs tests, opens PRs, and reports to Discord — all without human intervention.',
    technologies: ['Python', 'Bash', 'Claude CLI', 'GitHub API', 'Discord'],
    link: 'https://usetars.dev'
  },
  {
    title: 'TARS-Lite',
    role: 'Creator',
    year: '2026',
    type: 'Systems',
    description: 'Local-only variant of TARS powered by Ollama. Same autonomous task → plan → code → PR loop, but runs fully offline with zero API costs using CodeLlama and similar open models.',
    technologies: ['Python', 'Bash', 'Ollama', 'CodeLlama'],
  },
  {
    title: 'Hive',
    role: 'Creator',
    year: '2026',
    type: 'Personal',
    description: 'AI-powered personal assistant for outreach automation, email campaigns, and social-media growth. Includes an RGB LED matrix for live status display and a React dashboard for monitoring and control.',
    technologies: ['Python', 'React', 'LED Matrix', 'Automation'],
  },
  {
    title: 'Hivemind',
    role: 'Creator',
    year: '2026',
    type: 'Personal',
    description: 'AI short-form video generator for HygGeo. Pipelines Unsplash imagery, Claude-written scripts, and ElevenLabs voiceovers into vertical videos for Instagram, TikTok, and YouTube Shorts.',
    technologies: ['Python', 'Claude API', 'ElevenLabs', 'Unsplash', 'FFmpeg'],
  },
  {
    title: 'HygGeo',
    role: 'Co-Founder & Lead Developer',
    year: '2025',
    type: 'Professional',
    description: 'Sustainable travel platform promoting eco-friendly stays and activities through geolocation and community reviews. Built end-to-end with Django on the backend and a custom frontend.',
    technologies: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
    link: 'https://HygGeo.com'
  },
  {
    title: 'Centrebyte Marketplace',
    role: 'Founder & Full-Stack Developer',
    year: '2025',
    type: 'Personal',
    description: 'Cryptocurrency marketplace with integrated wallet, instant payments, and secure trading infrastructure.',
    technologies: ['Python', 'Django', 'JavaScript', 'Crypto APIs'],
    link: 'http://centrebyte.com'
  },
  {
    title: 'Core Roulette',
    role: 'Creator & Developer',
    year: '2024',
    type: 'Personal',
    description: 'Fitness platform with workout randomization, progress tracking, and safety-focused training tailored to multiple levels.',
    technologies: ['React', 'Next.js', 'JavaScript'],
    link: 'http://www.core-roulette.com/'
  },
  {
    title: 'Physics Engine',
    role: 'Developer',
    year: '2024',
    type: 'Academic',
    description: 'Real-time 2D physics simulation in Rust with collision detection, particle systems, and interactive mechanics.',
    technologies: ['Rust', 'minifb'],
    link: 'https://github.com/dsneed123/Bouncing_balls_rust'
  },
  {
    title: 'Shamir Secret Sharing',
    role: 'Developer',
    year: '2024',
    type: 'Academic',
    description: 'Implementation of Shamir\'s Secret Sharing for distributed key management using Lagrange interpolation over finite fields.',
    technologies: ['Python', 'Cryptography'],
    link: 'https://github.com/dsneed123/shamir_secret_sharing'
  },
  {
    title: 'Solar System Sim',
    role: 'Developer',
    year: '2024',
    type: 'Academic',
    description: 'Interactive astronomical simulation in Rust with realistic orbital mechanics, scalable distances, and dynamic zoom.',
    technologies: ['Rust', 'Graphics'],
    link: 'https://github.com/dsneed123/solar-system-rust'
  }
];

const experience = [
  {
    title: 'Graduate Engineer',
    company: 'Qualitest',
    period: 'Feb 2026 — Present',
    location: 'Kirkland, WA',
    description: 'Structured testing and validation of AR/VR hardware and software systems. Collect, analyze, and document experimental data to ensure accuracy and compliance with research protocols. Collaborate cross-functionally to troubleshoot and improve product functionality.',
    technologies: ['AR/VR', 'QA Testing', 'Hardware Validation', 'Data Collection'],
    logo: '/media/qualitest-logo.jpg'
  },
  {
    title: 'Data Collector — Meta Research',
    company: 'Insight Global',
    period: 'Nov 2025 — Dec 2025',
    location: 'Seattle, WA',
    description: 'Field-based data collection across diverse Seattle environments, including dense urban canyon areas, supporting AR/VR research. Followed standardized procedures to maintain accuracy, reliability, and consistency.',
    technologies: ['AR/VR Research', 'Field Operations', 'QA'],
    logo: '/media/insightglobal-logo.png'
  },
  {
    title: 'Contract Front-end Developer',
    company: 'Pivot Politics',
    period: 'Oct 2025 — Jan 2026',
    location: 'Remote',
    description: 'Designed and built the front-end for a social media platform. High-fidelity UI in Figma; responsive features in JavaScript, HTML, and CSS against a Python back-end.',
    technologies: ['JavaScript', 'React', 'Figma', 'UI/UX']
  },
  {
    title: 'Contract Developer',
    company: 'ProfoundSports',
    period: '2024',
    location: 'Remote',
    description: 'Automated athlete social-media data collection across 10,000+ profiles. Python scraper with BeautifulSoup and Excel/CSV pipelines cut manual entry by 90%.',
    technologies: ['Python', 'BeautifulSoup', 'Data Pipelines']
  }
];

const skills = [
  { group: 'Primary', items: ['Python', 'TypeScript', 'React', 'Next.js', 'Django'] },
  { group: 'Systems', items: ['Rust', 'C++', 'Go', 'Bash', 'SQL'] },
  { group: 'Tools', items: ['Claude API', 'Ollama', 'PostgreSQL', 'Docker', 'GitHub Actions'] }
];

const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900">
      <title>Davis Sneed — Software Engineer</title>

      {/* Top Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-[#fafaf9]/80 backdrop-blur border-b border-neutral-200' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo('about')}
            className="text-sm font-semibold tracking-tight hover:opacity-60 transition-opacity"
          >
            Davis Sneed
          </button>
          <div className="hidden md:flex items-center gap-1">
            {nav.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  activeSection === id
                    ? 'text-neutral-900 bg-neutral-200/70'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="mailto:dlsneed1298@gmail.com"
            className="hidden md:inline-flex text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/media/headshot.png"
              alt="Davis Sneed"
              width={56}
              height={56}
              className="rounded-full object-cover ring-1 ring-neutral-200"
            />
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new work
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            Davis Sneed.
            <span className="block text-neutral-400">
              Software engineer building autonomous systems and clean products.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-10">
            I&apos;m a Seattle-based engineer focused on agentic AI, full-stack development, and
            systems programming. Currently building <span className="text-neutral-900 font-medium">TARS</span> — an
            autonomous coding agent — and working on AR/VR at Qualitest.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:dlsneed1298@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
            >
              Email me
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium border border-neutral-200 hover:border-neutral-400 transition-colors"
            >
              Résumé
            </a>
            <a
              href="https://www.linkedin.com/in/dsneedy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium border border-neutral-200 hover:border-neutral-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dsneed123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium border border-neutral-200 hover:border-neutral-400 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-neutral-200">
            <div>
              <div className="text-xs text-neutral-500 mb-1">Based in</div>
              <div className="text-sm font-medium">Seattle, WA</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 mb-1">Education</div>
              <div className="text-sm font-medium">Gonzaga, CS &apos;25</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 mb-1">Currently</div>
              <div className="text-sm font-medium">Qualitest</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Experience */}
      <Section id="work" eyebrow="Work" title="Experience">
        <div className="divide-y divide-neutral-200">
          {experience.map((exp, i) => (
            <article key={i} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 py-8 group">
              <div className="text-xs text-neutral-500 md:pt-1">
                <div>{exp.period}</div>
                <div className="mt-1">{exp.location}</div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={28}
                      height={28}
                      className="rounded object-contain border border-neutral-200 bg-white"
                    />
                  )}
                  <h3 className="text-base font-semibold tracking-tight">
                    {exp.title}
                    <span className="text-neutral-400"> · {exp.company}</span>
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3 max-w-2xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Selected work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link || '#'}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noopener noreferrer' : undefined}
              className="group bg-[#fafaf9] hover:bg-white p-6 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold tracking-tight group-hover:text-orange-600 transition-colors">
                    {p.title}
                  </h3>
                  {p.link && (
                    <span className="text-neutral-300 group-hover:text-orange-500 transition-colors text-sm" aria-hidden>
                      ↗
                    </span>
                  )}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                  {p.type} · {p.year}
                </div>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Stack" title="Tools I use">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((s) => (
            <div key={s.group}>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">{s.group}</div>
              <ul className="space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-neutral-800">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 border-t border-neutral-200 mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Contact</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">
            Let&apos;s build something.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-xl mb-10">
            I&apos;m open to full-time and contract work in software engineering, agentic AI, and
            AR/VR. The fastest way to reach me is email.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="mailto:dlsneed1298@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors w-fit"
            >
              dlsneed1298@gmail.com
              <span aria-hidden>→</span>
            </a>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <a href="https://www.linkedin.com/in/dsneedy" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
              <a href="https://github.com/dsneed123" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">GitHub</a>
              <a href="https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">Résumé</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} Davis Sneed</div>
          <div>Built with Next.js & Tailwind</div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-24 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">{eyebrow}</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium text-neutral-600 bg-neutral-100 border border-neutral-200">
      {children}
    </span>
  );
}
