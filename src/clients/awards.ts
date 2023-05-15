import { Award } from "@/types/model/Award";

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/public/awards`;

export const getAwards = async (): Promise<Award[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch data, ${API_URL}, ${res.status}`);
  }

  return res.json() as unknown as Award[];
};

export const getAward = async (slug: string): Promise<Award> => {
  const res = await fetch(`${API_URL}/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Award;
};
