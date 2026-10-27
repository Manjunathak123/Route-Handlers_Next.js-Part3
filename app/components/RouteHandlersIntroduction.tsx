/* Route Handlers Introduction:-
-> Previously we have learned file based routing.
Note: File-based routing in Next.js is a replacement for React Router
-> The app router lets you create custom request handlers for your routes using a feture
 called Route Handlers.
-> Unlike page routes, which gives us HTML content, Route Handlers lets us build RESTFul endpotins with complete
 control over the response.
-> Think of it like building a Node + Express app there's no need to setup and configure a seperate server.
-> Route handlers are great when making external API requests as well. for example if you are building an app that
 needs to talk to third part services route handlers are best for that.
 -> Route handlers run on server side, our sensitive info like private keys stays secure and never reaches the browser.
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

Does file based routing in next js is replacement of React router or route handler:-

Note: File-based routing in Next.js is a replacement for React Router, not Route Handlers.
 In fact, Route Handlers are actually a part of Next.js's file-based routing system.
To understand how these pieces fit together, it helps to look at what they do:

1. File-Based Routing vs. React Router (The UI Replacements)

Both of these manage the user-facing pages and navigation of your application.
• React Router: You must install it manually and define your UI routes explicitly in code using components like
 <Route path="/about" element={<About />} />.
• Next.js File-Based Routing: You don't write routing configurations. The framework automatically maps your folder 
structure inside the app/ directory directly to URLs (e.g., creating app/about/page.tsx automatically
 creates the /about webpage).

2. What is a Route Handler? (The Backend Piece)

A Route Handler is not a routing library; it is a specific feature within Next.js file-based routing used to build
 custom request handlers for a given route (like building a REST API).
• Instead of serving a UI page using a page.tsx file, you create a route.ts file.
• Inside route.ts, you export standard backend functions like GET, POST, PUT, or DELETE to return JSON data, 
handle webhooks, or communicate with a database.


For creating rest apis which concept we will use in next js 15:-

To create REST APIs in Next.js 15, you will use the Route Handlers concept within the App Router structure.
Route Handlers replace the older "API Routes" (from the Pages Router) and allow you to create custom request handlers for a given route using the Web Request and Response APIs.

Key Mechanics of Next.js 15 Route Handlers

• File Naming: You must define your endpoints in a route.ts (or .js) file.
• Directory Structure: These files are placed inside the app/ directory. The folder structure determines the URL path (e.g., app/api/users/route.ts handles requests to /api/users).
• HTTP Methods: Instead of writing a single default function with a switch(req.method) statement, you directly export named async functions matching the standard HTTP methods (GET, POST, PUT, PATCH, DELETE, etc.) within the same file.

Basic Example (app/api/users/route.ts)

typescript
import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests to /api/users
export async function GET(request: NextRequest) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  return NextResponse.json(users);
}

// Handle POST requests to /api/users
export async function POST(request: NextRequest) {
  const body = await request.json(); // Parse incoming JSON body
  
  // Perform your database creation logic here...
  
  return NextResponse.json({ message: 'User created successfully', data: body }, { status: 201 });
}
*/