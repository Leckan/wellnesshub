import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Public paths that don't require authentication
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  // Routes that can be accessed while signed out
  ignoredRoutes: ["/api/webhooks/clerk"],
});

// See https://clerk.com/docs/references/nextjs/auth-middleware
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
