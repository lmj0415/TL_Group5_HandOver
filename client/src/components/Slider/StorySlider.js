import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Slider.css'
import StorySliderBtn from './StorySliderBtn'
import dataStorySlider from './dataStorySlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataStorySlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataStorySlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataStorySlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataStorySlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                    <Link to={obj.link}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/${obj.img}`} />
                        <h3>{obj.title}</h3>
                        <p>{obj.post}</p>
                        <button className="StoryBtn">{obj.CTA}</button> 
                    </Link>
                    </div>
                )
            })}
            <StorySliderBtn moveSlide={nextSlide} direction={"next"} />
            <StorySliderBtn moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}