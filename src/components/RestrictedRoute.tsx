import React, { ReactNode } from 'react';
import { useAuth } from '../hooks/userAuth';
import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
    component: ReactNode;
    redirectTo?: string;
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} /> : <>{component}</>;
};