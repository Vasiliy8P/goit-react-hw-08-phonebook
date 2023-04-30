import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelectors";
import { logout } from "redux/auth/authOperations";
import { Button } from "@mui/material";
import './UserMenu.css';

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
            <Button
                variant="contained"
                type="button"
                size="small"
                style={{ height: 30, fontSize: 13, fontWeight: 600, backgroundColor: "#fff", color: "#1976d2" }}
                onClick={handleBtnLogout}
            >
                Logout
            </Button>
        </div>
    )
};

export default UserMenu;