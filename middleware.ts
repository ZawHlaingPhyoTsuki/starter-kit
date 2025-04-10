import {
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";
import { KindeAccessToken } from "@kinde-oss/kinde-auth-nextjs/types";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
  },
  {
    isReturnToCurrentPage: true,
    loginPage: "/login",
    publicPaths: ["/public", "/more"],
    isAuthorized: ({ token } : { token: KindeAccessToken}) => {
      // The user will be considered authorized if they have the permission 'eat:chips'
      return token.permissions.includes("eat:chips");
    },
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
