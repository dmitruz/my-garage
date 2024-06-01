import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useAuth } from "../hooks/userAuth";
import { AppDispatch } from "../redux/store";

export const UserMenu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useAuth();

    const buttonStyle = {
        boxShadow: '6px 6px 6px #cbced1, -2px -2px 18px white'
    };


    return (
        <div className="userMenuWrapper flex justify-between">
            <h3 className="userWelcome m-10">Welcome, {user.name}</h3>
            <button
                className="button h-10 w-[250px] bg-[#ecf0f3] border border-transparent outline-none rounded-full text-black cursor-pointer px-5 transition-all duration-250 ease-in-out"
                type="button"
                style={buttonStyle}
                onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    );
};
