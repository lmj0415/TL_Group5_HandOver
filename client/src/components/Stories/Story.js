import React, {useEffect} from 'react'
import { useStoryContext } from '../../Context/StoriesContext'

export default function Story() {
    
    const { storyData, setLoading, getStoryData } = useStoryContext()
    
    useEffect(() => {
        setLoading(true)
        let href = window.location.href
        const id =href.substr(href.lastIndexOf("/") + 1)
        getStoryData(id)
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

        return(
           <div>
                {storyData == null || storyData[0] == null  ? 
                <h2>Loading...</h2>
                :
                <div>
                    <div className="Intro-Module">
                        <img src={process.env.PUBLIC_URL + `/Imgs/${storyData[0].img}`} alt="Man looking into the streets"/>
                        <div className="Text-Element story">
                            <h1 className="center">{storyData[0].title}</h1> 
                        </div>
                    </div>
                    <div className="Brand-Text">
                        <h3>{storyData[0].subtitle}</h3>
                        <p>{storyData[0].story}</p>
                    </div>
                </div>
                }
            </div>
            
        )
    // }
}