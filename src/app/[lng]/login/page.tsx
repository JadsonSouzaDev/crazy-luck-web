import { useTranslation } from "@/app/i18n";
import LoginForm from "@/components/Form/LoginForm";
import GPage from "@/components/GPage";
import GSection from "@/components/GSection";
import { PageProps } from "@/types/props/GenericalPageProps";

const Login = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <GPage id="login" hideFooter hideNavbar t={t}>
      {/* <div>
        <GoogleButton />
      </div> */}
      <GSection id="login" className="md:py-0">
        <LoginForm t={t} />
      </GSection>
    </GPage>
  );
};

export default Login;
