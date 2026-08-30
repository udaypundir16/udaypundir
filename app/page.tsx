import { ArrowRight, Download, Mail, GraduationCap, BookOpen, MapPin } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { CTASection } from "@/components/common/cta-section";
import { SectionTitle } from "@/components/common/section-title";
import { HeroVisual } from "@/components/home/hero-visual";
import { TypewriterText } from "@/components/home/typewriter-text";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { projects, topSkills, coursework, currentlyLearning } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Home",
  "Explore the portfolio of Uday Pundir, a full stack developer building modern and scalable web applications.",
);

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="pb-14 pt-6 sm:pt-10 lg:pb-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal>
              <Badge className="mb-4">
                Open to internships and freelance opportunities
              </Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                <TypewriterText text="Hi, I'm Uday Pundir" cycleMs={4000} />
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
                Full Stack Developer building modern, scalable web applications.
                I create clean, fast, and user-focused products with thoughtful
                UI and reliable engineering.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/resume" className={buttonVariants({ variant: "primary" })}>
                  View Resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Contact Me
                  <Mail className="h-4 w-4" />
                </Link>
                <a
                  href="/Uday-Pundir-Resume.txt"
                  download
                  className={buttonVariants({ variant: "outline" })}
                >
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <HeroVisual />
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="pb-14">
        <Container>
          <SectionTitle
            title="Featured Projects"
            description="A selection of real-world and hackathon builds focused on product impact and usability."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14">
        <Container>
          <SectionTitle
            title="Skills Snapshot"
            description="Core technologies and strengths I use to design and build modern products."
          />

          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Badge key={skill} tone="soft" className="px-3 py-1.5 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href="/skills"
                  className={buttonVariants({ variant: "ghost", className: "px-0" })}
                >
                  View full skills breakdown
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-14">
        <Container>
          <SectionTitle
            title="Education"
            description="Academic background and ongoing learning focus."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  B.Tech in Computer Science & Engineering
                </h2>
                <p className="mt-2 text-slate-600">Galgotias College of Engineering & Technology</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <Badge tone="soft">2024-2028</Badge>
                  <Badge tone="soft">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    Greater Noida
                  </Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Building a strong foundation in software engineering while applying concepts through project-based learning and hackathon participation.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Coursework Focus</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((item) => (
                    <Badge key={item} tone="soft">
                      {item}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">Currently Learning</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base">
                  {currentlyLearning.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      

      <CTASection />
    </>
  );
}
