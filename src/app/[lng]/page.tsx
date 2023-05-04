import { useTranslation } from "@/app/i18n";
import OnGoingAwardCards from "@/components/Card/OnGoingAwardCards";
import SoonAwardCards from "@/components/Card/SoonAwardCards";
import WinnersCards from "@/components/Card/WinnersCards";
import AwardCarousel from "@/components/Carousel/Award/AwardCarousel";
import GPage from "@/components/GPage";
import GSection from "@/components/GSection";
import Heading from "@/components/Heading";
import { Award } from "@/types/model/Award";
import { PageProps } from "@/types/props/GenericalPageProps";
import { Winner } from "@/types/model/Winner";
import DonationCard from "@/components/Card/DonationCard";

export default async function Login({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  const awards: Award[] = [
    {
      title: "iPhone 14 Pro Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      shortDescription: "Buy now and make it yours!",
      urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png",
      price: 0.25,
      soldNumbers: {
        solded: 819,
        total: 1000,
      },
      maxDrawDate: new Date(),
      drawDate: new Date(),
    },

    {
      title: "Playstation 5",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      shortDescription: "Buy now and make it yours!",
      urlImage:
        "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png",
      price: 0.15,
      soldNumbers: {
        solded: 815,
        total: 1000,
      },
      maxDrawDate: new Date(),
      drawDate: new Date(),
    },

    {
      title: "AirPods Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
      shortDescription: "Buy now and make it yours!",
      urlImage:
        "https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/pt_BR/b9f519195f84950573eea5088a49b964.png",
      price: 0.1,
      soldNumbers: {
        solded: 980,
        total: 1000,
      },
      maxDrawDate: new Date(),
      drawDate: new Date(),
    },
  ];

  const winners: Winner[] = [
    {
      award: awards[0],
      winner: {
        name: "Aristides Mendes",
      },
      ticket: {
        slug: "035154",
      },
    },
    {
      award: awards[1],
      winner: {
        name: "Adalgamir Silva",
      },
      ticket: {
        slug: "065345",
      },
    },
    {
      award: awards[2],
      winner: {
        name: "Jose Matheus",
      },
      ticket: {
        slug: "090910",
      },
    },
    {
      award: awards[2],
      winner: {
        name: "Jose Matheus",
      },
      ticket: {
        slug: "090910",
      },
    },
  ];

  return (
    <GPage id="offers" t={t}>
      <GSection id="carousel" className="mb-6 md:mb-14 lg:px-0">
        <AwardCarousel t={t} awards={awards} />
      </GSection>

      <GSection id="campaing-ending" className="bg-gray-100 mb-14">
        <Heading as="h2" className="pt-5 md:text-left" align="center">
          {t("campaing-ending-soon")}
        </Heading>
        <SoonAwardCards awards={awards} t={t} />
      </GSection>

      <GSection id="on-going-campaign" className="bg-gray-100 mb-14">
        <Heading as="h2" className="pt-5" align="center">
          {t("on-going-deals")}
        </Heading>
        <OnGoingAwardCards awards={awards} t={t} />
      </GSection>

      <GSection
        id="winners"
        className="bg-gradient-to-r from-lime-500 to-lime-600 mb-14"
      >
        <Heading as="h2" variant="white" className="pt-5" align="center">
          {t("recent-winners")}
        </Heading>

        <WinnersCards winners={winners} t={t} />
      </GSection>

      <GSection id="donation" className="bg-gray-100 lg:mb-14">
        <Heading as="h2" className="pt-5" align="center">
          {t("donation-title")}
        </Heading>
        <DonationCard t={t} />
      </GSection>
    </GPage>
  );
}
