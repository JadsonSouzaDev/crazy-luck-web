"use client";

import { useSearchParams } from "next/navigation";
import Button from "..";
import { signIn, useSession } from "next-auth/react";

const LoginButton = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const uri = searchParams.get("callbackUrl") ?? '';

  const disabled = session ? true : false;

  return (
    <Button
      disabled={disabled}
      inverted
      onClick={() => signIn("google", { callbackUrl: uri })}
      className="rounded-full py-3"
    >
      {children}
    </Button>
  );
};

export default LoginButton;
