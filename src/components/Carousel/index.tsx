"use client";

import useTimeout from "@/hooks/useTimeout";
import { useState } from "react";

type CarouseProps = {
  items: JSX.Element[];
};

const Carousel = ({ items }: CarouseProps) => {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(6000);

  useTimeout(() => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1;
      return newIndex > items.length - 1 ? 0 : newIndex;
    });
    setDelay((oldDelay) => {
      return oldDelay + 1;
    });
  }, delay);

  return (
    <div className="flex flex-col items-center">
      {items.map((children, key) => {
        return (
          <div
            className={`${
              index !== key ? "hidden" : ""
            } animate__animated animate__fadeInRight`}
            key={key}
          >
            {children}
          </div>
        );
      })}

      <div className="flex justify-between items-center w-1/2 md:w-1/4 h-3 md:h-5 -translate-y-10">
        {Array.from(Array(items.length).keys()).map((key) => {
          return (
            <div
              key={key}
              onClick={() => setIndex(key)}
              className={`rounded-full bg-white cursor-pointer h-4 md:h-4 w-4 md:w-4 ${
                key === index ? "h-5 md:h-5 w-5 md:w-5" : "opacity-60"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
