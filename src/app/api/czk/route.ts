import { NextResponse } from "next/server";
import { ars_to_czk } from "../../../utils/convert/convertCZK";

export async function POST(req: Request) {
  const body = await req.json();

  const amount = body.amount;

  const exchange = await ars_to_czk(amount);

  return NextResponse.json(exchange);
}
