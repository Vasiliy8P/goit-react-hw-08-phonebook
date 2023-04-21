import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from 'components/SharedLayout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from './Home/Home';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/authOperations';

const Contacts = lazy(() => import("pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  )
};
