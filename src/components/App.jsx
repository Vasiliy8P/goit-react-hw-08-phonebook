import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from './Home/Home';

const Contacts = lazy(() => import("pages/Contacts"));

export const App = () => {
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
