import React from "react";
import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <ul>
      <li>
        <svg className={css.iconPerson}>
          <use
            href="../../img/symbol-defs.svg#icon-person"
            width={7}
            height={10}
          ></use>
        </svg>
        <p>{name}</p>
        <svg className={css.iconPhon}>
          <use
            href="../../img/symbol-defs.svg#icon-phone"
            width={10}
            height={10}
          ></use>
        </svg>
        <p>{number}</p>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default Contact;
