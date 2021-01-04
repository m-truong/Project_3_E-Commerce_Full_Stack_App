import React, { useContext, useState } from 'react'
import { RacquetMongoDBContext } from "../Components/Context.js"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import Error from "../Components/Error";
import CartList from "../Components/CartList.js"

function CartPage() {
    const { customerLoggedIn } = useContext(RacquetMongoDBContext)
    const [currentCustomerLoggedIn] = customerLoggedIn;
    // "totalPrice" state is passed down into the "CartList" component so that as the "CartList" maps over the "product_cart" array of the "Customer" object, it sums the "totalPrice" and lifts the state back up to the "CartPage" component.
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <>
            {/* If "Customer's" product_cart property is empty, the "Error" component renders a link to the "HomePage" to add tennis racquets to their cart, else it renders the "CartList" component. */}
            { currentCustomerLoggedIn.product_cart.length === 0 ?
                (<Error>
                    Cart is Empty. <Link to="/">Please Add Items to your cart.</Link>
                </Error>) 
                : (<>
                <Link className="back-btn" to="/"> Back To Index Page of Tennis Racquets </Link>
                    <h1 className="text-center">Currently Selected Tennis Racquets in Your Cart</h1>
                    <Container>
                        <Row>
                            <Col>
                                <CartList totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                            </Col>
                            <Col lg="2" className="" >
                                {/* Renders a Card with "totalPrice" state and "Checkout" button */}
                                <div className="x-card x-card-body" style={{ width: '30rem' }}>
                                    <div className="x-price">
                                        <div className="checkout-text">
                                            Total Price: ${totalPrice}
                                        </div>
                                        {/* "Checkout" button opens a JotForm order form page in a new tab where customers can provide their payment information and order details. */}
                                        <a href="javascript:void( window.open( 'https://form.jotform.com/210008460872146', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "> 
                                        <button className="checkout-text">Checkout!</button> 
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </>)
            }
        </>
    )
}

export default CartPage
