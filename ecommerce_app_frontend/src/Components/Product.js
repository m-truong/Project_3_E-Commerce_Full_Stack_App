// React
import React from 'react'
// Rating Component
import Rating from './Rating'

export default function Product({ product }) {
    return (
        // Card 
        <div key={product._id} className="card">
            {/* Image */}
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </a>
        {/* Card-Body */}
            <div className="card-body">
                {/* Product Name  */}
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                {/* Rating Component */}
                <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                />
                {/* Product Price */}
                <div className="price">${product.price}</div>
            </div>
        </div>
    )
}
