// 
import React from 'react'
// 
import Product from "../Components/Product";
import data from "../data";

function HomeScreen() {
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
