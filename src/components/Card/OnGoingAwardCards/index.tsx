import { Award } from "@/types/Award";
import { TFunction } from "i18next";
import Card from "..";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { formatCurrency } from "@/utils/currency";
import Button from "@/components/Button";
import {
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { formatDate } from "@/utils/date";

type OnGoingAwardCardsProps = {
  awards: Award[];
  t: TFunction;
};

const OnGoingAwardCards = ({ awards, t }: OnGoingAwardCardsProps) => {
  return (
    <div className="grid items-center md:flex-row pt-6 justify-center gap-5">
      {awards.map((award, key) => {
        return (
          <Card key={key} className="w-80 md:w-auto md:gap-1">
            <Card.Body>
              <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 md:gap-10">
                <div className="flex max-h-48 justify-center">
                  <img
                    className="my-auto"
                    style={{ maxHeight: "100%" }}
                    src={award.urlImage}
                    alt={award.title}
                  />
                </div>

                <div className="flex flex-col p-4 items-center md:items-start justify-between">
                  <Heading as="h5">{award.title}</Heading>
                  <Text>{award.shortDescription}</Text>

                  <div className="flex items-end gap-1 pt-3">
                    <Text className="mb-1 -mr-2 text-gray-400">R$</Text>
                    <Text variant="primary" fontSize="2xl" fontWeight="bold">
                      {formatCurrency(award.price)}
                    </Text>
                  </div>

                  <div className="flex justify-center pt-2 md:pt-4">
                    <Button>
                      <div className="flex justify-center items-center gap-2">
                        <ShoppingCartIcon className="h-6 w-6 " /> {t("buy-now")}
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="hidden md:flex flex-col p-4 justify-between items-end">
                  <div className="hidden md:flex flex-col bg-gradient-to-r from-yellow-300 to-yellow-500 w-16 h-16 rounded-full justify-center items-center">
                    <Text>{t("left")}</Text>
                    <Text fontSize="lg" fontWeight="bold" className="-mt-1">
                      {award.soldNumbers.total - award.soldNumbers.solded}
                    </Text>
                  </div>

                  <div className="flex gap-2">
                    <Button noPadding inverted>
                      <HeartIcon className="h-5 w-4" />
                    </Button>
                    <Button noPadding inverted>
                      <ShareIcon className="h-5 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="flex justify-center md:justify-end">
                <Text variant="grayer" fontSize="xs">{`${t(
                  "max-draw-date"
                )}: ${formatDate(award.maxDrawDate)}`}</Text>
              </div>
            </Card.Footer>
          </Card>
        );
      })}
      <div className="flex justify-center pt-4">
        <Button inverted className="md:px-6">
          {t("see-more")}
        </Button>
      </div>
    </div>
  );
};

export default OnGoingAwardCards;
