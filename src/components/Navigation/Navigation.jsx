import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav>
            <ul className="Main-nav">
                <li className="Nav-item">
                    <NavLink to="/" className="Nav-item__link">
                        Home
                    </NavLink>
                </li>
                <li className="Nav-item">
                    <NavLink to="contacts" className="Nav-item__link">
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
