import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact">
                <h1>Contact.</h1>
                <form>
                    <input placeholder="Name" type="text" required/>
                    <input placeholder="Email" type="email" required/>
                    <input placeholder="Number" type="tel" />
                    <textarea id="text-area" placeholder="Message" rows="7" required/>
                    <input type="submit" value="SEND"/>
                </form>
            </div>
        </div>
    )
}

export default Contact
