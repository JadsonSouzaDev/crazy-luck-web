import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/login`}>{t("to-second-page")}</Link>
    </div>
  );
}
