"use client";

import { Download, Printer } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

export function ResumeActions() {
  return (
    <div id="download" className="flex flex-wrap items-center gap-3 print:hidden">
      <a
        href="/Uday-Pundir-Resume.txt"
        download
        className={buttonVariants({ variant: "primary" })}
      >
        <Download className="h-4 w-4" />
        Download Resume
      </a>
      <Button variant="secondary" type="button" onClick={() => window.print()}>
        <Printer className="h-4 w-4" />
        Print Resume
      </Button>
    </div>
  );
}
