// React
import React, { useState, useEffect } from 'react'
// Axios
import axios from "axios";
// Product Component
import Product from "../Components/Product";
import Waiting from '../Components/Waiting';
import Error from '../Components/Error';

function HomeScreen(props) {
    // state, stateHandler
    const [products, setProducts] = useState([]);
    // ** Extra-Detail ** for slow-loading 
    const [loading, setLoading] = useState(false);
    // ** Extra-Detail ** for error
    const [error, setError] = useState(false);
    // lifeCycle Hook
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Products-array stored inside here! 
                const { data } = await axios.get("/api/products");
                setLoading(false);
                setProducts(data);
            } catch (err) {
                // note: you can set state to diff 'data-type' boolean==>string
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();
        // empty dependencies-arr // on initial render 
    }, [])
    return (
        <div className="row center">
            {/* chained-ternary-operator else-if expression */}
            { loading
                ? (<Waiting />)
                : error
                    ? (<Error variant="danger">{error}</Error>)
                    : products.map((product) => {
                        return (
                            <Product key={product._id} product={product} />
                        )
                    })
            }
        </div>
    )
}

export default HomeScreen
