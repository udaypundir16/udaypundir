import { cn } from "@/lib/utils";

type BadgeTone = "default" | "soft" | "accent";

const toneStyles: Record<BadgeTone, string> = {
  default: "bg-indigo-50 text-indigo-700 border border-indigo-100",
  soft: "bg-slate-100 text-slate-700 border border-slate-200",
  accent: "bg-violet-50 text-violet-700 border border-violet-100",
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
