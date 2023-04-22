import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from 'components/SharedLayout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from './Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsLoading } from 'redux/auth/authSelectors';
import Loader from './Loader/Loader';

const Contacts = lazy(() => import("pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    isLoading
      ? <Loader />      
      : (<div>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path='/register'
              element={
                <RestrictedRoute component={Register} redirectTo='/contacts' />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute component={Login} redirectTo='/contacts' />
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute component={Contacts} redirectTo='/login' />
              }
            />
          </Route>
        </Routes>
      </div >)
  )
};
