import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}