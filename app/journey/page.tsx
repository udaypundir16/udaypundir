import { TimelineItem } from "@/components/cards/timeline-item";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { journeyMilestones } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Journey",
  "Follow the learning and project journey of Uday Pundir from coding fundamentals to full stack and Agentic AI exploration.",
);

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="My Journey"
        title="A growth timeline shaped by curiosity and consistency"
        description="From learning core web fundamentals to building full stack products, hackathon participation, and deepening DSA practice."
      />

      <section className="pb-20">
        <Container className="max-w-4xl">
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
