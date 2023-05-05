"use client";

import Button from "..";
import { signIn, useSession } from "next-auth/react";

const GoogleButton = ({children}: {children: React.ReactNode}) => {
  const { data: session } = useSession();

  const disabled = session ? true : false;

  return (
    <Button disabled={disabled} inverted onClick={() => signIn("google")} className="rounded-full py-3">
      {children}
    </Button>
  );
};

export default GoogleButton;
