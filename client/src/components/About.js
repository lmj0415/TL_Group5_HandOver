import React from 'react'
import Intro_Donator from './Imgs/Cat/Intro_Donator.jpg'

const About = (props) => {
    return (
        <div className="container">
            <div className="Intro-Module">
                <img src={Intro_Donator} alt="Homeless man on the streets"/>
                <div className="Text-Element">
                    <h1 className="center">You care about us? </h1> 
                    <p className="italic">Let us introduce ourselves to us personal.</p>
                </div>  
            </div>

            <div className="Brand-Text">
                <h3 className="center">That is us:</h3>
                <p>We are a team which was build due to a TechLabs program where we learned programming in a WebDev track in 2021. </p>
            <ul>
                <li>Marian Gajda </li>
                <li>Lasse Jantsch</li>
                <li>Nadine Chabrié</li>
            </ul>
            </div>

        </div>
    )
}

export default About
