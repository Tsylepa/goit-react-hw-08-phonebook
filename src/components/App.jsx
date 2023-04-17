import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import { Wrapper } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>My contacts</h2>
      <ContactList />
    </Wrapper>
  );
};

export default App;
