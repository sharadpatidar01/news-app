import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css"


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-child-1'>
                <img className='nav-img' src="logo.png" alt="logo" />
            </div>
            <div className='navbar-child-2'>
                <Link className='nav-links' to="/" >HOME</Link>
                <Link className='nav-links' to="/about" >ABOUT</Link>
                <Link className='nav-links' to="/contact" >CONTACT</Link>
            </div>
            {/* <div className='navbar-child-3'>
                <Link className='form-btn'to="/form" >User Detail Form</Link>
            </div> */}
        </div>
    )
}
