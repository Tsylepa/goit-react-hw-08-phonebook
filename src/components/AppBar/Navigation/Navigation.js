import { NavMenu, NavItem } from './Navigation.styled';

export default function Navigation() {
  return (
    <NavMenu>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
    </NavMenu>
  );
}
