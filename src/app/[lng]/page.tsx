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
import { getAwards } from "../../clients/awards";
import { getWinners } from "../../clients/winners";
import {default as mockAwards} from "@/mocks/awards";
import {default as mockWinners} from "@/mocks/winners";

export default async function Home({ params: { lng } }: PageProps) {
  const { t, i18n } = await useTranslation(lng, "translation");
  // const awards: Award[] = await getAwards();
  // const winners: Winner[] = await getWinners();

  const awards: Award[] = mockAwards;
  const winners: Winner[] = mockWinners;

  return (
    <GPage id="offers" t={t} uri="/">
      <GSection id="carousel" className="p-3 mb-6 md:mb-14 lg:px-0">
        <AwardCarousel t={t} awards={awards} />
      </GSection>

      <GSection id="campaing-ending" className="bg-gray-100 mb-14">
        <Heading as="h2" className="pt-5 md:text-left md:pl-11" align="center">
          {i18n.t("campaing-ending-soon")}
        </Heading>
        <SoonAwardCards awards={awards} t={t} />
      </GSection>

      <GSection id="on-going-campaign" className="bg-gray-100 mb-14">
        <Heading as="h2" className="pt-5" align="center">
          {i18n.t("on-going-deals")}
        </Heading>
        <OnGoingAwardCards awards={awards} t={t} />
      </GSection>

      <GSection
        id="winners"
        className="bg-gradient-to-r from-lime-500 to-lime-600 mb-14"
      >
        <Heading as="h2" variant="white" className="pt-5" align="center">
          {i18n.t("recent-winners")}
        </Heading>

        <WinnersCards winners={winners} t={t} />
      </GSection>

      <GSection id="donation" className="p-3 lg:px-0 bg-gray-100 lg:mb-14">
        <Heading as="h2" className="pt-5" align="center">
          {i18n.t("donation-title")}
        </Heading>
        <DonationCard t={t} />
      </GSection>
    </GPage>
  );
}
