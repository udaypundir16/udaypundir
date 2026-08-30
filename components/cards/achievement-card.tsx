import { Award, Brain, Sparkles, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Achievement } from "@/data/site";

const iconByTag = {
  Hackathon: Trophy,
  Competition: Sparkles,
  Teamwork: Award,
  Recognition: Award,
  "Problem Solving": Brain,
  Consistency: Brain,
} as const;

type AchievementCardProps = {
  achievement: Achievement;
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = iconByTag[achievement.tag as keyof typeof iconByTag] ?? Trophy;

  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100/70 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none dark:hover:border-indigo-700/60">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{achievement.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {achievement.description}
      </p>
      <Badge className="mt-4" tone="accent">
        {achievement.tag}
      </Badge>
    </article>
  );
}
