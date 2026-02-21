/* Server Side Rendering Example:- 
Recollecting drawbacks of CSR:-
SEO:- Since content relies on Javascript to render on the client side, search engines ofetn
 struggle to index it properly.
Performance and UX:- Users can suffer from slow load times, as their browsers download, parse and execute Javascript
before seeing any meaningful content.
-> To overcome these drawbacks of client side rendring modern react framework like Next.js move towards server side solutions.

Server side solutions:- lets see how it changes in content delivery.
-> In SSR when request comes in instead of sending a bare HTML file  that needs client side Javascript to
 build the page, the server now handles rendering the complete HTML. this fully formed HTML content goes straight 
 to the browser. since the HTML is already generated on the server the browser can quickly parse and display it,
 giving us faster initial page load times, this server side approach tackles both CSR isses those are 
 1. search engines can now easily index the server-rendered content, solving out SEO problem.
 2. Users see actual HTML content right away instead of staring at blank screen or loading spinner.
-> While SSR makes content visible faster it introduces its own complexity around interactivity. the page can't become fully
interactive until javascript bundle comprising both react itself and your application code has finished downloading and 
executing in the browser. this imporatnt phase know as hydration is where the static HTML page initially served by the server
is brought to live.

Hydration:-
-> During hydration, React takes control in the browser and reconstruct component tree in memory, using the server rendered 
HTML as a blue print.
-> It carefully maps out where all the interactive elements should go, then hooks up in javascript logic.
-> Things like initiliazing application state, adding click and mouseover handlers, and seeting up all the features 
needed for a full interactive user experience.

Server side solutions can be categorized into two main strategies
1. Static Site Generation (SSG)
2. Server Side Rendering(SSR)
-> Static Site Generation happens during build time when you deploy your apllication to the server. This results in pages
that are already rendered and ready to server. its perfect for content that stays relatively stable, like blog posts.
-> SSR on the other hand, renders pages on-demand when users request them, Its ideal for personalized content like 
social media feeds where the content changes based on who's logged in.
-> you will often hear both both approaches collectively referes to server side rendering(SSR).

-> While server side rendering was a significiant improvent over client side rendering, providing faster initial page 
loads and better SEO it came with its own challenges.

Drawbacks of SSR:-
1. you have to fetch everything before you can show anything. components cannot start rendering and then pause or wait while 
data is still being loaded
-> If a component needs to fetch from a database or another source (like an API), this fetching must be completed before the 
server can begin rendering the page. this can delay the servers reposne time to the browser, as the server must finish collecting
all necessary data before any part of the page can be sent to the client.

2. The second issue in SSR is you have to load everthing before you can hydrate anything. For successful hydration, 
where React adds interactivity to the server rendred HTML, the component tree in the browser must exactly match the server
generated component tree.
-> This means that all the Javascript for the components must be loaded on the client before you can start hydrating any 
of them.

3. Third issue with SSR is you have to hydrate everthing before you can start anything. React hydrates the component 
tree in a single pass, meaning once it starts hydrating, it won't stop until it finishes the entire tree.
As a consequence, all components must be hydrated before you can interact with any of them.

these below issues
1. having to load the data for the entire page
2. loading the javascript for the entire page and 
3. hydrating the entire page
at once, create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be 
resolved before moving to the next one.
This becomes really inefficient when some parts of ypur app are slower than others, as is often the case in real world apps.

These limitations let the react team develop new and improved SSR architecture up next we will see this architecture how it 
solves traditional SSR problems.

*/