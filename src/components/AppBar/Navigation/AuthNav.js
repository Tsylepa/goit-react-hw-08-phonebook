import { NavItem, NavMenu } from './Navigation.styled';

export default function AuthNav() {
  return (
    <NavMenu>
      <NavItem to="/register">Registration</NavItem>
      <NavItem to="/login">Login</NavItem>
    </NavMenu>
  );
}
