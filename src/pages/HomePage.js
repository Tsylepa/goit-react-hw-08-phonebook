import {
  FullScreenContainer,
  Accent,
  Logo,
  Welcome,
  Slogan,
} from './pages.styled';

export default function HomePage() {
  return (
    <FullScreenContainer>
      <Welcome>Welcome to</Welcome>
      <Logo>
        Phone<Accent>Book</Accent>
      </Logo>
      <Slogan>Probably the best phonebook application</Slogan>
    </FullScreenContainer>
  );
}
