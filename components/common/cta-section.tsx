import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTASection() {
  return (
    <section className="pb-20 pt-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-500 to-violet-500 p-8 text-white shadow-lg shadow-indigo-200/60 sm:p-10">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-14 left-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-indigo-100">
              Let’s Build Something Impactful
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Looking for an intern, freelancer, or collaborator for your next
              product?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-indigo-50 sm:text-base">
              I’m open to internships, freelance opportunities, and product
              discussions focused on modern web experiences.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "secondary",
                  className: "bg-white text-indigo-700 hover:bg-indigo-50",
                })}
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className={buttonVariants({
                  variant: "ghost",
                  className:
                    "border border-white/30 text-white hover:bg-white/15",
                })}
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
