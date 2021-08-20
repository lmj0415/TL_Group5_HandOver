import React from 'react'
import Logo from './Imgs/Icons/logo.png'
import {Link} from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <nav className="nav-wrapper">
        <div className="container">
            <Link to="/">
              <img src={Logo} alt="Hand Over Logo"/>
            </Link>
            <h1>Hand Over</h1>
            <h2>Yes, we care!</h2>
            <Menu right>
              <Link id="home" className="menu-item" to="/">Home</Link>
              <Link id="needy" className="menu-item" to="/needy">Needy</Link>
              <Link id="donator" className="menu-item" to="/donator">Donator</Link>
              <Link id="gastro" className="menu-item" to="/gastro">Gastro</Link>
              <Link id="contact" className="menu-item" to="/contact">Contact</Link>
              {/* <Link onClick={ this.showSettings } className="menu-item--small" to="">Settings</Link> */}
            </Menu>
        </div>
      </nav>

    );
  }
}
export default Navbar