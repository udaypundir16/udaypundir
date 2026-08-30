"use client";

import { useState } from "react";
import type { Certificate } from "@/data/site";
import { CertificateCard } from "@/components/cards/certificate-card";
import { CertificateModal } from "@/components/cards/certificate-modal";

type CertificatesShowcaseProps = {
  certificates: Certificate[];
};

export function CertificatesShowcase({ certificates }: CertificatesShowcaseProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onSelect={setSelectedCert}
            index={index}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
