import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
    
    return (
        <div className="nav-header">
            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
            <h1 id="fh5co-logo"><a href="/">Jalsa</a></h1>
            <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                    <li><Link to="/">Home</Link></li>
                    
                    <li><a href="/Facility">Facilities</a></li>
                    <li><Link to="/Allblogs">Memories</Link></li>
                    <li><Link to="/ContactUs">Contact</Link></li>
                    <li><a href="http://localhost:5000/logout">Logout</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
