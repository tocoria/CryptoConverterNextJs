import { NextResponse } from "next/server";
import { ars_to_usd } from "../../../utils/convert/convertUSD";

export async function POST(req: Request) {
  const body = await req.json();

  const amount = body.amount;

  const exchange = await ars_to_usd(amount);

  return NextResponse.json(exchange);
}
