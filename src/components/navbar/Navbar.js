import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar">
        <div className="container">
            <div className="nav">
                <div className="logo">
                    <img src="images/logo.png"/>
                </div>
                <div className="nav_items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><Link to="/blogpage">Blog</Link></li>
                        <button className="nav_btn">Contact us</button>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar