// React
import React from "react";
// External Component Screens Imported
import Home from "./Pages/Home";
import ShowProduct from "./Pages/ShowProduct";
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
          <Link className="brand" to="/">Best Deals!</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
        {/* End of Nav */}
      </header>
      <main>
        {/* Routers */}
        <Switch>
          <Route path="/product/:id" render={(routerProps) => { return <ShowProduct routerProps={routerProps} /> }} />
          <Route exact path="/" component={Home} />
          {/* End of Router */}
        </Switch>
      </main>
      <footer className="row center">
        Best Deals! Store App
      </footer>
    </div>
  );
}

export default App;