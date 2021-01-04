import React, { useState, useEffect } from "react";
import axios from "axios";

// const baseUrl = 'http://localhost:3007/api/racquets'

/**
 * I import <Route>, <Link>, and <Switch> react-router components here.
 * I use them inside my App.js file to render different react components when the customer clicks on different nav links.
 * For example, a customer can click on the "My Cart" link to render the <CartPage> component, the "Customer Sign In" link to render the <LoginPage>
 * component, or the "About Us" link to render the <AboutPage> component without having to refresh the page. 
 */
import { Route, Link, Switch } from "react-router-dom";
/** 
 * "RacquetMongoDBContext" will be used to pass down react-state containing "racquets"-array fetched from RacquetDashDB. 
 * I also pass down the "currentCustomerLoggedIn" object and "token" using context to components deeper in my react app component-tree.
 */
import { RacquetMongoDBContext } from "./Components/Context.js"

// Page views rendered dynamically using react-router.
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import CartPage from "./Pages/CartPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Error from "./Components/Error.js"
import Loading from "./Components/Loading.js";

// Custom App-CSS Stylesheet
import './App.css';

// ===================
// SET DEV-ENVIRONMENT
// ===================
// if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
// }
// const path = require('path'); require('dotenv').config({ path: path.join(__dirname, ../.env.${process.env.NODE_ENV})}); 

// ===================
// SET DEV/PROD-ENVIRONMENT
// ===================
const production  = 'https://racquetdash.herokuapp.com';
const development = 'http://localhost:3000';
const url = (process.env.NODE_ENV === 'development' ? development : production);
console.log(`NODE_ENV is ${process.env.NODE_ENV}, so base_url is connecting to ${url}`)

function App() {
  // "racquet" state stores Tennis Racquet objects fetched from RacquetDashDB. 
  const [racquets, setRacquets] = useState([])
  // "currentCustomerLoggedIn" state stores "Customer" document-object that's set inside "LoginPage.js".
  const [currentCustomerLoggedIn, setCustomerLoggedIn] = useState({})
  // "token" state is set inside "LoginPage.js" once "Customer" logs in with valid username and password inside "RacquetDashDB".
  const [token, setToken] = useState("")
  // "loading" state is used to render fun "Loading" component spinner while store app is fetching tennis racquets from RacquetDashDB.
  const [loading, setLoading] = useState(false)
  // "error" state is used to render "Error" component if "Customer's" cart is empty or if there's an error. 
  const [error, setError] = useState(false)

  // "logOutHandler" is helper function triggered when "Customer" clicks on "Log Out" button. It removes "token" and "currentCustomerLoggedIn" from localStorage, resets both states, and redirects "Customer" to home page. 
  const logOutHandler = (evt) => {
    window.localStorage.clear()
    setToken("")
    setCustomerLoggedIn({})
    window.location.href = "/";
  }
  // "useEffect" fetches tennis racquets to display from the RacquetDashDB. Since fetch is an asynchronous call, "loading" state is set to "true" while it waits for it to finish. "App.js" conditional renders the "Loading" component to display a spinner until the "loading" state is set to false and data is returned. If there is an error, the "error" state is set to the "err.message" and renders the "Error" component. 
  const fetchData = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${url}/api/racquets`)
      setLoading(false)
      setRacquets(data)
    } catch (err) {
      console.error(err)
      setError(err.message)
      setLoading(false)
    } finally {
      console.log('check browser if racquets were displayed correctly... ')
    }
  }
  useEffect(() => {
    fetchData()
    // If localStorage contains a "token", "token" state is set to it's value.
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'))
    };
    // If localStorage stores logged in "Customer" object, "currentCustomerLoggedIn" state is set to it's value. 
    if (window.localStorage.getItem("currentCustomerLoggedIn")) {
      setCustomerLoggedIn(window.localStorage.getItem('currentCustomerLoggedIn'))
    };
  }, []);

  return (
    <>
      {/* Chained ternary-operator expression that renders either the "Loading", "Error", or entire Racquet Dash application. */}
      { loading
        ? (<Loading />)
        : error
          ? (<Error variant="danger">{error}</Error>)
          /**
           * "RacquetMongoDBContext.Provider" passes down "racquet" state, "currentCustomerLoggedIn" state, and "token" state to all child react components.
           *  */
          : (<RacquetMongoDBContext.Provider
            value={{ racquetData: [racquets, setRacquets], customerLoggedIn: [currentCustomerLoggedIn, setCustomerLoggedIn], tokenData: [token, setToken] }} >
            {/* Entire "grid-container" uses CSS Grid and Flex for responsive design. */}
            <div className="x-grid-container">
              {/* Start of Navbar */}
              <nav className="x-row">
                <div>
                  {/* Racquet Dash Brand */}
                  <Link className="x-brand" to="/">Racquet Dash 🎾</Link>
                </div>
                <div>
                  {/* This conditionally renders the "My Cart" link and "Log Out" button if a customer is logged in, else it renders links to the "AboutPage", "ContactPage", "RegisterPage", and "LoginPage".*/}
                  {
                    currentCustomerLoggedIn.username
                      ? (<>
                        <span className="customer-username">
                          Welcome Back {currentCustomerLoggedIn.username}! <i class="fas fa-user"></i></span>
                        <Link className="x-nav-link" to="/cart">Go To My Cart <i className="fa fa-shopping-cart"></i></Link>
                        <button href="/" onClick={logOutHandler}> Log Out </button></>)
                      : (<>
                        {/* "Link" to "AboutPage" with FontAwesome Icons */}
                        <Link className="x-nav-link" to="/about">Our Mission <i class="fas fa-check"></i></Link>
                        {/* "Link" to "ContactPage" with FontAwesome Icons */}
                        <Link className="x-nav-link" to="/contact">Get In Touch <i class="fas fa-address-book"></i></Link>
                        <Link className="x-nav-link" to="/register">New Customer Registration <i class="fas fa-registered"></i></Link>
                        <Link className="x-nav-link" to="/login">Customer Sign In <i class="fas fa-sign-in-alt"></i></Link>
                      </>)
                  }
                </div>
              </nav>
              {/* End of Navbar */}
              <main>
                {/* Start of Routers */}
                <Switch>
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/cart" component={CartPage} />
                  {/* "ShowPage" uses "routerProps" to render correct tennis racquet model to display using the "_id" from "routerProps.match.params.id" */}
                  <Route path="/product/:id" render={(routerProps) => { return <ShowPage routerProps={routerProps} /> }} />
                  <Route exact path="/" component={HomePage} />
                </Switch>
                {/* End of Routers */}
              </main>
              {/* Footer */}
              <footer className="x-row x-center">
                <Link className="" to="/">
                  Racquet Dash Store App 🎾 made by Mike Truong
                </Link>
              </footer>
              {/* End of Footer */}
            </div>
          </RacquetMongoDBContext.Provider>)
      }
    </>
  );
}

export default App;