import React from "react";
import ButtonAnimation from "../../../common/ButtonAnimation";
import "./ContactForm.css";

const ContactForm = ({ sendEmail }) => {
  return (
    <form onSubmit={sendEmail}>
      {/*First Name*/}
      <label className="c-ContactForm__label">
        <span className="c-ContactForm__text">Name</span>
        <input
          type="text"
          className="c-ContactForm__input"
          name={"name"}
          id={"name"}
          required={true}
        />
      </label>
      {/*Email*/}
      <label className="c-ContactForm__label">
        <span className="c-ContactForm__text">Email</span>
        <input
          className="c-ContactForm__input"
          name={"email"}
          type="email"
          id={"email"}
          required={true}
        />
      </label>
      {/*Message*/}
      <label className="c-ContactForm__label">
        <span className="c-ContactForm__text">Your Message</span>
        <textarea
          className="c-ContactForm__textbox"
          name="message"
          id="message"
          required={true}
        />
      </label>
      <ButtonAnimation className="c-ContactForm__btn">
        <span>Send Message</span>
      </ButtonAnimation>
    </form>
  );
};

export default ContactForm;
