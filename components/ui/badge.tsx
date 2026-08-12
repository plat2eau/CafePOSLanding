import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "teal" | "orange" | "navy" | "neutral";
};

const toneClasses = {
  teal: "border-teal/20 bg-teal/10 text-navy",
  orange: "border-orange/25 bg-orange/10 text-navy",
  navy: "border-navy/15 bg-navy/10 text-navy",
  neutral: "border-border bg-white text-muted",
};

export function Badge({ className, tone = "teal", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-card border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
