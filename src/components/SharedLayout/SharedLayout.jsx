import Loader from "components/Loader";
import Navigation from "components/Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import './SharedLayout.css';

const SharedLayout = () => {
    return (
        <div className="Container">
            <header className="Header">
                <Navigation />  
            </header>
            <Suspense fallback={<div><Loader /></div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default SharedLayout;