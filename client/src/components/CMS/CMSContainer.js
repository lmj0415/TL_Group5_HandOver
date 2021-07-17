import React from "react" 
import { Switch, Route, Link } from "react-router-dom"

import ShowTable from "./ShowTable"
import UseMethode from "./UseMethode"


function CMSContainer(props) {

    return(
        <div className="cmsContainer" >
            <nav className= "cmsNav">
                <Link to="/cms/stories">
                    <div className="cmsNavE" name="stories" >
                        <h5>Stories</h5>
                    </div>
                </Link>
                <Link to="/cms/messages">
                    <div className="cmsNavE" name="message" >
                        <h5>Messages</h5>
                    </div>
                </Link>
            </nav>
                <Switch>
                    <Route exact path="/cms/:table">
                        <ShowTable data={props.data} />
                    </Route>
                    <Route path="/cms/:table/:methode"> 
                        <UseMethode data={props.data} />
                    </Route>
                </Switch>
            
        </div>
    )
    
}

export default CMSContainer