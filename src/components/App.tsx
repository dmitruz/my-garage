import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from '../hooks/userAuth';
import { refreshUser } from '../redux/auth/operations';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { GaragePage } from '../pages/GaragePage';
import { AppDispatch } from '../redux/store';
import './styles/App.css';



export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait access...</b>
  ) : (
    <Router>
      <section className="garage">
        <div className="container">
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
                    redirectTo="/garage"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/garage"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<GaragePage />}
                  />
                }
              />
            </Route>
          </Routes>
        </div>
      </section >
    </Router>
  );
};
