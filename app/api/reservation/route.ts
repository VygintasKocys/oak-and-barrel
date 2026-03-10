import { NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.N8N_RESERVATION_WEBHOOK_URL ??
  "http://localhost:5678/webhook/make-reservation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, partySize, dateTime } = body;

    if (!name || !partySize || !dateTime) {
      return NextResponse.json(
        { error: "Name, party size, and date/time are required." },
        { status: 400 }
      );
    }

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, partySize, dateTime }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to create reservation." },
        { status: res.status }
      );
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
