import React from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const contactName = event.currentTarget.elements.name.value;
    const contactPhone = event.currentTarget.elements.phone.value;
    onAdd({
      id: Date.now(),
      name: contactName,
      number: contactPhone,
    });
    event.target.reset();
  };
  return (
    <div>
      <form className={css.contactForm} onSubmit={handleSubmit}>
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
