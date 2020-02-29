import React from 'react'
import './style.css'

const Contact = () => {
    return (
        <div className="contact__container">
            <h1 className="contact__h1">CONTACT ME</h1>
            <form className="contact__form">
                <div className="group__input">
                    <label className="contact__label">Name</label>
                    <input type="text" className="contact__input"></input>
                </div>
                <div className="group__input">
                    <label className="contact__label">Email</label>
                    <input type="email" className="contact__input"></input>
                </div>
                <div className="group__input">
                    <label className="contact__label">Subject</label>
                    <input type="text" className="contact__input"></input>
                </div>
                <div className="group__input">
                    <label className="contact__label">Message</label>
                    <textarea className="contact__textarea" rows="10"></textarea>
                </div>
                <button className="contact__button">Send message</button>
            </form>
        </div>
    )
}

export default Contact;