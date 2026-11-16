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
    description: 'AI agent orchestration platform I founded and built. It is a deployment console for agentic workflows, with a DAG orchestrator that handles loops, branching and parallel execution. FastAPI, PostgreSQL and Redis on the back end, React Flow for the builder.',
    highlights: [
      'DAG runs with loops, branches, parallel steps',
      'Autopilot agents plan, execute and commit code',
      'Push and poll-diff triggers',
      'Any model: local Grace Blackwell or hosted APIs'
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

type Brief = { title: string; note: string; meta: string; link?: string };

const alsoBuilt: Brief[] = [
  { title: 'local-agents', note: '28+ open-source AI agents that run locally on Ollama', meta: 'Python · 2026', link: 'https://github.com/dsneed123/local-agents' },
  { title: 'TARS', note: 'Coding agent that turns GitHub issues into tested pull requests', meta: 'Python · 2026', link: 'https://tarsai.dev' },
  { title: 'Lighter', note: 'Agent suite tuned for the smallest model that gets the job done', meta: 'Python · 2026', link: 'https://github.com/dsneed123/Lighter' },
  { title: 'HygGeo', note: 'Travel platform for eco-friendly stays, co-founded', meta: 'Django · 2025', link: 'https://HygGeo.com' },
  { title: 'Centrebyte', note: 'Crypto marketplace with wallet and instant payments', meta: 'Django · 2025', link: 'http://centrebyte.com' },
  { title: 'Physics Engine', note: '2D collision and particle simulation in Rust', meta: 'Rust · 2024', link: 'https://github.com/dsneed123/Bouncing_balls_rust' },
  { title: 'Shamir Secret Sharing', note: 'Threshold key splitting over finite fields', meta: 'Python · 2024', link: 'https://github.com/dsneed123/shamir_secret_sharing' }
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
          <a
            className="btn btn-primary"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé (PDF)
          </a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="graph-paper" style={{ position: 'absolute', inset: '0 0 auto 0', height: 760, pointerEvents: 'none' }} aria-hidden />
          <div className="wrap" style={{ position: 'relative' }}>
            <p className="doc-control">
              <span>Davis Sneed</span> <i aria-hidden>·</i>
              <span>Robotics Data Collection Researcher III</span> <i aria-hidden>·</i>
              <span>Seattle, WA</span> <i aria-hidden>·</i>
              <span>Rev 2026.11</span> <i aria-hidden>·</i>
              <span>Sheet 1 of 1</span>
            </p>

            <div className="hero-grid">
              <div>
                <p className="eyebrow" style={{ marginBottom: 'var(--s4)' }}>
                  Robotics · AI agents · Python
                </p>
                <h1 id="hero-title">
                  Davis Sneed, robotics researcher and AI engineer in Seattle.
                </h1>
                <p className="lede" style={{ marginTop: 'var(--s5)' }}>
                  At Amazon Fauna I train humanoid robots through teleoperation and build RAG-based
                  agents for on-site robotics debugging. Before that I worked on Meta&apos;s humanoid
                  robotics program and shipped full-stack features alongside a startup CEO. I also
                  founded{' '}
                  <a href="https://awo.so" target="_blank" rel="noopener noreferrer">AWO</a>, where
                  agents plan, execute and commit multi-step software tasks on local or cloud models.
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
                  alt="Portrait of Davis Sneed, robotics researcher and AI engineer based in Seattle, Washington."
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

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
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

        <section id="contact" className="sheet-invert" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <span className="eyebrow">04 / Contact</span>
                <h2 id="contact-title" style={{ marginTop: 'var(--s2)' }}>
                  Hiring? Let&apos;s talk.
                </h2>
                <p className="lede" style={{ marginTop: 'var(--s4)' }}>
                  I&apos;m interested in engineering work on AI agents, robotics tooling and
                  ML data systems. Email gets the fastest answer, usually the same day.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  <a className="btn btn-lg btn-invert" href={RESUME} target="_blank" rel="noopener noreferrer">
                    Résumé (PDF)
                  </a>
                </div>
                <div className="transcript" aria-hidden>
                  <div><b>$</b> <span>whoami</span></div>
                  <div>davis sneed, robotics data collection researcher iii + ai engineer, seattle wa</div>
                  <div><b>$</b> <span>status</span></div>
                  <div>open to work · same-day reply</div>
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
