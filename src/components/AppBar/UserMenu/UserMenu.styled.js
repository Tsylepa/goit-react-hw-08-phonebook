import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: 1px solid orangered;
  outline-offset: 2px;
`;

export const Greeting = styled.p`
  margin: 0;
`;

export const SignOut = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: var(--button);
  transition: background-color var(--transition-function),
    color var(--transition-function);
  cursor: pointer;

  :hover {
    color: var(--contrast-color);
    background-color: var(--button-delete);
  }
`;
