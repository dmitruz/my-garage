import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from '../hooks/userAuth';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className="header mt-5 mb-7 flex justify-between">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header >
    );
};