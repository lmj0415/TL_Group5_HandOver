import React from "react" 
import { Switch, Route, Link } from "react-router-dom"

import ShowTable from "./ShowTabe"
import UseMethode from "./UseMethode"


function CMSContainer(props) {

    

    return(
        <div className="cmsContainer" >
            <nav className= "cmsNav">
                <Link to="/cms/stories">
                    <div className="cmsNavE" id="stories" onClick={props.showTable}>
                        <h5>Stories</h5>
                    </div>
                </Link>
                <Link to="/cms/messages">
                    <div className="cmsNavE" id="messages" onClick={props.showTable}>
                        <h5>Messages</h5>
                    </div>
                </Link>
            </nav>
            <div className="cmsContent" >
                <Switch>
                    <Route exact path="/cms/stories">
                        <ShowTable
                        isLoading = {props.isLoading}
                        meta = {props.sMethode.meta}
                        tHead= {props.sMethode.tableHead}
                        tBody= {props.sMethode.tableBody}

                        tData = {props.sData}

                        sortTable = {props.sortTable}
                        handleButton= {props.handleButton}
                        />
                    </Route>
                    <Route exact path="/cms/messages">
                        <ShowTable
                        isLoading = {props.isLoading}
                        meta = {props.mMethode.meta}
                        tHead= {props.mMethode.tableHead}
                        tBody= {props.mMethode.tableBody}

                        tData = {props.mData}

                        sortTable = {props.sortTable}
                        handleButton= {props.handleButton}
                        />
                    </Route>
                    <Route path="/cms/stories/new">
                        <UseMethode  
                        isLoading = {props.isLoading}
                        meta = {props.sMethode.meta}

                        fData = {props.fData}

                        handleChange = {props.handleChange}
                        />
                    </Route>
                    <Route path="/cms/messages/new">
                        <UseMethode  
                        isLoading = {props.isLoading}
                        meta = {props.mMethode.meta}

                        fData = {props.fData}
                        
                        handleChange = {props.handleChange}
                        />
                    </Route>
                </Switch>
            </div>
        </div>
    )
    
} 

export default CMSContainer