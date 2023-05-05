import { TranslateProps } from "@/types/props/TranslateProps";
import Image from "next/image";

type FooterProps = TranslateProps;

const Footer = ({ t }: FooterProps) => {
  return (
    <div className=" bg-gray-900 w-full lg:rounded-t-3xl">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">{t("download-app")}</h3>
          <p>{t("slogan")}</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
              <Image
              width={100}
              height={100}
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8" alt={"google"}              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">{t("download-on")}</p>
                <p className="text-sm md:text-base">Google Play</p>
              </div>
            </div>
            <div className="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
              <Image
              width={100}
              height={100}
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8" alt={"apple"}              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">{t("download-on")}</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 md:mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Boodega Soluções Digitais, {new Date().getFullYear()}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">{t("about-us")}</span>
            <span className="px-2 border-l">{t("contact-us")}</span>
            <span className="px-2 border-l">{t("privacy-policy")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
