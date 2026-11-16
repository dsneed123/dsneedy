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
const TITLE = "Davis Sneed | Robotics Researcher and AI Engineer in Seattle";
const DESCRIPTION =
  "I'm Davis Sneed, a Robotics Data Collection Researcher III at Amazon Fauna in Seattle. I build RAG-based robotics debugging agents, Python and ROS 2 tooling, and AWO, an AI agent orchestration platform.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s | Davis Sneed",
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
    "robotics researcher",
    "Amazon Fauna",
    "ROS 2",
    "humanoid robotics",
    "RAG agents",
    "agentic AI engineer",
    "AI engineer",
    "full-stack developer",
    "Python developer",
    "React developer",
    "Next.js developer",
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
    siteName: "Davis Sneed",
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
        alt: "Davis Sneed — robotics researcher and AI engineer in Seattle.",
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
  jobTitle: "Robotics Data Collection Researcher III",
  description:
    "Robotics Data Collection Researcher III at Amazon Fauna in Seattle. Trains humanoid robots through teleoperation and builds RAG-based debugging agents and Python/ROS 2 tooling. Founder of AWO.",
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
    name: "Amazon Fauna",
  },
  knowsAbout: [
    "Robotics",
    "ROS 2",
    "Humanoid robot teleoperation",
    "Retrieval-augmented generation",
    "ML data pipelines",
    "Agentic AI",
    "Large language model orchestration",
    "Full-stack web development",
    "Python",
    "React",
    "Next.js",
    "Django",
    "Rust",
    "C++",
    "PostgreSQL",
    "FastAPI",
  ],
  sameAs: [
    "https://github.com/dsneed123",
    "https://www.linkedin.com/in/dsneedy",
    "https://awo.so",
    "https://tarsai.dev",
  ],
  seeks: {
    "@type": "Demand",
    name: "Engineering roles in AI agents and robotics",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Davis Sneed",
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
