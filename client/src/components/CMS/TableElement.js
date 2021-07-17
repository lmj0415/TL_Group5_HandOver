import React from "react"

function TableElement(props) {


    const buttons = props.methode.map(element =>{
        if(element.tag === "<button>") {
            return(
            <td >
                <button className="btn waves-effect waves-light" name={element.name}>{element.body}</button>
            </td>
            )
        }
    })

    return(
        <tr>
            <td >{props.title}</td>
            <td >{props.name}</td>
            <td >{new Date(props.date).toISOString().split('T')[0]}</td>

            {buttons}
        </tr>
    )
    
}

export default TableElement