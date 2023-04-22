import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Container, Title, Accent } from './pages.styled';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const userName = useSelector(authSelectors.getUsername).split(' ');

  return (
    <>
      <Title>
        <span>{userName[0]}'s</span>
        <span>
          Phone<Accent>Book</Accent>
        </span>
      </Title>
      <Container>
        <ContactForm />
        <hr width="90%" />
        <div>
          <ContactList />
        </div>
      </Container>
    </>
  );
}
