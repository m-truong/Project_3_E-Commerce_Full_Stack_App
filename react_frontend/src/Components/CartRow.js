import React, { useContext } from 'react'
import { RacquetMongoDBContext } from './Context';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// ===================
// SET DEV/PROD-ENVIRONMENT
// ===================
const production = 'https://racquetdash.herokuapp.com';
const development = 'http://localhost:3000';
const url = (process.env.REACT_APP_ENV === 'development' ? development : production);
console.log(`APP_ENV is ${process.env.REACT_APP_ENV}, so base_url is connecting to ${url}`)

// "CartRow" component renders a row of properties for each tennis racquet passed down as props from the "CartList" parent component.
// The tennis racquet data is destructured and stored into variables "_id", "model", "image", and "price" which are rendered using Bootstrap "Row" and "Col" components.
function CartRow({ currRacquetData, index}) {
    const { _id, model, image, price } = currRacquetData
    const { customerLoggedIn, tokenData } = useContext(RacquetMongoDBContext)
    const [currentCustomerLoggedIn, setCustomerLoggedIn] = customerLoggedIn
    const [token] = tokenData

    // "handleRemoveCart" creates a copy of the "currentCustomerLoggedIn" object and slices out the current tennis racquet using its index inside the "product_cart" array of the "Customer" object.  
    const handleRemoveCart = async (evt) => {
        const { _id, username, password } = currentCustomerLoggedIn
        const tempCart = currentCustomerLoggedIn.product_cart
        // The tennis racquet is sliced out of the "product_cart" array of the "Customer" object.
        const product_cart = [...tempCart.slice(0, index), ...tempCart.slice([index+1])];
        // The "updated" Customer object is sent back to the "PUT" route for updating the "Customer" with a new "product_cart" array. 
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
        // This renders the tennis racquet inside the cart page using Bootstrap "Row" and "Col" components.
        <Row className="cart-rows justify-content-md-center">
            <Col className="col-10 mx-auto col-lg-2">
                <h2>Brand</h2>
                <img className="img-fluid" src={image} style={{ width: "10rem" }} alt={model} />
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <h2>Model</h2>
                <div className="cart-text">
                    <Link to={`/product/${_id}`}>{model}</Link>
                </div>
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <h2>Price</h2>
                <div className="cart-text x-price">${price}</div>
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <h2>Remove</h2>
                <div className="cart-text">
                    <button onClick={handleRemoveCart}><i className="fas fa-trash-alt"></i></button>
                </div>
            </Col>
        </Row>
    )
}

export default CartRow
