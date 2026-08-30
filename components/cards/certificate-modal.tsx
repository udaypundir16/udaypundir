"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Award, Calendar, Hash, Building2 } from "lucide-react";
import type { Certificate } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type CertificateModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-indigo-950/20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Verified Credential</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content (Scrollable) */}
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
                {/* Certificate Image Preview */}
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-indigo-50/40 p-4 sm:p-6 shadow-inner">
                  <div className="relative h-full w-full">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <Badge tone="accent" className="mb-2">
                      {certificate.issuer}
                    </Badge>
                    <h3
                      id="certificate-modal-title"
                      className="text-xl font-bold text-slate-900 sm:text-2xl"
                    >
                      {certificate.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {certificate.description}
                  </p>

                  <div className="space-y-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 text-xs text-slate-600 sm:text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-indigo-500 shrink-0" />
                      <span className="font-medium text-slate-700">Organization:</span>
                      <span>{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-indigo-500 shrink-0" />
                      <span className="font-medium text-slate-700">Issue Date:</span>
                      <span>{certificate.date}</span>
                    </div>
                    {certificate.credentialId && (
                      <div className="flex items-start gap-2">
                        <Hash className="mt-0.5 h-4 w-4 text-indigo-500 shrink-0" />
                        <div className="flex-1 overflow-hidden">
                          <span className="font-medium text-slate-700">Credential ID: </span>
                          <span className="break-all font-mono text-xs text-slate-500">
                            {certificate.credentialId}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {certificate.verificationUrl && (
                    <div className="pt-2">
                      <a
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "primary",
                          size: "sm",
                          className: "w-full justify-center sm:w-auto",
                        })}
                      >
                        Verify Credential
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
