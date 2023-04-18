import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <b>Please {<Link to="register">register</Link>} or <Link to="login">login</Link> to use the Phonebook</b>
        </div>
    )
};

export default Home;