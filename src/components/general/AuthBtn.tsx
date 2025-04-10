"use client";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function AuthBtn() {
  const { getUser, isLoading } = useKindeBrowserClient();
  const user = getUser();

  if (isLoading) {
    return null
  }

  return user ? (
    <div className="flex items-center gap-4">
      <p className="font-medium">{user.given_name}</p>
      <LogoutLink className={buttonVariants({ variant: "secondary" })}>
        Logout
      </LogoutLink>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <LoginLink className={buttonVariants()}>Login</LoginLink>
      <RegisterLink className={buttonVariants({ variant: "secondary" })}>
        Sign up
      </RegisterLink>
    </div>
  );
}
