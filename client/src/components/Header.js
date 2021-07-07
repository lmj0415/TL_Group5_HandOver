import React from 'react';
import Navbar from './Navbar'


const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <Navbar/>
        </header>
    )
}

export default Header
