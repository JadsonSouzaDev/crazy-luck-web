import { useTranslation } from "@/app/i18n";
import SoonAwardCards from "@/components/Card/SoonAwardCards";
import AwardCarousel from "@/components/Carousel/Award/AwardCarousel";
import GPage from "@/components/GPage";
import GSection from "@/components/GSection";
import Heading from "@/components/Heading";
import { PageProps } from "@/types/GenericalPageProps";

export default async function Login({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  const awards = [
    {
      title: "iPhone 14 Pro Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png",
      price: 0.25,
      soldNumbers: {
        solded: 819,
        total: 1000,
      },
    },

    {
      title: "Playstation 5",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage:
        "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png",
      price: 0.15,
      soldNumbers: {
        solded: 815,
        total: 1000,
      },
    },

    {
      title: "AirPods Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      urlImage:
        "https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/pt_BR/b9f519195f84950573eea5088a49b964.png",
      price: 0.1,
      soldNumbers: {
        solded: 980,
        total: 1000,
      },
    },
  ];

  return (
    <GPage id="offers" t={t}>
      <GSection id="carousel" className="mb-6 md:mb-14">
        <AwardCarousel t={t} awards={awards} />
      </GSection>
      <GSection id="campaing-ending" className="bg-gray-100">
        <Heading
          as="h2"
          className="pt-5 font-normal md:text-left"
          align="center"
        >
          {t("campaing-ending-soon")}
        </Heading>
        <SoonAwardCards awards={awards} t={t} />
      </GSection>
    </GPage>
  );
}
