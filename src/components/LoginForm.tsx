import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import { ThreeDots } from 'react-loader-spinner';
import './styles/LoginForm.css';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const { email, password } = form.elements as typeof form.elements & {
            email: HTMLInputElement;
            password: HTMLInputElement;
        };
        setIsLoading(true);
        dispatch(
            logIn({
                email: email.value,
                password: password.value,
                name: ''
            })
        );
        setIsLoading(false);
        form.reset();
    };



    return (
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
            <>
                <label>
                    <input
                        className="inputField"
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                    />
                </label>
            </>
            <>
                <label>
                    <input
                        className="inputField"
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                    />
                </label>
            </>
            <button className="button"
                type="submit" disabled={isLoading}
            >
                {isLoading ? (
                    <ThreeDots
                        height="10"
                        width="80"
                        radius="9"
                        color="#4fa94d"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                ) : (
                    'Log In'
                )}
            </button>
        </form>
    );
};

export default LoginForm;
