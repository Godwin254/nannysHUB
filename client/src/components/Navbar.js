import React from 'react'
import {Link} from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import {useState} from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  //handle the state of the navbar
  const handleToggle = () => setIsOpen(!isOpen)


  return (
    <div className="navbar">
        <div className="logo">
            <img src={require('../images/logo.png')} alt="logo" width="150px" />
        </div>
        <div className="nav-links" style={{display: isOpen ? "none" : "flex"}}>
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/find-a-nanny">Find a nanny</Link>
            <Link to="/apply-for-job">Apply for job</Link>
        </div>
        <div className="menu-controls">
            <BiMenuAltRight className="menu-icon" onClick={handleToggle} style={{display: isOpen ? "block" : "none"}}/>
            <GrFormClose className="close-icon" style={{ display: isOpen ? "none" : "block" }} onClick={handleToggle}   />
        </div>

    </div>
  )
}

export default Navbar