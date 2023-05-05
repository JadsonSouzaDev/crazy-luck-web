"use client";

import Anchor from "..";
import Text from "@/components/Text";
import { signOut, useSession } from "next-auth/react";

type LoginLogoutProps = {
  guestText: string;
  loggedText: string;
};

const LoginLogoutAnchor = ({ guestText, loggedText }: LoginLogoutProps) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Text fontSize="sm" className="flex">
        {session.user?.name?.split(" ")[0]},
        <Anchor onlyCursor onClick={() => signOut()} className="ml-1">
          {loggedText}
        </Anchor>
      </Text>
    );
  }

  return (
    <Anchor href="/login">
      <Text fontSize="sm">{guestText}</Text>
    </Anchor>
  );
};

export default LoginLogoutAnchor;
