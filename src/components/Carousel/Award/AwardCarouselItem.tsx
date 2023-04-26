import { TFunction } from "i18next";
import { Award } from "@/types/Award";
import { Text } from "@/components/Text";
import Heading from "../../Heading";
import Button from "@/components/Button";

type AwardCarouselItemProps = {
  t: TFunction;
  award: Award;
};

const AwardCarouselItem = ({ t, award }: AwardCarouselItemProps) => {
  return (
    <div className="flex min-w-full flex-col md:flex-row rounded-3xl justify-between bg-gradient-to-r from-lime-600 to-lime-400">
      <div className="flex flex-col md:basis-2/4 p-5 md:p-8 gap-3 md:gap-6 justify-center items-center md:items-start">
        <Heading className="text-center md:text-left" as="h1" variant="white">{`${t("title-award-carousel-item")} ${
          award.title
        }`}</Heading>

        <Text isParagraph fontSize="lg" variant="white" fontWeight="light">
          {t("subtitle-award-carousel-item")}
        </Text>

        <Button outlined>{t("see-details")}</Button>
      </div>
      <div className="flex md:basis-2/4 justify-center pt-2 p-5 md:p-8">
        <img
          style={{ maxHeight: "350px" }}
          src={award.urlImage}
          alt={award.title}
        />
      </div>
    </div>
  );
};

export default AwardCarouselItem;
