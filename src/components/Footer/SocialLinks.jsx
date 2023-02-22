import s from './Footer.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
const SocialLinks = () => {
  return (
    <ul className={s.socialList}>
      <li className={s.socialItem}>
        <AiOutlineMail />
        <a className={s.socialLink} href="mailto:manyapeace48gmail.com">
          E-mail
        </a>
      </li>
      <li className={s.socialItem}>
        <FiPhoneCall />
        <a className={s.socialLink} href="tel:+380666549757">
          +380 66 654 9757
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
