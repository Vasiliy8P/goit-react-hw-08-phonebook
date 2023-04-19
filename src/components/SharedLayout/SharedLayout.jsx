import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import './SharedLayout.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className="Container">
            <header className="Header">
                <Navigation /> 
                {!isLoggedIn
                    ? <AuthNav />
                    : <UserMenu />
                }            
            </header>
            <Suspense fallback={<div><Loader /></div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;