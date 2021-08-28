import React from "react";
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

import MapModal from "./MapModal";

import { useMapContext } from "../Context/MapContext";

const GOOGLE_API_KEY = "AIzaSyACwa-ZJLf5s8iN3mjG8YJ_pBDrntB4FKs";



function Map (){

    const { center, showCity, cityData, zoom, mapData, modal, location, closeModal, showModal} = useMapContext()

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY
    })
 
    const icon = (id) => {

        const scale = modal && id===location._id? 70: 40

        const icon = {
            url: process.env.PUBLIC_URL + `/Icons/marker-icon.svg`, 
            scaledSize: new window.google.maps.Size(scale, scale), 
            anchor: new window.google.maps.Point(scale/2, scale) 
        }
        return icon
    };

    const CustomMarker = (props) => {
        const {id} = props;
    
        const onMarkerClick = () => {
            showModal(id)
        };
    
        return (
            <Marker
                key={id}
                icon={icon(id)}
                opacity={modal? id===location._id? 1:0.8:1}
                onClick={onMarkerClick}
                {...props}
            />
        
        );
    };

    const marker = mapData==null? <></>: 
    mapData.map( element  =>{
        return(
            <CustomMarker
                id={element._id}
                position={element.position}
            />
        )
    })

    return isLoaded ? (
        <div className={`map`}>
            <div className="mapNav">
                <div key = "hamburg"  className={`mapNavE ${cityData.hamburg===center? "act": null}`} onClick={showCity}>
                    <img id="hamburg"src= {process.env.PUBLIC_URL + `/Icons/hamburg-icon.svg`}  alt = "hamburg-icon"/>
                </div>
                <div key = "berlin"  className={`mapNavE ${cityData.berlin===center? "act": null}`} onClick={showCity}>
                    <img id="berlin"src= {process.env.PUBLIC_URL + `/Icons/berlin-icon.svg`}  alt = "berlin-icon"/>
                </div>
                <div key = "munich"  className={`mapNavE ${cityData.munich===center? "act": null}`} onClick={showCity}>
                    <img id="munich"src= {process.env.PUBLIC_URL + `/Icons/munich-icon.svg`}  alt = "muich-icon"/>
                </div>
            </div>  
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={zoom}
                onClick={closeModal}
                options= {{
                    zoomControl: false,
                    fullscreenControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                        
                }}
            >
                {marker}
            </GoogleMap>
            {modal? <MapModal />: null}
        </div>         
    ) : <></>
}

export default React.memo(Map)
