"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  text: string;
  cycleMs?: number;
  className?: string;
};

export function TypewriterText({
  text,
  cycleMs = 4000,
  className,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!text) {
      setDisplayedText("");
      return;
    }

    const totalChars = text.length;
    const typingDurationMs = Math.floor(cycleMs * 0.4);
    const deletingDurationMs = Math.floor(cycleMs * 0.3);
    const holdTypedMs = Math.floor(cycleMs * 0.2);
    const holdEmptyMs = Math.max(
      cycleMs - typingDurationMs - deletingDurationMs - holdTypedMs,
      0,
    );
    const typeStepMs = Math.max(20, Math.floor(typingDurationMs / totalChars));
    const deleteStepMs = Math.max(
      20,
      Math.floor(deletingDurationMs / totalChars),
    );

    let isCancelled = false;

    const clearTimer = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const runCycle = () => {
      let index = 0;
      setDisplayedText("");

      const typeNext = () => {
        if (isCancelled) {
          return;
        }

        if (index < totalChars) {
          index += 1;
          setDisplayedText(text.slice(0, index));
          timeoutRef.current = window.setTimeout(typeNext, typeStepMs);
          return;
        }

        timeoutRef.current = window.setTimeout(deleteNext, holdTypedMs);
      };

      const deleteNext = () => {
        if (isCancelled) {
          return;
        }

        if (index > 0) {
          index -= 1;
          setDisplayedText(text.slice(0, index));
          timeoutRef.current = window.setTimeout(deleteNext, deleteStepMs);
          return;
        }

        timeoutRef.current = window.setTimeout(runCycle, holdEmptyMs);
      };

      typeNext();
    };

    runCycle();

    return () => {
      isCancelled = true;
      clearTimer();
    };
  }, [cycleMs, text]);

  return (
    <span className={cn("inline", className)}>
      <span aria-hidden className="inline">{displayedText}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[2px] align-baseline animate-pulse bg-indigo-500"
      />
      <span className="sr-only">{text}</span>
    </span>
  );
}
