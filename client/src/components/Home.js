import React from 'react'
import {Link} from 'react-router-dom'
// import Slider_1 from '../Slider_1.jpg'
// import Slider_2 from '../Slider_2.jpg'
// import Slider_3 from '../Slider_3.jpg'
import Gastro from './Imgs/Home/Gastro.jpg'
import Needy from './Imgs/Home/Needy.jpg'
import Donator from './Imgs/Home/Donator.jpg'
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

           
            {/* <div className="carousel">
                              
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Slider_1} alt=""/>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Slider_2} alt=""/>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Slider_3} alt=""/>
                        </li>
                    </ul>
                </div>
                
                <div className="carousel__nav">
                    <div className="carousel__nav__bubble"></div>
                        <button className="carousel__btn carousel__btn--left">
                            <p>❮</p>
                        </button>
                        
                        <button className="carousel__indicator current-slide"></button>
                        <button className="carousel__indicator"></button>
                        <button className="carousel__indicator"></button>
                    
                        <button className="carousel__btn carousel__btn--right">
                            <p>❯</p>
                        </button>
                   
                 </div>

            </div> */}

            <StorySlider/>
                
        </div>



    )
}


export default Home
