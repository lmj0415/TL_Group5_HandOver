import React from 'react'
import {Link} from 'react-router-dom'
import Gastro from './Imgs/Home/Gastro.jpg'
import Needy from './Imgs/Home/Needy.jpg'
import Donator from './Imgs/Home/Donator.jpg'
import Map from "./Imgs/Home/Map.jpg"
import StorySlider from './Slider/StorySlider'
import ImgSlider from './Slider/ImgSlider'


import IntroModule from './IntroModule'

const Home = () => {
    return (
        <div className="container">
            <IntroModule 
                subheading= "A social Project to enrich our society"
                heading= {<> Yes, we care. <br/> What about you? </> } />
            <div className="Brand-Text">
                <h3>Together we are better. <br/>Let's enrich social life.</h3>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>

            <ImgSlider/>

            <div className="Target-Groups">
                <div className="Target-Group-1">
                    <Link to="/gastro">
                        <img src={Gastro} alt="Woman in backer shop"/>
                        <h2 className="Title-Group-1">Gastro</h2>
                        <button className="btn-1"> Learn more ❯</button>
                    </Link>
                </div>
                <div className="Target-Group-2">
                    <Link to="/donator">
                        <img src={Donator} alt="Money in hands"/>
                        <h2 className="Title-Group-2">Donator</h2>
                        <button className="btn-2"> Learn more ❯</button>
                    </Link>
                </div>
                <div className="Target-Group-3">
                    <Link to="/needy">
                        <img src={Needy} alt="Homeless on the streets"/>
                        <h2 className="Title-Group-3">Needy</h2>
                        <button className="btn-3"> Learn more ❯</button>
                    </Link>
                </div>
            </div>

            <div className="SEO-Text">
                <h3>Together we are better. <br/>Let's enrich social life.</h3>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>

            <StorySlider/>

            <div className="SEO-Text">
                <h3>Together we are better. <br/>Let's enrich social life.</h3>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>
            <Link to="/map">
                <div className="Intro-Module">
                    <img src={Map} alt="map"/>
                    <div className="Text-Element story ">
                        <h1 className="center"> Find Locations</h1> 
                    </div>
                    <button  className="mapBtn">More ❯</button> 
                </div>
            </Link>
                
        </div>



    )
}


export default Home
