import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav>
            <ul className="Main-nav">
                <li className="Nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="Nav-item"><NavLink to="register">Register</NavLink></li>
                <li className="Nav-item"><NavLink to="login">Login</NavLink></li>
                <li className="Nav-item"><NavLink to="contacts">Contacts</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navigation;
