"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const GAuthenticatedRedirect = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect(`/`);
  }
  return null;
};

export default GAuthenticatedRedirect;
