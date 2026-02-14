import { NextRequest } from "next/server";
import { comments } from "./data";

// this async function GET simply returns comments data
/* export async function GET(){
    return Response.json(comments);
} */

/* URL Query parameters:- In this we will see example to filter comments based on query params.
In the context of next.js the type of request is NextRequest this object
 provides convienent methods for managing query paramaters.

*/
export async function GET(request: NextRequest){
    //gran all query parameters using below
    const searchParams = request.nextUrl.searchParams;
    //use get method to fetch specific parameter
    const query = searchParams.get("query");
    const filteredComments = query? comments.filter((Comment)=>Comment.text.includes(query)): comments;

    return Response.json(filteredComments);
}

/* Handling POST Request:- give this in thunder client
POST URL- http://localhost:3000/comments, method POST, body:{
"text":"this is test"
}

-> define POST function and function name must be POST. each request handler gets a web request handler as a parameter.

*/
//define POST function and function name must be POST. each request handler gets a web request handler as a parameter.
export async function POST(request: Request){
    //extract json request object by calling await
    const comment = await request.json();
    //creating new comment object
    const newComment = {
        id: comments.length+1,
        text: comment.text,
    };
    //adding this newComment to comment array
    comments.push(newComment);
    // return new response with 201 status
    return new Response(JSON.stringify(newComment),{
        headers:{"Content-type":"application/json"},
        status:201
    });
}