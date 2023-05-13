import { Navbar } from "../Navbar";
import { ReactNode } from "react";
import { TranslateProps } from "@/types/props/TranslateProps";
import Footer from "../Footer";
import GAuthRedirect from "../GAuthRedirect";

type GPageProps = {
  id: string;
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  beAuthenticated?: boolean;
  uri: string;
  isFull?: boolean;
} & TranslateProps;

const GPage = ({
  id,
  t,
  children,
  hideNavbar,
  hideFooter,
  beAuthenticated,
  uri,
  isFull
}: GPageProps) => {
  const notFullClass = "lg:px-8 xl:px-0 max-w-6xl";
  return (
    <main
      className={`flex min-h-screen flex-col items-center mx-auto ${
        !hideNavbar && !hideFooter ? "justify-between" : ""
      } ${!isFull ? notFullClass : ''}`}
    >
      {beAuthenticated && <GAuthRedirect uri={uri} />}
      {!hideNavbar && <Navbar t={t} />}
      <section id={id} className="w-full">
        {children}
      </section>
      {!hideFooter && <Footer t={t} />}
    </main>
  );
};

export default GPage;
