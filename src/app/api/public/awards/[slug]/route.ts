import awards from "@/mocks/awards";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const award = awards.find((a) => a.slug === slug);
  return NextResponse.json(award);
}
