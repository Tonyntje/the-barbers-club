import { NextRequest, NextResponse } from "next/server";

// Dummy data
const orders: DataType[] = [];

export async function GET(request: NextRequest) {
  if (request && !validateApiKey(request.headers.get("Authorization"))) {
    return NextResponse.error();
  }

  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    if (data === undefined) NextResponse.error();
    const { id, name, phone, service, dateOfReservation }: DataType = data;

    const newOrder = {
      id,
      name,
      phone,
      service,
      dateOfReservation,
    };

    orders.push(newOrder);
    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.error();
  }
}

function validateApiKey(apiKey: string | null) {
  return apiKey === process.env.CLIENT_KEY;
}

export type DataType = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly service: string;
  readonly dateOfReservation: Date;
};
