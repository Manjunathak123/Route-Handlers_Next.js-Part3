/* Suspense SSR:-
Drawbacks of SSR:-
1. We can't start rendering HTML until all data is fetched on the server.
2. we need to wait for all Javascript to load on the client before hydration can begin.
3. Every component needs to be hydrated before any of them become interactive

These issues create an 'all or noting' waterfall effect that is pretty ineffieient. when especially when some parts of
your app are slower than others.
To address these performance drawbacks of SSR, React team introduced Suspense SSR architecture.
these new architecture allow us to use the <suspense> component to unlock two major SSR features: 
1. HTML streaming on the server 
2. Selective hydration on the client

-> In Next.js, Suspense SSR is an advanced server-side rendering architecture that uses React's <Suspense> component to 
enable streaming HTML and selective hydration. 
-> Unlike traditional SSR, which waits for all data to be fetched before sending any HTML to the client, Suspense SSR
 allows the server to send the page in chunks as soon as parts of it are ready. This significantly improves the user 
 experience and perceived performance. 

Key Concepts
1. Streaming HTML:-
 When a component wrapped in <Suspense> is not ready (e.g., waiting for data fetch), React sends a placeholder
(the fallback prop, like a spinner or skeleton screen) in the initial HTML stream. The rest of the page can be displayed
immediately. Once the data for the suspended component is ready, React streams the additional HTML for that component over
the same connection and injects it into the correct place.

2. Selective Hydration:-
 Hydration is the process where client-side JavaScript attaches event handlers to the server-rendered
HTML, making the page interactive. With Suspense SSR, React can hydrate components as their code becomes available,
even if other parts of the page are still loading or their JavaScript is heavy. This prevents a slow component from blocking
the interactivity of the entire page. 

How to Use in Next.js
In the Next.js App Router, streaming with Suspense is enabled by default for Server Components. 
Automatic Streaming: You can define a special loading.js file within a route segment to automatically wrap the page 
content with a <Suspense> boundary. The loading.js component will serve as the fallback UI.
Manual Boundaries: For more granular control, you can manually wrap specific asynchronous components with <Suspense>.
This is particularly useful for independent components on the same page, allowing them to load in parallel.

// Example of manual Suspense boundary
import { Suspense } from 'react';
import { PostFeed } from './ui/post-feed';
import { Weather } from './ui/weather';

export default function Home() {
  return (
    <section>
      <h2>Welcome</h2>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}

-> when we wrap with <Suspense> react will won't wait for this part and it will render remaining parts and if that suspense component 
is available then it will display that.
-> PostFeed and Weather would be async server components that fetch their own data. They can be streamed to the client 
independently. 
-> By leveraging Suspense SSR, Next.js can show users meaningful content sooner and make the page interactive faster, 
even with slow data fetches

*/