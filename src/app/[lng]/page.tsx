import { useTranslation } from "@/app/i18n";
import Carousel from "@/components/Carousel";
import GPage from "@/components/GPage";
import { PageProps } from "@/types/GenericalPageProps";

export default async function Login({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  return (
    <GPage id="offers" t={t}>
      <div id="carousel" className="flex min-w-full flex-col items-center">
        <Carousel t={t} childrens={[]} />
      </div>
    </GPage>
  );
}
