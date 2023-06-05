import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
// import { NavLink } from "react-router-dom";

function Contact() {
  const [inputFName, setInputFName] = useState("");
  const [inputLName, setInputLName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const [mailSent, setmailSent] = useState(false);

  const fNameChangeHandler = (evt) => {
    setInputFName(evt.target.value);
  };
  const lNameChangeHandler = (evt) => {
    setInputLName(evt.target.value);
  };
  const emailChangeHandler = (evt) => {
    setInputEmail(evt.target.value);
  };
  const phoneChangeHandler = (evt) => {
    setInputPhone(evt.target.value);
  };
  const msgChangeHandler = (evt) => {
    setInputMsg(evt.target.value);
  };

  const formSubmitHandler = async (evt) => {
    evt.preventDefault();
    await emailjs
      .sendForm(
        "service_3zzi9t7",
        "template_s29uy7k",
        evt.target,
        "oJZhjHi3mX7bcH_Ka"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setmailSent(true);
    setInputFName("");
    setInputLName("");
    setInputEmail("");
    setInputPhone("");
    setInputMsg("");
  };

  return (
    <div id="contact" className="contact-form">
      <div className="contact-form-top-container">
        <h1>Contact us</h1>
        <p>Leave your details below and one of our teams will be in touch</p>
      </div>
      <div className="contact-form-bottom-container">
        <div className="contact-form-leftPart">
          <div className="contact-container">
            {/* <h3>Contact us</h3> */}
            <form onSubmit={formSubmitHandler} className="contact_form_main">
              <div className="contact-form-container">
                <div className="contact-form-fname contact-form-contents">
                  <label className="contact-label" htmlFor="name">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    value={inputFName}
                    required
                    onChange={fNameChangeHandler}
                    className="contact-from-input"
                  />
                </div>
                <div className="contact-form-lname contact-form-contents">
                  <label className="contact-label" htmlFor="name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    value={inputLName}
                    required
                    onChange={lNameChangeHandler}
                    className="contact-from-input"
                  />
                </div>

                <div className="contact-form-email contact-form-contents">
                  <label className="contact-label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="useremail"
                    required
                    value={inputEmail}
                    onChange={emailChangeHandler}
                    className="contact-from-input"
                  />
                </div>
                <div className="contact-form-phone contact-form-contents">
                  <label className="contact-label" htmlFor="email">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="userphone"
                    required
                    value={inputPhone}
                    onChange={phoneChangeHandler}
                    className="contact-from-input"
                  />
                </div>
              </div>
              <div className="contact-form-msg contact-form-contents">
                <label className="contact-label" htmlFor="message">
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  required
                  value={inputMsg}
                  onChange={msgChangeHandler}
                  className="contact-from-input contact-from-input-message"
                />
              </div>
              <div className="contact-submit-section">
                <button
                  className={
                    mailSent
                      ? "contact-email-sent contact-form-submit-btn"
                      : "contact-form-submit-btn"
                  }
                  type="submit"
                >
                  {!mailSent ? "Submit" : "Done"}
                </button>
                <p
                  className={
                    mailSent
                      ? "contact-email-sent-para"
                      : "contact-form-submit-para"
                  }
                >
                  Thank you for reaching out, we will get in touch with you soon
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="contact-form-rightPart">
          <button className="hero-btn-1">
            <NavLink
              exact
              to="/contact"
              activeclassname="active"
              className="hero-nav-links-1"
            >
              BOOK APPOINMENT
            </NavLink>
          </button>
          <div className="mot-div-mail">
            <p>rise@remax.com.au</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
