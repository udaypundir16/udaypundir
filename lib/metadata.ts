import type { Metadata } from "next";

const SITE_URL = "https://uday-pundir-portfolio.vercel.app";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Uday Pundir | Full Stack Developer",
    template: "%s | Uday Pundir",
  },
  description:
    "Developer portfolio of Uday Pundir - Full Stack Developer focused on React, Next.js, Supabase, and scalable product experiences.",
  keywords: [
    "Uday Pundir",
    "Full Stack Developer",
    "React developer portfolio",
    "Next.js portfolio",
    "Supabase developer",
    "Greater Noida developer",
  ],
  openGraph: {
    title: "Uday Pundir | Full Stack Developer",
    description:
      "Modern developer portfolio featuring projects, skills, education, achievements, and contact details.",
    type: "website",
    url: SITE_URL,
    siteName: "Uday Pundir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Pundir | Full Stack Developer",
    description:
      "Portfolio website of Uday Pundir - building modern, scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
