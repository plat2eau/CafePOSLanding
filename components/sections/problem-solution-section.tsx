"use client";

import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Clock3,
  CreditCard,
  X,
  MessageSquareWarning,
  ReceiptText,
  ShoppingBasket,
  Table2,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Badge, Container, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Transformation = {
  icon: LucideIcon;
  problem: string;
  solution: string;
};

const transformations: Transformation[] = [
  {
    icon: MessageSquareWarning,
    problem: "Miscommunicated order",
    solution: "Customers order for themselves",
  },
  {
    icon: CreditCard,
    problem: "Forgot to charge for something",
    solution: "Every item stays on the bill",
  },
  {
    icon: ReceiptText,
    problem: "Lost order",
    solution: "Orders in one dashboard",
  },
  {
    icon: Table2,
    problem: "Forgot order table",
    solution: "Every order linked to a table",
  },
  {
    icon: WalletCards,
    problem: "Untracked tabs",
    solution: "Running tabs stay visible",
  },
  {
    icon: ShoppingBasket,
    problem: "Untracked purchases",
    solution: "Purchase records kept together",
  },
  {
    icon: BarChart3,
    problem: "Untracked sales analytics",
    solution: "Sales reports update daily",
  },
  {
    icon: Clock3,
    problem: "Customer asks how much more time",
    solution: "Order status is easy to see",
  },
];

type ProblemSolutionSectionProps = {
  tone?: SectionTone;
};

export function ProblemSolutionSection({
  tone = "warm",
}: ProblemSolutionSectionProps) {
  const [showAllMobileItems, setShowAllMobileItems] = useState(false);

  return (
    <Section className="py-12 sm:py-14 lg:py-18" tone={tone}>
      <Container>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="max-w-3xl">
            <Badge tone="orange">Rush-Hour Problems</Badge>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              No More Confusion During Rush Hours
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              OrderDesk turns the most common service mistakes into a clear
              operating flow your team can trust.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-card border border-border/80 bg-white text-center shadow-[0_12px_36px_rgba(23,40,59,0.06)]">
            {[
              ["8", "issues covered"],
              ["1", "live workspace"],
              ["0", "guesswork"],
            ].map(([value, label]) => (
              <div
                className="border-r border-border px-3 py-4 last:border-r-0"
                key={label}
              >
                <strong className="block font-heading text-2xl font-extrabold text-navy">
                  {value}
                </strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.1em] text-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 lg:hidden">
          <div
            className={cn(
              "relative overflow-hidden transition-[max-height] duration-300 ease-out",
              showAllMobileItems ? "max-h-[1800px]" : "max-h-[438px]",
            )}
          >
            <div className="grid grid-cols-2 gap-2.5">
              {transformations.map((item) => (
              <article
                className="flex min-h-[184px] flex-col overflow-hidden rounded-card border border-border/80 bg-white shadow-[0_12px_34px_rgba(23,40,59,0.06)]"
                key={item.problem}
              >
                <div className="flex flex-1 flex-col bg-[linear-gradient(135deg,rgba(42,157,143,0.16),rgba(255,255,255,0.94))] px-3 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal text-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={2.25}
                      />
                    </span>
                    <CheckCircle2
                      aria-hidden="true"
                      className="size-4 shrink-0 text-teal"
                      strokeWidth={2.25}
                    />
                  </div>
                  <p className="mt-3 text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-teal">
                    With OrderDesk
                  </p>
                  <h3 className="mt-1 text-sm font-extrabold leading-5 text-navy">
                    {item.solution}
                  </h3>
                </div>

                <div className="border-t border-border/70 bg-orange/10 px-3 py-2 text-navy">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted">
                      Avoids
                    </span>
                    <span className="h-px flex-1 bg-orange/25" />
                  </div>
                  <div className="mt-1.5 flex items-start gap-1.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">
                      <X
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={2.75}
                      />
                    </span>
                    <span className="text-xs font-semibold leading-4">
                      {item.problem}
                    </span>
                  </div>
                </div>
              </article>
              ))}
            </div>
          </div>

          {!showAllMobileItems ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white via-white/80 to-white/0 px-4 pb-1 pt-24">
              <button
                className="pointer-events-auto inline-flex min-h-9 items-center justify-center gap-1.5 px-2 text-sm font-extrabold text-navy transition hover:text-orange"
                onClick={() => setShowAllMobileItems(true)}
                type="button"
              >
                View more
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 text-orange"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          ) : (
            <div className="mt-4 flex justify-center">
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-button border border-border bg-white px-4 text-sm font-extrabold text-navy transition hover:border-orange hover:bg-orange/10"
                onClick={() => setShowAllMobileItems(false)}
                type="button"
              >
                Show fewer
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 hidden overflow-hidden rounded-card border border-border/80 bg-white shadow-[0_18px_54px_rgba(23,40,59,0.08)] lg:block">
          <div className="hidden grid-cols-2 gap-3 border-b border-border/70 bg-navy px-4 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white lg:grid">
            <span>With OrderDesk</span>
            <span>Without OrderDesk</span>
          </div>

          <div className="grid gap-2.5 p-3 lg:block lg:divide-y lg:divide-border/60 lg:p-0">
            {transformations.map((item) => (
              <div
                className="grid gap-2.5 rounded-2xl border border-border/70 bg-white p-3 shadow-[0_10px_28px_rgba(23,40,59,0.05)] lg:grid-cols-2 lg:items-center lg:rounded-none lg:border-0 lg:p-3 lg:shadow-none"
                key={item.problem}
              >
                <div className="flex min-h-12 items-center gap-3 rounded-xl border border-teal/20 bg-[linear-gradient(135deg,rgba(42,157,143,0.16),rgba(255,255,255,0.86))] px-3 py-2.5 text-navy">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-teal text-white">
                    <item.icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={2.25}
                    />
                  </span>
                  <span className="font-extrabold">{item.solution}</span>
                  <CheckCircle2
                    aria-hidden="true"
                    className="ml-auto hidden size-5 shrink-0 text-teal sm:block"
                    strokeWidth={2.25}
                  />
                </div>

                <div className="flex min-h-12 items-center gap-3 rounded-xl border border-orange/25 bg-orange/10 px-3 py-2.5 text-navy">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">
                    <X
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={2.75}
                    />
                  </span>
                  <span className="font-semibold">{item.problem}</span>
                  <CircleAlert
                    aria-hidden="true"
                    className="ml-auto hidden size-5 shrink-0 text-orange/70 sm:block"
                    strokeWidth={2.25}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
