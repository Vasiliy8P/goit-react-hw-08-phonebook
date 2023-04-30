import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsLoading } from 'redux/auth/authSelectors';
import Loader from './Loader/Loader';
import SharedLayout from 'components/SharedLayout';
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
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
