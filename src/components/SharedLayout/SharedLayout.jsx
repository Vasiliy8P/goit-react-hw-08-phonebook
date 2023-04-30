import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import './SharedLayout.css';

const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className="Container">
            <header className="Header">                
                <p className="Header__title">Phonebook</p>
                <Navigation /> 
                {!isLoggedIn
                    ? <AuthNav />
                    : <UserMenu />
                }            
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;