import React from 'react'
 
function Rating({ rating, numReviews }) {
    return ( 
        <div className="x-rating">
            {/* FontAwesome Stars */}
            {/* Each FontAwesome Star conditionally renders a "full-star", "half-star", or no star, based on the tennis racquet model's rating field-property between 0-5. */}
            <span>
                <i className={
                    rating >= 1
                        ? "fa fa-star"
                        : rating >= 0.5
                            ? "fa fa-star-half-o"
                            : "fa fa-start-o"}>
                </i> 
            </span>
            <span>
                <i className={
                    rating >= 2
                        ? "fa fa-star"
                        : rating >= 1.5
                            ? "fa fa-star-half-o"
                            : "fa fa-start-o"}>
                </i>
            </span>
            <span>
                <i className={
                    rating >= 3
                        ? "fa fa-star"
                        : rating >= 2.5
                            ? "fa fa-star-half-o"
                            : "fa fa-start-o"}>
                </i>
            </span>
            <span>
                <i className={
                    rating >= 4
                        ? "fa fa-star"
                        : rating >= 3.5
                            ? "fa fa-star-half-o"
                            : "fa fa-start-o"}>
                </i>
            </span>
            <span>
                <i className={
                    rating >= 5
                        ? "fa fa-star"
                        : rating >= 4.5
                            ? "fa fa-star-half-o"
                            : "fa fa-start-o"}>
                </i>
            </span>
            {/* Number of Reviews */}
            <span>
                {`${numReviews} reviews`}
            </span>
        </div>
    )
}

export default Rating