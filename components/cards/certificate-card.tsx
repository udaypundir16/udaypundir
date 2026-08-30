"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Calendar, Eye } from "lucide-react";
import type { Certificate } from "@/data/site";
import { Badge } from "@/components/ui/badge";

type CertificateCardProps = {
  certificate: Certificate;
  onSelect: (cert: Certificate) => void;
  index?: number;
};

export function CertificateCard({
  certificate,
  onSelect,
  index = 0,
}: CertificateCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(certificate)}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm shadow-slate-200/50 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {/* Certificate Image Container */}
      <div className="relative mb-4 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-indigo-50/30 p-3 shadow-inner">
        <div className="relative h-full w-full">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover overlay cue */}
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/10 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-md">
            <Eye className="h-3.5 w-3.5" />
            View Certificate
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Badge tone="soft" className="text-xs font-medium">
              {certificate.issuer}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="h-3 w-3" />
              {certificate.date}
            </span>
          </div>

          <h3 className="mt-2.5 text-base font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-lg">
            {certificate.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 pt-1 text-xs font-medium text-indigo-600 group-hover:underline">
          <span>View details & credential</span>
        </div>
      </div>
    </motion.button>
  );
}
