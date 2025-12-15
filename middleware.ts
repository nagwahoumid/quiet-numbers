import { auth0 } from "@/app/lib/auth0";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  return auth0.middleware(req);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};