"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  role: string;
  year: string;
  type: string;
  featured?: boolean;
  description: string;
  technologies: string[];
  link?: string;
  images?: { src: string; alt: string; caption: string }[];
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: 'AWO',
    role: 'Founder & Sole Engineer',
    year: '2026',
    type: 'Product',
    featured: true,
    description: 'Local-first agentic automation platform. Watch Discord channels, prices, pages or schedules, then run event-driven workflow graphs on any model — Ollama, OpenAI or Anthropic. Designed, built and launched solo; live today with free and pro tiers.',
    highlights: [
      '~80% fewer AI calls via batching',
      '49 built-in workflow recipes',
      'Runs on-device, zero telemetry',
      'Autopilot ships one PR per phase'
    ],
    technologies: ['Python', 'LLM Orchestration', 'Ollama', 'Anthropic', 'OpenAI'],
    link: 'https://awo.so',
    images: [
      {
        src: '/media/awo-hero.png',
        alt: 'AWO landing page — Stop checking things. Let AWO watch them for you.',
        caption: 'Fig. 1 — awo.so landing'
      },
      {
        src: '/media/awo-builder.png',
        alt: 'AWO Studio — visual workflow builder with a page-watch workflow on the canvas',
        caption: 'Fig. 2 — Studio workflow builder'
      }
    ]
  },
  {
    title: 'TARS',
    role: 'Creator',
    year: '2026',
    type: 'Systems',
    description: 'Autonomous coding agent on local NVIDIA Grace Blackwell hardware. Pulls tasks from GitHub issues, plans and writes the code with Claude CLI, runs the tests, and opens its own pull requests.',
    technologies: ['Python', 'Claude API', 'GitHub API', 'Bash'],
    link: 'https://tarsai.dev'
  },
  {
    title: 'local-agents',
    role: 'Creator',
    year: '2026',
    type: 'Systems',
    description: '28 specialized CLI agents that run entirely on your own machine through Ollama — no API keys, no config. Detects installed models, assigns one per role, and ships research, coding, review and SQL agents.',
    technologies: ['Python', 'Ollama', 'CLI', 'Local LLMs'],
    link: 'https://github.com/dsneed123/local-agents'
  },
  {
    title: 'Lighter',
    role: 'Creator',
    year: '2026',
    type: 'Systems',
    description: 'AI agent suite tuned for inference efficiency — smaller prompts, minimal context, right-sized model per task. Benchmarked against larger models to quantify token, latency and cost savings.',
    technologies: ['Python', 'LLM Benchmarking', 'Prompt Engineering'],
    link: 'https://github.com/dsneed123/Lighter'
  },
  {
    title: 'HygGeo',
    role: 'Co-Founder & Lead Developer',
    year: '2025',
    type: 'Professional',
    description: 'Sustainable travel platform, co-founded and built end to end: Django back end, custom front end, geolocation search and community reviews.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
    link: 'https://HygGeo.com'
  }
];

type Brief = { title: string; note: string; meta: string; link?: string };

const alsoBuilt: Brief[] = [
  { title: 'Centrebyte', note: 'Crypto marketplace with wallet and instant payments', meta: 'Django · 2025', link: 'http://centrebyte.com' },
  { title: 'TARS-Lite', note: 'Offline variant of TARS on Ollama, zero API cost', meta: 'Python · 2026' },
  { title: 'Hive', note: 'Outreach automation assistant with a React dashboard', meta: 'Python · 2026' },
  { title: 'Core Roulette', note: 'Fitness app with workout randomization and tracking', meta: 'Next.js · 2024', link: 'http://www.core-roulette.com/' },
  { title: 'Physics Engine', note: '2D collision and particle simulation in Rust', meta: 'Rust · 2024', link: 'https://github.com/dsneed123/Bouncing_balls_rust' },
  { title: 'Shamir Secret Sharing', note: 'Threshold key splitting over finite fields', meta: 'Python · 2024', link: 'https://github.com/dsneed123/shamir_secret_sharing' },
  { title: 'Solar System Sim', note: 'Orbital mechanics simulation in Rust', meta: 'Rust · 2024', link: 'https://github.com/dsneed123/solar-system-rust' }
];

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  technologies: string[];
  logo?: string;
};

const experience: Experience[] = [
  {
    title: 'Quality Assurance Technician',
    company: 'Amazon',
    period: 'Jun 2026 — Present',
    location: 'Bellevue, WA',
    current: true,
    bullets: [
      'Test and validate experimental, pre-release AI agents, documenting results for engineering teams.',
      'Build Python tooling that automates data collection, validation and reporting.'
    ],
    technologies: ['Python', 'AI Agents', 'Automation', 'QA']
  },
  {
    title: 'Graduate Engineer',
    company: 'Qualitest',
    period: 'Feb 2026 — Jun 2026',
    location: 'Kirkland, WA',
    bullets: [
      'Ran structured testing and validation of AR/VR hardware and software systems.',
      'Analyzed and documented experimental data against research-protocol requirements.'
    ],
    technologies: ['AR/VR', 'QA Testing', 'Hardware Validation'],
    logo: '/media/qualitest-logo.jpg'
  },
  {
    title: 'Data Collector — Meta Research',
    company: 'Insight Global',
    period: 'Nov 2025 — Dec 2025',
    location: 'Seattle, WA',
    bullets: [
      'Field data collection for Meta AR/VR research across dense urban Seattle environments.'
    ],
    technologies: ['AR/VR Research', 'Field Operations'],
    logo: '/media/insightglobal-logo.png'
  },
  {
    title: 'Software Engineer',
    company: 'Pivot Politics',
    period: 'Oct 2025 — Jan 2026',
    location: 'Remote',
    bullets: [
      'Designed and shipped the front end of a social platform — Figma to React, integrated against a Python back end.'
    ],
    technologies: ['JavaScript', 'React', 'Figma', 'UI/UX']
  },
  {
    title: 'Software Engineer',
    company: 'ProfoundSports',
    period: '2024',
    location: 'Remote',
    bullets: [
      'Automated athlete social-media data collection across 10,000+ profiles with a Python and BeautifulSoup scraper.'
    ],
    technologies: ['Python', 'BeautifulSoup', 'Data Pipelines']
  }
];

const skills = [
  { group: 'Primary', items: ['Python', 'TypeScript', 'React', 'Next.js', 'Django'] },
  { group: 'Systems', items: ['Rust', 'C++', 'Go', 'Bash', 'SQL'] },
  { group: 'Tools', items: ['Claude API', 'Ollama', 'PostgreSQL', 'Docker', 'GitHub Actions'] }
];

const readouts = [
  { label: 'AI calls cut', value: '~80%', note: 'AWO — request batching' },
  { label: 'Workflow recipes', value: '49', note: 'AWO — built in, ready to run' },
  { label: 'Profiles automated', value: '10,000+', note: 'ProfoundSports — Python scraper' },
  { label: 'Local agents shipped', value: '28', note: 'local-agents — runs via Ollama' }
];

const nav = [
  { id: 'spec', label: 'Spec' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' }
];

const RESUME = 'https://drive.google.com/file/d/105ynAzOU3AioXaAJMbz7xe-ANgBUMcRC/view?usp=sharing';
const EMAIL = 'dlsneed1298@gmail.com';

export default function Home() {
  const [activeSection, setActiveSection] = useState('spec');
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

  return (
    <div className="sf">
      <a href="#main" className="sr-only">Skip to content</a>

      <header className="site-header" data-scrolled={scrolled}>
        <div className="wrap">
          <a href="#top" className="wordmark plain" aria-label="Davis Sneed — home">
            <span className="wordmark-block" aria-hidden />
            <span className="wordmark-name">Davis Sneed</span>
          </a>
          <nav className="site-nav" aria-label="Sections">
            {nav.map(({ id, label }) => (
              <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'true' : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="btn btn-primary"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé — PDF
          </a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="graph-paper" style={{ position: 'absolute', inset: '0 0 auto 0', height: 760, pointerEvents: 'none' }} aria-hidden />
          <div className="wrap" style={{ position: 'relative' }}>
            <p className="doc-control">
              <span>Davis Sneed</span> <i aria-hidden>·</i>
              <span>Software Engineer</span> <i aria-hidden>·</i>
              <span>Seattle, WA</span> <i aria-hidden>·</i>
              <span>Rev 2026.11</span> <i aria-hidden>·</i>
              <span>Sheet 1 of 1</span>
            </p>

            <div className="hero-grid">
              <div>
                <p className="eyebrow" style={{ marginBottom: 'var(--s4)' }}>
                  AI &amp; Software Engineer — Seattle, WA
                </p>
                <h1 id="hero-title">
                  Davis Sneed — software engineer who ships whole systems.
                </h1>
                <p className="lede" style={{ marginTop: 'var(--s5)' }}>
                  AI and software engineer building <strong>agentic LLM systems</strong> and
                  full-stack products in Python, TypeScript/React and PostgreSQL. I design
                  multi-step orchestration on the Claude and OpenAI APIs, and ship my own
                  products — most recently{' '}
                  <a href="https://awo.so" target="_blank" rel="noopener noreferrer">AWO</a>.
                </p>

                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href={RESUME} target="_blank" rel="noopener noreferrer">
                    Download résumé
                  </a>
                  <a className="btn btn-lg" href={`mailto:${EMAIL}`}>Email me</a>
                  <a className="btn btn-lg" href="https://www.linkedin.com/in/dsneedy" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="btn btn-lg" href="https://github.com/dsneed123" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>

                <p style={{ marginTop: 'var(--s5)' }}>
                  <span className="availability">
                    <span aria-hidden />
                    Open to full-time engineering roles
                  </span>
                </p>
              </div>

              <figure className="portrait">
                <Image
                  src="/media/headshot.png"
                  alt="Portrait of Davis Sneed, software engineer based in Seattle, Washington."
                  width={520}
                  height={520}
                  priority
                />
                <figcaption>Davis Sneed · Seattle, WA</figcaption>
              </figure>
            </div>

            <dl className="spec" id="spec">
              <div>
                <dt>Based in</dt>
                <dd>Seattle, WA</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Gonzaga University, BS Computer Science &apos;25</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>QA Technician — Amazon</dd>
              </div>
              <div>
                <dt>Latest ship</dt>
                <dd>
                  <a href="https://awo.so" target="_blank" rel="noopener noreferrer">AWO — early access</a>
                </dd>
              </div>
            </dl>

            <section aria-label="Measured results" className="readouts">
              {readouts.map((r) => (
                <div className="readout" key={r.label}>
                  <span className="eyebrow">{r.label}</span>
                  <div className="readout-value">{r.value}</div>
                  <div className="readout-foot">
                    <span>{r.note}</span>
                    <svg width="34" height="8" viewBox="0 0 34 8" aria-hidden>
                      <rect x="0" y="3" width="34" height="2" fill="var(--accent)" />
                    </svg>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">01 — Experience</span>
                <h2 id="work-title">Where I&apos;ve worked</h2>
              </div>
              <span className="eyebrow">5 roles · 2024 — present</span>
            </div>

            <div className="roles">
              {experience.map((exp) => (
                <article className="role" key={`${exp.company}-${exp.period}`}>
                  <div className="role-when">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                    {exp.current && (
                      <span className="availability" style={{ width: 'fit-content', marginTop: 'var(--s1)' }}>
                        <span aria-hidden />
                        Now
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="role-title">
                      {exp.logo && (
                        <Image
                          className="role-logo"
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={26}
                          height={26}
                        />
                      )}
                      <h3>
                        {exp.title}
                        <span className="role-company"> · {exp.company}</span>
                      </h3>
                    </div>
                    <ul className="bullets">
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <ul className="tags">
                      {exp.technologies.map((t) => (
                        <li className="tag" key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">02 — Projects</span>
                <h2 id="projects-title">Things I built and shipped</h2>
              </div>
              <span className="eyebrow">Selected · 2024 — 2026</span>
            </div>

            <div className="projects">
              {projects.map((p, i) => (
                <ProjectPanel key={p.title} project={p} index={i} />
              ))}
            </div>

            <div className="also">
              <span className="eyebrow">Also built</span>
              <ul className="also-list">
                {alsoBuilt.map((b) => (
                  <li className="also-row" key={b.title}>
                    <span className="also-title">
                      {b.link ? (
                        <a href={b.link} target="_blank" rel="noopener noreferrer">{b.title}</a>
                      ) : (
                        b.title
                      )}
                    </span>
                    <span className="also-note">{b.note}</span>
                    <span className="also-meta mono">{b.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="stack" className="section" aria-labelledby="stack-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">03 — Stack</span>
                <h2 id="stack-title">Tools I reach for</h2>
              </div>
              <span className="eyebrow">Languages · Systems · Infra</span>
            </div>

            <div className="columns">
              {skills.map((s) => (
                <div className="column" key={s.group}>
                  <span className="eyebrow">{s.group}</span>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sheet-invert" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <span className="eyebrow">04 — Contact</span>
                <h2 id="contact-title" style={{ marginTop: 'var(--s2)' }}>
                  Hiring? Let&apos;s talk.
                </h2>
                <p className="lede" style={{ marginTop: 'var(--s4)' }}>
                  I&apos;m open to full-time and contract software engineering work — agentic AI,
                  full-stack product, AR/VR tooling. Email is fastest; I answer the same day.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  <a className="btn btn-lg btn-invert" href={RESUME} target="_blank" rel="noopener noreferrer">
                    Résumé — PDF
                  </a>
                </div>
                <div className="transcript" aria-hidden>
                  <div><b>$</b> <span>whoami</span></div>
                  <div>davis sneed — software engineer, seattle wa</div>
                  <div><b>$</b> <span>status</span></div>
                  <div>open to work · responds same day · relocation ok</div>
                </div>
              </div>

              <div className="contact-lines">
                <a href={`mailto:${EMAIL}`}>
                  <em>Email</em>
                  <span>{EMAIL}</span>
                </a>
                <a href="https://www.linkedin.com/in/dsneedy" target="_blank" rel="noopener noreferrer">
                  <em>LinkedIn</em>
                  <span>in/dsneedy</span>
                </a>
                <a href="https://github.com/dsneed123" target="_blank" rel="noopener noreferrer">
                  <em>GitHub</em>
                  <span>dsneed123</span>
                </a>
                <a href="https://awo.so" target="_blank" rel="noopener noreferrer">
                  <em>Product</em>
                  <span>awo.so</span>
                </a>
                <div>
                  <em>Location</em>
                  <span>Seattle, WA — US</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Davis Sneed</span>
          <span>Seattle, WA — Built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}

function ProjectPanel({ project: p, index }: { project: Project; index: number }) {
  const body = (
    <>
      <div className="project-head">
        <div className="project-id">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <h3>{p.title}</h3>
        </div>
        <span className="project-meta">
          {p.type} · {p.year}
        </span>
      </div>

      <p className="project-body">{p.description}</p>

      {p.images && (
        <div className="shots">
          {p.images.map((img) => (
            <figure className="shot" key={img.src}>
              <Image src={img.src} alt={img.alt} width={1600} height={1000} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {p.highlights && (
        <div className="facts">
          {p.highlights.map((h) => (
            <div key={h}>{h}</div>
          ))}
        </div>
      )}

      <ul className="tags">
        <li className="tag">{p.role}</li>
        {p.technologies.map((t) => (
          <li className="tag" key={t}>{t}</li>
        ))}
      </ul>
    </>
  );

  const className = `panel${p.featured ? ' project-featured' : ''}`;

  if (p.link) {
    return (
      <a
        className={className}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
       
        aria-label={`${p.title} — open project`}
      >
        {body}
      </a>
    );
  }

  return (
    <article className={className}>
      {body}
    </article>
  );
}
