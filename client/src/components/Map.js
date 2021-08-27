import React from "react";
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import MapModal from "./MapModal";

import { useMapContext } from "../Context/MapContext";

const GOOGLE_API_KEY = "AIzaSyACwa-ZJLf5s8iN3mjG8YJ_pBDrntB4FKs";



function Map (){

    const { center, zoom, mapData, modal, location, closeModal, showModal} = useMapContext()

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY
    })
    
    const [map, setMap] = React.useState(null)

    
    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])
    
    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    const CustomMarker = (props) => {
        const {id} = props;
    
        const onMarkerClick = () => {
            showModal(id)
        };
    
        return (
            <Marker
                key={id}
                opacity={modal? id===location._id? 1:0.5:1}
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
            <GoogleMap
                // onLoad={onLoad}
                // onUnmount={onUnmount}
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
