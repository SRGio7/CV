import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./../contact.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zwe7bxl", "template_wu5x97k", form.current, {
        publicKey: "cAdXv4GMM7j1VBEen",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container-forum">
      <div className="wrapper-forum">
        <form className="form-contact" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="NE" type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className="button" type="submit" value="Send">
              Send
            </button>
            <Link style={{ textDecoration: "none",cursor:"pointer" }} to={"/"}>
              <button className="button back">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
