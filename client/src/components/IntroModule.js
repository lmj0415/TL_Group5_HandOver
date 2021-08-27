import React from "react"

import Intro from './Imgs/Home/Intro.jpg'

function IntroModule(props) {
    return(
        <div className="Intro-Module">
            <img src={Intro} alt="Man looking into the streets"/>
            <div className="Text-Element">
                <p>{props.subheading}</p>
                <h1 className="center">{props.heading}</h1> 
            </div>
        </div>
    )
}

export default IntroModule