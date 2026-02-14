/* Rendering Example:- Rendering is the process of transforming the component code you write into user interfaces 
that users can see and interact with.
-> In Next.js, the tricky part to builiding a performant application is figuring out when and where this transformation 
should happen.
1. client side rendering(CSR):- client means browser
2. Server Side Rendering(SSR)

server side solutions
1. Static Site Generation.
SSG happens during build time when you deploye your application to the server. this results in pages that are already
rendered and ready to serve. its perfect for content that stays relatively stable like blog posts.
-> SSR, on the other hand renders pages on-demand when users request them.  its ideal for personalized content like 
social media feeds where the HTML changes based on who's logged in.
-> Server-side rendering was a significant improvement over client side rendering providing initial page loads and better SEO.

Drwabacks of SSR:-
1. you have to fetch everything before you can show anything.
-> Components cannot start rendering and then pause or wait while data is still being loaded.
-> If a component needs to fetch data froma  databse or another source like an api, this fetching must be completed before the 
server can begin rendering the page.
-> this can delay the server resposne time to the broswer, as the server must finish collecting all necessary data before any 
part of the page can be sent to the client.

Suspense SSR:- 


*/