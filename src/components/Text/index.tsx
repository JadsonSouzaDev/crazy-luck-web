import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
  fontSize?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold";
};

export const Text = (props: TextProps) => {
  const { children, className = '', fontSize = "sm", fontWeight = "normal" } = props;
  return <span className={`text-${fontSize} font-${fontWeight} ${className}`}>{children}</span>;
};
