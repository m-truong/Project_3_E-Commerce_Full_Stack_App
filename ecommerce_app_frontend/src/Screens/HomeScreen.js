// React
import React from 'react'
// Product Component
import Product from "../Components/Product";
// Static Data
import data from "../data";

function HomeScreen(props) {
    return (
        <div className="row center">
            {
                data.products.map((product) => {
                    return (
                        <Product key={product._id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default HomeScreen
