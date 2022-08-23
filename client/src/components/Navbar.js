import React from 'react'
import {Link} from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={require('../images/logo.png')} alt="logo" width="150px" />
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/find-a-nanny">Find a nanny</Link>
            <Link to="/apply-for-job">Apply for job</Link>
        </div>
        <div className="menu-controls">
            <BiMenuAltRight className="menu-icon"/>
            <GrFormClose className="close-icon"/>
        </div>

    </div>
  )
}

export default Navbar