import React, { useState } from  'react';
import { Switch, Route, Link } from 'react-router-dom';

const NavBar = props => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand">Navbar</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home Page</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add/product">Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="https://www.google.com/">Pricing</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;