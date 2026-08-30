"use client";

import { Download, FileText, Printer } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

export function ResumeActions() {
  return (
    <div id="download" className="flex flex-wrap items-center gap-3 print:hidden">
      <a
        href="/Uday-Pundir-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "primary" })}
      >
        <FileText className="h-4 w-4" />
        Open PDF
      </a>
      <a
        href="/Uday-Pundir-Resume.pdf"
        download="Uday-Pundir-Resume.pdf"
        className={buttonVariants({ variant: "secondary" })}
      >
        <Download className="h-4 w-4" />
        Download
      </a>
      <Button variant="outline" type="button" onClick={() => window.print()}>
        <Printer className="h-4 w-4" />
        Print
      </Button>
    </div>
  );
}
