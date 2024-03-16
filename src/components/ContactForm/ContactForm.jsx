import React from "react";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="phone">Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
