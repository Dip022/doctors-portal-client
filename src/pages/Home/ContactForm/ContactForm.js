import React from "react";
import appointment from "../../../assets/images/appointment.png";
import primaryButton from "../../sherd/PrimaryButton/PrimaryButton";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
      }}
      className="mt-5 mb-10 pt-30"
    >
      <div className="contact-info">
        <h1 className="text-center text-primary text-3xl text-bold">
          Contact Us
        </h1>
        <h1 className="text-center text-4xl mb-10 text-white">
          Stay connected with us
        </h1>
        <div className="contact-form">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </form>
          <primaryButton className="bg-secondary text-white px-10 py-3">
            Submit
          </primaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
