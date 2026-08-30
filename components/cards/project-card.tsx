"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition-all hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/80 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none dark:hover:border-indigo-700/60 dark:hover:shadow-indigo-950/40"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
        {project.featured ? <Badge tone="accent">Featured</Badge> : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item} tone="soft">
            {item}
          </Badge>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          <Github className="h-4 w-4" />
          GitHub
        </Link>
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/60",
          })}
        >
          <ArrowUpRight className="h-4 w-4" />
          Live Demo
        </Link>
      </div>
    </motion.article>
  );
}
