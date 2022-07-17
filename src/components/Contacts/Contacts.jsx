import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <ul>
      <li>
        <a href="tel:+380666549757">
          <AiFillPhone className={s.socialIcon} />
          +380 66 654 9757
        </a>
      </li>
      <li>
        <a href="mailto:manyapeace48gmail.com">
          <FaEnvelope className={s.socialIcon} />
          e-mail
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/MAnyapeace"
          target="_blank"
          rel="noreferrer"
        >
          <RiFacebookCircleFill className={s.socialIcon} />
          MAnyapeace
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/hannamarmel/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className={s.socialIcon} />
          hannamarmel
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
