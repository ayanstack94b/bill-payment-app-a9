import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';

const RootsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootsLayout;