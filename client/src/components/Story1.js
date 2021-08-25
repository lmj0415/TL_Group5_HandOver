import React from 'react'
import './Slider/Slider.css'
import dataStorySlider from './Slider/dataStorySlider'

export default function Story1() {
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