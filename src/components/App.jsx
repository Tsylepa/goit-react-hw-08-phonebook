import { Container, Wrapper } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import AppBar from './AppBar/AppBar';
import HomePage from 'pages/HomePage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { NotFound } from 'pages/NotFound';
import { Layout } from './Layout';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact index element={<HomePage />} />
            <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
              <Route path="/register" element={<RegistrationPage />} />
            </Route>
            <Route element={<PrivateRoute redirectTo="/login" />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </Wrapper>
  );
}
