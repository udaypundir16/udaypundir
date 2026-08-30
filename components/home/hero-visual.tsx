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
      <div className="relative aspect-square w-64 shrink-0 sm:w-72 md:w-80 lg:w-96">
        {/* Ambient Gradient Glow */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 opacity-70 blur-md" />

        {/* Profile Image Container */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-indigo-200/50">
          <Image
            src="/uday-profile.jpg"
            alt="Uday Pundir"
            fill
            priority
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </motion.div>
  );
}
