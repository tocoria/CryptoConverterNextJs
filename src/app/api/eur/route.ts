import { NextResponse } from "next/server";
import { ars_to_eur } from "../../../utils/convert/convertEUR";

export async function POST(req: Request) {
  const body = await req.json();

  const amount = body.amount;

  const exchange = await ars_to_eur(amount);

  return NextResponse.json(exchange);
}
