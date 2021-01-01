import React, { useRef } from "react";
/**
 * Logins user by making a fetch-request to the '/login' route handler located inside of 'server.js' in 'bookmark_express_api' 
 * directory, and passes back JSON object containing 'token, username' and authenticated' properties. Sets window.localStorage in 
 * browser so username stays logged in.
 */
const LoginPage = ({ setToken }) => {
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
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body
            })
            const data = await response.json();
            window.localStorage.setItem('token', `Bearer ${data.token}`)
            setToken(`Bearer ${data.token}`)
        } catch (err) {
            console.error(err);
        } finally {
            console.log("check window.localStorage to see if user-token appears inside chrome dev tools...")
        }
    }
    return (
        <>
            <div className="form-container">
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