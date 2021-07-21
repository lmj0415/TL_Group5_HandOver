import React from 'react'
import Logo from '../logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className="nav-wrapper">
        <div className="container">
            <img src={Logo} alt="Hand Over Logo"/>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/needy">Needy</Link></li>
                <li><Link to="/donator">Donator</Link></li>
                <li><Link to="/gastro">Gastro</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div> 
       </nav>
    )
} 


export default Navbar
