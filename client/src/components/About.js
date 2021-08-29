import React from 'react'
import Intro_Donator from './Imgs/Cat/Intro_Donator.jpg'
import Lasse from './Imgs/Team/Lasse.png'
import Nadine from './Imgs/Team/Nadine.png'
import Marian from './Imgs/Team/Marian.png'

const About = (props) => {
    return (
        <div className="container">
            <div className="Intro-Module">
                <img src={Intro_Donator} alt="Homeless man on the streets"/>
                <div className="Text-Element">
                    <h1 className="center">You care about us? </h1> 
                    <p className="italic">Let us introduce ourselves to you.
                     <br/>We all participated in the Digital Shaper Programm of TechLabs in 2021. We joined the WebDev track and chose 'Hand Over' as topic for our project work.</p>
                </div>  
            </div>

            <div className="About">
                <h3>That's us:</h3>
                <ul className="About-Us">
                    <li><img className="About-Imgs" src={Lasse} alt=""/>
                        <h4 className="About-Text">Lasse Jantsch</h4>
                        <p className="About-Text">Responsible for backend and its connection to the frontend.</p>
                    </li>
                    <li>
                        <img className="About-Imgs" src={Nadine} alt=""/>
                        <h4 className="About-Text">Nadine Chabrié</h4>
                        <p className="About-Text">Responsible for frontend, content and UX-design.</p>
                    </li>
                    <li>
                        <img className="About-Imgs" src={Marian} alt=""/>
                        <h4 className="About-Text">Marian Gajda</h4>
                        <p className="About-Text">Professional techie and the most amazing mentor.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
