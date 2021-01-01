import React, { useState } from "react"

const ContactPage = (props) => {
    return (
        <>
            <div className="contact-details">
                <h3>Contact Us</h3>
                <h4>By Mail:</h4>
                <p>35 Paul Revere, Rd.</p>
                <p>Boston, MA,</p>
                <h4>By Phone:</h4>
                <p>123-456-7890</p>
                <h4>By Email:</h4>
                <p>To contact us by email, please fill out the contact form below...</p>
            </div>
            <div className="contact-container">
                <form action="">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    <label htmlFor="email-address">Email Address</label>
                    <input type="text" id="email-address" name="email" placeholder="Your email address.." />
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="england">England</option>
                        <option value="france">France</option>
                        <option value="japan">Japan</option>
                        <option value="usa">USA</option>
                        <option value="vietnam">Vietnam</option>
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Please add any information here..." style={{ height: `200px` }}></textarea>
                    <button type="submit" value="Submit">Contact Us</button>
                </form>
            </div>
        </>
    )
}
export default ContactPage