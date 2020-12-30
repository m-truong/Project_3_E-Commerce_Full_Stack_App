// React
import React from "react";
// External Components Imported
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
// React-Router
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
// App CSS
import './App.css';

function App() {
  return (
    <div className="grid-container">
       {/* Nav */}
      <nav>
        <div className="row">
          {/* Note: actually an <a> tag */}
          <Link className="brand" to="/">Racquet Dash</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
        {/* End of Nav */}
      </nav>
      <main>
        {/* Routers */}
        <Switch>
          <Route path="/product/:id" render={(routerProps) => { return <ShowPage routerProps={routerProps} /> }} />
          <Route exact path="/" component={HomePage} />
          {/* End of Router */}
        </Switch>
      </main>
      <footer className="row center">
      Racquet Dash Store App
      </footer>
    </div>
  );
}

export default App;