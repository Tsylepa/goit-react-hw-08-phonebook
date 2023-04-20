import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Container, Greeting, SignOut, UserPhoto } from './UserMenu.styled';
import avatar from 'images/avatar.jpg';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <Container>
      <UserPhoto src={avatar} />
      <Greeting>
        Welcome, <b>{userName}</b>
      </Greeting>
      <SignOut type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </SignOut>
    </Container>
  );
}
