import Contacts from '../../components/Contacts/Contacts';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews/Reviews';
import s from './ContactsPageView.module.css';

const ContactsPageView = () => {
  return (
    <Container>
      <div className={s.contactsSection}>
        <Contacts />
        {/* <Reviews /> */}
      </div>
    </Container>
  );
};
export default ContactsPageView;
