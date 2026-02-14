import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

/*export async function GET(){
    return new Response("Profile API data");
} */


/* Headers in Route handlers:- we can read request headers in two ways. 
1. We can read headers by using request parameters
2. By using headers function taht next.js provides

*/
export async function GET(request: NextRequest){
    
    //We can read headers by using request parameters
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));
    
   //By using headers function taht next.js provides
    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    // we can handle cookies by using built in cookies
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage","20");
    console.log(cookieStore.get("resultsPerPage"));
    // we can handle cookies by using Set-Cookie and request object to read it
    const theme  = request.cookies.get("theme");
    console.log(theme);
    return new Response("Profile API data",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=darl"
        }
    });
}