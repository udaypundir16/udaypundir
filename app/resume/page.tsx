import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ResumeActions } from "@/components/resume/resume-actions";
import { projects, siteConfig, skillGroups } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Resume",
  "Resume overview for Uday Pundir with summary, skills, education, and project highlights.",
);

export default function ResumePage() {
  return (
    <section className="pb-20">
      <Container className="max-w-4xl">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8 print:rounded-none print:border-none print:p-0 print:shadow-none">
          <header className="border-b border-slate-200 pb-6 print:pb-4">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-base text-slate-600">{siteConfig.role}</p>
            <p className="mt-2 text-sm text-slate-600">
              {siteConfig.email} · {siteConfig.phone} · {siteConfig.location}
            </p>
            <div className="mt-4">
              <ResumeActions />
            </div>
          </header>

          <div className="grid gap-8 pt-6 print:pt-4 sm:gap-10">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Full stack developer and B.Tech CSE student focused on building
                modern, user-centric, and scalable web applications using React,
                Next.js, and Supabase. Comfortable turning ideas into practical,
                real-world products through clean engineering and iterative
                delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Key Highlights</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Built student and agriculture-focused products with practical
                  usability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Participated in SIH 2025 and Dextrix 2025 with team
                  collaboration experience.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Achieved 2nd position in round 2 out of 50 teams in Dextrix.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Skills Overview</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      {group.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={`${group.title}-${skill}`} tone="soft">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Education Overview
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                B.Tech in Computer Science & Engineering (2024-2028)
                <br />
                Galgotias College of Engineering & Technology, Greater Noida
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Project Summary</h2>
              <div className="mt-3 space-y-3">
                {projects.map((project) => (
                  <article key={project.title}>
                    <h3 className="text-base font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </article>
      </Container>
    </section>
  );
}
