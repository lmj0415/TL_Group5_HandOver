import React, {useEffect} from 'react'
import Intro_Needy from './Imgs/Cat/Intro_Needy.jpg'
import {Link} from 'react-router-dom'
import Map from "./Imgs/Home/Map.jpg"
import FAQNeedy from './FAQs/FAQ-Needy'

const Needy = () => {
   
    useEffect(()=>{
        window.scrollTo(0,0)
    })
   
    return (
     <div className="container">
        <div className="Intro-Module">
            <img src={Intro_Needy} alt="Homeless man on the streets"/>
            <div className="Text-Element">
                <h1 className="center">Need a hand?</h1> 
                <p className="italic">Having trouble affording a hot meal or a hot coffee lately? Let us offer you a hand. Thanks to many others who are willing to support you can get a free meal or coffee in participating locations.</p>
            </div>  
        </div>

        <div className="Brand-Text">
            <h3>Together we are better.</h3>
            <p>Fate is not always kind. Some have to face difficulties in live which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
               <br/>Thanks to our community we can hand you a coffee or meal for free.</p>
        </div>

        <FAQNeedy/>

        <Link to="/map">
            <div className="Map-Element">    
                <div className="Intro-Module">
                    <img src={Map} alt="map"/>
                    <div className="Text-Element story ">
                        <h1 className="center"> Find all participating partners here</h1> 
                    </div>
                    <button  className="mapBtn">To the locations ❯</button> 
                </div>
             </div>   

            </Link>

    </div>    
    )
}

export default Needy