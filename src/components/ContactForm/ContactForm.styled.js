import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const Input = styled(Field)`
  display: block;
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 4px;
  border: 2px solid var(--main-color);
`;

export const ErrorText = styled.p`
  position: absolute;
  margin: 0;
  font-size: 14px;
  color: var(--error);

  ::first-letter {
    text-transform: capitalize;
  }
`;

export const Button = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  background: var(--button);
  transition: opacity var(--transition-function),
    color var(--transition-function);
  cursor: pointer;

  &:not(:disabled) {
    background: var(--button-add);
    color: var(--contrast-color);
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    opacity: 1;
  }
`;
