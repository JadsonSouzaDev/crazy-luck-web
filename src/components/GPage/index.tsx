import { TFunction } from "i18next";
import { Navbar } from "../Navbar";
import { ReactNode } from "react";

type GPageProps = {
  t: TFunction;
  children: ReactNode;
  hideNavbar?: boolean;
};

const GPage = ({ t, children, hideNavbar }: GPageProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {!hideNavbar && <Navbar t={t} />}
      {children}
    </main>
  );
};

export default GPage;
