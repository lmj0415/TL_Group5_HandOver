import React from 'react'
import Logo from './Imgs/Icons/logo.png'
import {Link} from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  // constructor(){
  //   super()
  //   this.state={
  //     menuOpen:false
  //   }
  //   this.handleMenuClick=this.handleMenuClick.bind(this)
  // }
  // handleMenuClick (event) {
  //   this.setState({menuOpen: true});
  //   this.setState({menuOpen: false});
  // }

  render () {
    return (
      <nav className="nav-wrapper">
        <div className="container">
            <Link to="/">
              <img src={Logo} alt="Hand Over Logo"/>
            </Link>
            <h1>Hand Over</h1>
            <h2>Yes, we care!</h2>
            <Menu right isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
              <Link id="home" onClick={() => this.closeMenu()}  className="menu-item" to="/">Home</Link>
              <Link id="gastro" onClick={() => this.closeMenu()} className="menu-item" to="/gastro">Gastronomist</Link>
              <Link id="donator" onClick={() => this.closeMenu()} className="menu-item" to="/donator">Donator</Link>
              <Link id="needy" onClick={() => this.closeMenu()} className="menu-item" to="/needy">Needy</Link>
              <Link id="stories" onClick={() => this.closeMenu()} className="menu-item" to="/stories">Stories</Link>
              <Link id="map" onClick={() => this.closeMenu()} className="menu-item" to="/map">Map</Link>
              <Link id="contact" onClick={() => this.closeMenu()} className="menu-item" to="/contact">Contact</Link>

            </Menu>
        </div>
      </nav>

    );
  }
}
export default Navbar