import ContactForm from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactListItem } from '../components/ContactListItem/ContactListItem';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />

      <ContactList>
        <ContactListItem />
      </ContactList>
    </div>
  );
};

export default ContactsPage;