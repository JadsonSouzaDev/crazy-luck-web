import { Text } from "@/components/Text";

import { Bungee } from "next/font/google";
import { TFunction } from "i18next";
import { LanguageDropdown } from "./LanguageDropdown";

type NavbarProps = {
  t: TFunction;
};

const noto = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export const Navbar = ({ t }: NavbarProps) => {
  return (
    <nav className="flex flex-col min-w-full p-8">
      <div className="flex justify-center md:hidden">
        <h1
          className={`${noto.className} text-emerald-500 text-3xl font-extrabold  md:text-5xl lg:text-6xl`}
        >
          {t("app-name")}
        </h1>
      </div>
      <div className="hidden md:flex flex-row justify-end items-center gap-2">
        <a href="#">
          <Text>{t("need-help")}</Text>
        </a>

        <LanguageDropdown />
      </div>

      <hr className="border-emerald-500 mt-2 mb-2" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-4 pr-5">
        <div className="hidden md:flex justify-center">
          <h1
            className={`${noto.className} text-emerald-500 text-3xl font-extrabold  md:text-5xl lg:text-6xl`}
          >
            {t("app-name")}
          </h1>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          <a href="#">
            <Text fontSize="sm" fontWeight="bold">
              {t("login-navbar-button")}
            </Text>
          </a>
        </div>
      </div>
    </nav>
  );
};
