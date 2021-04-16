import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <div className=' d-flex align-items-center justify-content-center mt-5 pt-5'>
            <div className=''>
            <h1 className='text-center'>Top Class consulting help for <br/> grow up Business</h1>
                <p className='text-center'>We provides always our best services for our clients</p>
                <button className="btn btn-primary">Discover More </button>
            </div>
            </div>
        </div>
    );
};

export default Header;