import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}