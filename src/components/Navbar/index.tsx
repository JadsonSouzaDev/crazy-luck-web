import {
  BellAlertIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { TFunction } from "i18next";
import { Bungee } from "next/font/google";
import Text from "@/components/Text";
import { LanguageDropdown } from "./LanguageDropdown";
import Anchor from "../Anchor";

type NavbarProps = {
  t: TFunction;
};

const noto = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export const Navbar = ({ t }: NavbarProps) => {
  return (
    <nav className="flex flex-col min-w-full p-3 md:px-0 justify-center item-center">
      <div className="flex justify-center md:hidden">
        <Anchor href="">
          <h1
            className={`${noto.className} text-lime-500 text-4xl font-extrabold lg:text-5xl`}
          >
            {t("app-name")}
          </h1>
        </Anchor>
      </div>
      <div className="hidden md:flex flex-row justify-end items-center gap-2">
        <Anchor href="/help">
          <Text>{t("need-help")}</Text>
        </Anchor>

        <LanguageDropdown />
      </div>

      <hr className="border-lime-500 mt-2 mb-2" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-4 md:pr-5">
        <div className="hidden md:flex justify-center">
          <Anchor href="">
            <h1
              className={`${noto.className} text-lime-500 text-3xl font-extrabold md:text-4xl lg:text-5xl`}
            >
              {t("app-name")}
            </h1>
          </Anchor>
        </div>
        <div className="flex flex-row justify-between md:justify-end items-center md:gap-12">
          <div className="flex flex-row justify-center items-center gap-7">
            <Anchor href="/notifications">
              <BellAlertIcon className="h-6 w-6 text-black-500 hover:text-lime-500" />
            </Anchor>
            <Anchor href="/favorites">
              <HeartIcon className="h-6 w-6 text-black-500 hover:text-lime-500" />
            </Anchor>
            <Anchor href="/cart">
              <ShoppingCartIcon className="h-6 w-6 text-black-500 hover:text-lime-500" />
            </Anchor>
          </div>
          <Anchor href="/login">
            <Text fontSize="sm">{t("login-navbar-button")}</Text>
          </Anchor>
        </div>
      </div>
    </nav>
  );
};
