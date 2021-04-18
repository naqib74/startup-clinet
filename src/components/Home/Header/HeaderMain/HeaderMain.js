import React from 'react';
import Navbar from '../Navbar/Navbar';

const HeaderMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='content d-flex align-items-center justify-content-center mt-5 pt-5'>
                <div>
                    <h1 className='text-center'>Top Class consulting help for <br /> grow up Business</h1>
                    <p className='text-center'>We provides always our best services for our clients</p>
                    <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary ">Discover More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;