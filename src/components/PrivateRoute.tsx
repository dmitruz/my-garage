import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

interface PrivateRouteProps {
    component: ReactNode;
    redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <>{component}</>;
};