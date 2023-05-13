import winners from "@/mocks/winners";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(winners);
}
