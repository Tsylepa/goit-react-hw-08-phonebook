import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: flex;
  gap: 12px;
`;

export const NavItem = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  color: inherit;

  :hover {
    color: var(--button);
  }

  &.active {
    color: orangered;
  }
`;
