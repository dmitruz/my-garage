import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import './styles/RegisterForm.css';

export const RegisterForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const { name, email, password } = form.elements as typeof form.elements & {
            name: HTMLInputElement;
            email: HTMLInputElement;
            password: HTMLInputElement;
        };

        dispatch(
            register({
                name: name.value,
                email: email.value,
                password: password.value,
            })
        );
        form.reset();
    };

    return (
        <form className="registerForm"
            onSubmit={handleSubmit} autoComplete="off">
            <label>
                <input
                    className="inputFieldRegist"
                    type="text"
                    name="name"
                    placeholder="Username"
                    required
                />
            </label>

            <label>
                <input
                    className="inputFieldRegist"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
            </label>

            <label>
                <input
                    className="inputFieldRegist"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
            </label>

            <button className="buttonRegist"
                type="submit">
                Register
            </button>
        </form>
    );
};

