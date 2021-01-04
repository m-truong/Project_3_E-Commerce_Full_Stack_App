import React, { useContext } from "react"
import { RacquetMongoDBContext } from "./Context.js";
import { Container } from "react-bootstrap";
import CartRow from "./CartRow.js"

function CartList({ totalPrice, setTotalPrice }) {
    let sum = 0;
    const { customerLoggedIn } = useContext(RacquetMongoDBContext)
    const [currentCustomerLoggedIn,] = customerLoggedIn;
    return (
        <Container fluid className="text-center d-lg-block">
            {/* This maps over the "product_cart" array of the "currentCustomerLoggedIn" state and passes each Racquet object in the array into a "CartRow" component to be rendered inside the "CartList" component. */}
            {currentCustomerLoggedIn.product_cart.map((currRacquet, index) => {
                sum += currRacquet.price;
                // This sets the "totalPrice" state of the parent "CartPage" component to the sum of each "currRacquet.price" property, and lifts the state change back up to the "CartPage" component which displays it. 
                setTotalPrice((Math.round(sum * 100.0)) / 100.0)
                return (
                    <CartRow key={currRacquet._id}
                        currRacquetData={currRacquet} index={index}/>
                )
            })}
        </Container>
    )
}

export default CartList
