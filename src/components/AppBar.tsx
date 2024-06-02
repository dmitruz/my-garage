import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from '../hooks/userAuth';
import './styles/AppBar.css'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className="header">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header >
    );
};