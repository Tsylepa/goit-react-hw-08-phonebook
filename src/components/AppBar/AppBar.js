import { useSelector } from 'react-redux';
import UserMenu from 'components/AppBar/UserMenu/UserMenu';
import AuthNav from './Navigation/AuthNav';
import Navigation from './Navigation/Navigation';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';
import { Container } from 'components/App.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
}
