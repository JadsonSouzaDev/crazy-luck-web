import variants from "@/constants/variants";
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  isParagraph?: boolean;
  className?: string;
  fontSize?: "xs" | "sm" | "lg" | "xl" | "2xl";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold";
  variant?: variants;
};

export const Text = (props: TextProps) => {
  const sizes = {
    "2xl": "text-xl md:text-2xl lg:text-3xl",
    xl: "text-lg md:text-xl lg:text-2xl",
    lg: "text-sm md:text-lg lg:text-xl",
    sm: "text-sm",
    xs: "text-xs lg:text-sm",
  };

  const {
    children,
    isParagraph = false,
    className = "",
    fontSize = "sm",
    fontWeight = "normal",
    variant = "black",
  } = props;

  const customizedClass = `${sizes[fontSize]} font-${fontWeight} ${className} text-${variant}`;
  if (isParagraph) {
    return <p className={customizedClass}>{children}</p>;
  }
  return <span className={customizedClass}>{children}</span>;
};
