# Project 3 - Racquet Dash Store App

---

![Racquet Dash 🎾](https://www.admin.foundationtennis.com/pages/madartmouthindoor/image/TENNIS%20BANNER.png)

---

### Motivation:

Tennis is one of my favorite sports, and I played varsity tennis in high school. After working on the Mongoose Store assignment I decided to continue building upon it and turn it into a tennis racquet e-commerce store app. I was motivated to build an e-commerce app after attending Evan's office hours, and he showed me the Baker's Skateboard website (http://www.bakerskateboards.com) which I thought was very cool. 

### Project Summary:

I did some research and found an external API from Racket Logger (http://help.racketlogger.com/api/) that contained a database of tennis racquet specifications like string tension, racquet stiffness, and racquet weight for tons of professional brand tennis racquets. I used the Racket Logger API in combination with Tennis Warehouse (http://www.tennis-warehouse.com) to build my own Mongoose Schemas/Models of tennis racquet document-objects with price, reviews, descriptions, as well as images. I populated my MongoDB Atlas database with the images I found on Tennis Warehouse and rendered them onto my Racquet Dash store app. A new customer visiting my store app can register for a username and password and add tennis racquets to  their shopping cart and proceed to a JotForm checkout page. 

**Link to Heroku site:** https://www.racquetdash.herokuapp.com/

## Wireframes

Uploaded my wireframe images to Cloudinary and added the links here.

![Link](https://res.cloudinary.com/mtruong/image/upload/v1609508883/HomePage_g0gyri.png)

![Link](https://res.cloudinary.com/mtruong/image/upload/v1609508883/ShowPage_dov0jz.png)

![Link](https://res.cloudinary.com/mtruong/image/upload/v1609508883/CartPage_wo26bw.png)

### Features:

- I fetched the tennis racquet specs and images from my own MongoDB Atlas database using my Node/Express backend. I was able to render the tennis racquet data using React/JSX. 
- I passed down multiple state and setState handlers deep into my component tree using the "useContext" React Hook. This allowed me to fetch my tennis racquet data from my "App.js" and pass down the data to my HomePage and ShowPage without having to fetch from my MongoDB database for every component.
- I made my React app a "single-page application" by utilizing "react-router-dom" and using Route and Link components. This made my app much more efficient because it was able to dynamically render different components based on different routes without having to refresh and rerender the whole page. 
- I implemented user-authentication with "jsonwebtoken" and "bcryptjs". I have a RegisterPage and LoginPage that uses the window.localStorage browser API to set the username's token in the browser so that they remained logged in and can access their shopping cart.

### Code Example 1:

I used a lot of "conditional-rendering" while building my React store app. I also used a lot of ternary-operator expressions with conditional rendering to determine whether a presentational feature of my app should be displayed or not. The code snippet below is a very good example of when I used "conditional-rendering" in my React app to display the "Add To Cart" button or to display message to the customer that it was currently "out of stock".

```
{
    productToDisplay.countInStock > 0 ? (
        <>
             <li>
                    <button name="id" value={productToDisplay._id}className="primary block" onClick={evt => addToCartHandler(evt)}> Add To Cart</button>
            </li>
        </>
    ) : (
        <>
            <li>
                Currently Out of Stock: Please Revisit Racquet Page Later
            </li>
        </>
    )
}
```

### Code Example 2:

I learned that "useContext" is a very powerful React Hook, and I used it to pass an object with several context-values assigned to properties on the object. This allowed me to pass down multiple state and setState handlers and make them accessible to every React component that needed to mutate the states of my top most App.js file. 

```
// Inside my App.js
<RacquetMongoDBContext.Provider 
    value={ { racquetData: [racquets, setRacquets], customerData: [customerCart, setCustomerCart] } }>
</RacquetMongoDBContext.Provider>

// Inside my ShowPage.js
function ShowPage({ routerProps }) {
    const { racquetData, customerData } = useContext(RacquetMongoDBContext);
    const [racquets, setRacquets] = racquetData; 
    const [customerCart, setCustomerCart] = customerData;
```

### API Reference:

(http://help.racketlogger.com/api/)

### Technologies used:

- Racket Logger API Database (http://help.racketlogger.com/api/)
- Tennis Warehouse (https://www.tennis-warehouse.com/)
- React Router (https://reactrouter.com/web/guides/quick-start)
- Express (https://expressjs.com/en/guide/routing.html)
- Mongoose (https://mongoosejs.com/docs/guide.html)
- PostMan (https://learning.postman.com/docs/getting-started/introduction/)
- MongoDB (https://docs.mongodb.com/cloud/)
- JotForm (https://www.jotform.com)
---

## Lessons/Ongoing Issues:

### Writing cleaner code

- I want to improve my code quality in future projects by  planning them out better. 
- I always write my code and then hope I can refactor it after I'm done, but I always end up running out of time before I can accomplish that.
- Next time, I'll try to actively refactor my project's code as I build it. 

### Understanding window.localStorage browser API 

- I wanted to better understand how to implement the window.localStorage browser API. 
- I'll definitely come back to my Racquet Dash Store App and continue working on understanding how to use it more effectively.


## Future Project Improvements:

1. Add more tennis equipment merchandise to display on my store app such as tennis athelitic apparel, tennis shoes, and tennis racquet bags.
2. Use "socket.io" to build a chat application with customer service inside my store app. 
3. Use Google Maps API to pick delivery addresses on Google Maps. 

### List of Errors:

**ERROR**:

```
Warning: Encountered two children with the same key, `5fecba302585450bf101ad61`. 
Keys should be unique so that components maintain their identity across updates. 
Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

```

**RESOLUTION**:

- This error occurs because a customer's product cart might contain the same model tennis racquet with the same _id.
- A possible fix for this error would be assign a better unique key rather than just using the _id of the tennis racquet. 


## Credits:

- I want to thank Evan for showing me the Baker's Skateboard website! (http://www.bakerskateboard.com)
