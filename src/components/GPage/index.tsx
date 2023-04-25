import { TFunction } from "i18next";
import { Navbar } from "../Navbar";
import { ReactNode } from "react";

type GPageProps = {
  id: string;
  t: TFunction;
  children: ReactNode;
  hideNavbar?: boolean;
};

const GPage = ({ id, t, children, hideNavbar }: GPageProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-1 md:p-6">
      {!hideNavbar && <Navbar t={t} />}
      <section id={id} className="pt-0 p-3 md:p-8">
        {children}
      </section>
    </main>
  );
};

export default GPage;
