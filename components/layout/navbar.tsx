"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function isNavItemActive(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl"
          : "bg-white/60 backdrop-blur-md",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center"
          aria-label="Uday Pundir - Home"
        >
          <Image
            src="/signature-logo.png"
            alt="Uday Pundir"
            width={320}
            height={90}
            priority
            className="h-10 w-auto object-contain mix-blend-multiply sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = isNavItemActive(item.href, pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="grid py-3">
              {navItems.map((item) => {
                const active = isNavItemActive(item.href, pathname);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium",
                      active
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-700 hover:bg-slate-100",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
