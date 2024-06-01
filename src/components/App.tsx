import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from '../hooks/userAuth';
import { refreshUser } from '../redux/auth/operations';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { Garage } from '../pages/Garage';
import { AppDispatch } from '../redux/store';


export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <section className="max-w-lg min-w-[320px] mx-auto my-7 bg-[#ecf0f3] rounded-[10px] shadow-[14px_14px_20px_#cbced1,-14px_-14px_20px_white]" >
      <div className="mx-auto py-[15px] px-[20px]">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/garage"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/garage"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<Garage />}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </section >
  );
};
