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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Wrapper>
      <AppBar />

      <Container>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
            <Route path="/register" element={<RegistrationPage />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="/login" />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Container>
    </Wrapper>
  );
}
