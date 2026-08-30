import Image from "next/image";

import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { focusAreas, siteConfig, journeyMilestones } from "@/data/site";
import { TimelineItem } from "@/components/cards/timeline-item";
import { createPageMetadata } from "@/lib/metadata";




export const metadata = createPageMetadata(
  "About",
  "Learn more about Uday Pundir, a B.Tech CSE student and full stack developer focused on practical product development.",
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Building meaningful web products with clarity and consistency"
        description="I am a B.Tech CSE student passionate about full stack development, hackathons, DSA in C++, and exploring the potential of Agentic AI."
      />

      <section className="pb-20">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7">
                {focusAreas.map((item, index) => (
                  <article key={item.title} className="space-y-2">
                    <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                    {index < focusAreas.length - 1 ? (
                      <div className="pt-2">
                        <div className="h-px w-full bg-slate-200" />
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/uday-profile.jpg"
                    alt="Uday Pundir"
                    width={800}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{siteConfig.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{siteConfig.role}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge>B.Tech CSE Student</Badge>
                  <Badge tone="soft">Hackathon Builder</Badge>
                  <Badge tone="accent">Agentic AI Explorer</Badge>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">My Journey</h2>
          <div className="space-y-5">
            {journeyMilestones.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <TimelineItem
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  isLast={index === journeyMilestones.length - 1}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
