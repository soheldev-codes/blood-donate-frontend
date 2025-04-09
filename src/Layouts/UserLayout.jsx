import React from 'react';
import NavMenu from '../Components/NavMenu/NavMenu';
import { Outlet } from 'react-router';

const UserLayout = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default UserLayout;