import React from "react";
import Product from "./Components/Product";
import data from "./data";
import './App.css';

function App() { 
  return (
    <div className="grid-container">
      <header>
        <div className="row">
          <a className="brand" href="/">Topspin</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => {
              return (
                <Product key={product._id} product={product}/> 
              )
            })
          }
        </div>
      </main>
      <footer className="row center">
        E-Commerce Store App 
      </footer>
    </div>
  );
}

export default App;