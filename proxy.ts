import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";

const authenticate = clerkMiddleware(async (auth, request) => {
  // Redirect before streaming can send any workspace HTML.
  if (request.nextUrl.pathname === "/") {
    await auth.protect();
  }
});

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  // Webhooks have no user session; only the handler's signature check authenticates them.
  if (request.nextUrl.pathname === "/api/webhooks/clerk") {
    return NextResponse.next();
  }
  return authenticate(request, event);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
