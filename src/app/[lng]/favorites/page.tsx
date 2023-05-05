import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useTranslation } from "@/app/i18n";
import GPage from "@/components/GPage";
import { PageProps } from "@/types/props/GenericalPageProps";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Favorites({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/${lng}/login?callbackUrl=/${lng}/favorites`);
  }

  return (
    <GPage id="favorites" t={t}>
      <div>{session?.user?.name}</div>
    </GPage>
  );
}
