import { Award } from "@/types/Award";
import Text from "@/components/Text";
import Card from "..";
import Heading from "@/components/Heading";
import { TFunction } from "i18next";
import Button from "@/components/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

type SoonAwardCardsProps = {
  awards: Award[];
  t: TFunction;
};

const SoonAwardCards = ({ awards, t }: SoonAwardCardsProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row pt-6 justify-center gap-5">
      {awards.map((award) => {
        return (
          <Card>
            <Card.Header>
              <div className="flex md:basis-2/4 justify-center py-4 p-2 md:p-4 bg-gradient-to-r from-lime-500 to-lime-300 rounded">
                <div className="flex max-h-32 justify-center">
                  <img
                    style={{ maxHeight: "100%" }}
                    src={award.urlImage}
                    alt={award.title}
                  />
                </div>
              </div>
              <div className="flex justify-end items-center pt-1">
                <Text fontWeight="bold" fontSize="xs" className="text-red-500">
                  {t("ends-today")}
                </Text>
              </div>
            </Card.Header>
            <Card.Body>
              <Heading as="h4" align="center">
                {award.title}
              </Heading>
              <div className="flex justify-center items-end gap-1">
                <Text className="mb-1 text-gray-500">R$</Text>
                <Text variant="primary" fontSize="xl" fontWeight="bold">
                  {award.price}
                </Text>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="flex justify-center">
                <Button>
                  <div className="flex justify-center items-center gap-2">
                    <ShoppingCartIcon className="h-6 w-6 " /> Add to cart
                  </div>
                </Button>
              </div>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default SoonAwardCards;
