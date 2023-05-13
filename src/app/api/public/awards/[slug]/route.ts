import awards from "@/mocks/awards";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request, res: NextApiResponse) {
  const splittedUrl = request.url.split("/");
  const slug = splittedUrl[splittedUrl.length - 1];
  const award = awards.find((a) => a.slug === slug);
  return NextResponse.json(award);
}
