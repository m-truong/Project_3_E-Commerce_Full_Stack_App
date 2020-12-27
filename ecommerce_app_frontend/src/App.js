// 
import React from "react";
// External Components and Screens Imported

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
// 
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
// 

// 
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header>
        <div className="row">
          <a className="brand" href="/">E-Commerce</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" render={(routerProps) => { return <ProductScreen routerProps={routerProps} /> }} />
        <Route exact path="/" component={HomeScreen} />
      </main>
      <footer className="row center">
        E-Commerce Store App
      </footer>
    </div>
  );
}

export default App;