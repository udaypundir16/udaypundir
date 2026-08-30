import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-8 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
