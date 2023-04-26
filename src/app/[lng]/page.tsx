import { useTranslation } from "@/app/i18n";
import Carousel from "@/components/Carousel";
import AwardCarousel from "@/components/Carousel/Award/AwardCarousel";
import GPage from "@/components/GPage";
import { PageProps } from "@/types/GenericalPageProps";

export default async function Login({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  const awards = [
    {
      title: "iPhone 14 Pro Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png",
    },

    {
      title: "iPhone 13 Pro Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png",
    },

    {
      title: "iPhone 12 Pro Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png",
    },
  ];

  return (
    <GPage id="offers" t={t}>
      <div id="carousel" className="flex min-w-full flex-col items-center">
        <AwardCarousel t={t} awards={awards} />
      </div>
    </GPage>
  );
}
