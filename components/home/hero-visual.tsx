"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex w-full max-w-md items-center justify-center"
    >
      <div className="relative">
        {/* Gradient ring */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 opacity-75 blur-sm" />
        <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl shadow-indigo-200/40">
          <Image
            src="/uday-profile.jpg"
            alt="Uday Pundir"
            width={400}
            height={400}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 280px, 400px"
          />
        </div>
      </div>
    </motion.div>
  );
}
