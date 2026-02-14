/* Route Handlers Introduction:-
-> Previously we have learned file based routing.
-> The app router lets you create custom request handlers for your routes using a feture
 called Route Handlers.
-> Unlike page routes, which gives us HTML content, Route Handlers lets us build RESTFul endpotins with complete
 control over the response.
-> Think of it like building a Node + Express app there's no need to setup and configure a seperate server.
-> Route handlers are great when making external API   requests as well. for example if you are building an app that
 needs to talk to third part services route handlers are best for that.
 -> Route handlers run server side, our sensitive info like private keys stays secure and never reaches the browser.
 -> Route Handlers are the equivalent of API routes like page router.
 -> Next.js supports GET. POST, PUT, PATCH, DELETE, HEAD and OPTIONS. if unsupported method is called, Next.js
 will retun a 405 method not allowed response.

 How to create Handler:-
 -> just like page routes route handler must live in app folder. to create a route using Route handler we will use Route.ts  file.
 and to create GET method we use component name as GET naming convention. example create hello/route.ts file.
 -> if you navigate to /hello then Route.ts file response will display it is like page route page.tsx file.
 -> just like page routes we can nest them in folders and sub folders. exampel check dashboard/users

 conflicts between page routes and app routes:-
 -> if you have page.tsx and route.ts in same folder then route.ts file reponse will display in ui.
 for example in profile folder page.tsx and route.ts file is there then if you route to /profile then
 route.ts file response will display to fix this we have to move route.ts to api sub folder.
 -> if you /profile then page.tsx file response will display and if you route /profile/api then route.ts
  file response will display.

*/