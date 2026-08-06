"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl"
    >
      <Image
        src="/uday_port.png"
        alt="Uday portfolio preview"
        width={1600}
        height={1120}
        priority
        className="h-auto w-full"
        sizes="(max-width: 1024px) 100vw, 560px"
      />
    </motion.div>
  );
}
