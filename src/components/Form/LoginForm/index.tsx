import GoogleButton from "@/components/Button/GoogleButton";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { TranslateProps } from "@/types/props/TranslateProps";

const LoginForm = ({ t }: TranslateProps) => {
  return (
    <div className="flex bg-lime-200 w-screen h-screen justify-center items-center">
      <Card className="px-14 py-10 max-w-lg">
        <Card.Header>
          <Heading as="h2">
            {t("signin-title", { app: t("app-name") })}.
          </Heading>
        </Card.Header>
        <Card.Body>
          <div className="flex flex-col py-14 gap-6">
            <GoogleButton>
              <div className="flex justify-between items-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="w-5"
                  alt="google logo"
                />
                {t("signin-social", { provider: "Google" })}
                <div className="w-5"></div>
              </div>
            </GoogleButton>
            <GoogleButton>
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                {t("signin-social", { provider: "e-mail" })}
                <div className="w-5"></div>
              </div>
            </GoogleButton>
          </div>
        </Card.Body>

        <Card.Footer>
          <div className="flex"></div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LoginForm;
