import Contacts from "../../components/Contacts/Contacts";
import Container from "../../components/Container";
import s from "./ContactsPageView.module.css";

const ContactsPageView = () => {
  return (
    <Container>
      <div className={s.contactsSection}>
        <Contacts />
      </div>
    </Container>
  );
};
export default ContactsPageView;
