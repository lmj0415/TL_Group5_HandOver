import React from "react"
import { Link } from "react-router-dom"
import Logo from './Imgs/Icons/logo.png'

import { useCMSContext } from "../Context/CMSContext"


function CMSNav() {

    const {table, showTable} = useCMSContext()

    return(
        <div className= "cmsNav">
            <Link to="/">
                <div className= "cmsNavI">
                    <img src={Logo} alt="Hand Over Logo"/>
                </div>
            </Link>
            <div className={`cmsNavE ${table==="stories"? "act": ""}`} id="stories" onClick={showTable}>
                <h5>STORIES</h5>
            </div>
            <div className={`cmsNavE ${table==="messages"? "act": ""}`} id="messages" onClick={showTable}>
                <h5>MESSANGES</h5>
            </div>
            <div className={`cmsNavE ${table==="map"? "act": ""}`} id="map" onClick={showTable}>
                <h5>MAP</h5>
            </div>
        </div>
    )
}

export default CMSNav