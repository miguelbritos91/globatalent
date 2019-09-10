import React from 'react';
import './Navigation.css';
import logo from './logo-globatalent.png';

function Navigation() {
    return(
        <nav className="navbar navbar-light navigation">
            <a className="navbar-brand" href="#">
                <img src={logo} className="d-inline-block align-top" alt="logo-globatalent" />
            </a>
        </nav>
    );
}

export default Navigation;