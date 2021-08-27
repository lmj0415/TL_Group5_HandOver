import React, {createContext, useContext, useState, useEffect} from 'react'

const MapContext = createContext()

export const MapContextProvider = (props) => {

    const [zoom, setZoom] = useState(10)
    const [center, setCenter] = useState({
        lat: 53.554, 
        lng:  9.984})

    const [mapData, setMapData] = useState([])
    const [location, setLocation] = useState(null)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getMapData()
    },[])

    useEffect(() => {
        if (location != null){
            setCenter(location.position)
        }
    }, [location])
    

    const showModal = async (id) => {
        await getLocationData(id)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const getMapData = async () => {
        try {
            const dres = await fetch("http://localhost:9000/cms/map")
            let data = await dres.json()
            setMapData(data)
            return 
        } catch (err) {
            console.log(err)
        }    
    }

    const getLocationData = async (id) => {
        try {
            const dres = await fetch("http://localhost:9000/cms/map/"+ id)
            let data = await dres.json()
            setLocation(data[0])
            return 
        } catch (err) {
            console.log(err)
        } 
    }

    return(
        <MapContext.Provider value={{
            center,
            setCenter,
            zoom,
            mapData,
            location,
            modal,
            closeModal,
            showModal,
        }}>
            {props.children}
        </MapContext.Provider>
    )
}

export const useMapContext = () => {
    return useContext(MapContext)
}



