import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "warm" | "white" | "surface" | "navy";
};

const toneClasses = {
  warm: "bg-warm text-charcoal",
  white: "bg-white text-charcoal",
  surface: "bg-surface text-charcoal",
  navy: "bg-navy text-white",
};

export function Section({
  className,
  tone = "warm",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-28", toneClasses[tone], className)}
      {...props}
    />
  );
}
