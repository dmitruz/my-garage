import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm';

export default function RegisterPage() {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}