import React, { useRef } from "react";
/**
 * This creates a new "Customer" document object inside the "customers"" collection of my RacquetDashDB sub-database by making a "POST" request to the "/api/customers/register" endpoint.
 */
const RegisterPage = (props) => {
    const regNameInput = useRef(null);
    const regPasswordInput = useRef(null);
    const registerHandler = async (evt) => {
        evt.preventDefault();
        const body = JSON.stringify({
            username: regNameInput.current.value,
            password: regPasswordInput.current.value
        })
        evt.currentTarget.reset();
        try {
            const response = await fetch("/api/customers/register", {
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
            // This redirects the user to the "LoginPage" after a new customer has succesffuly created an account.
            window.location.href = "/login";
        }
    }
    return (
        <>
            <div className="x-form-container">
                <h2>Register New Customer Form</h2>
                <form onSubmit={registerHandler}>
                    <label> New Username:
            <input type="text" ref={regNameInput} placeholder="New username login" />
                    </label>
                    <label> New Password:
            <input type="password" ref={regPasswordInput} placeholder="New password login" />
                    </label>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        </>
    )
}

export default RegisterPage; 