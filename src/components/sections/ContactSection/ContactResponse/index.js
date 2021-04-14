import React from "react";
import "./ContactResponse.css";

const ContactResponse = ({ message, loading }) => {
  return (
    <div className="c-ContactResponse flex flex-center">
      {loading && <img src="loading.svg" alt="loading" />}
      <h4 className="c-ContactResponse__message">{message}</h4>
    </div>
  );
};

export default ContactResponse;
