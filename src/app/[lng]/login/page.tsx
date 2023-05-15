import { useTranslation } from "@/app/i18n";
import LoginForm from "@/components/Form/LoginForm";
import GAuthenticatedRedirect from "@/components/GAuthenticatedRedirect";
import GPage from "@/components/GPage";
import GSection from "@/components/GSection";
import { PageProps } from "@/types/props/GenericalPageProps";
import { Suspense } from "react";

function LoginFormFallback() {
  return <>login form</>;
}

const Login = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <GPage id="login" hideFooter hideNavbar t={t} uri="/login" isFull>
      <GAuthenticatedRedirect />
      <Suspense fallback={<LoginFormFallback />}>
        <GSection id="login-form">
          <LoginForm t={t} />
        </GSection>
      </Suspense>
    </GPage>
  );
};

export default Login;
