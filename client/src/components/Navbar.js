import React from 'react'

const Navbar = () => {
    return (
       <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a className="brand-logo">Hand Over</a>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/needy">Needy</a></li>
                <li><a href="/donator">Donator</a></li>
                <li><a href="/gastro">Gastro</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div> 
       </nav>
    )
} 


export default Navbar
