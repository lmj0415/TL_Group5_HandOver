import React, {useState} from 'react'
import './Slider/Slider.css'
import dataStorySlider from './Slider/dataStorySlider'

export default function Story1() {
    let story = dataStorySlider[0] /* to do: aus URL auslesen lassen  */
return(
    <div>
    <div className="Intro-Module">
            <img src={process.env.PUBLIC_URL + `/Imgs/${story.img}`} alt="Man looking into the streets"/>
            {/* <div className="Text-Element-Background"></div> */}
            <div className="Text-Element">
                <p>A social project to enrich our society.</p>
                <h1 className="center">{story.title}</h1> 
            </div>
        
        </div>
        <div className="Brand-Text">
            <h3>Together we are better. <br/>Let's enrich social life.</h3>
            <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
            <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
        </div>
    </div>



    // const [slideIndex] = useState(2)


    // return (
    //     <div className="container-slider">
    //         {dataStorySlider.map((obj, index) => {
    //             return (
    //                 <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
    //                     <img src={process.env.PUBLIC_URL + `/Imgs/${obj.img}`} />
    //                     <h2>{obj.title}</h2>
    //                     <p>{obj.subTitle}</p>

    //                     <div className="Textblock">
    //                         <p>{obj.story}</p>
    //                     </div>                   
    //                 </div>
    //                     )}
            
    //                          )} 
           
    //     </div>

     )
    }