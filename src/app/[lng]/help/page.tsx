import { useTranslation } from "@/app/i18n";
import GPage from "@/components/GPage";
import { PageProps } from "@/types/GenericalPageProps";

export default async function Help({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  return (
    <GPage id="help" t={t}>
      <div></div>
    </GPage>
  );
}
