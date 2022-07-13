## Welcome to My First E-Commerce Website

## Goal:

- Practice key concepts of React.js functionality and other in demand skills needed in front-end development
- Sharpen problem solving/critical thinking skills for better user experience
- Practice better error handling, authorization process, and design
- Practice Front-end task mind-set and implement some back-end server functionality for better understand how those two interract
- Practice better security with interact with front-end functionality 

## About:

- E-Commerce website for home furniture with full CRUD functionality
- Fetches the API for loading the products (not from the real stores)
- User can look up the products just like any other furniture store website (i.e City Furniture)
- Authorization is implimented for security Auth0 implemented
- User must Login in order to navigate payment checkout
- Sorting is implemented
- Using netlify dev command for back-end functionality. (i.e authorize user/connect stripe checkout)
- For payment, it does not actually take any payment for practice purposes.

## Challenges
- Created own Logo, used canva for basic styling then have the white background transparent using online converter
- The products page, trouble with filtering the products. Used filter-reducer/usecontext(filter_context), dispatch in filter_context for certain action (shipping, price, color, company, etc) then filter_reducer filters to pull out the result of the filter. Also implemented useEffect functionality while the product's state filter/sort changes. 
- used similar method for keep in track of cart function. When user adds/remove products useEffect will rerenders, updates the cart and amount of products.
- For checkout,  by using netlify dev/stripe back-end functionality, by user login, retrieves the secret-client key to keep intrack of the user on the web. This makes a very simple code as a front-end to implement basic functionality by reading stripe docs to create the payment functionality.
- stripeCheckout.js component uses node file called create-payment-intent.js for post the request to retrieve the secret-clientID, once the proces is done, proceeds to complete the checkout process.

##Run Through Video
![](https://github.com/hookkl21/e-commerce/melloyelloshop.gif
