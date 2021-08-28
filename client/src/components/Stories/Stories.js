import React from 'react'
import {Link} from "react-router-dom"
import { useStoryContext } from '../../Context/StoriesContext'

export default function Stories() {

    const {storiesData} = useStoryContext()

    const stories = storiesData == null || storiesData[0] == null  ? 
        <h2>Loading...</h2>
        : 
        storiesData.map((obj) => {
            return(
                <div className="storieContainer" id={obj._id}>
                    <Link to={"/story/" + obj._id}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/${obj.img}`} alt={obj.img}/>
                        <div className ="storiesContent">
                            <h2 className="h2">{obj.title}</h2>
                            <p>{obj.subtitle}</p>
                            <button>Read more ❯</button>
                        </div>
                         
                    </Link>
                </div>
            )
        })
    

    return(
        <div>
            {stories}
        </div>

    )
}