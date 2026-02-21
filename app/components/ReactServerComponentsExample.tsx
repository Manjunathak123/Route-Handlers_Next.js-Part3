/* React Server components:- we have seen how react rendering has evolved from CSR to SSR and then to suspense SSR. while each step 
brought improvement it also introduced new challenges. Suspense with SSR brought us closer to a seamless rendering experience
but we still struggle large bundle sizes causing excessive downloads for users and Unnecessary hydration delaying interactivity
and Heavy cleint -side processing leading to poorer performnce. to overcome these challenges we need more than incremental step.
that brings us React server components

React Server components:-
-> React Server components(RSC) represents a new architecture designed by the React team.
-> This approach leverages the strengths of both server and client environments to optomize effeciency, load times and 
interactivity.
-> The architecture introduces a dual-component model differentiating between client component and Server components.
-> This distinction is based not on the components's functionality but rather on their execution environment and the specific
systmes they are designed to interact with.

1. Client components:- 

-> Client components are the familiar React components we have been using previously.
-> They are typically rendered on the client side(CSR) but they can also be rendered to HTML on the server(SSR), allowing users 
to immediately see the page's HTML content rather than blank screen.
-> It might confusing when we say clent components rendered on server but it is best understood by optimization strategy.
-> These components primarly operate on the client but can (and should) also run once on the server for better performance.
-> Client components have full access to the client environment, such as the browser, allowing them to use state, effects and 
event listeners for handling interactivity.
-> They can also access browser exclusive APIs like geolocation or localStorage, allowing you to build UI for soecific
use cases.
-> In fact, the term "client component" donesn't signify anything new; it simply helps differentiate these components
 from the newly introduced server components.

 2. Server Components:-
 -> Server components represent a new type of React component specifically designed to operate exclusively on the server.
 -> And unlike client components, their code stays on the server and is never downloaded to the client.
 -> This design choice offers multiple benefits to react application.

 Benefits of Server Components:-

 1. Smaller bundle sizes:-
 -> Since server components stay on the server, all their dependencies stay there too.
 -> This is fantastic for users with slower internet connections or less powerful devices since they don't need to download,
 parse and execute that javascript.
 -> Plus there's no hydration step, making your app load and become interactive faster.

 2. Direct access to server side resources:-
 -> Server components can talk directly to database and file systems, making data fetching super effecient without any
 client side processing.
-> they use servers power and proximity to data sources to manage compute intesive rendering tasks.

3. Enhanced Security:- 
-> Since server components run only on the server, sensitive data and logic - like API keys and tokens never leave
the server.

4. Improved Data fetching:- 
-> Server components allow you to move data fetching to the server, closer to your data source.
-> This can improve performace by reducing time it takes to fetch data needed for rendering and the number of request
 the client needs to make.
 
 5. Caching:-
 -> when ypu render on the server, you can cache the results and reuse them for different users and request.
 -> This means better performance and lower costs since you are not re-rendering and re fetching data all the time.

 6. Fatser Initial page load and First contentful paint:-
 -> by generating HTML on the server, users see your content immediately - no waiting for javascript to download and
 execute.
 
 7. Improved SEO:-
 -> search engine bots can easily read the server rendered HTML, making your page more indexable.
 
 8. Efficient streaming:-
 -> Server componets can split the rendering process into chunks that stream to the client as they are ready.
 -> This means user start seeing content faster instead of waiting for the entire page to render on the server.

 -> In the React Server component architecture Server components handle data fetching and static rendering, while client
 components take care of rendering the interactive elements.
 -> The beauty of this setup is that you get the best of both server and client rendering while using a sinle launguage,
 framework, and set of APIs.
 -> React server components offer a new approach to building react apps by separating components into two : Server Components 
 and client components 
 -> Server components run exclusively on the server - they fetch data and prepare content without sending code to the browser 
 -> This makes your app faster because users download less code
 -> However they can't handle any interactions
 -> Client components, on the other hand, run in the browser and manage all inreractive parts like clicks and typing 
 -> They can also get an initial server renders for faster page loads
  How it connecte to Next.js:-
 -> The app router in Next.js built entirely on the RSC architecture. All these bebefits we have discussed? they are already
 built into the latest version of Next.js
 -> Understanding the evolution of React rendering provides the foundation needed for you to grasp what we are about to
  explore as we dive deeper into next.js.  
*/