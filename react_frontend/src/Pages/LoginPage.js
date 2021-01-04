import React, { useContext, useRef } from "react";
import { RacquetMongoDBContext } from "../Components/Context";

/**
 * The "LoginPage" makes a "POST" request to the "/login" endpoint located inside of my "server.js" and retrieves a JSON object containing "token"" and "customer" user-object that it uses to set to localStorage and react state.
 * */

// ===================
// SET DEV/PROD-ENVIRONMENT
// ===================
const production  = 'https://racquetdash.herokuapp.com';
const development = 'http://localhost:3000';
const url = (process.env.NODE_ENV === 'development' ? development : production);
console.log(`NODE_ENV is ${process.env.NODE_ENV}, so base_url is connecting to ${url}`)

const LoginPage = () => {
    const { customerLoggedIn, tokenData } = useContext(RacquetMongoDBContext)
    const [currentCustomerLoggedIn, setCustomerLoggedIn] = customerLoggedIn
    const [token, setToken] = tokenData
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const loginHandler = async (evt) => {
        evt.preventDefault();
        const body = JSON.stringify({
            username: usernameInput.current.value,
            password: passwordInput.current.value
        })
        evt.currentTarget.reset();
        try {
            const response = await fetch(`${url}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body
            })
            const data = await response.json()
            // This sets the "token" and "currentCustomerLoggedIn" inside localStorage and sets the state variables as well.
            window.localStorage.setItem('token', `Bearer ${data.token}`)
            window.localStorage.setItem('currentCustomerLoggedIn', data.user)
            setCustomerLoggedIn(data.user)
            setToken(`Bearer ${data.token}`)
        } catch (err) {
            console.error(err);
        } finally {
            console.log("check window.localStorage to see if user-token appears inside chrome dev tools...")
        }
    }
    return (
        <>
            <div className="x-form-container">
                <h2>Login Existing Customer Form</h2>
                <form onSubmit={loginHandler}>
                    <label> Username:
            <input type="text" ref={usernameInput} placeholder="Username login" />
                    </label>
                    <label> Password:
            <input type="password" ref={passwordInput} placeholder="Password login" />
                    </label>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        </>
    )
}
export default LoginPage;