"use client";

import Button from "@/components/Button";
import Counter, { COUNTER_MIN_VALUE } from "@/components/Counter";
import Heading from "@/components/Heading";
import PixIcon from "@/components/Icons/Pix";
import Text from "@/components/Text";
import { Award, AwardPrices } from "@/types/model/Award";
import { formatCurrency } from "@/utils/currency";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";

type AwardFormProps = {
  award: Award;
  soldedPercentage: string;
  labels: {
    byTicket: string;
    ticket: string;
    addCart: string;
    choosePackage: string;
    chooseQuantity: string;
  };
};

const AwardForm = ({ soldedPercentage, award, labels }: AwardFormProps) => {
  const [selectedPrice, setSelectedPrice] = useState<AwardPrices>(
    award.prices[0]
  );

  const [quantity, setQuantity] = useState<number>(COUNTER_MIN_VALUE);

  const totalPrice = useMemo(() => {
    return selectedPrice.quantity * selectedPrice.unitPrice * quantity;
  }, [selectedPrice, quantity]);

  const totalTickets = useMemo(() => {
    return selectedPrice.quantity * quantity;
  }, [selectedPrice, quantity]);

  const sold = Math.trunc(
    (award.soldNumbers.solded * 100) / award.soldNumbers.total
  );

  return (
    <div className="flex py-8 pl-12">
      <div className="flex flex-col gap-4 md:gap-10">
        <div className="flex flex-col">
          <Heading as="h2">{award.title}</Heading>
          <Text>{soldedPercentage}</Text>
          <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div
              className="bg-lime-500 h-2.5 rounded-full"
              style={{ width: `${sold}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Text>{labels.choosePackage}</Text>
          <div className="flex gap-3">
            {award.prices.map((price, key) => {
              const selected = price.quantity === selectedPrice.quantity;
              return (
                <div key={key} className="flex flex-col items-center gap-1">
                  <Button
                    onClick={() => setSelectedPrice(price)}
                    inverted={!selected}
                    className="w-32"
                  >
                    {price.quantity} {labels.ticket}
                    {price.quantity > 1 ? "s" : ""}
                  </Button>
                  <Text className="text-xs">
                    R${formatCurrency(price.unitPrice)} {labels.byTicket}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Text>{labels.chooseQuantity}</Text>
          <Counter value={quantity} onChange={setQuantity} />
        </div>

        <div className="flex border border-lime-500 rounded-md p-3 justify-between items-center gap-6">
          <div className="flex justify-center items-end gap-1">
            <Text fontSize="base" className="mb-1 -mr-2 text-gray-400">
              R$
            </Text>
            <Text variant="primary" fontSize="3xl" fontWeight="bold">
              {formatCurrency(totalPrice)}
            </Text>
            <Text>
              / {totalTickets} {labels.ticket}
              {totalTickets > 1 ? "s" : ""}
            </Text>
          </div>

          <Button>
            <div className="flex gap-2">
              <ShoppingCartIcon className="h-5 w-5"></ShoppingCartIcon>{" "}
              {labels.addCart}
            </div>
          </Button>
        </div>

        <div className="flex -mt-6 justify-end">
          <div className="flex w-16">
            <PixIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardForm;
