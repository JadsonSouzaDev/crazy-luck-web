"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

type AnchorProps = {
  children: ReactNode;
  onlyCursor?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
};

const Anchor: React.FunctionComponent<AnchorProps> = ({
  onlyCursor,
  isExternal,
  children,
  onClick,
  className,
  href,
}): JSX.Element => {
  const params = useParams();

  if (onlyCursor) {
    return (
      <div onClick={onClick} className={`cursor-pointer hover:text-lime-500 ${className}`}>
        {children}
      </div>
    );
  }

  if (isExternal) {
    return (
      <a href={href} onClick={onClick} target={"_blank"} className={`hover:text-lime-500 ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={`/${params.lng}${href}`}
      onClick={onClick}
      className={`hover:text-lime-500 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
