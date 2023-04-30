import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home-container">
            <p className="Home-text">This is your fist personal Phonebook application</p>
            <p className="Home-text-link">Please {<Link to="register">register</Link>} or <Link to="login">login</Link> to use the Phonebook</p>
        </div>
    )
};

export default Home;