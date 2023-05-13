import { Winner } from "@/types/model/Winner";

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/public/winners`;

export const getWinners = async (): Promise<Winner[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Winner[];
};
