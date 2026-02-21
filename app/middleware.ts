import { NextRequest, NextResponse } from "next/server";

/* this function redirects to home page when /profile accesed
-> one more approach is conditional approach
*/
export function middleware(request: NextRequest){
    //this function redirects to home page when /profile accesed
    return NextResponse.redirect(new URL("/", request.url));

    //one more approach is conditional approach
    /* if(request.nextUrl.pathname === "/profile"){
        return NextResponse.rewrite(new URL("/hello", request.nextUrl))
    }*/

        //use of cookies and headers in middleware
        /*const response = NextResponse.next();
        const themePreference = request.cookies.get("theme");
        if(!themePreference){
            response.cookies.set("theme", "dark");
        }

        response.headers.set("custom-header","custom-value");
        return response;*/
        +
}

// apply the above url only when /profile hits
export const config = {
    matcher: "/profile",
}