import { ReactNode } from "react";
import { Text } from "@/components/Text";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "base" | "lg" | "xl";
  outlined?: boolean;
  disabled?: boolean;
};

const Button = ({
  children,
  outlined,
  disabled,
  size = "base",
}: ButtonProps) => {
  const commonClass = "rounded";
  const paddingClass = { base: "py-2 px-4", lg: "py-3 px-6", xl: "py-4 px-8" };
  const types = {
    normal: "bg-lime-500 hover:bg-lime-700 text-white",
    disabled: "opacity-50 cursor-not-allowed",
    outlined:
      "bg-transparent hover:bg-lime-700 text-white py-2 px-4 border border-white hover:border-white rounded",
  };

  const customizedClass = `${commonClass} ${paddingClass[size]} ${
    outlined ? types["outlined"] : types["normal"]
  } ${disabled ? types["disabled"] : ""}`;

  return (
    <button className={customizedClass}>
      <Text fontSize={size}>{children}</Text>
    </button>
  );
};

export default Button;
