import { ReactNode } from "react";
import AwardCarouselItem from "./Award/AwardCarouselItem";
import { TFunction } from "i18next";

type CarouseProps = {
  t: TFunction;
  childrens: ReactNode[];
};

const Carousel = ({ t }: CarouseProps) => {
  const awards = [
    {
      title: "iPhone 13 Pro Max",
      description:
        "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
        urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png"
    },
  ];
  return <AwardCarouselItem t={t} award={awards[0]} />;
};

export default Carousel;
