import React, { useRef } from "react";
import { Link, Redirect } from "react-router-dom"
/**
 * Registers new Customer by making a fetch-request to the '/register' route handler located inside of 'server.js' in 
 * 'bookmark_express_api' directory, and creates new Customer 'document-object' inside the 'Customers' collection.
 */
const RegisterPage = (props) => {
    const regNameInput = useRef(null);
    const regPasswordInput = useRef(null);

    //register 
    const registerHandler = async (evt) => {
        evt.preventDefault();
        const body = JSON.stringify({
            username: regNameInput.current.value,
            password: regPasswordInput.current.value
        })
        evt.currentTarget.reset();
        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            })
            const data = await response.json();
        } catch (err) {
            console.error(err);
        } finally {
            console.log("check MongoDB Atlas if new Customer username was created...");
        }
    }
    return (
        <>
        <div className="form-container">
            <h2>Register New Customer Form</h2>
            <form onSubmit={registerHandler}>
                <label> New Username:
            <input type="text" ref={regNameInput} placeholder="New username login" />
                </label>
                <label> New Password:
            <input type="password" ref={regPasswordInput} placeholder="New password login" />
                </label>
                {/* <Link to="/"> */}
                    <button type="submit">Submit!</button>
                {/* </Link> */}
            </form>
            </div>
        </>
    )
}

export default RegisterPage; 