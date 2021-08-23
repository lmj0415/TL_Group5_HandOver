import React from 'react'
import {Link} from 'react-router-dom'
import Contact from './Imgs/Icons/contact.svg'
import About from './Imgs/Icons/user.svg'
// import Maps from './Imgs/Icons/location_02.svg'


const Footer = () => {
    return (
        <div className="footer-container">
            <h4 className="center">Our Services</h4>
            <ul className="footer-menu">
                <Link id="contact" className="footer-item" to="/contact">
                    <img src={Contact} alt=""/>Contact</Link>
                <Link id="about" className="footer-item" to="/about">
                    <img src={About} alt=""/>About us</Link>
            </ul>
        </div>
    )
}

export default Footer