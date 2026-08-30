import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Resume",
  "Resume overview for Uday Pundir with summary, skills, certifications, education, experience, and project highlights.",
);

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
