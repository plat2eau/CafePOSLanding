import {
  CreditCard,
  CookingPot,
  FileText,
  QrCode,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui";

const steps: Array<{
  description: string;
  icon: LucideIcon;
  title: string;
}> = [
  {
    description: "Guests order from the table.",
    icon: QrCode,
    title: "Scan & order",
  },
  {
    description: "Staff receives a clear KOT.",
    icon: CookingPot,
    title: "Kitchen gets KOT",
  },
  {
    description: "Bill stays ready in-app.",
    icon: FileText,
    title: "Eat & review bill",
  },
  {
    description: "Close the table without confusion.",
    icon: CreditCard,
    title: "Pay & leave",
  },
];

export function HeroBenefitStrip() {
  return (
    <section className="bg-warm pb-16 sm:pb-20" aria-label="Customer ordering journey">
      <Container>
        <div className="rounded-[20px] border border-border bg-white p-4 shadow-[0_18px_50px_rgba(23,40,59,0.08)] sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            {steps.map(({ description, icon: Icon, title }, index) => (
              <div
                className="relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-card bg-surface p-3 md:block md:bg-transparent md:px-5 md:py-3 md:text-center"
                key={title}
              >
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-8 top-[calc(100%-2px)] z-0 hidden h-3 w-px bg-border md:left-auto md:right-0 md:top-9 md:block md:h-px md:w-1/2"
                  />
                ) : null}
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-auto top-9 z-0 hidden h-px w-1/2 bg-border md:left-0 md:block"
                  />
                ) : null}
                <div className="relative z-10 grid size-12 place-items-center rounded-full border border-orange/25 bg-white text-orange shadow-[0_8px_20px_rgba(23,40,59,0.08)] ring-8 ring-white md:mx-auto md:mb-3 md:size-14">
                  <Icon
                    aria-hidden="true"
                    className="size-6 md:size-7"
                    strokeWidth={2.2}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-0.5 text-sm font-extrabold leading-5 text-navy">
                    {title}
                  </h2>
                  <p className="mt-1 text-xs font-medium leading-5 text-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
