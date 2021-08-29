import React, {useEffect} from 'react'
import Intro_Donator from './Imgs/Cat/Intro_Donator.jpg'
import {Link} from 'react-router-dom'
import Map from "./Imgs/Home/Map.jpg"
import FAQDonator from './FAQs/FAQ-Donator'

const Donator = () => {
   
    useEffect(()=>{
        window.scrollTo(0,0)
    })
   
    return (
     <div className="container">
        <div className="Intro-Module">
            <img src={Intro_Donator} alt="Homeless man on the streets"/>
            <div className="Text-Element">
                <h1 className="center">Donators</h1> 
                <p className="italic">You do care and you are willing to help? That is amazing! Let us explain to you where and how you find the Hand Over partners. </p>
            </div>  
        </div>

        <div className="Brand-Text">
            <h3>Together we are better. <br/>Let's enrich social life.</h3>
            <p>Fate is not always kind. Some of us have to face difficulties in live which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
               <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be handed over to those in need.</p>
        </div>

        <FAQDonator/>
        
        <Link to="/map">
        <div className="Map-Element">    
                <div className="Intro-Module">
                    <img src={Map} alt="map"/>
                    <div className="Text-Element story ">
                        <h1 className="center"> Find all participating partners here.</h1> 
                    </div>
                    <button  className="mapBtn">To the locations ❯</button> 
                </div>
             </div>  
        </Link>
        
    </div>    
    )
}

export default Donator