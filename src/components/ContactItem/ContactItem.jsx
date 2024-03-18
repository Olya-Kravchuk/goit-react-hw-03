import { FaUser, FaPhone } from "react-icons/fa";
import css from "./ContactItem.module.css";

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={css.personData}>
        <div className={css.personName}>
          <FaUser className={css.iconPerson} />
          <p>{name}</p>
        </div>
        <div className={css.personPhon}>
          <FaPhone className={css.iconPhon} />
          <p>{number}</p>
        </div>
      </div>
      <button>Delete</button>
    </>
  );
};

export default Contact;
