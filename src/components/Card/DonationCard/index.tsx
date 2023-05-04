import { TranslateProps } from "@/types/props/TranslateProps";
import Card from "..";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Image from "next/image";
import profilePic from "../../../../public/static/logo-ong.jpeg";

type DonationCardProps = TranslateProps;

const DonationCard = ({ t }: DonationCardProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row pt-6 justify-center gap-5 pb-7">
      <Card className="max-w-xl">
        <Card.Body>
          <div className="flex p-4">
            <div className="flex flex-col gap-7">
              <Heading as="h4" className="font-normal">{t("donate-our-partner")}</Heading>
              <div>
                <Button>{t("learn-more")}</Button>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <Image
                width={200}
                style={{ maxHeight: "100%" }}
                src={profilePic}
                alt="donate"
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DonationCard;
