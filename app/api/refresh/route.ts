// app/api/events/route.ts
import { NextResponse } from "next/server";
import { getAccessToken } from "@/app/api/utils/getAccessToken";

export async function POST() {
  try {
    const accessToken = await getAccessToken();

    console.log("Token Refreshed");
    console.log(accessToken);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
