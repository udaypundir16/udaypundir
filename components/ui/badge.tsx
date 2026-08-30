import { cn } from "@/lib/utils";

type BadgeTone = "default" | "soft" | "accent";

const toneStyles: Record<BadgeTone, string> = {
  default:
    "bg-indigo-50 text-indigo-700 border border-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60",
  soft: "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  accent:
    "bg-violet-50 text-violet-700 border border-violet-100 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800/60",
};

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
