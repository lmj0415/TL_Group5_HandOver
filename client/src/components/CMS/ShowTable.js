import React from "react"

import TableElement from "./TableElement"


function ShowTable(props) {

  
    
    

    const TableHead = props.methode.map(element => {
        if (element.tag === "<th>") {
            return (<th className={element.className} >{element.name}</th>)
        }
    }) 

    const TableBody = props.data.map(element => {
        return(
            <TableElement 
                name={element.name} 
                title={element.title}
                date={element.date}
                methode={props.methode} />)
    })



    return(
        <div className="cmsContent">
            <div className="cmsHead">
                <h4>{props.meta.title}s</h4>
                <button className="btn waves-effect waves-light">New {props.meta.title}</button>
            </div>
            <table className= "cmsTable">
                    <thead>
                        <tr>
                            {TableHead}
                        </tr>
                    </thead>
                    <tbody>
                        {TableBody}
                    </tbody>
                </table>
        </div>
    )
}

export default ShowTable