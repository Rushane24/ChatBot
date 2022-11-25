import React, { Component } from 'react';
import image from './VITlogo.png';
export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="nav-brand"><img src={image}/></a>
        <ul>
            <li><a href="#" className="nav-items">HOME</a></li>
            <li><a href="#Features" className="nav-items">ABOUT</a></li>
            <li><a href="#Contact" className="nav-items">CONTACT</a></li>
            <li><button className="nav-item-register" >REGISTER</button></li>
        </ul>
    </nav>
}

/**
 * <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
 */