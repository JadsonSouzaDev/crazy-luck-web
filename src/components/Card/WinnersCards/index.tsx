import { Winner } from "@/types/model/Winner";
import Card from "..";
import Text from "@/components/Text";
import Heading from "@/components/Heading";
import { formatDate } from "@/utils/date";
import { TranslateProps } from "@/types/props/TranslateProps";
import GImage from "@/components/GImage";

type WinnersCardsProps = {
  winners: Winner[];
} & TranslateProps;

const WinnersCards = ({ winners, t }: WinnersCardsProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row pt-6 justify-center gap-5 pb-7">
      {winners.map((winner, key) => {
        return (
          <Card key={key} className="max-w-xs w-60 bg-opacity-10">
            <Card.Header>
              <div className="flex md:basis-2/4 justify-center py-4 p-2 md:p-4 rounded-lg bg-white">
                <div className="flex max-h-32 justify-center">
                  <GImage
                  wClass="w-32"
                  hClass="h-32"
                    src={winner.award.urlImage}
                    alt={winner.award.title}
                  />
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Heading as="h5" align="center" variant="white">
                {winner.winner.name}
              </Heading>
              <div className="flex pt-3">
                <div className="flex flex-col pr-2 gap-2">
                  <Text variant="white" fontWeight="bold">
                    {t("drawed-ticket")}
                  </Text>
                  <Text variant="white" fontWeight="bold">
                    {t("draw-on")}
                  </Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text variant="white">{winner.ticket.slug}</Text>
                  <Text variant="white">
                    {formatDate(winner.award.drawDate)}
                  </Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default WinnersCards;
