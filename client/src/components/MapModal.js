import React from "react"
import { useMapContext } from "../Context/MapContext"

function MapModal() {

    const {location} = useMapContext()

    if(location == null) {
        return <div/>
    }

    const adress = location.adress.split(",")
    const openingHours = location.openingHours.split(";")
    
    return(
        <div className="mapModal">
            <h5>{location.name}</h5>
            <div className="c">
                <div className="container">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{adress[0]}<br/>{adress[1]}</p>
                </div>
                <div className="container">
                    <i className="far fa-clock"></i>
                    <p>{openingHours[0]}<br/>{openingHours[1]}</p>                    
                </div>
            </div>
        </div>
    )
}

export default MapModal