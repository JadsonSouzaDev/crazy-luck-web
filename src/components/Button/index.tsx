"use client"

import { ReactNode } from "react";
import Text from "@/components/Text";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "base" | "lg" | "xl";
  outlined?: boolean;
  disabled?: boolean;
  inverted?: boolean;
  noPadding?: boolean;
  className?: string;
};

const Button = ({
  children,
  outlined,
  disabled,
  inverted,
  noPadding,
  size = "base",
  className,
  onClick
}: ButtonProps) => {
  const commonClass = "rounded";
  const paddingClass = { base: "py-2 px-4", lg: "py-3 px-6", xl: "py-4 px-8" };
  const types = {
    normal: "bg-lime-500 hover:bg-lime-700 text-white",
    disabled: "opacity-50 cursor-not-allowed",
    inverted:
      "bg-transparent hover:bg-lime-500 text-lime-500 py-2 px-4 border border-lime-500 hover:text-white rounded",
    outlined:
      "bg-transparent hover:bg-lime-700 text-white py-2 px-4 border border-white hover:border-white rounded",
  };

  const customizedClass = `${commonClass} ${
    noPadding ? "px-2" : paddingClass[size]
  } ${
    outlined
      ? types["outlined"]
      : inverted
      ? types["inverted"]
      : types["normal"]
  } ${disabled ? types["disabled"] : ""} ${className}`;

  return (
    <button onClick={onClick} className={customizedClass}>
      <Text fontSize={size}>{children}</Text>
    </button>
  );
};

export default Button;
