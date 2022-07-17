import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <ul>
      <li className={s.contactsList}>
        <a href="tel:+380666549757" className={s.contactsLinks}>
          <AiFillPhone className={s.ContactsSocialIcon} />
          <p className={s.contactsTitle}>+380 66 654 9757</p>
        </a>
      </li>
      <li className={s.contactsList}>
        <a href="mailto:manyapeace48gmail.com" className={s.contactsLinks}>
          <FaEnvelope className={s.ContactsSocialIcon} />
          <p className={s.contactsTitle}>e-mail</p>
        </a>
      </li>
      <li className={s.contactsList}>
        <a
          href="https://www.facebook.com/MAnyapeace"
          target="_blank"
          rel="noreferrer"
          className={s.contactsLinks}
        >
          <RiFacebookCircleFill className={s.ContactsSocialIcon} />
          <p className={s.contactsTitle}>MAnyapeace</p>
        </a>
      </li>
      <li className={s.contactsList}>
        <a
          href="https://www.instagram.com/hannamarmel/"
          target="_blank"
          rel="noreferrer"
          className={s.contactsLinks}
        >
          <AiFillInstagram className={s.ContactsSocialIcon} />
          <p className={s.contactsTitle}>hannamarmel</p>
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
