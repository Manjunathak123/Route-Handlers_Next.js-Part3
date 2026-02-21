/* Client Side Rendering(CSR) Example:-
Rendering is the process of transforming the component code you write into user interfaces 
that users can see and interact with.
-> In Next.js, the tricky part of builiding a performant application is figuring out when and where this transformation 
should happen.
-> Before we go to rendering in Next.js, we will go back to React and see how rendering will happen,
 since next.js built on top of React understanding React rendering model is necessary.
 How rendering handles in React:-
 -> React primarly used in building single page applications. when a client visited a website the server would send back
 a single html page. this page contain sipmle div tag and link to javascript file. this conatins bundle.js which is power house
 which conatins everything which are react library, components code and everything need to your application, the 
  browser would download this as soon as html processed, once the browser downloads all the javascripts it will get to generate
  html. it will inject into the DOM right there that is where you finally see user interface.(see the doc image)
  This whole approach - where your browser(the client) transforms react components into what you see on screen - thats
   what we called client-side rendering.
 ->  CSR became super popular for SPAs and everyone was using it.
 Drawbacks of CSR:-
 this drawbacks in this approach are
 1. SEO:- the first big issue was SEO. when search engines crawl(visiting) your site, they're mainly looking at HTML content.
  But CSR, your initial HTML is basically jsut an empty div tag which is  not great for saerch engines trying to 
  figure out what your page about.
 ->  When you have lot of nested components making API calls, the meaningful content might load too slowly for search 
 engines to even catch it
 2. Perofrmance and User Experience:- the second issue was performance and user experience.
 -> think about in client side rendering your browser(the client) has to do everything that is fetching data, 
 build UI, make everything interactive... thats's a lot of work!
 -> User often end up staring at blank screen or a loading spinner while all this happens.
 -> Every time you add a new feature to your app, that javascript budle gets bigger, making user wait even more.this 
 is especially frustrating for people with solwer internet connections.
 -> while CSR was indeed game changing gives us a interactive web app we use today developer need better solution for SEO and
 Performance that is where we will use SSR.


*/