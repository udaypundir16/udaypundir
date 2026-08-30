import { Github, Linkedin, Trophy } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navItems, siteConfig, socialLinks } from "@/data/site";

const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  LeetCode: <Trophy className="h-4 w-4" />,
  HackerRank: <Trophy className="h-4 w-4" />,
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-neutral-800 dark:bg-black/70">
      <Container className="grid gap-8 py-12 md:grid-cols-3 md:gap-10">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{siteConfig.name}</h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
            Building modern digital experiences with code, consistency, and
            creativity.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-300">
            Quick Links
          </h3>
          <ul className="grid gap-2 text-sm">
            {navItems.map((item) => {
              const isExternal =
                item.external ||
                item.href.endsWith(".pdf") ||
                item.href.startsWith("http");

              if (isExternal) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-300">
            Connect
          </h3>
          <ul className="grid gap-2 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-white"
                >
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {socialIconMap[link.label] ?? <Trophy className="h-4 w-4" />}
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200/80 dark:border-neutral-800">
        <Container className="py-4 text-center text-xs text-slate-500 dark:text-zinc-400 sm:text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
