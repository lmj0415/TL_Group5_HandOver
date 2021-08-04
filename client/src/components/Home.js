import React from 'react'
import {Link} from 'react-router-dom'
import Intro from '../Intro.jpg'
import Gastro from '../Gastro.jpg'
import Needy from '../Needy.jpg'
import Donator from '../Donator.jpg'
// import Heart from '../Heart.jpg'

const Home = () => {
    return (
        <div className="container">
            <div className="Intro-Module">
                <img src={Intro} alt="Man looking into the streets"/>
                {/* <div className="Text-Element-Background"></div> */}
                <div className="Text-Element">
                    <p>A social project to enrich our society.</p>
                    <h1 className="center">Yes, we care.<br/>What about you?</h1> 
                </div>
               
            </div>
            <div className="Brand-Text">
                <h2>Together we are better. <br/>Let's enrich social life.</h2>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>
            
            <div className="Target-Groups">
                <div className="Target-Group-1">
                    <Link to="/gastro">
                        <img src={Gastro} alt="Woman in backer shop"/>
                        <h3 className="Title-Group-1">Gastro</h3>
                        <button className="btn-1"> Mehr erfahren</button>
                    </Link>
                </div>
                <div className="Target-Group-2">
                    <Link to="/donator">
                        <img src={Donator} alt="Money in hands"/>
                        <h3 className="Title-Group-2">Donator</h3>
                        <button className="btn-2"> Mehr erfahren</button>
                    </Link>
                </div>
                <div className="Target-Group-3">
                    <Link to="/needy">
                        <img src={Needy} alt="Homeless on the streets"/>
                        <h3 className="Title-Group-3">Needy</h3>
                        <button className="btn-3"> Mehr erfahren</button>
                    </Link>
                </div>
            </div>

            <div className="SEO-Text">
                <h2>Together we are better. <br/>Let's enrich social life.</h2>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>
        </div>
    )
}


export default Home
