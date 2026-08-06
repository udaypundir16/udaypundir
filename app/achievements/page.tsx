import { AchievementCard } from "@/components/cards/achievement-card";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { achievements } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Achievements",
  "Key achievements of Uday Pundir including hackathons, team milestones, and problem-solving consistency.",
);

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones that reflect impact and momentum"
        description="Highlights from hackathons, team collaborations, recognition rounds, and sustained coding practice."
      />

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.title} delay={index * 0.06}>
                <AchievementCard achievement={achievement} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
