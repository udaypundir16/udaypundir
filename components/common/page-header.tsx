import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="pb-8 pt-4 sm:pb-10 sm:pt-8">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
