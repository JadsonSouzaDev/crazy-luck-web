import { useTranslation } from "@/app/i18n";
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
      title: "Playstation 5",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage: "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png",
    },

    {
      title: "AirPods Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage: "https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/pt_BR/b9f519195f84950573eea5088a49b964.png",
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
