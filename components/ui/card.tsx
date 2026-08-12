import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  surface?: "white" | "soft" | "navy";
};

const surfaceClasses = {
  white: "border-border bg-white text-charcoal",
  soft: "border-border bg-surface text-charcoal",
  navy: "border-white/10 bg-navy text-white",
};

export function Card({
  className,
  surface = "white",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border p-5 shadow-[0_18px_50px_rgba(23,40,59,0.08)] sm:p-6",
        surfaceClasses[surface],
        className,
      )}
      {...props}
    />
  );
}
