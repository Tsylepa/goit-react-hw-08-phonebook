import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  Container,
  Title,
  AuthForm,
  Input,
  Button,
  Link,
} from './pages.styled';
import { Formik } from 'formik';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Login</Title>

      <Formik>
        <AuthForm onSubmit={handleSubmit}>
          <label>
            Email:
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label>
            Password:
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <Link to="/register">Don't have an account? Register</Link>
          <Button type="submit">Log in</Button>
        </AuthForm>
      </Formik>
    </Container>
  );
}
