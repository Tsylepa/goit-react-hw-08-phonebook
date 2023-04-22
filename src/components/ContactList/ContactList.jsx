import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { BeatLoader } from 'react-spinners';
import { BsSearch } from 'react-icons/bs';
import { getIsLoading, getError } from 'redux/contacts/contacts-selectors';
import { BiError } from 'react-icons/bi';
import Filter from 'components/Filter';
import {
  Container,
  List,
  ContactItem,
  Name,
  Number,
  Delete,
  ErrorMessage,
} from './ContactList.styled';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filteredContacts = filter.length
    ? [...contacts].filter(contact =>
        contact.name.toLowerCase().includes(filter)
      )
    : [...contacts];
  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const markup = (
    <>
      {' '}
      {!isLoading && !contacts.length && <p>Your contact list is empty...</p>}
      {contacts.length > 0 && (
        <Container>
          <label>
            <BsSearch size="18" /> Find contact by name:
            <Filter />
          </label>
          {isLoading && <BeatLoader color="#ff4500" />}
          {filteredContacts.length === 0 ? (
            <p>No matches found</p>
          ) : (
            <List>
              <tbody>
                {sortedContacts.map(({ id, name, number }) => (
                  <ContactItem key={id}>
                    <Name>{name}</Name>
                    <Number>{number}</Number>
                    <td>
                      <Delete
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                      >
                        Delete
                      </Delete>
                    </td>
                  </ContactItem>
                ))}
              </tbody>
            </List>
          )}
        </Container>
      )}
    </>
  );

  return error ? (
    <ErrorMessage>
      <BiError size={30} />
      {error}
    </ErrorMessage>
  ) : (
    markup
  );
};

export default ContactList;
