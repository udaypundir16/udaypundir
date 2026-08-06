import { BookOpen, GraduationCap, MapPin } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { coursework, currentlyLearning } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Education",
  "Academic background of Uday Pundir with ongoing learning focus in full stack development, DSA, and Agentic AI.",
);

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic foundation and learning direction"
        description="B.Tech in Computer Science & Engineering with a focus on practical development, algorithms, and emerging AI workflows."
      />

      <section className="pb-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                B.Tech in Computer Science & Engineering
              </h2>
              <p className="mt-2 text-slate-600">
                Galgotias College of Engineering & Technology
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <Badge tone="soft">2024-2028</Badge>
                <Badge tone="soft">
                  <MapPin className="mr-1 h-3.5 w-3.5" />
                  Greater Noida
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Building a strong foundation in software engineering while
                applying concepts through project-based learning and hackathon
                participation.
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

              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                Currently Learning
              </h3>
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
        </Container>
      </section>
    </>
  );
}
