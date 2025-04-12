import React from 'react';
import NavMenu from '../Components/NavMenu/NavMenu';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
        </div>
    );
};

export default AuthLayout;