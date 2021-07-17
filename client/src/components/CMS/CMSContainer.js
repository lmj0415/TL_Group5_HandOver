import React from "react" 
import { Switch, Route, Link } from "react-router-dom"

import ShowTable from "./ShowTable"
import UseMethode from "./UseMethode"


function CMSContainer(props) {

    return(
        <div className="cmsContainer" >
            <nav className= "cmsNav">
                <Link to="/cms/stories">
                    <div className="cmsNavE" name="stories" onClick={props.handleNav}>
                        <h5>Stories</h5>
                    </div>
                </Link>
                <Link to="/cms/messages">
                    <div className="cmsNavE" name="messages" onClick={props.handleNav}>
                        <h5>Messages</h5>
                    </div>
                </Link>
            </nav>
                <Switch>
                    <Route exact path="/cms/:table">
                        <ShowTable 
                            data={props.tData.body} 
                            methode={props.tData.methode}
                            meta= {props.tData.meta} />
                    </Route>
                    <Route path="/cms/:table/:methode">
                        <UseMethode data={props.data} />
                    </Route>
                </Switch>
            
        </div>
    )
    
}

export default CMSContainer