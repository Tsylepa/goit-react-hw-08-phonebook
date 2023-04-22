import { NavLink } from 'react-router-dom';
import { BiErrorAlt } from 'react-icons/bi';
import { FullScreenContainer, ErrorMessage } from './pages.styled';

export function NotFound() {
  return (
    <FullScreenContainer>
      <ErrorMessage>
        <BiErrorAlt />
        Oops... Page not found
      </ErrorMessage>
      <NavLink to="/">Go to home page</NavLink>
    </FullScreenContainer>
  );
}
