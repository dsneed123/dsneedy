import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Cheat Sheets — Python, JavaScript, SQL, Rust",
  description:
    "Searchable programming cheat sheets by Davis Sneed: syntax, idioms and copy-paste snippets for Python, JavaScript, SQL, Rust and more.",
  alternates: { canonical: "/CheatSheet/" },
  openGraph: {
    type: "article",
    url: "https://dsneedy.com/CheatSheet/",
    title: "Developer Cheat Sheets — Python, JavaScript, SQL, Rust",
    description:
      "Searchable programming cheat sheets: syntax, idioms and copy-paste snippets across languages.",
    images: ["/media/og-card.png"],
  },
};

export default function CheatSheetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
