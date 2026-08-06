type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
};

export function TimelineItem({
  year,
  title,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <article className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo-200 bg-indigo-500" />
      {!isLast ? (
        <span className="absolute left-[6px] top-5 h-[calc(100%-0.25rem)] w-px bg-slate-200" />
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:shadow-md hover:shadow-indigo-100/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {year}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}
