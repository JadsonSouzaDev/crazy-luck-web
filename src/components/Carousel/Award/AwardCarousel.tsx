import { TFunction } from "i18next";
import AwardCarouselItem from "./AwardCarouselItem";
import { Award } from "@/types/Award";
import Carousel from "..";

type CarouseProps = {
  t: TFunction;
  awards: Award[];
};

const AwardCarousel = ({ t, awards }: CarouseProps) => {
  const renderizedAwards = awards.map((award, key) => {
    return <AwardCarouselItem key={key} t={t} award={award} />;
  });

  return <Carousel items={renderizedAwards} />;
};

export default AwardCarousel;
