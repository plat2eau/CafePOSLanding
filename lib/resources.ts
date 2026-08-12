export type ResourceSection = {
  body: string;
  bullets?: string[];
  heading: string;
};

export type ResourcePage = {
  description: string;
  eyebrow: string;
  keywords: string[];
  publishedAt: string;
  sections: ResourceSection[];
  slug: string;
  takeaway: string;
  title: string;
  updatedAt: string;
};

export const resourcePages: ResourcePage[] = [
  {
    description:
      "A practical guide to QR ordering for Indian cafes, including table flow, menu setup, KOT handoff, and billing.",
    eyebrow: "QR Ordering",
    keywords: ["qr ordering pos for cafes india", "orderdesk pos for cafes"],
    publishedAt: "2026-08-12",
    slug: "qr-ordering-for-cafes-india",
    title: "QR Ordering for Cafes in India",
    updatedAt: "2026-08-12",
    takeaway:
      "QR ordering works best when it is connected to tables, staff order status, KOTs, and billing instead of living as a separate digital menu.",
    sections: [
      {
        body:
          "For a busy cafe, QR ordering should reduce waiting, not add another screen for staff to manage. The customer scans the table code, chooses items from the live menu, and sends the order into the same workspace staff already use.",
        heading: "Start with the table flow",
      },
      {
        body:
          "A QR menu becomes useful when menu availability, table number, order status, and bill totals stay connected. This helps staff avoid asking where an order came from or whether it has already been charged.",
        bullets: [
          "Assign one QR code per table or service area.",
          "Keep item availability and prices updated from the POS.",
          "Route new orders into the live order dashboard.",
          "Keep each order attached to its table bill.",
        ],
        heading: "Connect QR ordering to operations",
      },
      {
        body:
          "OrderDesk POS is designed around this connected flow for Indian cafes: scan, order, prepare, bill, and review daily sales from one place.",
        heading: "Where OrderDesk POS fits",
      },
    ],
  },
  {
    description:
      "How cafe billing software should work with table management, live sessions, pending payments, and sales tracking.",
    eyebrow: "Billing",
    keywords: [
      "cafe pos with qr ordering and billing",
      "cafe billing software with table management",
    ],
    publishedAt: "2026-08-12",
    slug: "cafe-billing-software-table-management",
    title: "Cafe Billing Software With Table Management",
    updatedAt: "2026-08-12",
    takeaway:
      "Good billing software should know which table, order, payment, and staff action created each bill.",
    sections: [
      {
        body:
          "Cafe billing is not just the last step at the counter. In dine-in service, the bill begins when the first order is placed and keeps changing until the table is closed.",
        heading: "Billing starts before payment",
      },
      {
        body:
          "When table sessions and bills are separate, staff can miss items, duplicate orders, or forget pending payments. A connected POS keeps the table total visible while orders move through preparation.",
        bullets: [
          "Open and close table sessions clearly.",
          "Keep QR orders and staff-entered orders on the same bill.",
          "Track paid, unpaid, and running tab states.",
          "Review daily totals without rebuilding numbers manually.",
        ],
        heading: "What table-linked billing should include",
      },
      {
        body:
          "OrderDesk POS keeps billing close to live orders and table management, which helps small teams stay aligned during rush hours.",
        heading: "The OrderDesk POS approach",
      },
    ],
  },
  {
    description:
      "A clear comparison of cafe POS software and QR menu-only tools for Indian cafe owners choosing a system.",
    eyebrow: "Comparison",
    keywords: ["cafe pos vs qr menu", "orderdesk cafe pos"],
    publishedAt: "2026-08-12",
    slug: "cafe-pos-vs-qr-menu",
    title: "Cafe POS vs QR Menu",
    updatedAt: "2026-08-12",
    takeaway:
      "A QR menu shows customers what they can order. A cafe POS helps the business run the full order, table, billing, and reporting flow.",
    sections: [
      {
        body:
          "A QR menu can be a useful first step because it removes printed menus and lets customers browse from their phones. But if it does not connect to staff orders and billing, your team still has to stitch the workflow together manually.",
        heading: "What a QR menu does",
      },
      {
        body:
          "A cafe POS should manage the full service loop: menu, table, order, KOT, bill, payment, purchase records, and daily reports. This is the difference between showing a menu and operating the cafe.",
        bullets: [
          "Choose a QR menu if you only need a digital catalogue.",
          "Choose a POS if you need order and billing control.",
          "Choose a connected POS if QR orders must reach staff directly.",
        ],
        heading: "What a POS does",
      },
      {
        body:
          "OrderDesk POS positions QR ordering as one part of the operating system, not the whole product.",
        heading: "Why OrderDesk POS is not just a QR menu",
      },
    ],
  },
  {
    description:
      "How QR ordering, KOT flow, staff preparation, billing, and reporting work together inside a cafe POS.",
    eyebrow: "Workflow",
    keywords: [
      "how cafe kot billing and qr ordering work together",
      "simple cafe billing software with qr ordering",
    ],
    publishedAt: "2026-08-12",
    slug: "cafe-kot-billing-qr-ordering",
    title: "How Cafe KOT, Billing, and QR Ordering Work Together",
    updatedAt: "2026-08-12",
    takeaway:
      "The strongest cafe workflow keeps the customer order, kitchen action, table bill, and sales record connected from the first scan.",
    sections: [
      {
        body:
          "The ideal flow is simple: a customer scans the table QR, places an order, staff sees it, the kitchen prepares it, and the table bill updates automatically.",
        heading: "The connected order path",
      },
      {
        body:
          "KOTs are only useful if they reflect the real order state. Staff should know whether an order is new, preparing, ready, served, or already billed without asking across the counter.",
        bullets: [
          "QR order enters the live order dashboard.",
          "Staff confirms and prepares the item.",
          "The table bill stays updated.",
          "Sales and item movement are recorded for reporting.",
        ],
        heading: "How KOT and billing stay aligned",
      },
      {
        body:
          "OrderDesk POS keeps these pieces in one cafe-first workflow so small teams can reduce missed orders and manual reconciliation.",
        heading: "A practical cafe POS workflow",
      },
    ],
  },
  {
    description:
      "A simple setup checklist for cafes moving from manual billing or QR menu-only tools to a connected POS.",
    eyebrow: "Checklist",
    keywords: ["cafe pos setup checklist", "orderdeskpos cafe pos india"],
    publishedAt: "2026-08-12",
    slug: "cafe-pos-setup-checklist",
    title: "Cafe POS Setup Checklist",
    updatedAt: "2026-08-12",
    takeaway:
      "A cafe POS launch is smoother when menu, tables, staff access, QR codes, billing, and reporting are prepared before the first live shift.",
    sections: [
      {
        body:
          "Before testing any POS in a real cafe, collect the operating basics: menu categories, item names, prices, tax rules, table list, and staff roles.",
        heading: "Prepare the basics",
      },
      {
        body:
          "Then test the actual service path instead of only checking settings. Place a QR order, create a staff order, print or review the KOT, update order status, settle a bill, and check the day summary.",
        bullets: [
          "Add cafe details and menu items.",
          "Create tables and QR codes.",
          "Add staff access for the right roles.",
          "Run a mock order from scan to payment.",
          "Review reports after the test shift.",
        ],
        heading: "Run a full mock shift",
      },
      {
        body:
          "The OrderDesk POS early setup flow is designed to help selected cafes test these pieces with real tables and real menu items.",
        heading: "Use guided setup when possible",
      },
    ],
  },
  {
    description:
      "What the OrderDesk POS early pilot includes for Indian cafes and how guided setup helps teams test the product.",
    eyebrow: "Pilot",
    keywords: ["OrderDesk POS early pilot", "orderdeskpos"],
    publishedAt: "2026-08-12",
    slug: "orderdesk-pos-early-pilot-indian-cafes",
    title: "OrderDesk POS Early Pilot for Indian Cafes",
    updatedAt: "2026-08-12",
    takeaway:
      "The early pilot is meant for cafes that want practical setup help before rolling a new POS flow into daily service.",
    sections: [
      {
        body:
          "OrderDesk POS is currently positioned around a guided early pilot. That means the goal is not to push every cafe through a self-service signup, but to help a small number of teams test a practical workflow.",
        heading: "What the pilot is for",
      },
      {
        body:
          "A useful pilot should include the real cafe menu, actual table layout, QR ordering, live order handling, billing, and a basic review of daily tracking.",
        bullets: [
          "Cafe and menu setup",
          "Table and QR code setup",
          "Staff access planning",
          "Ordering and billing walkthrough",
          "Feedback after a test shift",
        ],
        heading: "What setup should cover",
      },
      {
        body:
          "Cafes can request a demo to see whether OrderDesk POS is a fit for their service style, team size, and table workflow.",
        heading: "How to request early access",
      },
    ],
  },
];

export function getResourcePage(slug: string) {
  return resourcePages.find((page) => page.slug === slug);
}
