import React from 'react'
import Logo from '../logo.png'
import { bubble as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <nav className="nav-wrapper">
        <div className="container">
            <img src={Logo} alt="Hand Over Logo"/>
            <h1>Hand Over</h1>
            <h2>Yes, we care!</h2>
            <Menu right>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/needy">Needy</a>
              <a id="about" className="menu-item" href="/donator">Donator</a>
              <a id="about" className="menu-item" href="/gastro">Gastro</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        </div>
      </nav>

    );
  }
}
export default Navbar