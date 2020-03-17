import React, { Component } from 'react';
import './style.css';
import * as EmailValidator from 'email-validator';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            errorName: "",
            email: "",
            errorEmail: "",
            subject: "",
            errorSubject: "",
            message: "",
            errorMessage: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
        this.validate();
    }

    validate() {
        const { name, email, subject, message } = this.state;
        this.setState({
            errorName: "",
            errorEmail: "",
            errorSubject: "",
            errorMessage: ""
        })
        if (name.length < 3) {
            this.setState({
                errorName: "Too short name"
            })
        }
        if (name.length > 30) {
            this.setState({
                errorName: "Too long name"
            })
        }
        if (name.replace(/\s/g, '').length === 0) {
            this.setState({
                errorName: "This field is required"
            })
        }
        if (email.replace(/\s/g, '').length === 0) {
            this.setState({
                errorEmail: "This field is required"
            })
        }
        if (!EmailValidator.validate(email)){
            this.setState({
                errorEmail: "Not correct email"
            })
        }
        if (subject.length < 3) {
            this.setState({
                errorSubject: "Too short subject"
            })
        }
        if (subject.length > 100) {
            this.setState({
                errorSubject: "Too long subject"
            })
        }
        if (subject.replace(/\s/g, '').length === 0) {
            this.setState({
                errorSubject: "This field is required"
            })
        }
        if (message.length === 0) {
            this.setState({
                errorMessage: "This field is requaired"
            })
        }
        if (message.length > 2000) {
            this.setState({
                errorMessage: "Too long message"
            })
        }
        if (message.replace(/\s/g, '').length === 3) {
            this.setState({
                errorMessage: "This field is required"
            })
        }
    }

    render() {
        const { name, email, subject, message } = this.state;
        const { errorName, errorEmail, errorSubject, errorMessage } = this.state;
        return (
            <div className="contact__container">
                <h1 className="contact__h1">CONTACT ME</h1>
                <form className="contact__form">
                    <div className="group__input">
                        <label className="contact__label" htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="contact__input"
                            id="name"
                            value={name}
                            onChange={this.handleChange}
                            onBlur={this.validate}
                        ></input>
                        <p className="contact--error">{errorName}</p>
                    </div>
                    <div className="group__input">
                        <label className="contact__label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="contact__input"
                            id="email"
                            value={email}
                            onChange={this.handleChange}
                            onBlur={this.validate}
                        ></input>
                        <p className="contact--error">{errorEmail}</p>
                    </div>
                    <div className="group__input">
                        <label className="contact__label" htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            className="contact__input"
                            id="subject"
                            value={subject}
                            onChange={this.handleChange}
                            onBlur={this.validate}
                        ></input>
                        <p className="contact--error">{errorSubject}</p>
                    </div>
                    <div className="group__input">
                        <label className="contact__label" htmlFor="message">Message</label>
                        <textarea
                            className="contact__textarea"
                            id="message"
                            rows="10"
                            value={message}
                            onChange={this.handleChange}
                            onBlur={this.validate}
                        ></textarea>
                        <p className="contact--error">{errorMessage}</p>
                    </div>
                    <button className="contact__button">Send message</button>
                </form>
            </div>
        )
    }
}

export default Contact;