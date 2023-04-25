import { TFunction } from "i18next";
import { Award } from "@/types/Award";
import { Text } from "@/components/Text";
import Heading from "../../Heading";

type AwardCarouselItemProps = {
  t: TFunction;
  award: Award;
};

const AwardCarouselItem = ({ t, award }: AwardCarouselItemProps) => {
  return (
    <div className="flex min-w-full flex-col md:flex-row rounded-3xl justify-between bg-gradient-to-r from-lime-600 to-lime-400">
      <div className="flex flex-col md:basis-2/4 p-5 md:p-8 gap-3 md:gap-6 justify-center items-start">
        <Heading as="h1" variant="white">{`${t("title-award-carousel-item")} ${
          award.title
        }`}</Heading>

        <Text isParagraph fontSize="lg" variant="white" fontWeight="light">
          {t("subtitle-award-carousel-item")}
        </Text>

        <div>
          <button className="flex items-center justify-center bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {t("see-details")}
          </button>
        </div>
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
