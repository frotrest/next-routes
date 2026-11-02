// import { NextRequest, NextResponse } from "next/server";

// const PROTECTED_ROUTES = ["/dashboard", "/settings", "/profile"];
// const SUPPORTED_LOCALES = ["uk", "en"];
// const DEFAULT_LOCALE = "uk";
// const USER_LOCALE = "user_locale";

// export default function middleware(request: NextRequest) {
//     const { pathname } = request.nextUrl;
//     const response = NextResponse.next();
//     let locale = request.cookies.get(USER_LOCALE)?.value;

//     if (!locale || !SUPPORTED_LOCALES.includes(locale)) {
//         locale = DEFAULT_LOCALE;

//         response.cookies.set(USER_LOCALE, locale, {
//             path: "/",
//             sameSite: "lax",
//             maxAge: 60 * 60 * 24
//         })
//     }

//     response.headers.set("x-user-locale", locale);

//     const isProtectedRoute = PROTECTED_ROUTES.some((item) => pathname.startsWith(item));
//     const token = request.cookies.get("token")?.value;
//     const isAuth = token?.length === 26;
//     if (isProtectedRoute && !isAuth) {
//         const loginURL = new URL("/login", request.url);
//         loginURL.searchParams.set("redirect", pathname);

//         return NextResponse.redirect(loginURL);
//     }
//     if(pathname === "/login" && isAuth) {
//         const redirect = request.nextUrl.searchParams?.redirect ?? "/dashboard";
//         const newRoute = new URL(redirect, request.url);

//         return NextResponse.redirect(newRoute);
//     }

//     return response;
// }

// export const config = {
//     matcher: [
//         '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//     ],
// };
