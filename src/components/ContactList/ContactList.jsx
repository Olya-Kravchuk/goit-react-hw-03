import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactDatas }) => {
  return (
    <ul className={css.personList}>
      {contactDatas.map((contactData) => {
        return (
          <li key={contactData.id}>
            <Contact name={contactData.name} number={contactData.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
