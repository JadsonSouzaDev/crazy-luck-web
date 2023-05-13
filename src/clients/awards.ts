import { Award } from "@/types/model/Award";

export const getAwards = async (): Promise<Award[]> => {
  const res = await fetch("http://localhost:3000/api/public/awards");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Award[];
};

export const getAward = async (slug: string): Promise<Award> => {
  const res = await fetch("http://localhost:3000/api/public/awards/" + slug);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Award;
};
