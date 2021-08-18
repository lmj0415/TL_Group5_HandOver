import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Slider.css'
import ImgSliderBtn from './ImgSliderBtn'
import dataImgSlider from './dataImgSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataImgSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataImgSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataImgSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="ImgSliderContainer">
        <div className="container-slider-img">
            {dataImgSlider.map((obj, index) => {
               console.log (slideIndex,index)
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1? "slide active-anim" : ( 
                       ( slideIndex === index) || (slideIndex === index + dataImgSlider.length)? "slide next-active-anim" : "slide"
                    ) }
                    >
                    <Link to={obj.link}>
                        <img className="dataImg"
                        src={process.env.PUBLIC_URL + `/Imgs/slide${index + 1}.jpg`} 
                        />                      
                    </Link>
                    </div>
                )
            })}
            <div className="ImgSliderNavigation">
                <div className="ImgSliderBubble"></div>
                <ImgSliderBtn moveSlide={nextSlide} direction={"next"} />
                <ImgSliderBtn moveSlide={prevSlide} direction={"prev"}/>
           
                <div className="container-dots">
                    {Array.from({length: 3}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div> 
            </div>

        </div>
    </div>
    )
}