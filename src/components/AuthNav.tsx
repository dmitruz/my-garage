import { NavLink } from 'react-router-dom';
import './styles/AuthNav.css';

export const AuthNav = () => {
    return (
        <div className="links mt-10 mb-30">
            <NavLink
                className="link"
                to="/register"
                style={({ isActive }) => ({
                    fontWeight: isActive ? '700' : '400',
                    background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                })}
            >
                Register
            </NavLink>
            <NavLink
                className="link"
                to="/login"
                style={({ isActive }) => ({
                    fontWeight: isActive ? '700' : '400',
                    background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                })}
            >
                Sign In
            </NavLink>
        </div>
    );
};