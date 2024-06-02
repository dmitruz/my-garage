import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useAuth } from "../hooks/userAuth";
import { AppDispatch } from "../redux/store";
import './styles/UserMenu.css';

export const UserMenu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useAuth();


    return (
        <div className="userMenuWrapper">
            <h3 className="userWelcome m-10">Welcome, {user.name}</h3>
            <button
                className="button"
                type="button"
                onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    );
};
