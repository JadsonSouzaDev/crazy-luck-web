import { useTranslation } from "@/app/i18n";
import GPage from "@/components/GPage";
import { PageProps } from "@/types/props/GenericalPageProps";

export default async function Login({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  return (
    <GPage id="login" t={t}>
      <div></div>
    </GPage>
  );
}
