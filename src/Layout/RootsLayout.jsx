import React from 'react';
import { Outlet } from 'react-router';

const RootsLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default RootsLayout;