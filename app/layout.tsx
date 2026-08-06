import type { Metadata } from "next";
import { Alata, Aldrich } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BackToTop } from "@/components/ui/back-to-top";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const alata = Alata({
  variable: "--font-alata",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Aldrich", "Segoe UI", "Arial", "sans-serif"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Alata", "Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.variable} ${aldrich.variable} antialiased`}>
        <div className="relative min-h-screen overflow-x-clip bg-background text-slate-900">
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
            <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
            <div className="absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />
          </div>

          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
