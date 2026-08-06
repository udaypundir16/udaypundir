import { SkillCard } from "@/components/cards/skill-card";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups, achievements } from "@/data/site";
import { AchievementCard } from "@/components/cards/achievement-card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Skills",
  "Skill overview of Uday Pundir covering frontend, backend, tools, and problem-solving capabilities.",
);

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tech stack and problem-solving strengths"
        description="A structured overview of languages, frameworks, tools, and coding practice areas I use to deliver quality software."
      />

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <SkillCard title={group.title} skills={group.skills} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Achievements</h2>
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
