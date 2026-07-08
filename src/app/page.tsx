"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'TARS',
    role: 'Creator',
    year: '2026',
    type: 'Systems',
    featured: true,
    description: 'Autonomous coding agent running locally on NVIDIA Grace Blackwell hardware in a continuous self-improvement loop. Discovers tasks from GitHub issues and a web platform, plans and writes code via Claude CLI in headless mode, runs tests, opens PRs, and reports to Discord — all without human intervention.',
    technologies: ['Python', 'Bash', 'Claude CLI', 'GitHub API', 'Discord'],
    link: 'https://tarsai.dev'
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
    title: 'Quality Assurance Technician',
    company: 'Amazon',
    period: 'Jun 2026 — Present',
    location: 'Bellevue, WA',
    current: true,
    description: 'Contracted through Apex Systems to support quality assurance and data operations in a fast-paced technical environment. Interact with experimental, pre-release technology and AI agents to collect, validate, and analyze data and document test results. Develop Python scripts and tooling to automate data collection, validation, and reporting workflows, improving efficiency and accuracy. Collaborate with cross-functional teams to identify issues and support product quality, all while maintaining strict confidentiality requirements.',
    technologies: ['Python', 'QA Testing', 'AI Agents', 'Data Operations', 'Automation']
  },
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

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
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
          scrolled ? 'bg-[#fafaf9]/85 backdrop-blur-md border-b border-neutral-200/80' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('about')}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
            Davis Sneed
          </button>
          <div className="hidden md:flex items-center gap-0.5 rounded-full border border-neutral-200 bg-white/70 backdrop-blur px-1 py-1">
            {nav.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  activeSection === id
                    ? 'text-white bg-neutral-900 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="mailto:dlsneed1298@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full bg-neutral-900 text-white hover:bg-accent transition-colors"
          >
            Get in touch
            <span aria-hidden className="text-[10px]">↗</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="dot-grid absolute inset-x-0 top-0 h-[420px] pointer-events-none" aria-hidden />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10" data-reveal>
            <Image
              src="/media/headshot.png"
              alt="Davis Sneed"
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-white shadow-md"
            />
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new work
            </div>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5" data-reveal>
            Software Engineer — Seattle, WA
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-7" data-reveal>
            Davis Sneed<span className="text-accent">.</span>
            <span className="block mt-2 text-neutral-400 text-3xl md:text-5xl leading-[1.1]">
              Building autonomous systems and clean products.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-10" data-reveal>
            I&apos;m an engineer focused on agentic AI, full-stack development, and systems
            programming. Currently building <span className="text-neutral-900 font-medium">TARS</span> — an
            autonomous coding agent — and supporting pre-release AI technology at Amazon.
          </p>

          <div className="flex flex-wrap items-center gap-3" data-reveal>
            <a
              href="mailto:dlsneed1298@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-accent transition-colors"
            >
              Email me
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium border border-neutral-200 hover:border-neutral-900 transition-colors"
            >
              Résumé
            </a>
            <a
              href="https://www.linkedin.com/in/dsneedy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium border border-neutral-200 hover:border-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dsneed123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium border border-neutral-200 hover:border-neutral-900 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-neutral-200" data-reveal>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Based in</div>
              <div className="text-sm font-medium">Seattle, WA</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Education</div>
              <div className="text-sm font-medium">Gonzaga, CS &apos;25</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Currently</div>
              <div className="text-sm font-medium">Amazon · Apex Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Experience */}
      <Section id="work" eyebrow="01 — Work" title="Experience">
        <div className="relative">
          <div className="absolute left-[3px] md:left-[169px] top-3 bottom-3 w-px bg-neutral-200 hidden sm:block" aria-hidden />
          <div className="space-y-2">
            {experience.map((exp, i) => (
              <article
                key={i}
                data-reveal
                className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-10 py-6 group"
              >
                <div className="relative text-xs text-neutral-500 md:pt-1.5">
                  <span
                    className={`hidden sm:block absolute left-0 md:left-auto md:right-[-14.5px] top-[7px] h-[7px] w-[7px] rounded-full ring-4 ring-[#fafaf9] ${
                      exp.current ? 'bg-accent' : 'bg-neutral-300'
                    }`}
                    aria-hidden
                  />
                  <div className="font-mono sm:pl-4 md:pl-0">{exp.period}</div>
                  <div className="mt-1 sm:pl-4 md:pl-0">{exp.location}</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={28}
                        height={28}
                        className="rounded-md object-contain border border-neutral-200 bg-white"
                      />
                    )}
                    <h3 className="text-base font-semibold tracking-tight">
                      {exp.title}
                      <span className="text-neutral-400 font-normal"> · {exp.company}</span>
                    </h3>
                    {exp.current && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5">
                        Now
                      </span>
                    )}
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
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="02 — Projects" title="Selected work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="03 — Stack" title="Tools I use">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.group}
              data-reveal
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-4">
                {s.group}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 hover:border-neutral-400 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28 border-t border-neutral-200 mt-16 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto" data-reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
            04 — Contact
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.05]">
            Let&apos;s build something<span className="text-accent">.</span>
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed max-w-xl mb-10">
            I&apos;m open to full-time and contract work in software engineering, agentic AI, and
            AR/VR. The fastest way to reach me is email.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="mailto:dlsneed1298@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-accent hover:text-white transition-colors w-fit"
            >
              dlsneed1298@gmail.com
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <div className="flex items-center gap-5 text-sm text-neutral-400">
              <a href="https://www.linkedin.com/in/dsneedy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/dsneed123" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Résumé</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-neutral-950 text-neutral-500 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs font-mono">
          <div>© {new Date().getFullYear()} Davis Sneed</div>
          <div>Seattle, WA — Built with Next.js & Tailwind</div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  project: p,
  index
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-neutral-300 group-hover:text-accent transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
            {p.title}
          </h3>
          {p.link && (
            <span
              className="text-neutral-300 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm"
              aria-hidden
            >
              ↗
            </span>
          )}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 pt-1.5 shrink-0">
          {p.type} · {p.year}
        </div>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed mb-5 flex-1 max-w-2xl">
        {p.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {p.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </>
  );

  const className = `group rounded-2xl border border-neutral-200 bg-white p-6 md:p-7 flex flex-col transition-all duration-200 hover:shadow-lg hover:shadow-neutral-200/60 hover:-translate-y-0.5 hover:border-neutral-300 ${
    p.featured ? 'md:col-span-2 bg-gradient-to-br from-white to-orange-50/40' : ''
  }`;

  if (p.link) {
    return (
      <a href={p.link} target="_blank" rel="noopener noreferrer" className={className} data-reveal>
        {inner}
      </a>
    );
  }
  return (
    <div className={className} data-reveal>
      {inner}
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
        <div className="mb-14" data-reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {title}
            <span className="text-accent">.</span>
          </h2>
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
