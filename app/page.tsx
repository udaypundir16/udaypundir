import { FileText, Mail, GraduationCap, BookOpen, MapPin } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { SkillCard } from "@/components/cards/skill-card";
import { AchievementCard } from "@/components/cards/achievement-card";
import { CertificatesShowcase } from "@/components/cards/certificates-showcase";
import { CTASection } from "@/components/common/cta-section";
import { SectionTitle } from "@/components/common/section-title";
import { HeroVisual } from "@/components/home/hero-visual";
import { TypewriterText } from "@/components/home/typewriter-text";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  projects,
  skillGroups,
  certificates,
  achievements,
  coursework,
  currentlyLearning,
} from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Home",
  "Explore the portfolio of Uday Pundir, a full stack developer building modern and scalable web applications.",
);

const featuredProjects = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <>
      <section className="pb-14 pt-6 sm:pt-10 lg:pb-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal>
              <div className="relative -top-4 sm:-top-6 lg:-top-8">
                <Badge className="mb-4">
                  Open to internships and freelance opportunities
                </Badge>
                <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-white xs:text-4xl sm:text-5xl lg:text-6xl">
                  <TypewriterText text="Hi, I'm Uday Pundir" cycleMs={4000} />
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-zinc-200">
                  Full Stack Developer building modern, scalable web applications.
                  I create clean, fast, and user-focused products with thoughtful
                  UI and reliable engineering.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="/Uday-Pundir-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "primary" })}
                  >
                    Resume
                    <FileText className="h-4 w-4" />
                  </a>
                  <Link
                    href="/contact"
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Contact Me
                    <Mail className="h-4 w-4" />
                  </Link>
                </div>
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
            title="Technical Skills"
            description="A structured overview of languages, frameworks, tools, and coding practice areas I use to deliver quality software."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <SkillCard title={group.title} skills={group.skills} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14">
        <Container>
          <SectionTitle
            title="Certificates & Achievements"
            description="Professional industry certifications, hackathon recognitions, and competitive problem-solving milestones."
          />

          {/* Professional Certifications */}
          <div className="mb-12">
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              Professional Certifications
            </h3>
            <CertificatesShowcase certificates={certificates} />
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              Hackathon & Coding Recognitions
            </h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Reveal key={achievement.title} delay={index * 0.06}>
                  <AchievementCard achievement={achievement} />
                </Reveal>
              ))}
            </div>
          </div>
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
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  B.Tech in Computer Science & Engineering
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Galgotias College of Engineering & Technology</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <Badge tone="soft">2024-2028</Badge>
                  <Badge tone="soft">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    Greater Noida
                  </Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  Building a strong foundation in software engineering while applying concepts through project-based learning and hackathon participation.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Coursework Focus</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((item) => (
                    <Badge key={item} tone="soft">
                      {item}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-slate-100">Currently Learning</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
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
