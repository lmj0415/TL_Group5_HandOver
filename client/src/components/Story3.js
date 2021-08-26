import React from 'react'
import './Slider/Slider.css'
import dataStorySlider from './Slider/dataStorySlider'

export default function Story3() {
    let story = dataStorySlider[0] /* to do: aus URL auslesen lassen  */
return(
    <div>
    <div className="Intro-Module">
            <img src={process.env.PUBLIC_URL + `/Imgs/${story.img}`} alt="Man looking into the streets"/>
            {/* <div className="Text-Element-Background"></div> */}
            <div className="Text-Element-Intro">
                
                <h1 className="center">{story.title}</h1> 
                <p>{story.subTitle}</p>
            </div>
        
        </div>
        <div className="Brand-Text">
            <h3>Together we are better. <br/>Let's enrich social life.</h3>
            <p>{story.story}</p>
        </div>
    </div>
)}