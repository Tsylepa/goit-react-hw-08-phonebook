import styled from 'styled-components';
import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  box-shadow: var(--shadow);
  border-radius: 10px;
  background-color: #fff;
`;

export const FullScreenContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Welcome = styled.p`
  opacity: 0;
  margin: 0;
  color: var(--main-color);

  animation: fadeIn 1s ease-in forwards;
`;

export const Logo = styled.h1`
  opacity: 0;
  font-size: 64px;
  color: var(--main-color);
  animation: fadeIn 2s ease-in 1s forwards;
`;

export const Slogan = styled.p`
  opacity: 0;
  margin: 0;
  color: var(--accent-color);
  text-transform: lowercase;
  animation: fadeIn 2s ease-in 3s forwards;
`;

export const Accent = styled.span`
  color: var(--accent-color);
`;

export const ErrorMessage = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--accent-color);
`;

export const Title = styled.h1`
  display: flex;
  gap: 10px;
  font-size: 34px;
  color: var(--main-color);
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 20px;
  text-align: center;
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 250px;
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
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
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

export const Link = styled(NavLink)`
  font-size: 18px;
`;
