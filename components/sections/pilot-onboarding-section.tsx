import {
  CheckCircle2,
  ClipboardList,
  QrCode,
  Table2,
  Users,
  Utensils,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge, Button, Container, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/section";

const checklist: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Utensils, label: "Cafe details" },
  { icon: ClipboardList, label: "Menu items" },
  { icon: Table2, label: "Tables" },
  { icon: QrCode, label: "QR codes" },
  { icon: Users, label: "Staff access" },
  { icon: WalletCards, label: "Ordering and billing" },
];

type PilotOnboardingSectionProps = {
  tone?: SectionTone;
};

export function PilotOnboardingSection({
  tone = "warm",
}: PilotOnboardingSectionProps) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Badge tone="teal">Personal Setup</Badge>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              We&apos;ll Help You Get Started
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              We help set up the core pieces so your team can test OrderDesk
              with real tables, real items, and a practical service flow.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div
                  className="flex min-h-14 items-center gap-3 rounded-card border border-border bg-surface px-4 py-3"
                  key={item.label}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-orange">
                    <item.icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
                  </span>
                  <span className="font-bold text-navy">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[22px] border border-orange/25 bg-orange/10 p-6 text-navy shadow-[0_18px_50px_rgba(23,40,59,0.08)] sm:p-8">
            <div>
              <span className="grid size-12 place-items-center rounded-full bg-orange text-navy">
                <CheckCircle2 aria-hidden="true" className="size-6" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-extrabold">
                Early OrderDesk Pilot
              </h3>
              <p className="mt-3 text-base leading-7 text-charcoal">
                We&apos;re currently working with a small number of cafes and
                helping them personally set up OrderDesk.
              </p>
            </div>
            <Button
              className="mt-7 w-full sm:w-fit"
              data-analytics-event="demo_cta_click"
              data-analytics-label="pilot_early_access"
              href="#demo"
            >
              Request Early Access
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
