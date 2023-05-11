"use client";

import { redirect, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const GAuthRedirect = ({ uri }: { uri: string }) => {
  const { status } = useSession();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];

  if (status === "unauthenticated") {
    redirect(`/${currentLang}/login?callbackUrl=/${currentLang}${uri}`);
  }
  return null;
};

export default GAuthRedirect;
