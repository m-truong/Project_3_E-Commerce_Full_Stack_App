# Project 3 - Racquet Dash Store App

---

![Racquet Dash 🎾](https://www.admin.foundationtennis.com/pages/madartmouthindoor/image/TENNIS%20BANNER.png)

---

### Motivation:

Tennis is one of my favorite sports, and I played varsity tennis in high school. After working on the Mongoose Store assignment I decided to continue building upon it and turn it into a tennis racquet e-commerce store app. I was motivated to build an e-commerce app after attending Evan's office hours, and he showed me the Baker's Skateboard website (http://www.bakerskateboards.com) which I thought was very cool. 

### Project Summary:

I did some research and found an external API from Racket Logger (http://help.racketlogger.com/api/) that contained a database of tennis racquet specifications like string tension, racquet stiffness, and racquet weight for tons of professional brand tennis racquets. I used the Racket Logger API in combination with Tennis Warehouse (http://www.tennis-warehouse.com) to build my own Mongoose Schemas/Models of tennis racquet document-objects with price, reviews, descriptions, as well as images. I populated my MongoDB Atlas database with the images I found on Tennis Warehouse and rendered them onto my Racquet Dash store app. A new customer visiting my store app can register for a username and password and add tennis racquets to store their shopping cart and proceed to a checkout page. 

**Link to site:** https://www.racquetdash.herokuapp.com/

## Wireframes

Uploaded my wireframe images to Cloudinary and added the links here.

![Link](https://res.cloudinary.com/mtruong/image/upload/v1609508883/HomePage_g0gyri.png)

![Link](https://res.cloudinary.com/mtruong/image/upload/v1609508883/ShowPage_dov0jz.png)

![Link](https://res.cloudinary.com/mtruong/image/upload/v1609508883/CartPage_wo26bw.png)

### Features:

- I fetched the tennis racquet specs and images from my own MongoDB Atlas database using my Node/Express backend. I was able to render the tennis racquet data using React/JSX. 
- I made my React app a "single-page application" by utilizing 'react-router-dom' and using Route and Link components. This made my app much more efficient because it was able to dynamically render different components based on different routes without having to refresh and rerender the whole page. 
- I tried implementing user authentication using 'jsonwebtoken' and 'bcryptjs'. I have a RegisterPage and LoginPage that uses the window.localStorage browser API to set the username's token in the browser so that they remained logged in and can access their shopping cart.

### Code Example:

I was able to practice 'conditional-rendering' while building  my React store app. I used a lot of ternary-operator expressions and conditional rendering to determine whether a  presentational feature of my app should be displayed or not. The code snippet below is a very good example of when I used "conditional-rendering" in my React app to display a "Add To Cart" button or to display message to the customer that it was "currently out of stock".

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

---

## Lessons/Ongoing Issues:

### Wireframing my projects better

- When I intially brainstormed my project, I didn't quickly plan out how my CartPage would look like.
- 

### Implementing User Authentication correctly 

- I was not able to get my user's to login correctly 
-
- 

## Future Project Improvements:

1. Add more tennis equipment merchandise to display on my store app such as tennis athelitic apparel, tennis shoes, and tennis racquet bags
2. 


### List of Errors:

**ERROR**:

```
app.js:256 Uncaught TypeError: Cannot read property '' of null

```

**RESOLUTION**:

- This TypeError appears because ...


## Credits:

- I want to thank Evan for showing me the Baker's Skateboard website! (http://www.bakerskateboard.com)
