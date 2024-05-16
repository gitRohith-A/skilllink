import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {
    publicRoutes,
    DEFAULT_LOGIN_REDIRECT,
    authRoutes,
    apiAuthPrefix
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req, res) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute || isAuthRoute) {
        // Allow API authentication routes and explicit auth routes without redirection
        return null;
    }

    const isPublicRoute = publicRoutes.some(route => {
        if (route.endsWith('*')) {
            // If the route ends with '*', match any route that starts with the specified prefix
            const prefix = route.slice(0, -1);
            return nextUrl.pathname.startsWith(prefix);
        }
        return nextUrl.pathname === route;
    });

    if (!isLoggedIn && !isPublicRoute) {
        // Redirect to login page if not logged in and trying to access a non-public route
        return Response.redirect(new URL('/login', nextUrl))
    }

    if (isLoggedIn && nextUrl.pathname === '/login') {
        // Redirect logged-in users trying to access the login page to default redirect
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }

    return null
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
