import { NavLink } from "react-router-dom";
import "./AuthNav.css";

const AuthNav = () => {
    return (
        <nav className="Main-authNav">
            <ul className="Main-authNav__list">
                <li className="Main-authNav__list-item">
                    <NavLink to="register" className="Main-authNav__list-item-link">
                        Register
                    </NavLink>
                </li>
                <li className="Main-authNav__list-item">
                    <NavLink to="login" className="Main-authNav__list-item-link">
                        Login
                    </NavLink>
                </li>                
            </ul>
        </nav>
    )
};

export default AuthNav;