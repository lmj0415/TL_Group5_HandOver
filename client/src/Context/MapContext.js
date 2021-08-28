import React, {createContext, useContext, useState, useEffect} from 'react'

const MapContext = createContext()

export const MapContextProvider = (props) => {

    const [zoom, setZoom] = useState(10)
    const [cityData, setCityData] =useState({
        hamburg:{
            lat: 53.554, 
            lng:  9.984
        },
        berlin: {
            lat: 52.519482739619214, 
            lng: 13.389776631881091
        },
        munich: {
            lat: 48.13772642115075, 
            lng: 11.572166623253272  
        }
    })
    const [center, setCenter] = useState()

    const [mapData, setMapData] = useState([])
    const [location, setLocation] = useState(null)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getMapData()
        setCenter(cityData.hamburg)
    },[])

    useEffect(() => {
        if (location != null){
            const position = location.position.split(",")
            console.log(position[0], position[1])
            setCenter({
                lat: parseFloat(position[0]),
                lng: parseFloat(position[1])
            })
        }
    }, [location])
        

    const showModal = async (id) => {
        await getLocationData(id)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const showCity = (event) => {
        const city = event.target.id
        setCenter(cityData[city])
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
            showCity,
            cityData,
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



