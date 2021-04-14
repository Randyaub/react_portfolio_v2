import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";
import ContactForm from "./ContactForm";
import ContactResponse from "./ContactResponse";
import "./ContactSection.css";

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Your message was sent.");
        },
        () => {
          setLoading(false);
          setMessage(
            "There was an error sending your message. Please try again later."
          );
        }
      );
    e.target.reset();
  };

  return (
    <>
      {/*Element is for react-scroll*/}
      <Element name="scrollToContacts" />
      <h2 className="section__title">Contact</h2>
      <section className="c-ContactSection">
        <div className="c-ContactSection__content flex flex-center">
          <div className="c-ContactSection__form">
            <h3 className="c-ContactSection__title">Ask Me a Question</h3>
            <ContactResponse message={message} loading={loading} />
            <ContactForm sendEmail={sendEmail} />
          </div>
          <img
            className="c-ContactSection__img"
            src="ContactImage.svg"
            alt="Randy Standing In Hero Pose"
          ></img>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
