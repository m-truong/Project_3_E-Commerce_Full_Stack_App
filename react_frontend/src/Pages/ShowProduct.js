// React
import React from 'react'
// Rating Component
import Rating from '../Components/Rating'
// React-Router
import { Link } from 'react-router-dom'
// static array of data
import data from '../data'

function ProductScreen({ routerProps }) {
    // searches array for *condition*
    const productToDisplay = data.products.find((currProduct) => currProduct._id === routerProps.match.params.id)

    if (!productToDisplay) {
        return (
            <div>
                Product Not Currently Available ... 
            </div>
        )
    }

    return (
        <div>
            <Link to="/"> Back To Result</Link>
            {/* 3 custom-columns */}
            <div className="row top">
                {/* product image */}
                <div className="col-2">
                    <img className="large" src={productToDisplay.image} alt={productToDisplay.name} />
                </div>
                {/* description */}
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{productToDisplay.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={productToDisplay.rating}
                                numReviews={productToDisplay.numReviews} />
                        </li>
                        <li>Price: ${productToDisplay.price}</li>
                        <li>Description: <p>{productToDisplay.description}</p>
                        </li>
                    </ul>
                </div>
                {/* action items */}
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>
                                        Price
                                    </div>
                                    <div className="price">
                                        ${productToDisplay.price}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        Status
                                    </div>
                                    <div>
                                        {productToDisplay.countInStock > 0
                                            ? (<span className="success">In Stock</span>)
                                            : (<span className="error">Unavailable</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block"> Add To Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductScreen
