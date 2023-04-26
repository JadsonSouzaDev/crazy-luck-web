import { TFunction } from "i18next";
import { Award } from "@/types/Award";
import { Text } from "@/components/Text";
import Heading from "../../Heading";
import Button from "@/components/Button";
import { randomIntFromInterval } from "@/utils/random";

type AwardCarouselItemProps = {
  t: TFunction;
  award: Award;
};

const AwardCarouselItem = ({ t, award }: AwardCarouselItemProps) => {
  const subtitleNumber = randomIntFromInterval(1, 3);

  return (
    <div className="flex min-w-full flex-col md:flex-row rounded-3xl justify-between bg-gradient-to-r from-lime-600 to-lime-400">
      <div className="flex flex-col md:basis-2/4 p-5 md:p-8 gap-3 md:gap-6 justify-center items-center md:items-start">
        <Heading
          className="text-center md:text-left"
          as="h1"
          variant="white"
        >{`${t("title-award-carousel-item")} ${award.title}`}</Heading>

        <Text isParagraph fontSize="lg" variant="white" fontWeight="light">
          {t(`subtitle-award-carousel-item${subtitleNumber}`)}
        </Text>

        <Button outlined>{t("buy-now")}</Button>
      </div>
      <div className="flex md:basis-2/4 justify-center pt-2 p-5 md:p-8">
        <div className="flex max-h-60 md:max-h-96 justify-center">
          <img
            style={{ maxHeight: "100%" }}
            src={award.urlImage}
            alt={award.title}
          />
        </div>
      </div>
    </div>
  );
};

export default AwardCarouselItem;
