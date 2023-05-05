import { Navbar } from "../Navbar";
import { ReactNode } from "react";
import { TranslateProps } from "@/types/props/TranslateProps";
import Footer from "../Footer";

type GPageProps = {
  id: string;
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
} & TranslateProps;

const GPage = ({ id, t, children, hideNavbar, hideFooter }: GPageProps) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center max-w-6xl mx-auto ${
        !hideNavbar && !hideFooter ? "justify-between" : ""
      }`}
    >
      {!hideNavbar && <Navbar t={t} />}
      <section id={id}>{children}</section>
      {!hideFooter && <Footer t={t} />}
    </main>
  );
};

export default GPage;
