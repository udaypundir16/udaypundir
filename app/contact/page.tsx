import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/common/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Uday Pundir for internships, freelance work, collaborations, and project discussions.",
);

const iconBySocial = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Trophy,
  HackerRank: Trophy,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect for internships, freelance work, and collaborations"
        description="If you are hiring, building, or exploring a product idea, I’d love to discuss how I can contribute."
      />

      <section className="pb-20">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-xl font-semibold text-slate-900">
                Contact Information
              </h2>

              <ul className="space-y-3 text-sm text-slate-600 sm:text-base">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-indigo-600" />
                  <span>{siteConfig.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-indigo-600" />
                  <span>{siteConfig.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-indigo-600" />
                  <span>{siteConfig.location}</span>
                </li>
              </ul>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Social Links
                </h3>
                <ul className="mt-3 grid gap-2 text-sm sm:text-base">
                  {socialLinks.map((link) => {
                    const Icon =
                      iconBySocial[link.label as keyof typeof iconBySocial] ?? Trophy;

                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-indigo-600"
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                <p className="text-sm text-indigo-700">
                  Open to opportunities involving internships, freelance
                  engagements, team collaborations, and product discussions.
                </p>
                <Badge className="mt-3" tone="accent">
                  <Users className="mr-1 h-3.5 w-3.5" />
                  Collaboration Friendly
                </Badge>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
