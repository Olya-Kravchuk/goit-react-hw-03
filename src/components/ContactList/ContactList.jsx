import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

const ContactList = ({ contactDatas }) => {
  return (
    <ul className={css.personList}>
      {contactDatas.map((contactData) => {
        return (
          <li className={css.personItem} key={contactData.id}>
            <ContactItem name={contactData.name} number={contactData.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
