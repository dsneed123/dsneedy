import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-var.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const plexSans = localFont({
  src: "./fonts/plex-sans-var.woff2",
  variable: "--font-plex-sans",
  weight: "100 700",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE = "https://dsneedy.com";
const TITLE = "Davis Sneed — Software Engineer in Seattle | Agentic AI & Full-Stack";
const DESCRIPTION =
  "Davis Sneed is a software engineer in Seattle, WA building agentic AI systems, full-stack web products, and systems software in Python, TypeScript, React and Rust. Founder of AWO (awo.so), an agentic workflow orchestrator. Gonzaga CS '25. Open to full-time software engineering roles — résumé, projects, and contact details here.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s | Davis Sneed — Software Engineer",
  },
  description: DESCRIPTION,
  applicationName: "Davis Sneed — Portfolio",
  authors: [{ name: "Davis Sneed", url: SITE }],
  creator: "Davis Sneed",
  publisher: "Davis Sneed",
  keywords: [
    "Davis Sneed",
    "software engineer",
    "Seattle software engineer",
    "agentic AI engineer",
    "AI engineer",
    "full-stack developer",
    "Python developer",
    "TypeScript developer",
    "React developer",
    "Next.js developer",
    "Rust developer",
    "Django developer",
    "LLM orchestration",
    "automation engineer",
    "AWO",
    "awo.so",
    "Gonzaga University computer science",
    "hire software engineer Seattle",
    "open to work software engineer",
    "portfolio",
    "résumé",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE,
    siteName: "Davis Sneed — Software Engineer",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Davis",
    lastName: "Sneed",
    username: "dsneed123",
    images: [
      {
        url: "/media/og-card.png",
        width: 1200,
        height: 630,
        alt: "Davis Sneed — software engineer in Seattle building agentic AI and full-stack products.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/media/og-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f3",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Davis Sneed",
  givenName: "Davis",
  familyName: "Sneed",
  url: SITE,
  image: `${SITE}/media/headshot.png`,
  jobTitle: "Software Engineer",
  description:
    "Software engineer in Seattle focused on agentic AI, full-stack development, and systems programming. Founder of AWO, an agentic workflow orchestrator.",
  email: "mailto:dlsneed1298@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gonzaga University",
    sameAs: "https://www.gonzaga.edu/",
  },
  worksFor: {
    "@type": "Organization",
    name: "Amazon",
    sameAs: "https://www.amazon.com/",
  },
  knowsAbout: [
    "Agentic AI",
    "Large language model orchestration",
    "Full-stack web development",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Django",
    "Rust",
    "Go",
    "C++",
    "PostgreSQL",
    "Docker",
    "Quality assurance automation",
  ],
  sameAs: [
    "https://github.com/dsneed123",
    "https://www.linkedin.com/in/dsneedy",
    "https://awo.so",
    "https://tarsai.dev",
  ],
  seeks: {
    "@type": "Demand",
    name: "Full-time software engineering roles",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Davis Sneed — Software Engineer",
  url: SITE,
  inLanguage: "en-US",
  author: { "@type": "Person", name: "Davis Sneed" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </body>
    </html>
  );
}
