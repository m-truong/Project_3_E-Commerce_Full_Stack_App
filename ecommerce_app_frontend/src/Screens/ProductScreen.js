import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'
import data from '../data'

function ProductScreen({ routerProps }) {
    // searches array for *condition*
    const currProduct = data.products.find((currProduct) => currProduct._id === routerProps.match.params.id)

    if (!currProduct) {
        return (
            <div>
                Product Not Found!
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
                    <img className="large" src={currProduct.image} alt={currProduct.name} />
                </div>
                {/* description */}
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{currProduct.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={currProduct.rating}
                                numReviews={currProduct.numReviews} />
                        </li>
                        <li>Price: ${currProduct.price}</li>
                        <li>Description: <p>{currProduct.description}</p>
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
                                        ${currProduct.price}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        Status
                                    </div>
                                    <div>
                                        {currProduct.countInStock > 0
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
