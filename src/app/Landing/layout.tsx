import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links — GitHub, LinkedIn, Résumé and Projects",
  description:
    "Every link for Davis Sneed, software engineer in Seattle: GitHub, LinkedIn, résumé, email and live projects.",
  alternates: { canonical: "/Landing/" },
  openGraph: {
    type: "profile",
    url: "https://dsneedy.com/Landing/",
    title: "Links — Davis Sneed, Software Engineer",
    description:
      "GitHub, LinkedIn, résumé, email and live projects for Davis Sneed.",
    images: ["/media/og-card.png"],
  },
};

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
