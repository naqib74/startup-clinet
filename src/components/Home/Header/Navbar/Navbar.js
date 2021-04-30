import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/cover.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img style={{width:'170px',height:'80px'}} src={logo} alt=""/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">BLOG</a>
                        </li>
                        <li class="nav-item">
                           <Link to='/admin'> <a class="nav-link active" href="#">ADMIN</a></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">CONTACT US</a>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;