import React, {useEffect} from "react" 
import { TableProvider } from "../Context/TableContext"
import { useCMSContext } from "../Context/CMSContext"

import ShowTable from "./ShowTable"
import UseMethode from "./UseMethode"


function CMSContainer() {

    const [table, showTable] = useCMSContext()

    return(
        <div className="cmsContainer" >
            <nav className= "cmsNav">
                <div className="cmsNavE" id="stories" onClick={showTable}>
                    <h5>Stories</h5>
                </div>
                <div className="cmsNavE" id="messages" onClick={showTable}>
                    <h5>Messages</h5>
                </div>
            </nav>
            <div className="cmsContent" >
                <TableProvider>  
                    <ShowTable/>
                </TableProvider>
            </div>
        </div>
    )
    
} 

export default CMSContainer