import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={require('../images/logo.png')} alt="logo" width="150px" />
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Find a nanny</Link>
            <Link to="/">Apply for job</Link>
        </div>

    </div>
  )
}

export default Navbar