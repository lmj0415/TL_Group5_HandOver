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
                <p>Fate is not always kind – some people face challenges in their lives which can be difficult to overcome. Not all of us are therefore able to participate in social life due to low income or other challenges and can sometimes not even afford a simple meal or a coffee to go. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>

            <ImgSlider/>

            <div className="Brand-Text">
                <h3>You want to join the <br/>'Hand Over' community?</h3>
                <p>Find all relevant information and answers to your questions in the appropriate categories below. <br/>Let's become stronger together and enjoy life. </p>
            </div>


            <div className="Target-Groups">
                <div className="Target-Group-1">
                    <Link to="/gastro">
                        <img src={Gastro} alt="Woman in backer shop"/>
                        <h2 className="Title-Group-1">Gastronomist</h2>
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
                <h3>What does 'Hand Over' mean to our community? </h3>
                <p>Learn more about the stories of Sven, Jaqueline, Burghardt and other community members. They shared their stories with us to provide insight into their life and history. </p>
            </div>

            <StorySlider/>
            <div className="SEO-Text">
                <h3>You want to know where to find us?</h3>
                <p>In the below linked map you will find all participating restaurants and coffee bars in Hamburg, Berlin and Munich. With a click on the marked spots you will get further details including their address and opening hours.</p>
            </div>
            
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


export default Home
