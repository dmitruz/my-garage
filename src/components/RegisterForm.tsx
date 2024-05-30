import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';

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

    const inputStyle = {
        boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
        textIndent: '20px'
    };

    const buttonStyle = {
        boxShadow: '6px 6px 6px #cbced1, -2px -2px 18px white'
    };

    return (
        <form className="form flex gap-1 flex-nowrap"
            onSubmit={handleSubmit} autoComplete="off">
            <label className="w-full">
                <input
                    className="inputField h-10 w-full bg-[#ecf0f3] border border-transparent outline-none rounded-full text-gray-700 px-5 shadow-inner"
                    type="text"
                    name="name"
                    placeholder="Username"
                    required
                />
            </label>

            <label className="w-full">
                <input
                    className="inputField h-10 w-full bg-[#ecf0f3] border border-transparent outline-none rounded-full text-gray-700 px-5 shadow-inner"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
            </label>

            <label className="w-full">
                <input
                    className="inputField h-10 w-full bg-[#ecf0f3] border border-transparent outline-none rounded-full text-gray-700 px-5 shadow-inner"
                    style={inputStyle}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
            </label>

            <button className="button h-10 w-[250px] bg-[#ecf0f3] border border-transparent outline-none rounded-full text-black cursor-pointer px-5 transition-all duration-250 ease-in-out"
                style={buttonStyle}
                type="submit">
                Register
            </button>
        </form>
    );
};


const style = document.createElement('style');
style.textContent = `
  .button:hover {
    box-shadow: none;
    color: white;
    background: #4e6141;
  }
`;
document.head.append(style);