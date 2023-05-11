import { useTranslation } from "@/app/i18n";
import GPage from "@/components/GPage";
import { PageProps } from "@/types/props/GenericalPageProps";

export default async function Help({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  return (
    <GPage id="help" t={t} uri="/help">
      <div></div>
    </GPage>
  );
}
