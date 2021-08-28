import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Slider.css'
import StorySliderBtn from './StorySliderBtn'
import { useStoryContext } from '../../Context/StoriesContext'

export default function Slider() {

    const {storiesData, loading} = useStoryContext()

    const [slideIndex, setSlideIndex] = useState(1)

    if (loading) {
        return(
            <div className="container-slider">
    
            </div>
        )
    } else {

        const dataStorySlider = storiesData.slice(0,3)

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
                            key={obj._id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <Link to={"/story/" + obj._id}>
                                <img src={process.env.PUBLIC_URL + `/Imgs/${obj.img}`} alt={obj.img}/>
                                <h2>{obj.title}</h2>
                                <p>{obj.subtitle}</p>
                                <button className="StoryBtn">Read more ❯</button> 
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
}