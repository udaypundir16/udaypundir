import { Ghost, Home } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pb-16 pt-10">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-200/70 sm:p-10">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Ghost className="h-6 w-6" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            404 Error
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            The page you are looking for does not exist or may have moved.
            Let&apos;s get you back to the portfolio.
          </p>
          <div className="mt-6">
            <Link href="/" className={buttonVariants({ variant: "primary" })}>
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
