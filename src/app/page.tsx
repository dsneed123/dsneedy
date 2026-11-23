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
    role: 'Founder',
    year: '2025 – now',
    type: 'Product',
    featured: true,
    description: 'Agentic workflow orchestrator I founded and built, now in early access. It watches a page, a price or a chat channel, lets AI decide when something matters, and sends you a message where you already look. Workflows are graphs run by a DAG orchestrator with branches, merges and parallel steps, on FastAPI, PostgreSQL, Redis and React Flow.',
    highlights: [
      'Discord, Telegram, webhook, page and schedule inputs',
      'Batching: many events, one model call',
      'Autopilot agents plan, execute and commit code',
      'Any model: Ollama, OpenAI, Anthropic, your own'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React Flow'],
    link: 'https://awo.so',
    images: [
      {
        src: '/media/awo-hero.png',
        alt: 'AWO landing page — Stop checking things. Let AWO watch them for you.',
        caption: 'Fig. 1 / awo.so landing'
      },
      {
        src: '/media/awo-builder.png',
        alt: 'AWO Studio — visual workflow builder with a page-watch workflow on the canvas',
        caption: 'Fig. 2 / Studio workflow builder'
      }
    ]
  },
  {
    title: 'Timeline Visualization',
    role: 'Scrum Master & Full-Stack Developer',
    year: '2024 – 2025',
    type: 'Capstone',
    description: 'Year-long senior design project for R7D LLC, a SpaceX vendor. As Scrum Master I ran Agile sprints for a team of four engineers, and I built full-stack features: a drag-and-drop UI, dynamic visualizations and the SQL data models. Won Best Senior Design CS Project in 2025.',
    technologies: ['React', 'Next.js', 'Python', 'PostgreSQL']
  }
];

type Brief = { title: string; detail: string; stack: string[]; meta: string; link?: string };

const alsoBuilt: Brief[] = [
  {
    title: 'local-agents',
    detail: '28 agents for coding, code review, SQL, data, research and writing that run entirely on your machine through Ollama. No API keys or config: it detects your installed models and scores the best one for each role. File tools are sandboxed to a workspace and destructive commands are blocked.',
    stack: ['Python', 'Ollama', 'CLI'],
    meta: 'Open source · 2026',
    link: 'https://github.com/dsneed123/local-agents'
  },
  {
    title: 'TARS',
    detail: 'Autonomous coding agent that works while you are away. It pulls tasks from GitHub issues and a queue, plans and writes the change with Claude CLI, runs build, test and lint, retries failed fixes up to three times, reviews its own diff, then opens the pull request and reports to Discord. It paces itself against a token budget.',
    stack: ['Python', 'Claude CLI', 'GitHub API'],
    meta: 'Agent · 2026',
    link: 'https://tarsai.dev'
  },
  {
    title: 'Lighter',
    detail: 'Agent suite built on the idea that most tasks don’t need your biggest model. A router sizes each query and sends it to the smallest local model that can handle it, and old conversation turns are summarized on disk instead of filling the prompt. A benchmark harness compares tokens, latency, cost and answer quality against a large-model baseline.',
    stack: ['Python', 'Ollama', 'Benchmarking'],
    meta: 'Open source · 2026',
    link: 'https://github.com/dsneed123/Lighter'
  },
  {
    title: 'HygGeo',
    detail: 'Travel site I co-founded for eco-friendly stays and local experiences, built around the idea of hygge meeting sustainable travel. I built it end to end in Django: listings, geolocation search, accounts and reviews from people who stayed there.',
    stack: ['Django', 'PostgreSQL', 'JavaScript'],
    meta: 'Co-founder · 2025',
    link: 'https://HygGeo.com'
  },
  {
    title: 'Centrebyte',
    detail: 'Proof-of-concept peer-to-peer marketplace settled in Bitcoin, like eBay without the middleman. Sellers list goods priced in BTC, buyers filter by category, price and seller reputation, and escrow holds payment until the deal closes.',
    stack: ['Django', 'Bitcoin', 'Escrow'],
    meta: 'Prototype · 2024'
  },
  {
    title: 'Physics Engine',
    detail: 'Rust simulation of balls that move independently, bounce off walls and collide elastically by exchanging velocities. Positions, speeds and colors are randomized, and frames render straight to a framebuffer with minifb.',
    stack: ['Rust', 'minifb'],
    meta: 'Simulation · 2024',
    link: 'https://github.com/dsneed123/Bouncing_balls_rust'
  },
  {
    title: 'Shamir Secret Sharing',
    detail: 'Splits a secret into n shares with a random polynomial so any k of them rebuild it through Lagrange interpolation, while fewer reveal nothing. An optional flag graphs the polynomial and shares. Built for a cyber security course.',
    stack: ['Python', 'Cryptography', 'matplotlib'],
    meta: 'Coursework · 2024',
    link: 'https://github.com/dsneed123/shamir_secret_sharing'
  }
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
    title: 'Robotics Data Collection Researcher III',
    company: 'Amazon Fauna (via Apex Systems)',
    period: 'Jun 2026 – Present',
    location: 'Bellevue, WA',
    current: true,
    bullets: [
      'Promoted from Quality Assurance Technician, ML Ops in November 2026.',
      'Train humanoid robots on complex tasks through teleoperation and write the data collection protocols used for ML training.',
      'Build RAG-based AI agents that run shell commands to diagnose hardware and software problems on robotics systems.',
      'Write Python and ROS 2 tooling that talks to robot hardware during testing and captures data for ML pipelines.',
      'Hold a 98%+ quality pass rate on data collection and validation, working directly with Amazon stakeholders.'
    ],
    technologies: ['Python', 'ROS 2', 'RAG', 'AI Agents', 'Teleoperation']
  },
  {
    title: 'Graduate Engineer',
    company: 'Qualitest (client: Meta)',
    period: 'Feb 2026 – Jun 2026',
    location: 'Kirkland, WA',
    bullets: [
      'Collected and managed ML training data with AR/VR hardware for Meta humanoid robotics programs, working to strict client requirements and research protocols.',
      'Site Lead for a 5-person data collection team across multiple sites, owning timelines, quality standards and compliance.',
      'Kept the data pass rate above 95% through QA review, data validation and enforcing client collection standards.',
      'Worked with research, engineering and operations teams to resolve data inconsistencies.'
    ],
    technologies: ['AR/VR', 'Robotics Data', 'Data Validation', 'Site Lead'],
    logo: '/media/qualitest-logo.jpg'
  },
  {
    title: 'Software Engineer',
    company: 'PIVOT',
    period: 'Sep 2025 – Jan 2026',
    location: 'Remote',
    bullets: [
      'Worked directly with the CEO to turn business requirements into full-stack features, owning delivery across a JavaScript front end, Django back end and PostgreSQL.',
      'Designed the PostgreSQL data models and tuned the queries behind the app’s dynamic pages.',
      'Built responsive front-end features in JavaScript, HTML and CSS wired to Django services.'
    ],
    technologies: ['JavaScript', 'Python', 'Django', 'PostgreSQL']
  }
];

const skills = [
  { group: 'AI & LLM', items: ['AI agents & orchestration', 'RAG & tool calling', 'Claude & OpenAI APIs', 'Ollama, local models', 'DAG workflows'] },
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Rust', 'C++'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Django', 'FastAPI', 'ROS 2'] },
  { group: 'Data & cloud', items: ['PostgreSQL', 'Redis', 'ML data pipelines', 'AWS', 'Git & pytest'] }
];

const nav = [
  { id: 'spec', label: 'Spec' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' }
];

const RESUME = 'https://drive.google.com/file/d/1WV_ELuE6890F6jHvQhinrQz3Q0uGFg5F/view?usp=sharing';
const EMAIL = 'dlsneed1298@gmail.com';

export default function Home() {
  const [activeSection, setActiveSection] = useState('spec');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Header state + reading progress (drawn as the orange hairline under the header).
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Close the mobile menu on Escape or when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const mq = window.matchMedia('(min-width: 861px)');
    const onMq = () => mq.matches && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [menuOpen]);

  // Sections ease in as they enter the viewport. Content is visible without JS.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-in', 'true');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
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

      <header className="site-header" data-scrolled={scrolled} data-menu={menuOpen}>
        <div className="wrap">
          <a href="#top" className="wordmark plain" aria-label="Davis Sneed, portfolio home">
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
          <div className="header-actions">
            <a
              className="btn btn-primary btn-sm"
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé<span className="hide-sm">(PDF)</span>
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="menu-bars" aria-hidden />
            </button>
          </div>
        </div>
        <nav id="mobile-menu" className="mobile-menu" aria-label="Sections" hidden={!menuOpen}>
          <div className="wrap">
            {nav.map(({ id, label }, i) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu-index">{String(i).padStart(2, '0')}</span>
                {label}
                <span className="mobile-menu-arrow" aria-hidden>→</span>
              </a>
            ))}
          </div>
        </nav>
        <span className="progress" aria-hidden />
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="graph-paper hero-paper" aria-hidden />
          <div className="wrap hero-wrap">
            <p className="doc-control">
              <span>Davis Sneed</span> <i aria-hidden>·</i>
              <span>AI Automation Engineer</span> <i aria-hidden>·</i>
              <span>Seattle, WA</span> <i aria-hidden>·</i>
              <span>Rev 2026.11</span> <i aria-hidden>·</i>
              <span>Sheet 1 of 1</span>
            </p>

            <div className="hero-grid">
              <div>
                <p className="eyebrow hero-eyebrow">
                  <span className="eyebrow-tick" aria-hidden />
                  AI agents · Automation · Python
                </p>
                <h1 id="hero-title">
                  Davis Sneed, <span className="ink-mark">AI automation engineer</span> in Seattle.
                </h1>
                <p className="lede hero-lede">
                  I build AI agents and the automation around them. At Amazon Fauna that means RAG
                  agents that run shell commands to diagnose robotics hardware, plus Python and ROS 2
                  tooling that feeds ML pipelines. On my own I founded{' '}
                  <a href="https://awo.so" target="_blank" rel="noopener noreferrer">AWO</a>, a workflow
                  orchestrator where agents watch inputs, decide what matters, and plan, execute and
                  commit multi-step software tasks on local or cloud models.
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

                <p className="hero-status">
                  <span className="availability">
                    <span aria-hidden />
                    Open to AI automation roles
                  </span>
                </p>
              </div>

              <figure className="portrait reg-marks">
                <Image
                  src="/media/headshot.png"
                  alt="Portrait of Davis Sneed, AI automation engineer based in Seattle, Washington."
                  width={520}
                  height={520}
                  priority
                />
                <figcaption>
                  <span>Davis Sneed · Seattle, WA</span>
                  <span className="portrait-fig">Fig. 0</span>
                </figcaption>
              </figure>
            </div>

            <dl className="spec" id="spec">
              <div>
                <dt>Based in</dt>
                <dd>Seattle, WA</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Gonzaga University, BA Computer Science &apos;25</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Robotics Data Collection Researcher III, Amazon Fauna</dd>
              </div>
              <div>
                <dt>Latest ship</dt>
                <dd>
                  <a href="https://awo.so" target="_blank" rel="noopener noreferrer">AWO, early access</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="work" className="section reveal" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head ruler">
              <div>
                <span className="eyebrow">01 / Experience</span>
                <h2 id="work-title">Where I&apos;ve worked</h2>
              </div>
              <span className="eyebrow">3 roles · 2025 to now</span>
            </div>

            <div className="roles">
              {experience.map((exp) => (
                <article className="role" key={`${exp.company}-${exp.period}`}>
                  <div className="role-when">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                    {exp.current && (
                      <span className="availability availability-sm">
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

        <section id="projects" className="section reveal" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head ruler">
              <div>
                <span className="eyebrow">02 / Projects</span>
                <h2 id="projects-title">What I&apos;ve built</h2>
              </div>
              <span className="eyebrow">Selected · 2024 to now</span>
            </div>

            <div className="projects">
              {projects.map((p, i) => (
                <ProjectPanel key={p.title} project={p} index={i} />
              ))}
            </div>

            <div className="also">
              <span className="eyebrow">Also built</span>
              <div className="also-grid">
                {alsoBuilt.map((b) => {
                  const inner = (
                    <>
                      <div className="also-head">
                        <h3 className="also-title">
                          {b.title}
                          {b.link && <span className="project-arrow" aria-hidden>↗</span>}
                        </h3>
                        <span className="also-meta mono">{b.meta}</span>
                      </div>
                      <p className="also-note">{b.detail}</p>
                      <ul className="tags">
                        {b.stack.map((t) => (
                          <li className="tag" key={t}>{t}</li>
                        ))}
                      </ul>
                    </>
                  );
                  return b.link ? (
                    <a className="also-card" key={b.title} href={b.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${b.title}`}>
                      {inner}
                    </a>
                  ) : (
                    <article className="also-card" key={b.title}>{inner}</article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section reveal" aria-labelledby="stack-title">
          <div className="wrap">
            <div className="section-head ruler">
              <div>
                <span className="eyebrow">03 / Stack</span>
                <h2 id="stack-title">What I work in</h2>
              </div>
              <span className="eyebrow">AI · Languages · Infra</span>
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

        <section id="contact" className="sheet-invert reveal" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <span className="eyebrow">04 / Contact</span>
                <h2 id="contact-title">
                  Hiring? Let&apos;s talk.
                </h2>
                <p className="lede contact-lede">
                  I&apos;m looking for engineering work on AI agents and automation: building
                  them, wiring them into real workflows and keeping them reliable. Email gets the
                  fastest answer, usually the same day.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg btn-email" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  <a className="btn btn-lg btn-invert" href={RESUME} target="_blank" rel="noopener noreferrer">
                    Résumé (PDF)
                  </a>
                </div>
                <div className="transcript" aria-hidden>
                  <div><b>$</b> <span>whoami</span></div>
                  <div>davis sneed, ai automation engineer, seattle wa</div>
                  <div><b>$</b> <span>status</span></div>
                  <div>open to work · same-day reply</div>
                  <div><b>$</b> <span className="cursor" /></div>
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
                  <span>Seattle, WA, US</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Davis Sneed</span>
          <span>Seattle, WA · Built with Next.js</span>
          <a className="plain to-top" href="#top">Back to top ↑</a>
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
          {p.link && <span className="project-arrow" aria-hidden>↗</span>}
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
        aria-label={`Open the ${p.title} project`}
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
