import React from "react"

const ContactPage = (props) => {
    // This helper method prevents the contact form from refreshing the Racquet Dash Store App.
    const prevDefault = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="x-contact-details">
                <h1>Contact Us</h1>
                <h2>By Mail:</h2>
                <p>25 Paul Revere, Rd.</p>
                <p>Boston, MA</p> 
                <h2>By Phone:</h2>
                <p>123-456-7890</p>
                <h2>By Email:</h2>
                <p>To contact us by email, please fill out the contact form below...</p>
            </div>
            <div className="x-contact-container">
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text"  placeholder="Your first name.." />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text"  placeholder="Your last name.." />
                    <label htmlFor="email-address">Email Address</label>
                    <input type="text" placeholder="Your email address.." />
                    <label htmlFor="country">Country</label>
                    <select>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="england">England</option>
                        <option value="france">France</option>
                        <option value="japan">Japan</option>
                        <option value="usa">USA</option>
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea  placeholder="Please add any information here..." style={{ height: `200px` }}></textarea>
                    <button onClick={(e) => prevDefault(e)}>Contact Us</button>
                </form>
            </div>
        </>
    )
}
export default ContactPage