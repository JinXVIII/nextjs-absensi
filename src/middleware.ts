import { NextRequest, NextResponse } from "next/server";

export const protectedPaths = ["/dashboard"];
export const publicPaths = ["/login", "/register"];

export function middleware(request: NextRequest){
    const token = request.cookies.get("token")?.value;
    const path = request.nextUrl.pathname;
    const isProtected = protectedPaths.some((protectedPaths) => path.startsWith(protectedPaths));
    const isPublic = publicPaths.some((publicPaths) => path.startsWith(publicPaths));

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (isPublic && token) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
}

export const matcher = [
    "/dashboard",
    "/login",
    "/register"
]