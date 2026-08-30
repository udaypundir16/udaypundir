"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full items-center justify-center lg:justify-end"
    >
      <div className="group relative aspect-square w-64 shrink-0 sm:w-72 md:w-80 lg:w-96">
        {/* Ambient Gradient Glow (hidden in dark mode) */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 opacity-30 blur-lg transition-opacity duration-500 group-hover:opacity-50 dark:hidden" />

        {/* Profile Image Container */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.16),0_4px_16px_rgba(99,102,241,0.2)] transition-all duration-500 group-hover:shadow-[0_20px_48px_-6px_rgba(99,102,241,0.35),0_6px_24px_rgba(168,85,247,0.25)] dark:border-0 dark:border-transparent dark:bg-transparent dark:shadow-none dark:group-hover:border-transparent dark:group-hover:shadow-none">
          <Image
            src="/uday-profile.jpg"
            alt="Uday Pundir"
            fill
            priority
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 dark:hidden"
          />
          <Image
            src="/uday-profile-dark.jpg"
            alt="Uday Pundir"
            fill
            priority
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            className="hidden h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 dark:block"
          />
        </div>
      </div>
    </motion.div>
  );
}
