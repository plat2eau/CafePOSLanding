import { Badge, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

const filters = [
  { label: "Placed", count: 3, active: true },
  { label: "Preparing", count: 2 },
];

export const activeOrders = [
  {
    id: "a8f31c29",
    source: "Table 3",
    guest: "Aarav - 98230 44012",
    status: "Preparing",
    total: "Rs. 840",
    items: [
      ["Cappuccino", "x2"],
      ["Pesto sandwich", "x1"],
      ["Brownie", "x1"],
    ],
  },
  {
    id: "c2d90b11",
    source: "Table 7",
    guest: "Meera - 99871 12004",
    status: "Placed",
    total: "Rs. 520",
    items: [
      ["Cold coffee", "x2"],
      ["Masala fries", "x1"],
      ["Lemon iced tea", "x1"],
    ],
  },
];

export const sessions = [
  {
    label: "Table 4",
    orders: 3,
    requests: 1,
    total: "Rs. 840",
    lastActive: "2 min ago",
  },
  {
    label: "Table 8",
    orders: 1,
    requests: 0,
    total: "Rs. 260",
    lastActive: "5 min ago",
  },
];

const menuItems = [
  {
    name: "Cold coffee",
    price: "Rs. 180",
    description: "Chilled coffee with milk and ice.",
    active: true,
  },
  {
    name: "Pesto sandwich",
    price: "Rs. 240",
    description: "Grilled bread, basil pesto, and cheese.",
  },
];

function FilterChip({
  active = false,
  count,
  label,
}: {
  active?: boolean;
  count: number;
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold",
        active
          ? "border-orange bg-orange text-navy"
          : "border-orange/30 bg-white text-orange",
      )}
    >
      {label}
      <span className={active ? "text-navy/70" : "text-muted"}>{count}</span>
    </span>
  );
}

export function OrderCard({
  order,
}: {
  order: (typeof activeOrders)[number];
}) {
  return (
    <article className="flex min-h-[238px] w-[248px] shrink-0 flex-col gap-3 rounded-2xl border border-orange/30 bg-[linear-gradient(135deg,rgba(249,115,22,0.08),transparent_58%),#ffffff] p-3 shadow-none ring-1 ring-inset ring-orange/10">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-orange">
            {order.source}
          </p>
          <h3 className="mt-1 truncate text-base font-extrabold leading-6 text-navy">
            #{order.id}
          </h3>
        </div>
        <div className="flex shrink-0 gap-1.5">
          <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-navy">
            {order.status}
          </span>
          <span className="rounded-full border border-orange/30 bg-white px-2.5 py-1 text-xs font-bold text-orange">
            KOT
          </span>
        </div>
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-charcoal">
          {order.guest}
        </p>
        <p className="text-xs text-muted">Updated just now</p>
      </div>

      <div className="min-h-0 flex-1 rounded-xl border border-border bg-surface px-3 py-2">
        <ul className="m-0 flex list-none flex-col gap-1 p-0 text-sm">
          {order.items.map(([name, quantity]) => (
            <li className="flex items-center justify-between gap-3" key={name}>
              <span className="truncate text-charcoal">{name}</span>
              <span className="shrink-0 font-semibold text-navy">
                {quantity}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-muted">Total</p>
          <strong className="text-navy">{order.total}</strong>
        </div>
        <div className="flex gap-1.5">
          <span className="grid size-8 place-items-center rounded-full bg-orange/12 text-xs font-black text-orange">
            ...
          </span>
        </div>
      </div>
    </article>
  );
}

export function SessionCard({
  session,
}: {
  session: (typeof sessions)[number];
}) {
  return (
    <article className="flex aspect-square min-w-[210px] flex-col justify-between rounded-2xl border border-border bg-white p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="rounded-full bg-teal/10 px-2.5 py-1 text-xs font-bold text-teal">
            Table
          </span>
          <h3 className="mt-2 text-lg font-extrabold text-navy">
            {session.label}
          </h3>
        </div>
        <span className="rounded-full border border-orange/25 bg-white px-2 py-1 text-xs font-bold text-orange">
          Receipt
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-lg bg-surface text-center">
        <div className="px-2 py-2">
          <strong className="block text-sm text-navy">{session.orders}</strong>
          <span className="text-[0.65rem] font-bold uppercase text-muted">
            Orders
          </span>
        </div>
        <div className="border-x border-border px-2 py-2">
          <strong className="block text-sm text-navy">
            {session.requests}
          </strong>
          <span className="text-[0.65rem] font-bold uppercase text-muted">
            Req
          </span>
        </div>
        <div className="px-2 py-2">
          <strong className="block truncate text-sm text-navy">
            {session.total}
          </strong>
          <span className="text-[0.65rem] font-bold uppercase text-muted">
            Total
          </span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted">
            Last active
          </p>
          <p className="mt-1 text-xs font-semibold text-muted">
            {session.lastActive}
          </p>
        </div>
        <span className="inline-flex min-h-9 items-center justify-center rounded-full border border-orange/25 bg-white px-3 text-xs font-bold text-orange">
          Add order
        </span>
      </div>
    </article>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute bottom-4 right-4 hidden w-[168px] rounded-[30px] border border-navy/10 bg-navy p-2 shadow-[0_24px_60px_rgba(23,40,59,0.28)] sm:block lg:-bottom-6 lg:-right-6">
      <div className="overflow-hidden rounded-[24px] bg-warm">
        <div className="bg-white px-3 pb-3 pt-2">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-navy/18" />
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-orange">
                QR Order
              </p>
              <h3 className="mt-0.5 text-sm font-extrabold leading-4 text-navy">
                Table 4
              </h3>
            </div>
            <span className="grid size-8 place-items-center rounded-lg border border-border bg-surface">
              <span className="grid size-4 grid-cols-2 gap-px">
                {Array.from({ length: 4 }).map((_, index) => (
                  <span
                    className={index === 2 ? "bg-orange" : "bg-navy"}
                    key={index}
                  />
                ))}
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="flex gap-1.5 overflow-hidden">
            {["Coffee", "Snacks"].map((category, index) => (
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.62rem] font-bold",
                  index === 0
                    ? "bg-orange text-navy"
                    : "bg-white text-muted",
                )}
                key={category}
              >
                {category}
              </span>
            ))}
          </div>
          {menuItems.map((item) => (
            <div
              className="flex items-center justify-between gap-2 rounded-xl bg-white p-2"
              key={item.name}
            >
              <div className="min-w-0">
                <p className="truncate text-[0.72rem] font-bold leading-4 text-navy">
                  {item.name}
                </p>
                <p className="text-[0.65rem] text-muted">{item.price}</p>
              </div>
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-full text-[0.7rem] font-black",
                  item.active
                    ? "bg-orange text-navy"
                    : "border border-border text-muted",
                )}
              >
                +
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-xl bg-navy px-3 py-2 text-white">
            <span className="text-[0.68rem] font-semibold">2 items</span>
            <span className="text-[0.72rem] font-extrabold text-orange">
              Rs. 420
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileProductMockup() {
  const order = activeOrders[0];
  const session = sessions[0];

  return (
    <div className="h-[350px] w-full overflow-hidden sm:hidden">
      <div className="origin-top scale-75">
        <article className="relative z-10 flex w-[88%] -translate-x-14 flex-col rounded-2xl border border-orange/30 bg-white p-4 shadow-[0_18px_46px_rgba(23,40,59,0.1)] ring-1 ring-inset ring-orange/10 min-[390px]:-translate-x-16">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-orange">
                {order.source}
              </p>
              <h3 className="mt-1 truncate text-lg font-extrabold leading-6 text-navy">
                #{order.id}
              </h3>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-navy">
                {order.status}
              </span>
              <span className="rounded-full border border-orange/30 bg-white px-2.5 py-1 text-xs font-bold text-orange">
                KOT
              </span>
            </div>
          </div>

          <div className="mt-3 min-w-0">
            <p className="truncate text-sm font-semibold text-charcoal">
              {order.guest}
            </p>
            <p className="text-xs text-muted">Updated just now</p>
          </div>

          <div className="mt-3 rounded-xl border border-border bg-surface px-3 py-2">
            <ul className="m-0 flex list-none flex-col gap-1 p-0 text-sm">
              {order.items.map(([name, quantity]) => (
                <li className="flex items-center justify-between gap-3" key={name}>
                  <span className="truncate text-charcoal">{name}</span>
                  <span className="shrink-0 font-semibold text-navy">
                    {quantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 pt-3">
            <div>
              <p className="text-xs text-muted">Total</p>
              <strong className="text-navy">{order.total}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-orange/12 px-3 py-1.5 text-xs font-bold text-orange">
                5 live
              </span>
              <span className="grid size-8 place-items-center rounded-full bg-orange/12 text-xs font-black text-orange">
                ...
              </span>
            </div>
          </div>
        </article>

        <article className="relative -mt-20 ml-auto flex gap-3 w-[88%] translate-x-14 flex-col justify-between rounded-2xl border border-border bg-white p-4 shadow-[0_18px_42px_rgba(23,40,59,0.1)] min-[390px]:translate-x-16">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-teal/10 px-2.5 py-1 text-xs font-bold text-teal">
                  Table
                </span>
                <span className="rounded-full border border-orange/20 bg-white px-2.5 py-1 text-xs font-bold text-navy">
                  PIN 4821
                </span>
              </div>
              <h3 className="mt-2 text-lg font-extrabold text-navy">
                {session.label}
              </h3>
              <p className="truncate text-sm font-semibold text-charcoal">
                Aarav - 98230 44012
              </p>
            </div>
            <span className="rounded-full border border-orange/25 bg-white px-2 py-1 text-xs font-bold text-orange">
              Receipt
            </span>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-lg bg-surface text-center">
            <div className="px-2 py-1.5">
              <strong className="block text-sm text-navy">
                {session.orders}
              </strong>
              <span className="text-[0.65rem] font-bold uppercase text-muted">
                Orders
              </span>
            </div>
            <div className="border-x border-border px-2 py-1.5">
              <strong className="block text-sm text-navy">
                {session.requests}
              </strong>
              <span className="text-[0.65rem] font-bold uppercase text-muted">
                Req
              </span>
            </div>
            <div className="px-2 py-1.5">
              <strong className="block truncate text-sm text-navy">
                {session.total}
              </strong>
              <span className="text-[0.65rem] font-bold uppercase text-muted">
                Total
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted">
                Last active
              </p>
              <p className="mt-1 text-xs font-semibold text-muted">
                {session.lastActive}
              </p>
            </div>
            <span className="inline-flex min-h-8 items-center justify-center rounded-full border border-orange/25 bg-white px-3 text-xs font-bold text-orange">
              Add order
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}

export function OrderDeskProductMockup() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[680px] lg:max-w-none">
      <MobileProductMockup />
      <Card className="hidden overflow-hidden rounded-[22px] p-0 shadow-[0_28px_90px_rgba(23,40,59,0.14)] sm:block">
        <div className="border-b border-border bg-white px-4 py-4 sm:px-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange">
                Daily operations
              </p>
              <h2 className="mt-1 font-heading text-2xl font-extrabold text-navy">
                Orders
              </h2>
              <p className="mt-1 text-sm text-muted">
                Track active and processed orders from one list.
              </p>
            </div>
            <Badge tone="orange" className="normal-case tracking-normal">
              Add order
            </Badge>
          </div>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_28%),linear-gradient(180deg,#fff,#f4f6f8)] p-4 sm:p-5">
          <div className="rounded-[18px] border border-border bg-white/86 p-4">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange">
                  Active
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-navy">
                  Active orders
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <FilterChip key={filter.label} {...filter} />
                  ))}
                </div>
              </div>
              <span className="rounded-full bg-surface px-3 py-1.5 text-sm font-bold text-navy">
                5
              </span>
            </div>

            <div className="-mx-2 flex snap-x gap-3 overflow-x-auto px-2 pb-2">
              {activeOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 pr-0 sm:grid-cols-2 sm:pr-36 lg:pr-28">
            {sessions.map((session) => (
              <SessionCard key={session.label} session={session} />
            ))}
          </div>
        </div>
      </Card>

      <div className="absolute -left-3 top-24 hidden rounded-2xl border border-border bg-white p-4 shadow-[0_22px_60px_rgba(23,40,59,0.16)] sm:block">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
          Today&apos;s Sales
        </p>
        <p className="mt-1 font-heading text-2xl font-extrabold text-navy">
          Rs. 18,650
        </p>
      </div>

      <PhoneMockup />
    </div>
  );
}
