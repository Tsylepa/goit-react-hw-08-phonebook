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

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Container>
        <Title>Registration</Title>

        <Formik>
          <AuthForm onSubmit={handleSubmit}>
            <label>
              Name
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
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

            <Link to="/login">Already have an account? Log in</Link>

            <Button type="submit">Sign Up</Button>
          </AuthForm>
        </Formik>
      </Container>
    </>
  );
}
