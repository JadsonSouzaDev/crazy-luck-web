import awards from "@/mocks/awards";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(awards);
}
