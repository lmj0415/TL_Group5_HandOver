import React from "react"
import {Link} from "react-router-dom"



function ShowTable(props) {

  
    
    

    const TableHead = props.methode.map(element => {
        if (element.tag === "<th>") {
            return (<th className={element.className} >{element.name}</th>)
        }
    }) 

    const TableBody = props.data.map(element => {
        return(
            <tr>
                <td >{element.title}</td>
                <td>{element.name}</td>
                <td>{element.createdAt.split('T')[0]}</td>
                <td>
                    <button className="btn waves-effect waves-light" name={element.id} onClick={element.editStory} >{props.methode[3].name}</button>
                </td>
                <td>
                    <button className="btn waves-effect waves-light" name={element.id} onClick={element.deleteToDB} >{props.methode[4].name}</button>
                </td>
            </tr>
        )
    })



    return(
        <div className="cmsContent">
            <div className="cmsHead">
                <h2>{props.meta.title}s</h2>
                <Link to={location => `${location.pathname}/new`}>
                    <button className="btn waves-effect waves-light">New {props.meta.title} </button>
                </Link>
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