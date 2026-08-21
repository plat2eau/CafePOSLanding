"use client";

import {
  BarChart3,
  CheckCircle2,
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
import type { SectionTone } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import {
  activeOrders,
  type ActiveOrder,
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

type DemoLiveOrder = ActiveOrder & {
  totalValue: number;
};

type PendingTab = {
  id: string;
  lastPayment: string;
  name: string;
  totalDue: number;
};

type PurchasePriceKey = "milk" | "bread";

type PurchasePrices = Record<PurchasePriceKey, number>;

function currencyToNumber(value: string) {
  return Number(value.replace(/[^\d]/g, "")) || 0;
}

function formatCurrency(value: number) {
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

function cartQuantity(addedItems: Record<string, number>) {
  return Object.values(addedItems).reduce((sum, quantity) => sum + quantity, 0);
}

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
  {
    available: false,
    id: "chicken-manchurian",
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=160&q=70",
    name: "Chicken Manchurian",
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

const initialPendingTabs: PendingTab[] = [
  {
    id: "meera",
    lastPayment: "Due today",
    name: "Meera Shah",
    totalDue: 1240,
  },
  {
    id: "rohan",
    lastPayment: "Due Aug 12",
    name: "Rohan Cafe Team",
    totalDue: 620,
  },
  {
    id: "anaya",
    lastPayment: "Due Aug 9",
    name: "Anaya Studio",
    totalDue: 980,
  },
  {
    id: "office",
    lastPayment: "Due Aug 7",
    name: "Daily Office Tab",
    totalDue: 1860,
  },
];

const initialPurchasePrices: PurchasePrices = {
  bread: 48,
  milk: 64,
};

const initialTableFourOrders: DemoLiveOrder[] = [
  {
    guest: "Aarav - 98230 44012",
    id: "t4-001",
    items: [["Cold coffee", "x2"]],
    source: "Table 4",
    status: "Served",
    total: "Rs. 360",
    totalValue: 360,
  },
  {
    guest: "Aarav - 98230 44012",
    id: "t4-002",
    items: [["Pesto sandwich", "x1"]],
    source: "Table 4",
    status: "Served",
    total: "Rs. 240",
    totalValue: 240,
  },
  {
    guest: "Aarav - 98230 44012",
    id: "t4-003",
    items: [["Brownie", "x2"]],
    source: "Table 4",
    status: "Preparing",
    total: "Rs. 240",
    totalValue: 240,
  },
];

function FeatureIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-white">
      <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
    </span>
  );
}

function ProductGlimpseFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-5 flex min-h-[180px] flex-1 overflow-hidden rounded-[18px] border border-border bg-surface p-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

function LiveOrdersVisual({
  submittedOrders,
}: {
  submittedOrders: DemoLiveOrder[];
}) {
  const liveOrders = submittedOrders.length
    ? [...submittedOrders, ...activeOrders]
    : activeOrders;

  return (
    <ProductGlimpseFrame>
      <div className="flex w-full gap-3 overflow-x-auto">
        {liveOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </ProductGlimpseFrame>
  );
}

function QrOrderingVisual({
  addedItems,
  cartTotal,
  menuItems,
  onAddItem,
  onSubmitOrder,
}: {
  addedItems: Record<string, number>;
  cartTotal: number;
  menuItems: MenuDemoItem[];
  onAddItem: (itemId: string) => void;
  onSubmitOrder: () => void;
}) {
  const visibleDishes = menuItems.filter((item) => item.available);
  const totalItems = cartQuantity(addedItems);

  return (
    <ProductGlimpseFrame className="h-[300px] min-h-0 flex-none">
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
        <div className="flex shrink-0 items-center justify-between gap-3 bg-surface px-3 py-2.5">
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
                className="inline-flex min-h-8 min-w-12 items-center justify-center rounded-lg bg-orange px-2.5 text-[0.68rem] font-extrabold text-navy transition hover:bg-[#d97706]"
                onClick={() => onAddItem(dish.id)}
                type="button"
              >
                {(addedItems[dish.id] ?? 0) > 0
                  ? `x${addedItems[dish.id]}`
                  : "ADD"}
              </button>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-border bg-surface px-3 py-2">
          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-muted">
              {totalItems} items
            </p>
            <p className="text-sm font-extrabold text-navy">
              {formatCurrency(cartTotal)}
            </p>
          </div>
          <button
            className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-lg bg-navy px-3 text-xs font-extrabold text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-45"
            disabled={totalItems === 0}
            onClick={onSubmitOrder}
            type="button"
          >
            Order
          </button>
        </div>
      </div>
    </ProductGlimpseFrame>
  );
}

function BillingVisual({
  orders,
  tableTotalValue,
}: {
  orders: DemoLiveOrder[];
  tableTotalValue: number;
}) {
  return (
    <ProductGlimpseFrame className="h-[300px] min-h-0 flex-none">
      <div className="flex min-h-0 w-full flex-1 flex-col rounded-[16px] bg-white p-4 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
        <div className="flex shrink-0 items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">
            <IndianRupee aria-hidden="true" className="size-3.5" />
            Table 4 bill
          </span>
          <strong className="text-navy">
            {formatCurrency(tableTotalValue)}
          </strong>
        </div>
        <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 text-sm">
          {orders.map((order) => (
            <div
              className="rounded-xl border border-border bg-surface px-3 py-2"
              key={order.id}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-extrabold text-navy">
                    #{order.id}
                  </p>
                  <p className="text-[0.68rem] font-bold text-muted">
                    {order.status}
                  </p>
                </div>
                <strong className="shrink-0 text-xs text-orange">
                  {order.total}
                </strong>
              </div>
              <div className="mt-2 space-y-1">
                {order.items.map(([name, quantity]) => (
                  <div
                    className="flex items-center justify-between gap-3"
                    key={`${order.id}-${name}`}
                  >
                    <span className="truncate text-muted">{name}</span>
                    <span className="shrink-0 font-semibold text-navy">
                      {quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex shrink-0 items-center justify-between rounded-xl bg-surface px-3 py-2 text-xs font-bold">
          <span className="text-muted">{orders.length} table orders</span>
          <span className="text-orange">
            Bill {formatCurrency(tableTotalValue)}
          </span>
        </div>
      </div>
    </ProductGlimpseFrame>
  );
}

function TablesVisual({
  latestOrder,
  tableFourOrderCount,
  tableFourTotalValue,
}: {
  latestOrder?: DemoLiveOrder;
  tableFourOrderCount: number;
  tableFourTotalValue: number;
}) {
  const liveSession = {
    ...sessions[0],
    activeOrderTotal: latestOrder?.total ?? sessions[0].activeOrderTotal,
    lastActive: latestOrder ? "just now" : sessions[0].lastActive,
    orders: tableFourOrderCount,
    total: formatCurrency(tableFourTotalValue),
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

function SalesVisual({
  tableEightTotalValue,
  tableFourOrderCount,
  tableFourTotalValue,
}: {
  tableEightTotalValue: number;
  tableFourOrderCount: number;
  tableFourTotalValue: number;
}) {
  const salesTotal = tableFourTotalValue + tableEightTotalValue;
  const orderCount = tableFourOrderCount + sessions[1].orders;
  const dailySales = [620, 780, 710, 930, 860, 1040, salesTotal];
  const maxSales = Math.max(...dailySales, 1);

  return (
    <ProductGlimpseFrame>
      <div className="flex w-full flex-col rounded-[16px] bg-white p-4 shadow-[0_14px_36px_rgba(23,40,59,0.08)]">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-teal/10 p-3">
            <p className="text-xs font-bold uppercase text-muted">Sales</p>
            <strong className="text-lg text-navy">
              {formatCurrency(salesTotal)}
            </strong>
          </div>
          <div className="rounded-xl bg-surface p-3">
            <p className="text-xs font-bold uppercase text-muted">Orders</p>
            <strong className="text-lg text-navy">{orderCount}</strong>
          </div>
        </div>
        <div className="mt-4 flex min-h-24 flex-1 items-end gap-2">
          {dailySales.map((value, index) => (
            <span
              className={cn(
                "flex-1 rounded-t-md",
                index === dailySales.length - 1 ? "bg-teal" : "bg-orange/80",
              )}
              key={index}
              style={{ height: `${Math.max(18, (value / maxSales) * 100)}%` }}
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-navy">
          <span className="rounded-lg bg-surface px-2 py-1.5">
            Table 4 {formatCurrency(tableFourTotalValue)}
          </span>
          <span className="rounded-lg bg-surface px-2 py-1.5">
            Table 8 {formatCurrency(tableEightTotalValue)}
          </span>
        </div>
      </div>
    </ProductGlimpseFrame>
  );
}

function UtilityVisual({
  menuItems,
  onChangePurchasePrice,
  onClearTab,
  onToggleMenuItem,
  pendingTabs,
  purchasePrices,
  visual,
}: {
  menuItems: MenuDemoItem[];
  onChangePurchasePrice: (item: PurchasePriceKey, value: number) => void;
  onClearTab: (tabId: string) => void;
  onToggleMenuItem: (itemId: string) => void;
  pendingTabs: PendingTab[];
  purchasePrices: PurchasePrices;
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
          {pendingTabs.length === 0 ? (
            <div className="rounded-xl bg-surface px-3 py-4 text-center text-sm font-bold text-teal">
              No pending payments
            </div>
          ) : null}
          {pendingTabs.map((tab) => (
            <div
              className="rounded-xl bg-surface px-3 py-2 text-sm"
              key={tab.id}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="truncate font-semibold text-charcoal">
                  {tab.name}
                </span>
                <span className="shrink-0 text-xs font-extrabold text-navy">
                  {formatCurrency(tab.totalDue)}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="min-w-0 truncate text-xs font-semibold text-muted">
                  {tab.lastPayment}
                </p>
                <button
                  aria-label={`Clear ${tab.name} tab`}
                  className="inline-flex min-h-8 shrink-0 items-center gap-1.5 rounded-lg border border-teal/20 bg-white px-2.5 text-[0.68rem] font-extrabold text-teal transition hover:border-teal hover:bg-teal/10"
                  onClick={() => onClearTab(tab.id)}
                  title="Clear tab"
                  type="button"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-3.5"
                    strokeWidth={2.4}
                  />
                  Clear
                </button>
              </div>
            </div>
          ))}
        </div>
      </ProductGlimpseFrame>
    );
  }

  if (visual === "purchases") {
    const purchaseDays = ["Mon", "Tue", "Wed", "Fri", "Today"];
    const milkValues = [58, 61, 59, 66, purchasePrices.milk];
    const breadValues = [44, 46, 43, 49, purchasePrices.bread];
    const allPrices = [...milkValues, ...breadValues];
    const minPrice = Math.min(...allPrices) - 4;
    const maxPrice = Math.max(...allPrices) + 4;
    const chartWidth = 260;
    const chartTop = 18;
    const chartBottom = 96;
    const priceToPoint = (value: number, index: number) => {
      const x = (index / (purchaseDays.length - 1)) * chartWidth;
      const y =
        chartBottom -
        ((value - minPrice) / Math.max(1, maxPrice - minPrice)) *
        (chartBottom - chartTop);

      return `${x.toFixed(1)},${y.toFixed(1)}`;
    };
    const milkPoints = milkValues.map(priceToPoint).join(" ");
    const breadPoints = breadValues.map(priceToPoint).join(" ");

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
              points={milkPoints}
              stroke="#F59E0B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <polyline
              fill="none"
              points={breadPoints}
              stroke="#2A9D8F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            {[
              ...milkValues.map((value, index) => ({
                fill: "#F59E0B",
                point: priceToPoint(value, index),
              })),
              ...breadValues.map((value, index) => ({
                fill: "#2A9D8F",
                point: priceToPoint(value, index),
              })),
            ].map(({ fill, point }) => {
              const [cx, cy] = point.split(",");

              return (
                <circle
                  cx={cx}
                  cy={cy}
                  fill={fill}
                  key={`${cx}-${cy}-${fill}`}
                  r="4"
                />
              );
            })}
          </svg>
          <div className="mt-2 flex justify-between text-[0.68rem] font-bold uppercase text-muted">
            {purchaseDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-navy">
            {[
              { item: "milk" as const, label: "Milk Rs./L" },
              { item: "bread" as const, label: "Bread Rs." },
            ].map(({ item, label }) => (
              <label
                className="flex items-center justify-between gap-2 rounded-lg bg-surface px-2 py-1.5"
                key={item}
              >
                <span className="truncate">{label}</span>
                <input
                  className="h-7 w-14 rounded-md border border-border bg-white px-1.5 text-right text-xs font-extrabold text-navy outline-none focus:border-orange"
                  min="1"
                  onChange={(event) => {
                    if (Number.isFinite(event.currentTarget.valueAsNumber)) {
                      onChangePurchasePrice(
                        item,
                        event.currentTarget.valueAsNumber,
                      );
                    }
                  }}
                  type="number"
                  value={purchasePrices[item]}
                />
              </label>
            ))}
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
  cartTotal,
  latestOrder,
  menuItems,
  onChangePurchasePrice,
  onAddItem,
  onClearTab,
  onSubmitOrder,
  onToggleMenuItem,
  pendingTabs,
  purchasePrices,
  submittedOrders,
  tableEightTotalValue,
  tableFourOrders,
  tableFourOrderCount,
  tableFourTotalValue,
  visual,
}: {
  addedItems: Record<string, number>;
  cartTotal: number;
  latestOrder?: DemoLiveOrder;
  menuItems: MenuDemoItem[];
  onChangePurchasePrice: (item: PurchasePriceKey, value: number) => void;
  onAddItem: (itemId: string) => void;
  onClearTab: (tabId: string) => void;
  onSubmitOrder: () => void;
  onToggleMenuItem: (itemId: string) => void;
  pendingTabs: PendingTab[];
  purchasePrices: PurchasePrices;
  submittedOrders: DemoLiveOrder[];
  tableEightTotalValue: number;
  tableFourOrders: DemoLiveOrder[];
  tableFourOrderCount: number;
  tableFourTotalValue: number;
  visual: Feature["visual"];
}) {
  if (visual === "orders") {
    return <LiveOrdersVisual submittedOrders={submittedOrders} />;
  }
  if (visual === "qr") {
    return (
      <QrOrderingVisual
        addedItems={addedItems}
        cartTotal={cartTotal}
        menuItems={menuItems}
        onAddItem={onAddItem}
        onSubmitOrder={onSubmitOrder}
      />
    );
  }
  if (visual === "billing") {
    return (
      <BillingVisual
        orders={tableFourOrders}
        tableTotalValue={tableFourTotalValue}
      />
    );
  }
  if (visual === "tables") {
    return (
      <TablesVisual
        latestOrder={latestOrder}
        tableFourOrderCount={tableFourOrderCount}
        tableFourTotalValue={tableFourTotalValue}
      />
    );
  }
  if (visual === "sales") {
    return (
      <SalesVisual
        tableEightTotalValue={tableEightTotalValue}
        tableFourOrderCount={tableFourOrderCount}
        tableFourTotalValue={tableFourTotalValue}
      />
    );
  }

  return (
    <UtilityVisual
      menuItems={menuItems}
      onChangePurchasePrice={onChangePurchasePrice}
      onClearTab={onClearTab}
      onToggleMenuItem={onToggleMenuItem}
      pendingTabs={pendingTabs}
      purchasePrices={purchasePrices}
      visual={visual}
    />
  );
}

type FeatureBentoGridProps = {
  tone?: SectionTone;
};

export function FeatureBentoGrid({ tone = "warm" }: FeatureBentoGridProps) {
  const [menuItems, setMenuItems] = useState(demoMenuItems);
  const [addedItems, setAddedItems] = useState<Record<string, number>>({});
  const [pendingTabs, setPendingTabs] = useState(initialPendingTabs);
  const [purchasePrices, setPurchasePrices] = useState(initialPurchasePrices);
  const [submittedOrders, setSubmittedOrders] = useState<DemoLiveOrder[]>([]);
  const [orderSequence, setOrderSequence] = useState(1);
  const cartTotal = useMemo(
    () =>
      menuItems.reduce(
        (sum, item) => sum + (addedItems[item.id] ?? 0) * item.priceValue,
        0,
      ),
    [addedItems, menuItems],
  );
  const latestOrder = submittedOrders[0];
  const tableFourOrders = useMemo(
    () => [...submittedOrders, ...initialTableFourOrders],
    [submittedOrders],
  );
  const tableFourTotalValue = tableFourOrders.reduce(
    (sum, order) => sum + order.totalValue,
    0,
  );
  const tableEightTotalValue = currencyToNumber(sessions[1].total);
  const tableFourOrderCount = tableFourOrders.length;

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

  function handleSubmitOrder() {
    const orderedItems = menuItems.filter((item) => addedItems[item.id] > 0);

    if (orderedItems.length === 0) return;

    const totalValue = orderedItems.reduce(
      (sum, item) => sum + (addedItems[item.id] ?? 0) * item.priceValue,
      0,
    );
    const order: DemoLiveOrder = {
      guest: "QR guest - Table 4",
      id: `qr${String(orderSequence).padStart(4, "0")}`,
      items: orderedItems.map((item) => [
        item.name,
        `x${addedItems[item.id]}`,
      ]),
      source: "Table 4",
      status: "Placed",
      total: formatCurrency(totalValue),
      totalValue,
    };

    setSubmittedOrders((orders) => [order, ...orders]);
    setAddedItems({});
    setOrderSequence((sequence) => sequence + 1);
  }

  function handleClearTab(tabId: string) {
    setPendingTabs((tabs) => tabs.filter((tab) => tab.id !== tabId));
  }

  function handlePurchasePriceChange(item: PurchasePriceKey, value: number) {
    setPurchasePrices((prices) => ({
      ...prices,
      [item]: Math.max(1, Math.round(value)),
    }));
  }

  return (
    <Section id="features" tone={tone}>
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
                cartTotal={cartTotal}
                latestOrder={latestOrder}
                menuItems={menuItems}
                onChangePurchasePrice={handlePurchasePriceChange}
                onAddItem={handleAddItem}
                onClearTab={handleClearTab}
                onSubmitOrder={handleSubmitOrder}
                onToggleMenuItem={handleToggleMenuItem}
                pendingTabs={pendingTabs}
                purchasePrices={purchasePrices}
                submittedOrders={submittedOrders}
                tableEightTotalValue={tableEightTotalValue}
                tableFourOrders={tableFourOrders}
                tableFourOrderCount={tableFourOrderCount}
                tableFourTotalValue={tableFourTotalValue}
                visual={feature.visual}
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
