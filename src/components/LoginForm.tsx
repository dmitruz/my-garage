import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import { ThreeDots } from 'react-loader-spinner';

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

    const inputStyle = {
        boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
        textIndent: '20px'
    };

    const buttonStyle = {
        boxShadow: '6px 6px 6px #cbced1, -2px -2px 18px white'
    };


    return (
        <form className="form flex gap-1 flex-nowrap" onSubmit={handleSubmit} autoComplete="off">
            <>
                <label>
                    <input
                        className="inputField h-10 w-full bg-[#ecf0f3] border border-transparent outline-none rounded-full text-gray-700 px-5 shadow-inner"
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
                        className="inputField h-10 w-full bg-[#ecf0f3] border border-transparent outline-none rounded-full text-gray-700 px-5 shadow-inner"
                        style={inputStyle}
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                    />
                </label>
            </>
            <button className="button h-10 w-[250px] bg-[#ecf0f3] border border-transparent outline-none rounded-full text-black cursor-pointer px-5 transition-all duration-250 ease-in-out"
                style={buttonStyle}
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

const style = document.createElement('style');
style.textContent = `
  .button:hover {
    box-shadow: none;
    color: white;
    background: #4e6141;
  }
`;
document.head.append(style);