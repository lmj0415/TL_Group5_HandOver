import React from "react"

import { useCMSContext } from "../Context/CMSContext"

function CMSNav() {

    const {showTable} = useCMSContext()

    return(
        <nav className= "cmsNav">
            <div className="cmsNavE" id="stories" onClick={showTable}>
                <h5>Stories</h5>
            </div>
            <div className="cmsNavE" id="messages" onClick={showTable}>
                <h5>Messages</h5>
            </div>
        </nav>
        )
}

export default CMSNav