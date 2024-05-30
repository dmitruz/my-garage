import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <div className="links mt-10 mb-30">
            <NavLink
                className="link px-2.5 py-1 rounded-md text-black no-underline"
                to="/register"
                style={({ isActive }) => ({
                    fontWeight: isActive ? '700' : '400',
                    background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                })}
            >
                Register
            </NavLink>
            <NavLink
                className="link px-2.5 py-1 rounded-md text-black no-underline"
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