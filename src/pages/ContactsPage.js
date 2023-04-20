import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

export default function ContactsPage() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>My contacts</h2>
      <ContactList />
    </>
  );
}
