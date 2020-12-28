// React
import React from "react";
// External Component Screens Imported
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
// React-Router
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
// App CSS
import './App.css';

function App() {
  return (
    <div className="grid-container">
       {/* Nav */}
      <header>
        <div className="row">
          {/* Note: actually an <a> tag */}
          <Link className="brand" href="/">Best Deals!</Link>
        </div>
        <div>
          <Link href="/cart">Cart</Link>
          <Link href="/signin">Sign In</Link>
        </div>
        {/* End of Nav */}
      </header>
      <main>
        {/* Routers */}
        <Switch>
          <Route path="/product/:id" render={(routerProps) => { return <ProductScreen routerProps={routerProps} /> }} />
          <Route exact path="/" component={HomeScreen} />
          {/* End of Router */}
        </Switch>
      </main>
      <footer className="row center">
        E-Commerce Store App
      </footer>
    </div>
  );
}

export default App;