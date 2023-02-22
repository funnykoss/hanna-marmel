import s from './Footer.module.css';
const SocialLinks = () => {
  return (
    <ul className={s.socialList}>
      <li className={s.socialItem}>
        <a className={s.socialLink} href="mailto:manyapeace48gmail.com">
          e-mail
        </a>
      </li>
      <li className={s.socialItem}>
        <a className={s.socialLink} href="tel:+380666549757">
          +380 66 654 9757
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
