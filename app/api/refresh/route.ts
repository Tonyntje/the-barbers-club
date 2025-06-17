// app/api/events/route.ts
import { NextResponse } from "next/server";
import { getAccessToken } from "@/app/api/utils/getAccessToken";

export async function GET() {
  try {
    await getAccessToken();

    return NextResponse.json({ message: "Token Refreshed" }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
