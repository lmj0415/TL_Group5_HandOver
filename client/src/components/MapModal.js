import React from "react"
import { useMapContext } from "../Context/MapContext"

function MapModal() {

    const {location} = useMapContext()

    if(location == null) {
        return <div/>
    }

    const adress = location.adress.split(",")
    
    return(
        <div className="mapModal">
            <h5>{location.name}</h5>
            <div className="c">
                <div className="container">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>{adress[0]}<br/>{adress[1]}</p>
                </div>
                <div className="container">
                    <i class="far fa-clock"></i>
                    <p>Mo-Fr: 07:00-19:00 <br/>Sa: 07:00-23:00</p>                    
                </div>
                <div className="container">
                    <i class="fas fa-phone-alt"></i>
                    <p>tel: <a href= "tel:01567234234">01567/234234</a> <br/> email: <a href="mailto:example@example.com">example@example.com</a> </p>                
                </div>
            </div>
        </div>
    )
}

export default MapModal