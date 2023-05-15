import { useTranslation } from "@/app/i18n";
import { getAward } from "@/clients/awards";
import AwardForm from "@/components/Form/AwardForm";
import GImage from "@/components/GImage";
import GPage from "@/components/GPage";
import GSection from "@/components/GSection";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { Award } from "@/types/model/Award";
import { PageProps } from "@/types/props/GenericalPageProps";

type AwardProps = {
  params: { slug: string };
} & PageProps;

export default async function AwardPage({ params: { lng, slug } }: AwardProps) {
  const { i18n } = await useTranslation(lng);

  const award: Award = await getAward(slug);

  const sold = Math.trunc(
    (award.soldNumbers.solded * 100) / award.soldNumbers.total
  );

  return (
    <GPage id="award" uri={`/awards/${slug}`} t={i18n.t}>
      <GSection id="principal">
        <div className="grid md:grid-cols-2">
          <div className="flex py-4 md:p-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl justify-center items-center">
            <div className="flex max-h-56 md:max-h-96 justify-center items-center">
              <GImage
                wClass="w-56 md:w-96"
                hClass="h-56 md:h-96"
                src={award.urlImage}
                alt={award.title}
              />
            </div>
          </div>

          <AwardForm
            award={award}
            soldedPercentage={i18n.t("tickets-left", { tickets: `${sold}%` })}
            labels={{
              byTicket: i18n.t("by-ticket"),
              ticket: i18n.t("ticket"),
              addCart: i18n.t("add-cart"),
              choosePackage: i18n.t("choose-package"),
              chooseQuantity: i18n.t("choose-quantity"),
            }}
          />
        </div>

        <div className="flex flex-col px-2 py-6 md:py-12 gap-8">
          <div className="flex flex-col gap-2">
            <Heading as="h2" align="center">
              {award.title}
            </Heading>

            <Text isParagraph className="text-center">
              {award.shortDescription}
            </Text>
          </div>

          <Text className="text-center">
            {award.description}
          </Text>
        </div>
      </GSection>
    </GPage>
  );
}
