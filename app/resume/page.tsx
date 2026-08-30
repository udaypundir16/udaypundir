"use client"; // needed for print button interaction via ResumeActions

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ResumeActions } from "@/components/resume/resume-actions";
import {
  projects,
  siteConfig,
  skillGroups,
  certifications,
  experience,
  coursework,
} from "@/data/site";

export default function ResumePage() {
  return (
    <section className="pb-20">
      <Container className="max-w-4xl">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8 print:rounded-none print:border-none print:p-0 print:shadow-none">
          {/* ─── Header ─── */}
          <header className="border-b border-slate-200 pb-6 print:pb-4">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {siteConfig.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600 sm:text-sm">
              <span>{siteConfig.location}</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span>{siteConfig.phone}</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-indigo-600 transition hover:underline"
              >
                {siteConfig.email}
              </a>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 transition hover:underline"
              >
                LinkedIn
              </a>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 transition hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="mt-4">
              <ResumeActions />
            </div>
          </header>

          <div className="grid gap-8 pt-6 print:pt-4 sm:gap-10">
            {/* ─── Summary ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Computer Science and Engineering undergraduate with hands-on
                experience in full-stack web development (MERN stack, Supabase),
                Data Structures &amp; Algorithms, and AI/automation workflows.
                Built and deployed real-world web applications through academic
                projects, hackathons, and freelance client work. Seeking software
                development roles with a focus on full-stack engineering, AI
                agents, and scalable web applications.
              </p>
            </section>

            {/* ─── Skills ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
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

            {/* ─── Certifications ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Certifications
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base">
                {certifications.map((cert) => (
                  <li key={cert.title} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>
                      <span className="font-medium text-slate-900">
                        {cert.title}
                      </span>{" "}
                      — {cert.issuer}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ─── Education ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Education
              </h2>
              <div className="mt-4 space-y-5">
                <article className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      B.Tech, Computer Science &amp; Engineering
                    </h3>
                    <Badge tone="soft">2024 – 2028</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Galgotias College of Engineering and Technology, Greater
                    Noida
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    CGPA: 7.825 / 10
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    <span className="font-medium text-slate-700">
                      Relevant coursework:
                    </span>{" "}
                    {coursework.join(", ")}.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      Intermediate, PCM
                    </h3>
                    <Badge tone="soft">2020 – 2021</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Shakumbhri Public School, Saharanpur, Uttar Pradesh
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Percentage: 86%
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    <span className="font-medium text-slate-700">
                      Relevant coursework:
                    </span>{" "}
                    Physics, Chemistry, Mathematics, English, and Computer
                    Science.
                  </p>
                </article>
              </div>
            </section>

            {/* ─── Experience ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Experience
              </h2>
              <div className="mt-4 space-y-5">
                {experience.map((exp) => (
                  <article
                    key={exp.role + exp.company}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-slate-900">
                        {exp.role}{" "}
                        <span className="font-normal text-slate-500">
                          — {exp.company}
                        </span>
                      </h3>
                      <Badge tone="soft">{exp.period}</Badge>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* ─── Projects ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Projects</h2>
              <div className="mt-4 space-y-5">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-900">
                        {project.title}
                      </h3>
                      {project.stack.map((tech) => (
                        <Badge key={tech} tone="soft" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* ─── DSA / Problem Solving ─── */}
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                DSA / Problem Solving
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Actively practice competitive programming and Data Structures
                &amp; Algorithms, focusing on arrays, trees, graphs, and dynamic
                programming to strengthen algorithmic thinking and coding
                efficiency.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </section>
  );
}
