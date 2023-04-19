import { NavLink } from "react-router-dom";
import "./AuthNav.css";

const AuthNav = () => {
    return (
        <nav>
            <ul className="Main-authNav">
                <li className="AuthNav-item">
                    <NavLink to="register" className="AuthNav-item__link">
                        Register
                    </NavLink>
                </li>
                <li className="AuthNav-item">
                    <NavLink to="login" className="AuthNav-item__link">
                        Login
                    </NavLink>
                </li>                
            </ul>
        </nav>
    )
};

export default AuthNav;