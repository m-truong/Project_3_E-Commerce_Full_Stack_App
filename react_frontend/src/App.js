// React
import React, { useState, useEffect } from "react";
// External Component Pages
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import CartPage from "./Pages/CartPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

// React-Router
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
// App CSS
import './App.css';


function App() {
  const [currentCustomerLoggedIn, setCustomerLoggedIn] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  
  // Debugging here // this seems to run top-down twice 
  console.log("this prints first")
  
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'))
    };
  }, []);

  // token only appears after second-top-down run through app.js
  console.log(`The current token for the logged-in customer is ==> ✅ ${token}`); 

  return ( 
    <div className="grid-container">
      {/* Navbar */}
      <nav className="row">
        <div className="">
          <Link className="brand" to="/">Racquet Dash 🎾</Link>
        </div>
        <div className="">
          <Link className="nav-link" to="/about">Our Mission</Link>
          <Link className="nav-link" to="/contact">Get In Touch</Link>
          <Link className="nav-link" to="/register">New Customer Registration</Link>
          <Link className="nav-link" to="/login">Customer Sign In</Link>
          <Link className="nav-link" to="/cart">My Cart</Link>
        </div>
        {/* End of Navbar */}
      </nav>
      <main>
        {/* Routers */}
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login">
            <LoginPage setToken={setToken} />
          </Route>
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:id" render={(routerProps) => { return <ShowPage routerProps={routerProps} /> }} />
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/">
            {loggedIn ? <Redirect to="/login" /> : <HomePage />}
          </Route> */}
          {/* End of Router */}
        </Switch>
      </main>
      <footer className="row center">
        <Link className="" to="/">
          Racquet Dash Store App 🎾 made by Mike Truong
       </Link>
      </footer>
    </div>
  );
}

export default App;