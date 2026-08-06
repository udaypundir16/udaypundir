import { ProjectCard } from "@/components/cards/project-card";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Explore project work by Uday Pundir, including SettleIn, Agrovision, and Webspp Smart Agri.",
);

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio Projects"
        title="Real-world and hackathon builds"
        
        description="A project collection focused on usability, practical impact, and modern full stack execution."
      />

      <section className="pb-20">
        <Container>
          <Reveal className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
            <p className="text-sm text-indigo-700 sm:text-base">
              Featured work includes student accommodation discovery, data-driven
              agriculture prediction, and real-time agri intelligence platforms.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
