import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AddService from '../AddService/AddService';

const Admin = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <AddService></AddService>
        </div>
    );
};

export default Admin;