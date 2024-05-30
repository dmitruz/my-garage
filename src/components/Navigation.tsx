import { useAuth } from '../hooks/userAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="links mt-10 mb-30">
            <NavLink
                className="link px-2.5 py-1 rounded-md text-black no-underline"
                to="/"
                style={({ isActive }) => ({
                    fontWeight: isActive ? '700' : '400',
                    background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                })}
            >
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink
                    className="link px-2.5 py-1 rounded-md text-black no-underline"
                    to="/contacts"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? '700' : '400',
                        background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                    })}
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};