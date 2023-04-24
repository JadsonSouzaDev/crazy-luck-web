import { useTranslation } from "@/app/i18n";
import { Navbar } from "@/components/Navbar";
import { PageProps } from "@/types/GenericalPageProps";

export default async function Login({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar t={t} />
      <div></div>
    </main>
  );
}
