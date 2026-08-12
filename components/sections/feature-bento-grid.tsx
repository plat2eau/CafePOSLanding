"use client";

import {
  BarChart3,
  ClipboardList,
  CreditCard,
  IndianRupee,
  QrCode,
  ReceiptText,
  ShoppingBasket,
  Table2,
  WalletCards,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Badge, Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  activeOrders,
  OrderCard,
  SessionCard,
  sessions,
} from "./orderdesk-product-mockup";

type Feature = {
  copy: string;
  icon: LucideIcon;
  title: string;
  visual: "orders" | "qr" | "billing" | "tables" | "sales" | "menu" | "tabs" | "purchases";
  size: "large" | "medium" | "small";
};

type MenuDemoItem = {
  available: boolean;
  id: string;
  image: string;
  name: string;
  price: string;
  priceValue: number;
};

const demoMenuItems: MenuDemoItem[] = [
  {
    available: true,
    id: "cold-coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=160&q=70",
    name: "Cold coffee",
    price: "Rs. 180",
    priceValue: 180,
  },
  {
    available: true,
    id: "pesto-sandwich",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=160&q=70",
    name: "Pesto sandwich",
    price: "Rs. 240",
    priceValue: 240,
  },
  {
    available: true,
    id: "brownie",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=160&q=70",
    name: "Brownie",
    price: "Rs. 120",
    priceValue: 120,
  },
  {
    available: true,
    id: "masala-fries",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=160&q=70",
    name: "Masala fries",
    price: "Rs. 160",
    priceValue: 160,
  },
  {
    available: false,
    id: "lemon-iced-tea",
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=160&q=70",
    name: "Lemon iced tea",
    price: "Rs. 140",
    priceValue: 140,
  },
];

const features: Feature[] = [
  {
    copy: "Track placed and preparing orders, print KOTs, and keep every ticket moving.",
    icon: ReceiptText,
    size: "large",
    title: "Live Order Management",
    visual: "orders",
  },
  {
    copy: "Customers open the menu from their table, add items, and send orders to staff.",
    icon: QrCode,
    size: "large",
    title: "QR Table Ordering",
    visual: "qr",
  },
  {
    copy: "Bills stay connected to tables, orders, receipts, and payments.",
    icon: CreditCard,
    size: "medium",
    title: "Easy Billing & Orders",
    visual: "billing",
  },
  {
    copy: "See live sessions, guest details, requests, totals, and last activity.",
    icon: Table2,
    size: "medium",
    title: "Table Management",
    visual: "tables",
  },
  {
    copy: "Review sales, order counts, averages, active tables, and product movement.",
    icon: BarChart3,
    size: "medium",
    title: "Sales Reports",
    visual: "sales",
  },
  {
    copy: "Manage categories, items, availability, prices, and portions.",
    icon: ClipboardList,
    size: "small",
    title: "Menu Management",
    visual: "menu",
  },
  {
    copy: "Keep running customer tabs and pending payments visible.",
    icon: WalletCards,
    size: "small",
    title: "Tabs & Pending Payments",
    visual: "tabs",
  },
  {
    copy: "Record purchase items, vendors, quantities, and costs.",
    icon: ShoppingBasket,
    size: "small",
    title: "Purchase Tracking",
    visual: "purchases",
  },
];

const bentoClasses: Record<Feature["visual"], string> = {
  orders: "lg:col-span-7 lg:row-span-2",
  qr: "lg:col-span-5 lg:row-span-2",
  billing: "lg:col-span-4",
  tables: "lg:col-span-4",
  sales: "lg:col-span-4",
  menu: "lg:col-span-4",
  tabs: "lg:col-span-4",
  purchases: "lg:col-span-4",
};

function FeatureIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-white">
      <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
    </span>
  );
}

function ProductGlimpseFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 flex min-h-[180px] flex-1 overflow-hidden rounded-[18px] border border-border bg-surface p-3">
      {children}
    </div>
  );
}

function LiveOrdersVisual({
  addedItems,
  menuItems,
}: {
  addedItems: Record<string, number>;
  menuItems: MenuDemoItem[];
}) {
  const addedOrderItems = menuItems
    .filter((item) => addedItems[item.id] > 0)
    .map((item) => [item.name, `x${addedItems[item.id]}`]);
  const liveOrder = {
    ...activeOrders[0],
    items:
      addedOrderItems.length > 0
        ? addedOrderItems
        : activeOrders[0].items,
    status: addedOrderItems.length > 0 ? "Placed" : activeOrders[0].status,
    total:
      addedOrderItems.length > 0
        ? `Rs. ${menuItems.reduce(
            (sum, item) => sum + (addedItems[item.id] ?? 0) * item.priceValue,
            0,
          )}`
        : activeOrders[0].total,
  };

  return (
    <ProductGlimpseFrame>
      <div className="flex w-full gap-3 overflow-x-auto">
        {[liveOrder, activeOrders[1]].map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </ProductGlimpseFrame>
  );
}

function QrOrderingVisual({
  menuItems,
  onAddItem,
}: {
  menuItems: MenuDemoItem[];
  onAddItem: (itemId: string) => void;
}) {
  const visibleDishes = menuItems.filter((item) => item.available);

  return (
    <ProductGlimpseFrame>
      <div className="flex w-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
        <div className="flex items-center justify-between gap-3 bg-surface px-3 py-2.5">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-orange">
              QR Order
            </p>
            <p className="text-base font-extrabold text-navy">Table 4 menu</p>
          </div>
          <span className="grid size-9 place-items-center rounded-lg bg-white">
            <QrCode aria-hidden="true" className="size-5 text-navy" />
          </span>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-2">
          {visibleDishes.length === 0 ? (
            <div className="rounded-xl bg-surface px-3 py-4 text-sm font-semibold text-muted">
              Available items appear here for customers.
            </div>
          ) : null}
          {visibleDishes.map((dish) => (
            <div
              className="grid grid-cols-[2.8rem_minmax(0,1fr)_auto] items-center gap-2 rounded-xl px-2 py-2 [&+&]:border-t [&+&]:border-border"
              key={dish.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={dish.name}
                className="aspect-square w-full rounded-lg object-cover"
                height="52"
                loading="lazy"
                src={dish.image}
                width="52"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold text-navy">
                  {dish.name}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-muted">
                  {dish.price}
                </p>
              </div>
              <button
                className="inline-flex min-h-8 items-center rounded-lg bg-orange px-2.5 text-[0.68rem] font-extrabold text-navy transition hover:bg-[#ea650b]"
                onClick={() => onAddItem(dish.id)}
                type="button"
              >
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>
    </ProductGlimpseFrame>
  );
}

function BillingVisual() {
  return (
    <ProductGlimpseFrame>
      <div className="flex w-full flex-col rounded-[16px] bg-white p-4 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">
            <IndianRupee aria-hidden="true" className="size-3.5" />
            Receipt
          </span>
          <strong className="text-navy">Rs. 840</strong>
        </div>
        <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto text-sm">
          {[
            "Cappuccino x2",
            "Pesto sandwich x1",
            "Brownie x1",
            "Cold coffee x2",
            "Masala fries x1",
          ].map((item) => (
            <div
              className="flex justify-between border-b border-border pb-2"
              key={item}
            >
              <span className="text-muted">{item}</span>
              <span className="font-semibold text-navy">paid</span>
            </div>
          ))}
        </div>
      </div>
    </ProductGlimpseFrame>
  );
}

function TablesVisual({ tableTotal }: { tableTotal: string }) {
  const liveSession = {
    ...sessions[0],
    total: tableTotal,
  };

  return (
    <ProductGlimpseFrame>
      <div className="flex w-full gap-3 overflow-x-auto">
        {[liveSession, sessions[1]].map((session) => (
          <SessionCard key={session.label} session={session} />
        ))}
      </div>
    </ProductGlimpseFrame>
  );
}

function SalesVisual() {
  return (
    <ProductGlimpseFrame>
      <div className="flex w-full flex-col rounded-[16px] bg-white p-4 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-teal/10 p-3">
            <p className="text-xs font-bold uppercase text-muted">Sales</p>
            <strong className="text-lg text-navy">Rs. 18,650</strong>
          </div>
          <div className="rounded-xl bg-surface p-3">
            <p className="text-xs font-bold uppercase text-muted">Orders</p>
            <strong className="text-lg text-navy">42</strong>
          </div>
        </div>
        <div className="mt-4 flex min-h-24 flex-1 items-end gap-2">
          {[36, 52, 44, 70, 58, 82, 64].map((height, index) => (
            <span
              className="flex-1 rounded-t-md bg-orange/80"
              key={index}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </ProductGlimpseFrame>
  );
}

function UtilityVisual({
  menuItems,
  onToggleMenuItem,
  visual,
}: {
  menuItems: MenuDemoItem[];
  onToggleMenuItem: (itemId: string) => void;
  visual: Feature["visual"];
}) {
  if (visual === "menu") {
    return (
      <ProductGlimpseFrame>
        <div className="min-h-0 w-full space-y-2 overflow-y-auto rounded-[16px] bg-white p-3 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
          {menuItems.map((item) => (
            <div
              className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-xl bg-surface px-3 py-2 text-sm"
              key={item.id}
            >
              <span className="truncate font-semibold text-charcoal">
                {item.name}
              </span>
              <span className="text-xs font-bold text-navy">{item.price}</span>
              <button
                className={cn(
                  "relative inline-flex h-6 w-10 items-center rounded-full",
                  item.available ? "bg-teal" : "bg-border",
                )}
                aria-label={`${item.available ? "Hide" : "Show"} ${item.name} in QR ordering`}
                aria-pressed={item.available}
                onClick={() => onToggleMenuItem(item.id)}
                type="button"
              >
                <span
                  className={cn(
                    "size-4 rounded-full bg-white shadow-sm",
                    item.available ? "ml-auto mr-1" : "ml-1",
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </ProductGlimpseFrame>
    );
  }

  if (visual === "tabs") {
    return (
      <ProductGlimpseFrame>
        <div className="min-h-0 w-full space-y-2 overflow-y-auto rounded-[16px] bg-white p-3 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
          {[
            ["Meera Shah", "Rs. 1,240", "Paid Aug 10"],
            ["Rohan Cafe Team", "Rs. 620", "Paid Aug 8"],
            ["Anaya Studio", "Rs. 980", "Paid Aug 6"],
            ["Daily Office Tab", "Rs. 1,860", "Paid Aug 3"],
          ].map(([name, totalDue, lastPayment]) => (
            <div
              className="rounded-xl bg-surface px-3 py-2 text-sm"
              key={name}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="truncate font-semibold text-charcoal">
                  {name}
                </span>
                <span className="shrink-0 text-xs font-extrabold text-navy">
                  {totalDue}
                </span>
              </div>
              <p className="mt-1 text-xs font-semibold text-muted">
                Last payment: {lastPayment}
              </p>
            </div>
          ))}
        </div>
      </ProductGlimpseFrame>
    );
  }

  if (visual === "purchases") {
    return (
      <ProductGlimpseFrame>
        <div className="flex w-full flex-col rounded-[16px] bg-white p-3 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 text-navy">
              <span className="size-2 rounded-full bg-orange" />
              Milk
            </span>
            <span className="inline-flex items-center gap-1.5 text-navy">
              <span className="size-2 rounded-full bg-teal" />
              Bread
            </span>
          </div>
          <svg
            aria-label="Milk and bread purchase prices moving up and down"
            className="min-h-28 flex-1 overflow-visible"
            role="img"
            viewBox="0 0 260 112"
          >
            {[20, 44, 68, 92].map((y) => (
              <line
                className="stroke-border"
                key={y}
                strokeDasharray="3 5"
                strokeWidth="1"
                x1="0"
                x2="260"
                y1={y}
                y2={y}
              />
            ))}
            <polyline
              fill="none"
              points="0,70 44,48 88,58 132,34 176,44 220,26 260,38"
              stroke="#F97316"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <polyline
              fill="none"
              points="0,42 44,54 88,36 132,62 176,50 220,68 260,56"
              stroke="#2A9D8F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            {[
              [0, 70, "#F97316"],
              [132, 34, "#F97316"],
              [260, 38, "#F97316"],
              [0, 42, "#2A9D8F"],
              [132, 62, "#2A9D8F"],
              [260, 56, "#2A9D8F"],
            ].map(([cx, cy, fill]) => (
              <circle
                cx={cx}
                cy={cy}
                fill={String(fill)}
                key={`${cx}-${cy}-${fill}`}
                r="4"
              />
            ))}
          </svg>
          <div className="mt-2 flex justify-between text-[0.68rem] font-bold uppercase text-muted">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Today</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-navy">
            <span className="rounded-lg bg-surface px-2 py-1.5">
              Milk Rs. 64/L
            </span>
            <span className="rounded-lg bg-surface px-2 py-1.5">
              Bread Rs. 48
            </span>
          </div>
        </div>
      </ProductGlimpseFrame>
    );
  }

  const rows: Record<string, Array<[string, string]>> = {
  };

  return (
    <div className="mt-5 space-y-2">
      {(rows[visual] ?? []).map(([label, value]) => (
        <div
          className="flex items-center justify-between rounded-xl bg-surface px-3 py-2 text-sm"
          key={label}
        >
          <span className="font-semibold text-charcoal">{label}</span>
          <span className="text-xs font-bold text-navy">{value}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureVisual({
  addedItems,
  menuItems,
  onAddItem,
  onToggleMenuItem,
  tableTotal,
  visual,
}: {
  addedItems: Record<string, number>;
  menuItems: MenuDemoItem[];
  onAddItem: (itemId: string) => void;
  onToggleMenuItem: (itemId: string) => void;
  tableTotal: string;
  visual: Feature["visual"];
}) {
  if (visual === "orders") {
    return <LiveOrdersVisual addedItems={addedItems} menuItems={menuItems} />;
  }
  if (visual === "qr") {
    return <QrOrderingVisual menuItems={menuItems} onAddItem={onAddItem} />;
  }
  if (visual === "billing") return <BillingVisual />;
  if (visual === "tables") return <TablesVisual tableTotal={tableTotal} />;
  if (visual === "sales") return <SalesVisual />;

  return (
    <UtilityVisual
      menuItems={menuItems}
      onToggleMenuItem={onToggleMenuItem}
      visual={visual}
    />
  );
}

export function FeatureBentoGrid() {
  const [menuItems, setMenuItems] = useState(demoMenuItems);
  const [addedItems, setAddedItems] = useState<Record<string, number>>({});
  const addedTotal = useMemo(
    () =>
      menuItems.reduce(
        (sum, item) => sum + (addedItems[item.id] ?? 0) * item.priceValue,
        0,
      ),
    [addedItems, menuItems],
  );
  const tableTotal = addedTotal > 0 ? `Rs. ${addedTotal}` : sessions[0].total;

  function handleToggleMenuItem(itemId: string) {
    setMenuItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, available: !item.available } : item,
      ),
    );
  }

  function handleAddItem(itemId: string) {
    setAddedItems((items) => ({
      ...items,
      [itemId]: (items[itemId] ?? 0) + 1,
    }));
  }

  return (
    <Section id="features" tone="surface">
      <Container>
        <div className="max-w-3xl">
          <Badge tone="orange">Everything You Need</Badge>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Everything you need to run your cafe.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            OrderDesk connects the daily work: QR ordering, live orders, tables,
            billing, reports, menu, tabs, and purchases.
          </p>
        </div>

        <div className="-mx-5 mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-12">
          {features.map((feature) => (
            <article
              className={cn(
                "flex w-[82vw] max-w-[22rem] shrink-0 snap-start flex-col overflow-hidden rounded-card border border-border bg-white p-5 shadow-[0_18px_50px_rgba(23,40,59,0.08)] md:w-auto md:max-w-none md:shrink",
                feature.size === "large" ? "md:p-6" : "md:p-5",
                bentoClasses[feature.visual],
              )}
              key={feature.title}
            >
              <div className="flex items-start gap-3">
                <FeatureIcon icon={feature.icon} />
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold leading-7 text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {feature.copy}
                  </p>
                </div>
              </div>
              <FeatureVisual
                addedItems={addedItems}
                menuItems={menuItems}
                onAddItem={handleAddItem}
                onToggleMenuItem={handleToggleMenuItem}
                tableTotal={tableTotal}
                visual={feature.visual}
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
