import { useDispatch, useSelector } from "react-redux";
import './UserMenu.css';
import { selectUser } from "redux/auth/authSelectors";
import { logout } from "redux/auth/authOperations";

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleBtnLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="UserMenu">
            <div className="User">
                <b className="User__name">Welcome, {user.name}</b>
                <p className="User__email">{user.email}</p>
            </div>
            <button className="UserMenu__btn-logout" type="button" onClick={handleBtnLogout}>Logout</button>
        </div>
    )
};

export default UserMenu;