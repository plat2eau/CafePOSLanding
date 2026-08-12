import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import { join } from "node:path";
import { demoRequestSchema } from "@/lib/demo-request";

export const runtime = "nodejs";

async function saveLocalDemoRequest(data: {
  businessName: string;
  city: string;
  email: string;
  message?: string;
  name: string;
  phone: string;
}) {
  const inboxDir = join(process.cwd(), ".data");
  const inboxFile = join(inboxDir, "demo-requests.jsonl");

  await mkdir(inboxDir, { recursive: true });
  await appendFile(
    inboxFile,
    `${JSON.stringify({
      ...data,
      createdAt: new Date().toISOString(),
      source: "orderdesk-landing",
    })}\n`,
    "utf8",
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = demoRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        errors: parsed.error.flatten().fieldErrors,
        message: "Please check the highlighted fields.",
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  if (data.startedAt && Date.now() - data.startedAt < 1800) {
    return NextResponse.json(
      { message: "Please wait a moment before submitting." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_REQUEST_TO_EMAIL;
  const from = process.env.DEMO_REQUEST_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    await saveLocalDemoRequest(data);
    return NextResponse.json({ delivery: "local", ok: true });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from,
      to: [to],
      subject: `OrderDesk demo request from ${data.businessName}`,
      reply_to: [data.email],
      text: [
        "New OrderDesk demo request",
        "",
        `Name: ${data.name}`,
        `Cafe/business: ${data.businessName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `City: ${data.city}`,
        "",
        "Notes:",
        data.message || "No notes provided.",
      ].join("\n"),
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!resendResponse.ok) {
    const errorPayload = await resendResponse.json().catch(() => null);
    console.error("Resend demo request failed", {
      error: errorPayload,
      status: resendResponse.status,
    });

    return NextResponse.json(
      {
        message: "We could not send your request right now. Please try again.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ delivery: "email", ok: true });
}
