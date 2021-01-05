import React, { useState, useContext } from 'react'
import { RacquetMongoDBContext } from "../Components/Context.js"
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'

// ===================
// SET DEV/PROD-ENVIRONMENT
// ===================
const production = 'https://racquetdash.herokuapp.com';
const development = 'http://localhost:3000';
const url = (process.env.NODE_ENV ? development : production);
console.log(`NODE_ENV is ${process.env.NODE_ENV}, so base_url is connecting to ${url}`)

function ShowPage({ routerProps }) {
    const { racquetData, customerLoggedIn, tokenData } = useContext(RacquetMongoDBContext);
    const [racquets] = racquetData;
    const [token] = tokenData
    const [currentCustomerLoggedIn, setCustomerLoggedIn] = customerLoggedIn;
    const [qty, setQty] = useState(1)
    // The array-find method searches through the "racquets" state array for a tennis racquet matching the "routerProps.match.params.id" and stores it into "racquetToDisplay". 
    const racquetToDisplay = racquets.find((currRacquet) => currRacquet._id === routerProps.match.params.id)

    if (!racquetToDisplay) {
        return (
            <Loading />
        )
    }

    const addToCartHandler = async (evt) => {
        const { _id, username, password } = currentCustomerLoggedIn
        const tempCart = currentCustomerLoggedIn.product_cart
        // This adds the current tennis racquet being displayed to the product_cart array.
        const product_cart = [...tempCart, racquetToDisplay];
        // The "updated" Customer object is sent back to the "PUT" route for updating the "Customer" with the new "product_cart" array. 
        const body = JSON.stringify({
            _id, username, password, product_cart
        });
        try {
            const response = await fetch(`${url}/api/customers/productcart/${_id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body
            });
            // The "updatedCustomer" object is used to set the "currentCustomerLoggedIn" state and updated in the localStorage. 
            const updatedCustomer = await response.json();
            setCustomerLoggedIn(updatedCustomer);
            window.localStorage.setItem('currentCustomerLoggedIn', updatedCustomer)
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <Link className="back-btn" to="/"> Back To Index Page of Tennis Racquets </Link>
            {/* Columns */}
            <div className="x-row x-top">
                {/* Tennis Racquet Image Column */}
                <div className="x-col-2">
                    <img className="x-large" src={racquetToDisplay.image} alt={racquetToDisplay.model} />
                </div>
                {/* Description and Racquet Model Specifications Column */}
                <div className="x-col-1">
                    <ul>
                        <li>
                            <h1>{racquetToDisplay.model}</h1>
                        </li>
                        <li>
                            <Rating rating={racquetToDisplay.rating} numReviews={racquetToDisplay.numReviews} />
                        </li>
                        <li className="x-price">
                            <span>Price:</span> ${racquetToDisplay.price}
                        </li>
                        <li>
                            <h2>Description:</h2>
                        </li>
                        <li>
                            <p className="show-description">{racquetToDisplay.description}</p>
                        </li>
                        <li>
                            <h2>Racquet Model Specifications:</h2>
                        </li>
                        <li>
                            <span>Head Size: </span>{racquetToDisplay.head_size} in<sup>2</sup>
                        </li>
                        <li>
                            <span>Swing Weight: </span>{racquetToDisplay.swingweight} RDC (Racquet Diagostic Centre)
                        </li>
                        <li>
                            <span>Racquet Weight: </span>{racquetToDisplay.weight} oz
                        </li>
                        <li>
                            <span>Racquet Balance: </span>{racquetToDisplay.balance}
                        </li>
                        <li>
                            <span>String Pattern: </span>{racquetToDisplay.pattern}
                        </li>
                        <li>
                            <span>String Tension: </span>{racquetToDisplay.tension}
                        </li>
                        <li>
                            <span>Stiffness Human: </span>{racquetToDisplay.stiffness_human}
                        </li>
                        <li>
                            <span>Stiffness: </span>{racquetToDisplay.stiffness} RA
                        </li>
                    </ul>
                </div>
                {/* action items */}
                <div className="x-col-1">
                    <div className="x-card x-card-body">
                        <ul>
                            <li>
                                <div className="x-row">
                                    {/* Displays Racquet Price */}
                                    <div className="action-text">
                                        Price
                                    </div>
                                    <div className="x-price">
                                        ${racquetToDisplay.price}
                                    </div>
                                </div>
                            </li>
                            <li> 
                                <div className="x-row">
                                    <div className="action-text">
                                        Status
                                    </div>
                                    <div>
                                        {/* This conditionally renders different colored text base on whether the "racquetToDisplay".countInStock property is > 0. If it's in stock, green text "In Stock" is displayed, else it displays red text "Unavailable" */}
                                        {
                                            racquetToDisplay.countInStock > 0
                                                ? (<span className="x-success">In Stock</span>)
                                                : (<span className="x-error">Unavailable</span>)
                                        }
                                    </div>
                                </div>
                            </li>
                            {/* This conditionally renders a <Link> component to the "LoginPage" if no customer is logged in, or it renders the Quantity selector and "Add To Cart" button if a customer is logged in and the "countInStock" for the tennis racquet is > 0, or it displays red text informing the customer the product is out of stock and to revist the page later.  */}
                            {
                                !currentCustomerLoggedIn.username ? (
                                    <div className="login-text">
                                        <Link to="/login">Please Login to Add to Cart</Link>
                                    </div>
                                ) : currentCustomerLoggedIn && racquetToDisplay.countInStock > 0 ? (
                                    <>
                                        <li>
                                            <div className="x-row">
                                                <div className="action-text">Quantity:</div>
                                                <div>
                                                    {/* Note: I couldn't finish implementing this quantity selector, so it's only used for presentational purposes.*/}
                                                    <select value={qty}
                                                        onChange={e => setQty(e.target.value)}>
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button name="id" value={racquetToDisplay._id} className="x-primary x-block" onClick={evt => addToCartHandler(evt)}> Add To Cart</button>
                                        </li>
                                    </>
                                ) : (
                                            <li className="error-text x-error">
                                                Currently Out of Stock: Please Revisit Racquet Page Later
                                            </li>
                                        )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowPage
