import { Badge } from "@/components/ui/badge";

type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100/70 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none dark:hover:border-indigo-700/60">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} tone="soft">
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
}
