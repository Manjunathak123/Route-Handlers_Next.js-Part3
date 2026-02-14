import { comments } from "../data";

/*getting the specific comment that matches the routing parameter.
to test this in thunder client use below url
http://localhost:3000/comments/1

*/
export async function GET(_request:Request, {params}:{params:Promise<{id:string}>}){
const {id} = await params;
const comment = comments.find((comment)=>comment.id === parseInt(id));
return Response.json(comment);
}

/*PATCH request lets us make partial modification to the resource
test this by using http://localhost:3000/comments/1 and Request as PATCH and by giving body as
{
  "text":"Updated Comment"
}
*/

export async function PATCH(request:Request, {params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const body = await request.json();
    const {text} =  body;
    const index = comments.findIndex((comment)=>comment.id === parseInt(id));
    comments[index].text = text;
    return Response.json(comments[index]);
}

/* DELETE request removes a specified resource.
test this by using http://localhost:3000/comments/1
*/

export async function DELETE(request:Request, {params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const index = comments.findIndex((comment)=>comment.id === parseInt(id));
    //before deleting an index we are storing in a variable to return later.
    const deleteComment = comments[index];
    //removing comment using splice by passing index and 1 means one element
    comments.splice(index,1);
    // returning deleted comment
    return Response.json(deleteComment);
}