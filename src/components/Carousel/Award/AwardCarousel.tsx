import AwardCarouselItem from "./AwardCarouselItem";
import { Award } from "@/types/model/Award";
import Carousel from "..";
import { TranslateProps } from "@/types/props/TranslateProps";

type CarouseProps = {
  awards: Award[];
} & TranslateProps;

const AwardCarousel = ({ t, awards }: CarouseProps) => {
  const renderizedAwards = awards.map((award, key) => {
    return <AwardCarouselItem key={key} t={t} award={award} />;
  });

  return <Carousel items={renderizedAwards} />;
};

export default AwardCarousel;
