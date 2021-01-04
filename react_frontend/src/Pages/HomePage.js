import React, { useContext } from 'react'
import { RacquetMongoDBContext } from "../Components/Context.js"
import Product from "../Components/Product";

function HomePage() {
    const { racquetData } = useContext(RacquetMongoDBContext);
    const [racquets] = racquetData;
    return (
        <div className="x-row x-center"> 
            {
                // Maps over every tennis racquet and displays on "HomePage".
                racquets.map((product) => {
                    return (
                        <Product key={product._id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default HomePage