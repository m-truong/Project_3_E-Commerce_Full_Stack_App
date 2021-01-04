import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default function Product({ product }) {
    return (
        // Card 
        <div key={product._id} className="x-card">
            {/* Image */}
            {/* Tennis Racquet image is a link that renders the "ShowPage" using the "product._id" as the query-parameter. */}
            <Link to={`/product/${product._id}`}>
                <img className="x-medium" src={product.image} alt={product.model} />
            </Link>
            {/* Card-Body */}
            <div className="x-card-body">
                {/* Product Name is also a link that renders the "ShowPage". */}
                <Link to={`/product/${product._id}`}>
                    <h2 className="x-card-link">{product.model}</h2>
                </Link>
                {/* Rating Component */}
                <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                />
                {/* Product Price */}
                <div className="x-price">${product.price}</div>
            </div>
        </div>
    )
}
