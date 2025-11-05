// app/api/events/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/app/api/utils/getAccessToken";

export async function GET() {
  // const now = new Date().toISOString();
  const twoMonths = new Date();
  twoMonths.setMonth(twoMonths.getMonth() + 2);
  // const timeMax = twoMonths.toISOString();

  const calendarId = process.env.CLIENT_EMAIL;
  const apiKey = process.env.CLIENT_API;

  // Huidige datum en datum over 3 maanden
  const now = new Date();
  const inThreeMonths = new Date();
  inThreeMonths.setMonth(now.getMonth() + 3);

  // Omzetten naar ISO-formaat
  const timeMin = now.toISOString();
  const timeMax = inThreeMonths.toISOString();

  if (!calendarId) return;

  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}` +
    `&timeMin=${encodeURIComponent(timeMin)}` +
    `&timeMax=${encodeURIComponent(timeMax)}` +
    `&singleEvents=true` +
    `&orderBy=startTime`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message }, { status: 500 });
    }

    return NextResponse.json(data.items);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const event = await req.json(); // Expects: { summary, description, start, end }

    const accessToken = await getAccessToken();

    const calendarRes = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      },
    );

    const data = await calendarRes.json();

    if (!calendarRes.ok) {
      console.error(data);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
