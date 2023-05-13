import { Winner } from "@/types/model/Winner";

export const getWinners = async (): Promise<Winner[]> => {
  const res = await fetch("http://localhost:3000/api/public/winners");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Winner[];
};
