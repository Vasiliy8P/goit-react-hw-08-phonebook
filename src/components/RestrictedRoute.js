import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/authSelectors";

export const RestrictedRoute = ({ component: Component, redirectTo="/"}) => {
    const isloggedIn = useSelector(selectIsLoggedIn);

    return (
        isloggedIn ? <Navigate to={redirectTo} /> : <Component />
    )
};