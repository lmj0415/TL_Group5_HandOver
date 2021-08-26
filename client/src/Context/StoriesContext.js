import React, {createContext, useContext, useState, useEffect} from "react"

const StoryContext = createContext()

export const StoryContextProvider = props => {

    const [storiesData, setStoriesData] = useState()
    const [storyData, setStoryData] = useState()
    const [loading, setLoading] =  useState(true)

    useEffect(() => {
        getStoriesData()
    },[])

    const getStoriesData = async () => {
        try {
            const dres = await fetch("http://localhost:9000/cms/stories" )
            let data = await dres.json()
            const sortedData = await data.reverse()
            setStoriesData(sortedData)
            return 
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            return
        }  
    }

    const getStoryData = async (id) => {
        try {
            const dres = await fetch("http://localhost:9000/cms/stories/"+ id )
            let data = await dres.json()
            setStoryData(data)
            return 
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            return
        }  
    }

    return(
        <StoryContext.Provider value={{
            storiesData,
            storyData,
            loading,
            setLoading,
            getStoryData
        }}>
            {props.children}
        </StoryContext.Provider>
    )
}

export const useStoryContext = () => {
    return useContext(StoryContext)
}